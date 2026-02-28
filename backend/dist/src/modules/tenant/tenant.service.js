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
exports.TenantService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let TenantService = class TenantService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const existing = await this.prisma.clinic.findUnique({
            where: { slug: dto.slug },
        });
        if (existing) {
            throw new common_1.ConflictException('A clinic with this slug already exists');
        }
        const clinic = await this.prisma.$transaction(async (tx) => {
            const newClinic = await tx.clinic.create({
                data: {
                    name: dto.name,
                    slug: dto.slug,
                    email: dto.email,
                    phone: dto.phone,
                    address: dto.address,
                },
            });
            const planConfig = this.getPlanConfig(dto.plan || 'BASIC');
            await tx.subscription.create({
                data: {
                    clinicId: newClinic.id,
                    plan: dto.plan || 'BASIC',
                    status: 'ACTIVE',
                    maxDoctors: planConfig.maxDoctors,
                    maxStaff: planConfig.maxStaff,
                    expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                },
            });
            return newClinic;
        });
        return this.findOne(clinic.id);
    }
    async findAll(page = 1, limit = 10, search) {
        const skip = (page - 1) * limit;
        const where = search
            ? {
                OR: [
                    { name: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                    { slug: { contains: search, mode: 'insensitive' } },
                ],
            }
            : {};
        const [clinics, total] = await Promise.all([
            this.prisma.clinic.findMany({
                where,
                include: {
                    subscription: true,
                    _count: {
                        select: {
                            users: true,
                            patients: true,
                            appointments: true,
                        },
                    },
                },
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.clinic.count({ where }),
        ]);
        return {
            data: clinics,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findOne(id) {
        const clinic = await this.prisma.clinic.findUnique({
            where: { id },
            include: {
                subscription: true,
                _count: {
                    select: {
                        users: true,
                        patients: true,
                        appointments: true,
                    },
                },
            },
        });
        if (!clinic) {
            throw new common_1.NotFoundException('Clinic not found');
        }
        return clinic;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.clinic.update({
            where: { id },
            data: dto,
            include: { subscription: true },
        });
    }
    async suspend(id) {
        await this.findOne(id);
        await this.prisma.$transaction([
            this.prisma.clinic.update({
                where: { id },
                data: { isActive: false },
            }),
            this.prisma.subscription.update({
                where: { clinicId: id },
                data: { status: 'SUSPENDED' },
            }),
        ]);
        return { message: 'Clinic suspended successfully' };
    }
    async activate(id) {
        await this.findOne(id);
        await this.prisma.$transaction([
            this.prisma.clinic.update({
                where: { id },
                data: { isActive: true },
            }),
            this.prisma.subscription.update({
                where: { clinicId: id },
                data: { status: 'ACTIVE' },
            }),
        ]);
        return { message: 'Clinic activated successfully' };
    }
    async delete(id) {
        await this.findOne(id);
        await this.prisma.clinic.delete({ where: { id } });
        return { message: 'Clinic deleted successfully' };
    }
    async getStats() {
        const thisMonth = new Date();
        thisMonth.setDate(1);
        thisMonth.setHours(0, 0, 0, 0);
        const [totalClinics, activeClinics, totalPatients, totalAppointments, activeSubscriptions, expiredSubscriptions, newClinicsThisMonth] = await Promise.all([
            this.prisma.clinic.count(),
            this.prisma.clinic.count({ where: { isActive: true } }),
            this.prisma.patient.count(),
            this.prisma.appointment.count(),
            this.prisma.subscription.count({ where: { status: 'ACTIVE' } }),
            this.prisma.subscription.count({ where: { status: 'EXPIRED' } }),
            this.prisma.clinic.count({ where: { createdAt: { gte: thisMonth } } }),
        ]);
        const planDistribution = await this.prisma.subscription.groupBy({
            by: ['plan'],
            _count: { plan: true },
        });
        return {
            data: {
                totalClinics,
                activeClinics,
                suspendedClinics: totalClinics - activeClinics,
                activeSubscriptions,
                expiredSubscriptions,
                newClinicsThisMonth,
                totalPatients,
                totalAppointments,
                planDistribution: planDistribution.map((p) => ({
                    plan: p.plan,
                    count: p._count.plan,
                })),
            },
        };
    }
    getPlanConfig(plan) {
        const configs = {
            BASIC: { maxDoctors: 2, maxStaff: 2 },
            PRO: { maxDoctors: 999, maxStaff: 999 },
            ENTERPRISE: { maxDoctors: 999, maxStaff: 999 },
        };
        return configs[plan] || configs['BASIC'];
    }
};
exports.TenantService = TenantService;
exports.TenantService = TenantService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TenantService);
//# sourceMappingURL=tenant.service.js.map