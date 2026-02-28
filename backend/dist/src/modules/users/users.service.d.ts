import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(clinicId: string, dto: CreateUserDto): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        role: import(".prisma/client").$Enums.Role;
        phone: string | null;
        specialization: string | null;
        isActive: boolean;
        createdAt: Date;
    }>;
    findAll(clinicId: string, page?: number, limit?: number): Promise<{
        data: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            role: import(".prisma/client").$Enums.Role;
            phone: string | null;
            specialization: string | null;
            isActive: boolean;
            createdAt: Date;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findDoctors(clinicId: string): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        phone: string | null;
        specialization: string | null;
    }[]>;
    findOne(clinicId: string, id: string): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        role: import(".prisma/client").$Enums.Role;
        phone: string | null;
        specialization: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(clinicId: string, id: string, dto: UpdateUserDto): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        role: import(".prisma/client").$Enums.Role;
        phone: string | null;
        specialization: string | null;
        isActive: boolean;
    }>;
    deactivate(clinicId: string, id: string): Promise<{
        message: string;
    }>;
    activate(clinicId: string, id: string): Promise<{
        message: string;
    }>;
    resetPassword(clinicId: string, id: string, newPassword: string): Promise<{
        message: string;
    }>;
    private checkPlanLimits;
}
