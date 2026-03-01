import {
    Injectable,
    NotFoundException,
    ConflictException,
    ForbiddenException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async create(clinicId: string, dto: CreateUserDto) {
        const existing = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });

        if (existing) {
            throw new ConflictException('Email already registered');
        }

        // Check plan limits
        await this.checkPlanLimits(clinicId, dto.role);

        const hashedPassword = await bcrypt.hash(dto.password, 12);

        const user = await this.prisma.user.create({
            data: {
                clinicId,
                email: dto.email,
                password: hashedPassword,
                firstName: dto.firstName,
                lastName: dto.lastName,
                role: dto.role || 'RECEPTIONIST',
                phone: dto.phone,
                specialization: dto.specialization,
            },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                phone: true,
                specialization: true,
                isActive: true,
                createdAt: true,
            },
        });

        return user;
    }

    async findAll(clinicId: string, page = 1, limit = 10, role?: string) {
        const skip = (page - 1) * limit;
        const where: any = { clinicId };
        if (role) where.role = role;

        const [users, total] = await Promise.all([
            this.prisma.user.findMany({
                where,
                select: {
                    id: true,
                    email: true,
                    firstName: true,
                    lastName: true,
                    role: true,
                    phone: true,
                    specialization: true,
                    isActive: true,
                    createdAt: true,
                },
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.user.count({ where }),
        ]);

        return {
            data: users,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }

    async findDoctors(clinicId: string) {
        return this.prisma.user.findMany({
            where: { clinicId, role: 'DOCTOR', isActive: true },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                specialization: true,
                email: true,
                phone: true,
            },
            orderBy: { firstName: 'asc' },
        });
    }

    async findOne(clinicId: string, id: string) {
        const user = await this.prisma.user.findFirst({
            where: { id, clinicId },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                phone: true,
                specialization: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    async update(clinicId: string, id: string, dto: UpdateUserDto) {
        await this.findOne(clinicId, id);

        return this.prisma.user.update({
            where: { id },
            data: dto,
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                phone: true,
                specialization: true,
                isActive: true,
            },
        });
    }

    async deactivate(clinicId: string, id: string) {
        await this.findOne(clinicId, id);

        await this.prisma.user.update({
            where: { id },
            data: { isActive: false },
        });

        return { message: 'User deactivated successfully' };
    }

    async activate(clinicId: string, id: string) {
        await this.findOne(clinicId, id);

        await this.prisma.user.update({
            where: { id },
            data: { isActive: true },
        });

        return { message: 'User activated successfully' };
    }

    async resetPassword(clinicId: string, id: string, newPassword: string) {
        await this.findOne(clinicId, id);

        const hashedPassword = await bcrypt.hash(newPassword, 12);

        await this.prisma.user.update({
            where: { id },
            data: { password: hashedPassword },
        });

        return { message: 'Password reset successfully' };
    }

    private async checkPlanLimits(clinicId: string, role?: string) {
        const subscription = await this.prisma.subscription.findUnique({
            where: { clinicId },
        });

        if (!subscription) return;

        if (role === 'DOCTOR') {
            const doctorCount = await this.prisma.user.count({
                where: { clinicId, role: 'DOCTOR' },
            });

            if (doctorCount >= subscription.maxDoctors) {
                throw new ForbiddenException(
                    `Your plan allows a maximum of ${subscription.maxDoctors} doctors. Upgrade your plan to add more.`,
                );
            }
        }

        const staffCount = await this.prisma.user.count({
            where: { clinicId },
        });

        if (staffCount >= subscription.maxStaff + subscription.maxDoctors) {
            throw new ForbiddenException(
                'Maximum staff limit reached for your plan. Upgrade to add more users.',
            );
        }
    }
}
