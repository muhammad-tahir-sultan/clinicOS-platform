import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { LoginDto, RegisterClinicDto } from './dto/auth.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    private configService;
    constructor(prisma: PrismaService, jwtService: JwtService, configService: ConfigService);
    login(dto: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            role: import(".prisma/client").$Enums.Role;
            clinicId: string | null;
        };
    }>;
    registerClinic(dto: RegisterClinicDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            role: import(".prisma/client").$Enums.Role;
            clinicId: string;
        };
        clinic: {
            id: string;
            name: string;
            slug: string;
        };
    }>;
    refreshTokens(userId: string, refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshTokensByRefreshToken(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(userId: string): Promise<{
        message: string;
    }>;
    getProfile(userId: string): Promise<{
        id: string;
        email: string;
        clinicId: string | null;
        firstName: string;
        lastName: string;
        role: import(".prisma/client").$Enums.Role;
        phone: string | null;
        specialization: string | null;
        clinic: {
            id: string;
            name: string;
            slug: string;
            subscription: {
                plan: import(".prisma/client").$Enums.SubscriptionPlan;
                status: import(".prisma/client").$Enums.SubscriptionStatus;
                expiryDate: Date;
            } | null;
        } | null;
    }>;
    private generateTokens;
    private verifyRefreshToken;
}
