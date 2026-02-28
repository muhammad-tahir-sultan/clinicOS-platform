import { MarketingService } from './marketing.service';
export declare class MarketingController {
    private marketingService;
    constructor(marketingService: MarketingService);
    getClinicQrCode(clinicId: string): Promise<{
        dataUri: string;
    }>;
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
