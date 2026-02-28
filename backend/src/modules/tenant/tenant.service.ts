import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTenantDto, UpdateTenantDto } from './dto/tenant.dto';

@Injectable()
export class TenantService {
    constructor(private prisma: PrismaService) { }

    async create(dto: CreateTenantDto) {
        const existing = await this.prisma.clinic.findUnique({
            where: { slug: dto.slug },
        });

        if (existing) {
            throw new ConflictException('A clinic with this slug already exists');
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

    async findAll(page = 1, limit = 10, search?: string) {
        const skip = (page - 1) * limit;

        const where = search
            ? {
                OR: [
                    { name: { contains: search, mode: 'insensitive' as const } },
                    { email: { contains: search, mode: 'insensitive' as const } },
                    { slug: { contains: search, mode: 'insensitive' as const } },
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

    async findOne(id: string) {
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
            throw new NotFoundException('Clinic not found');
        }

        return clinic;
    }

    async update(id: string, dto: UpdateTenantDto) {
        await this.findOne(id);

        return this.prisma.clinic.update({
            where: { id },
            data: dto,
            include: { subscription: true },
        });
    }

    async suspend(id: string) {
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

    async activate(id: string) {
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

    async delete(id: string) {
        await this.findOne(id);
        await this.prisma.clinic.delete({ where: { id } });
        return { message: 'Clinic deleted successfully' };
    }

    async getStats() {
        const thisMonth = new Date();
        thisMonth.setDate(1);
        thisMonth.setHours(0, 0, 0, 0);

        const [totalClinics, activeClinics, totalPatients, totalAppointments, activeSubscriptions, expiredSubscriptions, newClinicsThisMonth] =
            await Promise.all([
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

    private getPlanConfig(plan: string) {
        const configs: Record<string, { maxDoctors: number; maxStaff: number }> = {
            BASIC: { maxDoctors: 2, maxStaff: 2 },
            PRO: { maxDoctors: 999, maxStaff: 999 },
            ENTERPRISE: { maxDoctors: 999, maxStaff: 999 },
        };

        return configs[plan] || configs['BASIC'];
    }
}
