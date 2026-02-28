import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class PublicBookAppointmentDto {
    @IsString()
    @IsNotEmpty()
    firstName!: string;

    @IsString()
    @IsNotEmpty()
    lastName!: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    @IsNotEmpty()
    phone!: string;

    @IsString()
    @IsNotEmpty()
    doctorId!: string;

    @IsString()
    @IsNotEmpty()
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
    campaignSource?: string;

    @IsString()
    @IsOptional()
    utmParameters?: string; // Expecting stringified JSON or plain string
}
