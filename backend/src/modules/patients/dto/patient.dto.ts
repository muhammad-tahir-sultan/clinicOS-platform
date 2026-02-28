import { IsString, IsNotEmpty, IsOptional, IsEnum, IsEmail, IsDateString } from 'class-validator';
import { Gender } from '@prisma/client';

export class CreatePatientDto {
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

    @IsDateString()
    @IsOptional()
    dateOfBirth?: string;

    @IsEnum(Gender)
    @IsOptional()
    gender?: Gender;

    @IsString()
    @IsOptional()
    address?: string;

    @IsString()
    @IsOptional()
    bloodGroup?: string;

    @IsString()
    @IsOptional()
    allergies?: string;

    @IsString()
    @IsOptional()
    medicalNotes?: string;
}

export class UpdatePatientDto {
    @IsString()
    @IsOptional()
    firstName?: string;

    @IsString()
    @IsOptional()
    lastName?: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    phone?: string;

    @IsDateString()
    @IsOptional()
    dateOfBirth?: string;

    @IsEnum(Gender)
    @IsOptional()
    gender?: Gender;

    @IsString()
    @IsOptional()
    address?: string;

    @IsString()
    @IsOptional()
    bloodGroup?: string;

    @IsString()
    @IsOptional()
    allergies?: string;

    @IsString()
    @IsOptional()
    medicalNotes?: string;
}
