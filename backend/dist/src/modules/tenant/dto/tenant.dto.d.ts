import { SubscriptionPlan } from '@prisma/client';
export declare class CreateTenantDto {
    name: string;
    slug: string;
    email: string;
    phone?: string;
    address?: string;
    plan?: SubscriptionPlan;
}
export declare class UpdateTenantDto {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    isActive?: boolean;
}
