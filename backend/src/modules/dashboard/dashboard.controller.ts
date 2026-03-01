import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DashboardService } from './dashboard.service';
import { Roles, CurrentUser } from '../../common/decorators';
import { RolesGuard, SubscriptionGuard } from '../../common/guards';
import { Role } from '@prisma/client';

@Controller('dashboard')
@UseGuards(AuthGuard('jwt'), RolesGuard, SubscriptionGuard)
export class DashboardController {
    constructor(private dashboardService: DashboardService) { }

    @Get()
    @Roles(Role.CLINIC_ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
    async getDashboard(@CurrentUser('clinicId') clinicId: string) {
        return this.dashboardService.getClinicDashboard(clinicId);
    }

    @Get('patient-growth')
    @Roles(Role.CLINIC_ADMIN)
    async getPatientGrowth(
        @CurrentUser('clinicId') clinicId: string,
        @Query('months') months?: string,
    ) {
        return this.dashboardService.getPatientGrowth(clinicId, months ? parseInt(months) : 6);
    }

    @Get('appointment-stats')
    @Roles(Role.CLINIC_ADMIN, Role.DOCTOR)
    async getAppointmentStats(
        @CurrentUser('clinicId') clinicId: string,
        @Query('months') months?: string,
    ) {
        return this.dashboardService.getAppointmentStats(clinicId, months ? parseInt(months) : 6);
    }

    @Get('revenue')
    @Roles(Role.CLINIC_ADMIN)
    async getRevenueStats(
        @CurrentUser('clinicId') clinicId: string,
        @Query('months') months?: string,
    ) {
        return this.dashboardService.getRevenueStats(clinicId, months ? parseInt(months) : 6);
    }

    @Get('doctor-performance')
    @Roles(Role.CLINIC_ADMIN)
    async getDoctorPerformance(@CurrentUser('clinicId') clinicId: string) {
        return this.dashboardService.getDoctorPerformance(clinicId);
    }
}
