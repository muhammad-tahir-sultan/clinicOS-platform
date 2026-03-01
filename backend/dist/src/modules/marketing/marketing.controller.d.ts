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
            campaignSource: any;
            appointmentsBooked: number;
            totalRevenue: number;
        }[];
    }>;
}
