import { SubscriptionService } from './subscription.service';
import { UpdateSubscriptionDto } from './dto/subscription.dto';
export declare class SubscriptionController {
    private subscriptionService;
    constructor(subscriptionService: SubscriptionService);
    findByClinicId(clinicId: string, role: string, currentClinicId: string): Promise<{
        clinic: {
            isActive: boolean;
            name: string;
            slug: string;
        };
    } & {
        id: string;
        clinicId: string;
        createdAt: Date;
        updatedAt: Date;
        plan: import(".prisma/client").$Enums.SubscriptionPlan;
        status: import(".prisma/client").$Enums.SubscriptionStatus;
        maxDoctors: number;
        maxStaff: number;
        startDate: Date;
        expiryDate: Date;
        billingCycle: string;
    }>;
    update(clinicId: string, dto: UpdateSubscriptionDto): Promise<{
        clinic: {
            name: string;
            slug: string;
        };
    } & {
        id: string;
        clinicId: string;
        createdAt: Date;
        updatedAt: Date;
        plan: import(".prisma/client").$Enums.SubscriptionPlan;
        status: import(".prisma/client").$Enums.SubscriptionStatus;
        maxDoctors: number;
        maxStaff: number;
        startDate: Date;
        expiryDate: Date;
        billingCycle: string;
    }>;
    renew(clinicId: string, role: string, currentClinicId: string, months: number): Promise<{
        id: string;
        clinicId: string;
        createdAt: Date;
        updatedAt: Date;
        plan: import(".prisma/client").$Enums.SubscriptionPlan;
        status: import(".prisma/client").$Enums.SubscriptionStatus;
        maxDoctors: number;
        maxStaff: number;
        startDate: Date;
        expiryDate: Date;
        billingCycle: string;
    }>;
}
