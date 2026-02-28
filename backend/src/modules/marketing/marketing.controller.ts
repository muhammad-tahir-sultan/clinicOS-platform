import {
    Controller,
    Get,
    Param,
    Query,
    UseGuards,
    Res,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MarketingService } from './marketing.service';
import { CurrentUser, Roles } from '../../common/decorators';
import { RolesGuard, SubscriptionGuard } from '../../common/guards';
import { Role } from '@prisma/client';

@Controller('marketing')
@UseGuards(AuthGuard('jwt'), RolesGuard, SubscriptionGuard)
export class MarketingController {
    constructor(private marketingService: MarketingService) { }

    @Get('qr-code')
    @Roles(Role.CLINIC_ADMIN, Role.DOCTOR)
    async getClinicQrCode(@CurrentUser('clinicId') clinicId: string) {
        const qrCodeBase64 = await this.marketingService.generateClinicQrCode(clinicId);
        return { dataUri: qrCodeBase64 };
    }

    @Get('campaign-analytics')
    @Roles(Role.CLINIC_ADMIN)
    async getCampaignAnalytics(
        @CurrentUser('clinicId') clinicId: string,
        @Query('startDate') startDate?: string,
        @Query('endDate') endDate?: string,
    ) {
        return this.marketingService.getCampaignAnalytics(clinicId, startDate, endDate);
    }
}
