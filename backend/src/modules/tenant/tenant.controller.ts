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
    Patch,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TenantService } from './tenant.service';
import { CreateTenantDto, UpdateTenantDto } from './dto/tenant.dto';
import { Roles } from '../../common/decorators';
import { RolesGuard } from '../../common/guards';
import { Role } from '@prisma/client';

@Controller('tenants')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class TenantController {
    constructor(private tenantService: TenantService) { }

    @Post()
    @Roles(Role.SUPER_ADMIN)
    async create(@Body() dto: CreateTenantDto) {
        return this.tenantService.create(dto);
    }

    @Get()
    @Roles(Role.SUPER_ADMIN)
    async findAll(
        @Query('page') page?: string,
        @Query('limit') limit?: string,
        @Query('search') search?: string,
    ) {
        return this.tenantService.findAll(
            page ? parseInt(page) : 1,
            limit ? parseInt(limit) : 10,
            search,
        );
    }

    @Get('stats')
    @Roles(Role.SUPER_ADMIN)
    async getStats() {
        return this.tenantService.getStats();
    }

    @Get(':id')
    @Roles(Role.SUPER_ADMIN)
    async findOne(@Param('id') id: string) {
        return this.tenantService.findOne(id);
    }

    @Put(':id')
    @Roles(Role.SUPER_ADMIN)
    async update(@Param('id') id: string, @Body() dto: UpdateTenantDto) {
        return this.tenantService.update(id, dto);
    }

    @Patch(':id/suspend')
    @Roles(Role.SUPER_ADMIN)
    async suspend(@Param('id') id: string) {
        return this.tenantService.suspend(id);
    }

    @Patch(':id/deactivate')
    @Roles(Role.SUPER_ADMIN)
    async deactivate(@Param('id') id: string) {
        return this.tenantService.suspend(id);
    }

    @Patch(':id/activate')
    @Roles(Role.SUPER_ADMIN)
    async activate(@Param('id') id: string) {
        return this.tenantService.activate(id);
    }

    @Delete(':id')
    @Roles(Role.SUPER_ADMIN)
    async delete(@Param('id') id: string) {
        return this.tenantService.delete(id);
    }
}
