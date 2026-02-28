import { Gender } from '@prisma/client';
export declare class CreatePatientDto {
    firstName: string;
    lastName: string;
    email?: string;
    phone: string;
    dateOfBirth?: string;
    gender?: Gender;
    address?: string;
    bloodGroup?: string;
    allergies?: string;
    medicalNotes?: string;
}
export declare class UpdatePatientDto {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    dateOfBirth?: string;
    gender?: Gender;
    address?: string;
    bloodGroup?: string;
    allergies?: string;
    medicalNotes?: string;
}
