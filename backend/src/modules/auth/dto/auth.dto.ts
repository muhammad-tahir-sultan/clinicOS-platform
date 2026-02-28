import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
    @IsEmail()
    email!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;
}

export class RefreshTokenDto {
    @IsString()
    @IsNotEmpty()
    refreshToken!: string;
}

export class RegisterClinicDto {
    @IsString()
    @IsNotEmpty()
    clinicName!: string;

    @IsString()
    @IsNotEmpty()
    clinicSlug!: string;

    @IsEmail()
    clinicEmail!: string;

    @IsString()
    clinicPhone?: string;

    @IsString()
    clinicAddress?: string;

    @IsString()
    @IsNotEmpty()
    adminFirstName!: string;

    @IsString()
    @IsNotEmpty()
    adminLastName!: string;

    @IsEmail()
    adminEmail!: string;

    @IsString()
    @MinLength(8)
    adminPassword!: string;
}
