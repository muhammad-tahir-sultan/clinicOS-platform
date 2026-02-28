import { AuthService } from './auth.service';
import { LoginDto, RegisterClinicDto, RefreshTokenDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
    refreshTokens(userId: string, dto: RefreshTokenDto): Promise<{
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
}
