import { BookingService } from './booking.service';
import { PublicBookAppointmentDto } from './dto/booking.dto';
export declare class BookingController {
    private bookingService;
    constructor(bookingService: BookingService);
    getClinicInfo(slug: string): Promise<{
        id: string;
        name: string;
        slug: string;
        logo: string | null;
        address: string | null;
        phone: string | null;
        email: string;
    }>;
    getClinicDoctors(slug: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        specialization: string | null;
    }[]>;
    getAvailableSlots(slug: string, doctorId: string, date: string): Promise<{
        startTime: string;
        endTime: string;
    }[]>;
    bookAppointment(slug: string, dto: PublicBookAppointmentDto): Promise<{
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
}
