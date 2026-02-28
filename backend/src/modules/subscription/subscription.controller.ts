import { Controller, Get, Put, Patch, Param, Body, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SubscriptionService } from './subscription.service';
import { UpdateSubscriptionDto } from './dto/subscription.dto';
import { Roles } from '../../common/decorators';
import { RolesGuard } from '../../common/guards';
import { Role } from '@prisma/client';

@Controller('subscriptions')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class SubscriptionController {
    constructor(private subscriptionService: SubscriptionService) { }

    @Get(':clinicId')
    @Roles(Role.SUPER_ADMIN)
    async findByClinicId(@Param('clinicId') clinicId: string) {
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
    @Roles(Role.SUPER_ADMIN)
    async renew(
        @Param('clinicId') clinicId: string,
        @Body('months') months: number,
    ) {
        return this.subscriptionService.renewSubscription(clinicId, months || 1);
    }
}
