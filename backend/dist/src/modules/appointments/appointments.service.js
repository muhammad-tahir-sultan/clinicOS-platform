"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let AppointmentsService = class AppointmentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(clinicId, dto) {
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
    async findAll(clinicId, page = 1, limit = 10, filters) {
        const skip = (page - 1) * limit;
        const where = { clinicId };
        if (filters?.doctorId)
            where.doctorId = filters.doctorId;
        if (filters?.status)
            where.status = filters.status;
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
    async findOne(clinicId, id) {
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
            throw new common_1.NotFoundException('Appointment not found');
        }
        return appointment;
    }
    async update(clinicId, id, dto) {
        const existing = await this.findOne(clinicId, id);
        if (dto.date || dto.startTime || dto.endTime) {
            await this.checkConflict(clinicId, existing.doctorId, dto.date || existing.date.toISOString(), dto.startTime || existing.startTime, dto.endTime || existing.endTime, id);
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
    async cancel(clinicId, id) {
        await this.findOne(clinicId, id);
        return this.prisma.appointment.update({
            where: { id },
            data: { status: 'CANCELLED' },
        });
    }
    async getTodayAppointments(clinicId, doctorId) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const where = {
            clinicId,
            date: { gte: today, lt: tomorrow },
        };
        if (doctorId)
            where.doctorId = doctorId;
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
    async checkConflict(clinicId, doctorId, date, startTime, endTime, excludeId) {
        const d = new Date(date);
        const nextDay = new Date(d);
        nextDay.setDate(nextDay.getDate() + 1);
        const where = {
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
            throw new common_1.ConflictException(`Doctor already has an appointment from ${conflict.startTime} to ${conflict.endTime} on this date`);
        }
    }
};
exports.AppointmentsService = AppointmentsService;
exports.AppointmentsService = AppointmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppointmentsService);
//# sourceMappingURL=appointments.service.js.map