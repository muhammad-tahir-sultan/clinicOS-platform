import { PrismaService } from '../../prisma/prisma.service';
export declare class MarketingService {
    private prisma;
    constructor(prisma: PrismaService);
    generateClinicQrCode(clinicId: string): Promise<string>;
    getCampaignAnalytics(clinicId: string, startDate?: string, endDate?: string): Promise<{
        dateRange: {
            start: Date;
            end: Date;
        };
        campaigns: {
            campaignSource: string | null;
            appointmentsBooked: number;
            totalRevenue: number;
        }[];
    }>;
}
