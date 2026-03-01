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
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { Roles, CurrentUser } from '../../common/decorators';
import { RolesGuard, SubscriptionGuard } from '../../common/guards';
import { Role } from '@prisma/client';

@Controller('users')
@UseGuards(AuthGuard('jwt'), RolesGuard, SubscriptionGuard)
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post()
    @Roles(Role.CLINIC_ADMIN)
    async create(
        @CurrentUser('clinicId') clinicId: string,
        @Body() dto: CreateUserDto,
    ) {
        return this.usersService.create(clinicId, dto);
    }

    @Get()
    @Roles(Role.CLINIC_ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
    async findAll(
        @CurrentUser('clinicId') clinicId: string,
        @Query('page') page?: string,
        @Query('limit') limit?: string,
        @Query('role') role?: string,
    ) {
        return this.usersService.findAll(
            clinicId,
            page ? parseInt(page) : 1,
            limit ? parseInt(limit) : 10,
            role,
        );
    }

    @Get('doctors')
    @Roles(Role.CLINIC_ADMIN, Role.DOCTOR, Role.RECEPTIONIST)
    async findDoctors(@CurrentUser('clinicId') clinicId: string) {
        return this.usersService.findDoctors(clinicId);
    }

    @Get(':id')
    @Roles(Role.CLINIC_ADMIN)
    async findOne(
        @CurrentUser('clinicId') clinicId: string,
        @Param('id') id: string,
    ) {
        return this.usersService.findOne(clinicId, id);
    }

    @Put(':id')
    @Roles(Role.CLINIC_ADMIN)
    async update(
        @CurrentUser('clinicId') clinicId: string,
        @Param('id') id: string,
        @Body() dto: UpdateUserDto,
    ) {
        return this.usersService.update(clinicId, id, dto);
    }

    @Patch(':id/deactivate')
    @Roles(Role.CLINIC_ADMIN)
    async deactivate(
        @CurrentUser('clinicId') clinicId: string,
        @Param('id') id: string,
    ) {
        return this.usersService.deactivate(clinicId, id);
    }

    @Patch(':id/activate')
    @Roles(Role.CLINIC_ADMIN)
    async activate(
        @CurrentUser('clinicId') clinicId: string,
        @Param('id') id: string,
    ) {
        return this.usersService.activate(clinicId, id);
    }

    @Patch(':id/reset-password')
    @Roles(Role.CLINIC_ADMIN)
    async resetPassword(
        @CurrentUser('clinicId') clinicId: string,
        @Param('id') id: string,
        @Body('password') password: string,
    ) {
        return this.usersService.resetPassword(clinicId, id, password);
    }
}
