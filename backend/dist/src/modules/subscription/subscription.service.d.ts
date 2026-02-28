import { PrismaService } from '../../prisma/prisma.service';
import { UpdateSubscriptionDto } from './dto/subscription.dto';
export declare class SubscriptionService {
    private prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    findByClinicId(clinicId: string): Promise<{
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
    renewSubscription(clinicId: string, months: number): Promise<{
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
    handleExpiredSubscriptions(): Promise<void>;
}
