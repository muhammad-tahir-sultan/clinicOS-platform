import {
    Controller,
    Get,
    Put,
    Patch,
    Param,
    Body,
    UseGuards,
    ForbiddenException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SubscriptionService } from './subscription.service';
import { UpdateSubscriptionDto } from './dto/subscription.dto';
import { Roles, CurrentUser } from '../../common/decorators';
import { RolesGuard } from '../../common/guards';
import { Role } from '@prisma/client';

@Controller('subscriptions')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class SubscriptionController {
    constructor(private subscriptionService: SubscriptionService) { }

    @Get(':clinicId')
    @Roles(Role.SUPER_ADMIN, Role.CLINIC_ADMIN)
    async findByClinicId(
        @Param('clinicId') clinicId: string,
        @CurrentUser('role') role: string,
        @CurrentUser('clinicId') currentClinicId: string,
    ) {
        if (role !== Role.SUPER_ADMIN && clinicId !== currentClinicId) {
            throw new ForbiddenException('You can only access your own clinic subscription');
        }
        return this.subscriptionService.findByClinicId(clinicId);
    }

    @Put(':clinicId')
    @Roles(Role.SUPER_ADMIN)
    async update(
        @Param('clinicId') clinicId: string,
        @Body() dto: UpdateSubscriptionDto,
    ) {
        return this.subscriptionService.update(clinicId, dto);
    }

    @Patch(':clinicId/renew')
    @Roles(Role.SUPER_ADMIN, Role.CLINIC_ADMIN)
    async renew(
        @Param('clinicId') clinicId: string,
        @CurrentUser('role') role: string,
        @CurrentUser('clinicId') currentClinicId: string,
        @Body('months') months: number,
    ) {
        if (role !== Role.SUPER_ADMIN && clinicId !== currentClinicId) {
            throw new ForbiddenException('You can only renew your own clinic subscription');
        }
        return this.subscriptionService.renewSubscription(clinicId, months || 1);
    }
}
