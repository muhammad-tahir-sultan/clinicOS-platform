import {
    Injectable,
    NotFoundException,
    ConflictException,
    ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { PublicBookAppointmentDto } from './dto/booking.dto';
import { AppointmentsService } from '../appointments/appointments.service';

@Injectable()
export class BookingService {
    constructor(
        private prisma: PrismaService,
        private appointmentsService: AppointmentsService,
    ) { }

    async getClinicBySlug(slug: string) {
        const clinic = await this.prisma.clinic.findUnique({
            where: { slug },
            select: {
                id: true,
                name: true,
                slug: true,
                logo: true,
                address: true,
                phone: true,
                email: true,
                isActive: true,
                subscription: {
                    select: {
                        status: true,
                        expiryDate: true,
                    },
                },
            },
        });

        if (!clinic || !clinic.isActive) {
            throw new NotFoundException('Clinic not found or inactive');
        }

        if (
            clinic.subscription?.status !== 'ACTIVE' ||
            new Date() > new Date(clinic.subscription?.expiryDate)
        ) {
            throw new ForbiddenException('Clinic is not accepting appointments right now.');
        }

        return {
            id: clinic.id,
            name: clinic.name,
            slug: clinic.slug,
            logo: clinic.logo,
            address: clinic.address,
            phone: clinic.phone,
            email: clinic.email,
        };
    }

    async getClinicDoctors(slug: string) {
        const clinic = await this.getClinicBySlug(slug);

        return this.prisma.user.findMany({
            where: { clinicId: clinic.id, role: 'DOCTOR', isActive: true },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                specialization: true,
            },
            orderBy: { firstName: 'asc' },
        });
    }

    async getAvailableSlots(slug: string, doctorId: string, date: string) {
        // Basic slot generation for now: 9 AM to 5 PM, 30 min intervals
        const clinic = await this.getClinicBySlug(slug);

        const d = new Date(date);
        const nextDay = new Date(d);
        nextDay.setDate(nextDay.getDate() + 1);

        const existingAppointments = await this.prisma.appointment.findMany({
            where: {
                clinicId: clinic.id,
                doctorId,
                date: { gte: d, lt: nextDay },
                status: { notIn: ['CANCELLED', 'NO_SHOW'] },
            },
            select: { startTime: true, endTime: true },
        });

        const allSlots = this.generateTimeSlots('09:00', '17:00', 30);

        // Filter out conflicting slots
        const availableSlots = allSlots.filter((slot) => {
            return !existingAppointments.some(
                (app) => app.startTime < slot.endTime && app.endTime > slot.startTime,
            );
        });

        return availableSlots;
    }

    async bookAppointment(slug: string, dto: PublicBookAppointmentDto) {
        const clinic = await this.getClinicBySlug(slug);

        // Get or Create patient
        let patient = await this.prisma.patient.findFirst({
            where: { clinicId: clinic.id, phone: dto.phone },
        });

        if (!patient) {
            patient = await this.prisma.patient.create({
                data: {
                    clinicId: clinic.id,
                    phone: dto.phone,
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    email: dto.email,
                },
            });
        }

        // Try to parse UTM parameters if present
        let parsedUtmParams = null;
        if (dto.utmParameters) {
            try {
                parsedUtmParams = JSON.parse(dto.utmParameters);
            } catch (e) {
                parsedUtmParams = { raw: dto.utmParameters };
            }
        }

        // Rely on AppointmentsService helper for conflict check, and create the appointment
        return this.prisma.appointment.create({
            data: {
                clinicId: clinic.id,
                patientId: patient.id,
                doctorId: dto.doctorId,
                date: new Date(dto.date),
                startTime: dto.startTime,
                endTime: dto.endTime,
                reason: dto.reason,
                campaignSource: dto.campaignSource,
                utmParameters: parsedUtmParams,
            },
        });
    }

    private generateTimeSlots(start: string, end: string, durationMinutes: number) {
        const slots = [];
        const startTime = new Date(`1970-01-01T${start}:00Z`);
        const endTime = new Date(`1970-01-01T${end}:00Z`);

        while (startTime < endTime) {
            const slotStartStr = startTime.toISOString().substr(11, 5);
            startTime.setMinutes(startTime.getMinutes() + durationMinutes);
            const slotEndStr = startTime.toISOString().substr(11, 5);

            if (startTime <= endTime) {
                slots.push({ startTime: slotStartStr, endTime: slotEndStr });
            }
        }

        return slots;
    }
}
