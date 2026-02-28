import { AppointmentStatus } from '@prisma/client';
export declare class CreateAppointmentDto {
    patientId: string;
    doctorId: string;
    date: string;
    startTime: string;
    endTime: string;
    reason?: string;
    notes?: string;
    fee?: number;
}
export declare class UpdateAppointmentDto {
    date?: string;
    startTime?: string;
    endTime?: string;
    status?: AppointmentStatus;
    reason?: string;
    notes?: string;
    fee?: number;
}
