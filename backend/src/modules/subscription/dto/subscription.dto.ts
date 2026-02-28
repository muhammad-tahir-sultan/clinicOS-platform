import { IsEnum, IsOptional, IsDateString, IsNumber } from 'class-validator';
import { SubscriptionPlan, SubscriptionStatus } from '@prisma/client';

export class UpdateSubscriptionDto {
    @IsEnum(SubscriptionPlan)
    @IsOptional()
    plan?: SubscriptionPlan;

    @IsEnum(SubscriptionStatus)
    @IsOptional()
    status?: SubscriptionStatus;

    @IsNumber()
    @IsOptional()
    maxDoctors?: number;

    @IsNumber()
    @IsOptional()
    maxStaff?: number;

    @IsDateString()
    @IsOptional()
    expiryDate?: string;
}
