import { IsString, IsNotEmpty, IsEmail, IsOptional, IsEnum, IsBoolean } from 'class-validator';
import { SubscriptionPlan } from '@prisma/client';

export class CreateTenantDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    slug!: string;

    @IsEmail()
    email!: string;

    @IsString()
    @IsOptional()
    phone?: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsEnum(SubscriptionPlan)
    @IsOptional()
    plan?: SubscriptionPlan;
}

export class UpdateTenantDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    phone?: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
}
