import { Role } from '@prisma/client';
export declare class CreateUserDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role?: Role;
    phone?: string;
    specialization?: string;
}
export declare class UpdateUserDto {
    firstName?: string;
    lastName?: string;
    phone?: string;
    specialization?: string;
    role?: Role;
}
