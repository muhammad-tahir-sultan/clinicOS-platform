import { IsString, IsNotEmpty, IsOptional, IsEnum, IsDateString, IsNumber } from 'class-validator';
import { AppointmentStatus } from '@prisma/client';

export class CreateAppointmentDto {
    @IsString()
    @IsNotEmpty()
    patientId!: string;

    @IsString()
    @IsNotEmpty()
    doctorId!: string;

    @IsDateString()
    date!: string;

    @IsString()
    @IsNotEmpty()
    startTime!: string;

    @IsString()
    @IsNotEmpty()
    endTime!: string;

    @IsString()
    @IsOptional()
    reason?: string;

    @IsString()
    @IsOptional()
    notes?: string;

    @IsNumber()
    @IsOptional()
    fee?: number;
}

export class UpdateAppointmentDto {
    @IsDateString()
    @IsOptional()
    date?: string;

    @IsString()
    @IsOptional()
    startTime?: string;

    @IsString()
    @IsOptional()
    endTime?: string;

    @IsEnum(AppointmentStatus)
    @IsOptional()
    status?: AppointmentStatus;

    @IsString()
    @IsOptional()
    reason?: string;

    @IsString()
    @IsOptional()
    notes?: string;

    @IsNumber()
    @IsOptional()
    fee?: number;
}
