import { PrismaService } from '../../prisma/prisma.service';
import { CreateAppointmentDto, UpdateAppointmentDto } from './dto/appointment.dto';
export declare class AppointmentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(clinicId: string, dto: CreateAppointmentDto): Promise<{
        patient: {
            firstName: string;
            lastName: string;
            phone: string;
        };
        doctor: {
            firstName: string;
            lastName: string;
            specialization: string | null;
        };
    } & {
        id: string;
        clinicId: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        date: Date;
        startTime: string;
        endTime: string;
        reason: string | null;
        notes: string | null;
        fee: number | null;
        campaignSource: string | null;
        utmParameters: import("@prisma/client/runtime/client").JsonValue | null;
        patientId: string;
        doctorId: string;
    }>;
    findAll(clinicId: string, page?: number, limit?: number, filters?: {
        doctorId?: string;
        status?: string;
        date?: string;
        startDate?: string;
        endDate?: string;
    }): Promise<{
        data: ({
            patient: {
                firstName: string;
                lastName: string;
                phone: string;
            };
            doctor: {
                firstName: string;
                lastName: string;
                specialization: string | null;
            };
        } & {
            id: string;
            clinicId: string;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.AppointmentStatus;
            date: Date;
            startTime: string;
            endTime: string;
            reason: string | null;
            notes: string | null;
            fee: number | null;
            campaignSource: string | null;
            utmParameters: import("@prisma/client/runtime/client").JsonValue | null;
            patientId: string;
            doctorId: string;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findOne(clinicId: string, id: string): Promise<{
        patient: {
            id: string;
            email: string | null;
            clinicId: string;
            firstName: string;
            lastName: string;
            phone: string;
            createdAt: Date;
            updatedAt: Date;
            address: string | null;
            dateOfBirth: Date | null;
            gender: import(".prisma/client").$Enums.Gender | null;
            bloodGroup: string | null;
            allergies: string | null;
            medicalNotes: string | null;
        };
        doctor: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            phone: string | null;
            specialization: string | null;
        };
    } & {
        id: string;
        clinicId: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        date: Date;
        startTime: string;
        endTime: string;
        reason: string | null;
        notes: string | null;
        fee: number | null;
        campaignSource: string | null;
        utmParameters: import("@prisma/client/runtime/client").JsonValue | null;
        patientId: string;
        doctorId: string;
    }>;
    update(clinicId: string, id: string, dto: UpdateAppointmentDto): Promise<{
        patient: {
            firstName: string;
            lastName: string;
            phone: string;
        };
        doctor: {
            firstName: string;
            lastName: string;
            specialization: string | null;
        };
    } & {
        id: string;
        clinicId: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        date: Date;
        startTime: string;
        endTime: string;
        reason: string | null;
        notes: string | null;
        fee: number | null;
        campaignSource: string | null;
        utmParameters: import("@prisma/client/runtime/client").JsonValue | null;
        patientId: string;
        doctorId: string;
    }>;
    cancel(clinicId: string, id: string): Promise<{
        id: string;
        clinicId: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        date: Date;
        startTime: string;
        endTime: string;
        reason: string | null;
        notes: string | null;
        fee: number | null;
        campaignSource: string | null;
        utmParameters: import("@prisma/client/runtime/client").JsonValue | null;
        patientId: string;
        doctorId: string;
    }>;
    getTodayAppointments(clinicId: string, doctorId?: string): Promise<({
        patient: {
            firstName: string;
            lastName: string;
            phone: string;
        };
        doctor: {
            firstName: string;
            lastName: string;
            specialization: string | null;
        };
    } & {
        id: string;
        clinicId: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        date: Date;
        startTime: string;
        endTime: string;
        reason: string | null;
        notes: string | null;
        fee: number | null;
        campaignSource: string | null;
        utmParameters: import("@prisma/client/runtime/client").JsonValue | null;
        patientId: string;
        doctorId: string;
    })[]>;
    private checkConflict;
}
