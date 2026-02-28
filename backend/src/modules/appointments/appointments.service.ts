import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAppointmentDto, UpdateAppointmentDto } from './dto/appointment.dto';

@Injectable()
export class AppointmentsService {
    constructor(private prisma: PrismaService) { }

    async create(clinicId: string, dto: CreateAppointmentDto) {
        // Check for scheduling conflicts
        await this.checkConflict(clinicId, dto.doctorId, dto.date, dto.startTime, dto.endTime);

        const appointment = await this.prisma.appointment.create({
            data: {
                clinicId,
                patientId: dto.patientId,
                doctorId: dto.doctorId,
                date: new Date(dto.date),
                startTime: dto.startTime,
                endTime: dto.endTime,
                reason: dto.reason,
                notes: dto.notes,
                fee: dto.fee,
            },
            include: {
                patient: {
                    select: { firstName: true, lastName: true, phone: true },
                },
                doctor: {
                    select: { firstName: true, lastName: true, specialization: true },
                },
            },
        });

        // Create revenue record if fee is provided
        if (dto.fee && dto.fee > 0) {
            await this.prisma.revenueRecord.create({
                data: {
                    clinicId,
                    category: 'consultation',
                    amount: dto.fee,
                    description: `Appointment fee - ${appointment.patient.firstName} ${appointment.patient.lastName}`,
                    date: new Date(dto.date),
                },
            });
        }

        return appointment;
    }

    async findAll(
        clinicId: string,
        page = 1,
        limit = 10,
        filters?: {
            doctorId?: string;
            status?: string;
            date?: string;
            startDate?: string;
            endDate?: string;
        },
    ) {
        const skip = (page - 1) * limit;

        const where: any = { clinicId };

        if (filters?.doctorId) where.doctorId = filters.doctorId;
        if (filters?.status) where.status = filters.status;
        if (filters?.date) {
            const d = new Date(filters.date);
            const nextDay = new Date(d);
            nextDay.setDate(nextDay.getDate() + 1);
            where.date = { gte: d, lt: nextDay };
        }
        if (filters?.startDate && filters?.endDate) {
            where.date = {
                gte: new Date(filters.startDate),
                lte: new Date(filters.endDate),
            };
        }

        const [appointments, total] = await Promise.all([
            this.prisma.appointment.findMany({
                where,
                include: {
                    patient: {
                        select: { firstName: true, lastName: true, phone: true },
                    },
                    doctor: {
                        select: { firstName: true, lastName: true, specialization: true },
                    },
                },
                skip,
                take: limit,
                orderBy: [{ date: 'asc' }, { startTime: 'asc' }],
            }),
            this.prisma.appointment.count({ where }),
        ]);

        return {
            data: appointments,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }

    async findOne(clinicId: string, id: string) {
        const appointment = await this.prisma.appointment.findFirst({
            where: { id, clinicId },
            include: {
                patient: true,
                doctor: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        specialization: true,
                        email: true,
                        phone: true,
                    },
                },
            },
        });

        if (!appointment) {
            throw new NotFoundException('Appointment not found');
        }

        return appointment;
    }

    async update(clinicId: string, id: string, dto: UpdateAppointmentDto) {
        const existing = await this.findOne(clinicId, id);

        // If rescheduling, check for conflicts
        if (dto.date || dto.startTime || dto.endTime) {
            await this.checkConflict(
                clinicId,
                existing.doctorId,
                dto.date || existing.date.toISOString(),
                dto.startTime || existing.startTime,
                dto.endTime || existing.endTime,
                id,
            );
        }

        return this.prisma.appointment.update({
            where: { id },
            data: {
                ...dto,
                date: dto.date ? new Date(dto.date) : undefined,
            },
            include: {
                patient: {
                    select: { firstName: true, lastName: true, phone: true },
                },
                doctor: {
                    select: { firstName: true, lastName: true, specialization: true },
                },
            },
        });
    }

    async cancel(clinicId: string, id: string) {
        await this.findOne(clinicId, id);

        return this.prisma.appointment.update({
            where: { id },
            data: { status: 'CANCELLED' },
        });
    }

    async getTodayAppointments(clinicId: string, doctorId?: string) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const where: any = {
            clinicId,
            date: { gte: today, lt: tomorrow },
        };

        if (doctorId) where.doctorId = doctorId;

        return this.prisma.appointment.findMany({
            where,
            include: {
                patient: {
                    select: { firstName: true, lastName: true, phone: true },
                },
                doctor: {
                    select: { firstName: true, lastName: true, specialization: true },
                },
            },
            orderBy: { startTime: 'asc' },
        });
    }

    private async checkConflict(
        clinicId: string,
        doctorId: string,
        date: string,
        startTime: string,
        endTime: string,
        excludeId?: string,
    ) {
        const d = new Date(date);
        const nextDay = new Date(d);
        nextDay.setDate(nextDay.getDate() + 1);

        const where: any = {
            clinicId,
            doctorId,
            date: { gte: d, lt: nextDay },
            status: { notIn: ['CANCELLED', 'NO_SHOW'] },
            OR: [
                { startTime: { lt: endTime }, endTime: { gt: startTime } },
            ],
        };

        if (excludeId) {
            where.id = { not: excludeId };
        }

        const conflict = await this.prisma.appointment.findFirst({ where });

        if (conflict) {
            throw new ConflictException(
                `Doctor already has an appointment from ${conflict.startTime} to ${conflict.endTime} on this date`,
            );
        }
    }
}
