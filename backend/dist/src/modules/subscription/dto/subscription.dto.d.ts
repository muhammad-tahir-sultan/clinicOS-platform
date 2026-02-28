import { SubscriptionPlan, SubscriptionStatus } from '@prisma/client';
export declare class UpdateSubscriptionDto {
    plan?: SubscriptionPlan;
    status?: SubscriptionStatus;
    maxDoctors?: number;
    maxStaff?: number;
    expiryDate?: string;
}
