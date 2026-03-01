import { PatientsService } from './patients.service';
import { CreatePatientDto, UpdatePatientDto } from './dto/patient.dto';
export declare class PatientsController {
    private patientsService;
    constructor(patientsService: PatientsService);
    create(clinicId: string, dto: CreatePatientDto): Promise<{
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
    }>;
    findAll(clinicId: string, page?: string, limit?: string, search?: string): Promise<{
        data: {
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
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findOne(clinicId: string, id: string): Promise<{
        appointments: ({
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
            campaignSource: string | null;
            utmParameters: import("@prisma/client/runtime/client").JsonValue | null;
            fee: number | null;
            patientId: string;
            doctorId: string;
        })[];
        visitLogs: {
            id: string;
            clinicId: string;
            createdAt: Date;
            updatedAt: Date;
            notes: string | null;
            patientId: string;
            visitDate: Date;
            diagnosis: string | null;
            treatment: string | null;
            prescription: string | null;
            vitals: import("@prisma/client/runtime/client").JsonValue | null;
        }[];
    } & {
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
    }>;
    update(clinicId: string, id: string, dto: UpdatePatientDto): Promise<{
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
    }>;
    delete(clinicId: string, id: string): Promise<{
        message: string;
    }>;
    addVisitLog(clinicId: string, patientId: string, body: {
        diagnosis?: string;
        treatment?: string;
        prescription?: string;
        vitals?: any;
        notes?: string;
    }): Promise<{
        id: string;
        clinicId: string;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        patientId: string;
        visitDate: Date;
        diagnosis: string | null;
        treatment: string | null;
        prescription: string | null;
        vitals: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
    getVisitLogs(clinicId: string, patientId: string): Promise<{
        id: string;
        clinicId: string;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        patientId: string;
        visitDate: Date;
        diagnosis: string | null;
        treatment: string | null;
        prescription: string | null;
        vitals: import("@prisma/client/runtime/client").JsonValue | null;
    }[]>;
}
