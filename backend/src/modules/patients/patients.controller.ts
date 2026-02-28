import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Query,
    UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PatientsService } from './patients.service';
import { CreatePatientDto, UpdatePatientDto } from './dto/patient.dto';
import { Roles, CurrentUser } from '../../common/decorators';
import { RolesGuard, SubscriptionGuard } from '../../common/guards';
import { Role } from '@prisma/client';

@Controller('patients')
@UseGuards(AuthGuard('jwt'), RolesGuard, SubscriptionGuard)
export class PatientsController {
    constructor(private patientsService: PatientsService) { }

    @Post()
    @Roles(Role.CLINIC_ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
    async create(
        @CurrentUser('clinicId') clinicId: string,
        @Body() dto: CreatePatientDto,
    ) {
        return this.patientsService.create(clinicId, dto);
    }

    @Get()
    @Roles(Role.CLINIC_ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
    async findAll(
        @CurrentUser('clinicId') clinicId: string,
        @Query('page') page?: string,
        @Query('limit') limit?: string,
        @Query('search') search?: string,
    ) {
        return this.patientsService.findAll(
            clinicId,
            page ? parseInt(page) : 1,
            limit ? parseInt(limit) : 10,
            search,
        );
    }

    @Get(':id')
    @Roles(Role.CLINIC_ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
    async findOne(
        @CurrentUser('clinicId') clinicId: string,
        @Param('id') id: string,
    ) {
        return this.patientsService.findOne(clinicId, id);
    }

    @Put(':id')
    @Roles(Role.CLINIC_ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
    async update(
        @CurrentUser('clinicId') clinicId: string,
        @Param('id') id: string,
        @Body() dto: UpdatePatientDto,
    ) {
        return this.patientsService.update(clinicId, id, dto);
    }

    @Delete(':id')
    @Roles(Role.CLINIC_ADMIN)
    async delete(
        @CurrentUser('clinicId') clinicId: string,
        @Param('id') id: string,
    ) {
        return this.patientsService.delete(clinicId, id);
    }

    @Post(':id/visit-logs')
    @Roles(Role.CLINIC_ADMIN, Role.DOCTOR)
    async addVisitLog(
        @CurrentUser('clinicId') clinicId: string,
        @Param('id') patientId: string,
        @Body() body: { diagnosis?: string; treatment?: string; prescription?: string; vitals?: any; notes?: string },
    ) {
        return this.patientsService.addVisitLog(clinicId, patientId, body);
    }

    @Get(':id/visit-logs')
    @Roles(Role.CLINIC_ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
    async getVisitLogs(
        @CurrentUser('clinicId') clinicId: string,
        @Param('id') patientId: string,
    ) {
        return this.patientsService.getVisitLogs(clinicId, patientId);
    }
}
