export declare class LoginDto {
    email: string;
    password: string;
}
export declare class RefreshTokenDto {
    refreshToken: string;
}
export declare class RegisterClinicDto {
    clinicName: string;
    clinicSlug: string;
    clinicEmail: string;
    clinicPhone?: string;
    clinicAddress?: string;
    adminFirstName: string;
    adminLastName: string;
    adminEmail: string;
    adminPassword: string;
}
