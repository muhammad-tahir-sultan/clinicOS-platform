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
exports.PatientsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PatientsService = class PatientsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(clinicId, dto) {
        return this.prisma.patient.create({
            data: {
                clinicId,
                ...dto,
                dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
            },
        });
    }
    async findAll(clinicId, page = 1, limit = 10, search) {
        const skip = (page - 1) * limit;
        const where = { clinicId };
        if (search) {
            where.OR = [
                { firstName: { contains: search, mode: 'insensitive' } },
                { lastName: { contains: search, mode: 'insensitive' } },
                { phone: { contains: search } },
                { email: { contains: search, mode: 'insensitive' } },
            ];
        }
        const [patients, total] = await Promise.all([
            this.prisma.patient.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.patient.count({ where }),
        ]);
        return {
            data: patients,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findOne(clinicId, id) {
        const patient = await this.prisma.patient.findFirst({
            where: { id, clinicId },
            include: {
                appointments: {
                    orderBy: { date: 'desc' },
                    take: 10,
                    include: {
                        doctor: {
                            select: { firstName: true, lastName: true, specialization: true },
                        },
                    },
                },
                visitLogs: {
                    orderBy: { visitDate: 'desc' },
                    take: 10,
                },
            },
        });
        if (!patient) {
            throw new common_1.NotFoundException('Patient not found');
        }
        return patient;
    }
    async update(clinicId, id, dto) {
        await this.findOne(clinicId, id);
        return this.prisma.patient.update({
            where: { id },
            data: {
                ...dto,
                dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
            },
        });
    }
    async delete(clinicId, id) {
        await this.findOne(clinicId, id);
        await this.prisma.patient.delete({ where: { id } });
        return { message: 'Patient deleted successfully' };
    }
    async addVisitLog(clinicId, patientId, data) {
        await this.findOne(clinicId, patientId);
        return this.prisma.visitLog.create({
            data: {
                clinicId,
                patientId,
                ...data,
            },
        });
    }
    async getVisitLogs(clinicId, patientId) {
        return this.prisma.visitLog.findMany({
            where: { clinicId, patientId },
            orderBy: { visitDate: 'desc' },
        });
    }
};
exports.PatientsService = PatientsService;
exports.PatientsService = PatientsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PatientsService);
//# sourceMappingURL=patients.service.js.map