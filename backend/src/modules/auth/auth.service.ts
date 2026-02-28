import {
    Injectable,
    UnauthorizedException,
    ConflictException,
    ForbiddenException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service';
import { LoginDto, RegisterClinicDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) { }

    async login(dto: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
            include: {
                clinic: {
                    include: { subscription: true },
                },
            },
        });

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        if (!user.isActive) {
            throw new ForbiddenException('Account is deactivated');
        }

        const passwordMatch = await bcrypt.compare(dto.password, user.password);
        if (!passwordMatch) {
            throw new UnauthorizedException('Invalid credentials');
        }

        // Check subscription for non-super-admin users
        if (user.role !== 'SUPER_ADMIN' && user.clinic?.subscription) {
            const sub = user.clinic.subscription;
            if (sub.status === 'EXPIRED' || new Date() > new Date(sub.expiryDate)) {
                throw new ForbiddenException(
                    'Your clinic subscription has expired. Contact your administrator.',
                );
            }
            if (sub.status === 'SUSPENDED') {
                throw new ForbiddenException(
                    'Your clinic account is suspended. Contact support.',
                );
            }
        }

        const tokens = await this.generateTokens(user.id, user.email, user.role, user.clinicId);

        // Store refresh token hash
        const refreshHash = await bcrypt.hash(tokens.refreshToken, 10);
        await this.prisma.user.update({
            where: { id: user.id },
            data: { refreshToken: refreshHash },
        });

        return {
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                clinicId: user.clinicId,
            },
            ...tokens,
        };
    }

    async registerClinic(dto: RegisterClinicDto) {
        // Check if clinic slug exists
        const existingClinic = await this.prisma.clinic.findUnique({
            where: { slug: dto.clinicSlug },
        });
        if (existingClinic) {
            throw new ConflictException('Clinic slug already exists');
        }

        // Check if admin email exists
        const existingUser = await this.prisma.user.findUnique({
            where: { email: dto.adminEmail },
        });
        if (existingUser) {
            throw new ConflictException('Email already registered');
        }

        const hashedPassword = await bcrypt.hash(dto.adminPassword, 12);

        // Create clinic, subscription, and admin user in a transaction
        const result = await this.prisma.$transaction(async (tx) => {
            const clinic = await tx.clinic.create({
                data: {
                    name: dto.clinicName,
                    slug: dto.clinicSlug,
                    email: dto.clinicEmail,
                    phone: dto.clinicPhone,
                    address: dto.clinicAddress,
                },
            });

            await tx.subscription.create({
                data: {
                    clinicId: clinic.id,
                    plan: 'BASIC',
                    status: 'ACTIVE',
                    maxDoctors: 2,
                    maxStaff: 2,
                    expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days trial
                },
            });

            const admin = await tx.user.create({
                data: {
                    clinicId: clinic.id,
                    email: dto.adminEmail,
                    password: hashedPassword,
                    firstName: dto.adminFirstName,
                    lastName: dto.adminLastName,
                    role: 'CLINIC_ADMIN',
                },
            });

            return { clinic, admin };
        });

        const tokens = await this.generateTokens(
            result.admin.id,
            result.admin.email,
            result.admin.role,
            result.clinic.id,
        );

        return {
            user: {
                id: result.admin.id,
                email: result.admin.email,
                firstName: result.admin.firstName,
                lastName: result.admin.lastName,
                role: result.admin.role,
                clinicId: result.clinic.id,
            },
            clinic: {
                id: result.clinic.id,
                name: result.clinic.name,
                slug: result.clinic.slug,
            },
            ...tokens,
        };
    }

    async refreshTokens(userId: string, refreshToken: string) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user || !user.refreshToken) {
            throw new UnauthorizedException('Access denied');
        }

        const rtMatch = await bcrypt.compare(refreshToken, user.refreshToken);
        if (!rtMatch) {
            throw new UnauthorizedException('Access denied');
        }

        const tokens = await this.generateTokens(user.id, user.email, user.role, user.clinicId);

        const refreshHash = await bcrypt.hash(tokens.refreshToken, 10);
        await this.prisma.user.update({
            where: { id: user.id },
            data: { refreshToken: refreshHash },
        });

        return tokens;
    }

    async logout(userId: string) {
        await this.prisma.user.update({
            where: { id: userId },
            data: { refreshToken: null },
        });
        return { message: 'Logged out successfully' };
    }

    async getProfile(userId: string) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                phone: true,
                specialization: true,
                clinicId: true,
                clinic: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                        subscription: {
                            select: {
                                plan: true,
                                status: true,
                                expiryDate: true,
                            },
                        },
                    },
                },
            },
        });

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        return user;
    }

    private async generateTokens(
        userId: string,
        email: string,
        role: string,
        clinicId: string | null,
    ) {
        const payload = { sub: userId, email, role, clinicId };

        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload as any, {
                secret: this.configService.get<string>('JWT_SECRET'),
                expiresIn: this.configService.get('JWT_EXPIRES_IN', '15m') as any,
            }),
            this.jwtService.signAsync(payload as any, {
                secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
                expiresIn: this.configService.get('JWT_REFRESH_EXPIRES_IN', '7d') as any,
            }),
        ]);

        return { accessToken, refreshToken };
    }
}
