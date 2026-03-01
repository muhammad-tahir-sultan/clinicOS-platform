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
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let BookingService = class BookingService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getClinicBySlug(slug) {
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
            throw new common_1.NotFoundException('Clinic not found or inactive');
        }
        if (clinic.subscription?.status !== 'ACTIVE' ||
            new Date() > new Date(clinic.subscription?.expiryDate)) {
            throw new common_1.ForbiddenException('Clinic is not accepting appointments right now.');
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
    async getClinicDoctors(slug) {
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
    async getAvailableSlots(slug, doctorId, date) {
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
        const availableSlots = allSlots.filter((slot) => {
            return !existingAppointments.some((app) => app.startTime < slot.endTime && app.endTime > slot.startTime);
        });
        return availableSlots;
    }
    async bookAppointment(slug, dto) {
        const clinic = await this.getClinicBySlug(slug);
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
        let parsedUtmParams = null;
        if (dto.utmParameters) {
            try {
                parsedUtmParams = JSON.parse(dto.utmParameters);
            }
            catch {
                parsedUtmParams = { raw: dto.utmParameters };
            }
        }
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
    generateTimeSlots(start, end, durationMinutes) {
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
};
exports.BookingService = BookingService;
exports.BookingService = BookingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookingService);
//# sourceMappingURL=booking.service.js.map