import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePatientDto, UpdatePatientDto } from './dto/patient.dto';

@Injectable()
export class PatientsService {
    constructor(private prisma: PrismaService) { }

    async create(clinicId: string, dto: CreatePatientDto) {
        return this.prisma.patient.create({
            data: {
                clinicId,
                ...dto,
                dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
            },
        });
    }

    async findAll(clinicId: string, page = 1, limit = 10, search?: string) {
        const skip = (page - 1) * limit;

        const where: any = { clinicId };

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

    async findOne(clinicId: string, id: string) {
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
            throw new NotFoundException('Patient not found');
        }

        return patient;
    }

    async update(clinicId: string, id: string, dto: UpdatePatientDto) {
        await this.findOne(clinicId, id);

        return this.prisma.patient.update({
            where: { id },
            data: {
                ...dto,
                dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
            },
        });
    }

    async delete(clinicId: string, id: string) {
        await this.findOne(clinicId, id);
        await this.prisma.patient.delete({ where: { id } });
        return { message: 'Patient deleted successfully' };
    }

    async addVisitLog(
        clinicId: string,
        patientId: string,
        data: {
            diagnosis?: string;
            treatment?: string;
            prescription?: string;
            vitals?: any;
            notes?: string;
        },
    ) {
        await this.findOne(clinicId, patientId);

        return this.prisma.visitLog.create({
            data: {
                clinicId,
                patientId,
                ...data,
            },
        });
    }

    async getVisitLogs(clinicId: string, patientId: string) {
        return this.prisma.visitLog.findMany({
            where: { clinicId, patientId },
            orderBy: { visitDate: 'desc' },
        });
    }
}
