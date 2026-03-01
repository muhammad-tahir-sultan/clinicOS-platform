import { TenantService } from './tenant.service';
import { CreateTenantDto, UpdateTenantDto } from './dto/tenant.dto';
export declare class TenantController {
    private tenantService;
    constructor(tenantService: TenantService);
    create(dto: CreateTenantDto): Promise<{
        subscription: {
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
        } | null;
        _count: {
            appointments: number;
            users: number;
            patients: number;
        };
    } & {
        id: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        address: string | null;
        logo: string | null;
    }>;
    findAll(page?: string, limit?: string, search?: string): Promise<{
        data: ({
            subscription: {
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
            } | null;
            _count: {
                appointments: number;
                users: number;
                patients: number;
            };
        } & {
            id: string;
            email: string;
            phone: string | null;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            address: string | null;
            logo: string | null;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    getStats(): Promise<{
        data: {
            totalClinics: number;
            activeClinics: number;
            suspendedClinics: number;
            activeSubscriptions: number;
            expiredSubscriptions: number;
            newClinicsThisMonth: number;
            totalPatients: number;
            totalAppointments: number;
            planDistribution: {
                plan: import(".prisma/client").$Enums.SubscriptionPlan;
                count: number;
            }[];
        };
    }>;
    findOne(id: string): Promise<{
        subscription: {
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
        } | null;
        _count: {
            appointments: number;
            users: number;
            patients: number;
        };
    } & {
        id: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        address: string | null;
        logo: string | null;
    }>;
    update(id: string, dto: UpdateTenantDto): Promise<{
        subscription: {
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
        } | null;
    } & {
        id: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        address: string | null;
        logo: string | null;
    }>;
    suspend(id: string): Promise<{
        message: string;
    }>;
    deactivate(id: string): Promise<{
        message: string;
    }>;
    activate(id: string): Promise<{
        message: string;
    }>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
