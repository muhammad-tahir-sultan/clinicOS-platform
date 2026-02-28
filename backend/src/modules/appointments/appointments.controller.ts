import {
    Controller,
    Get,
    Post,
    Put,
    Body,
    Param,
    Query,
    UseGuards,
    Patch,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto, UpdateAppointmentDto } from './dto/appointment.dto';
import { Roles, CurrentUser } from '../../common/decorators';
import { RolesGuard, SubscriptionGuard } from '../../common/guards';
import { Role } from '@prisma/client';

@Controller('appointments')
@UseGuards(AuthGuard('jwt'), RolesGuard, SubscriptionGuard)
export class AppointmentsController {
    constructor(private appointmentsService: AppointmentsService) { }

    @Post()
    @Roles(Role.CLINIC_ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
    async create(
        @CurrentUser('clinicId') clinicId: string,
        @Body() dto: CreateAppointmentDto,
    ) {
        return this.appointmentsService.create(clinicId, dto);
    }

    @Get()
    @Roles(Role.CLINIC_ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
    async findAll(
        @CurrentUser('clinicId') clinicId: string,
        @Query('page') page?: string,
        @Query('limit') limit?: string,
        @Query('doctorId') doctorId?: string,
        @Query('status') status?: string,
        @Query('date') date?: string,
        @Query('startDate') startDate?: string,
        @Query('endDate') endDate?: string,
    ) {
        return this.appointmentsService.findAll(
            clinicId,
            page ? parseInt(page) : 1,
            limit ? parseInt(limit) : 10,
            { doctorId, status, date, startDate, endDate },
        );
    }

    @Get('today')
    @Roles(Role.CLINIC_ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
    async getTodayAppointments(
        @CurrentUser('clinicId') clinicId: string,
        @CurrentUser('role') role: string,
        @CurrentUser('id') userId: string,
    ) {
        const doctorId = role === 'DOCTOR' ? userId : undefined;
        return this.appointmentsService.getTodayAppointments(clinicId, doctorId);
    }

    @Get(':id')
    @Roles(Role.CLINIC_ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
    async findOne(
        @CurrentUser('clinicId') clinicId: string,
        @Param('id') id: string,
    ) {
        return this.appointmentsService.findOne(clinicId, id);
    }

    @Put(':id')
    @Roles(Role.CLINIC_ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
    async update(
        @CurrentUser('clinicId') clinicId: string,
        @Param('id') id: string,
        @Body() dto: UpdateAppointmentDto,
    ) {
        return this.appointmentsService.update(clinicId, id, dto);
    }

    @Patch(':id/cancel')
    @Roles(Role.CLINIC_ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
    async cancel(
        @CurrentUser('clinicId') clinicId: string,
        @Param('id') id: string,
    ) {
        return this.appointmentsService.cancel(clinicId, id);
    }
}
