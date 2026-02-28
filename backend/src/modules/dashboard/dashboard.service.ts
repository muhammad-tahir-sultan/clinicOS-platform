import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DashboardService {
    constructor(private prisma: PrismaService) { }

    async getClinicDashboard(clinicId: string) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

        const [
            totalPatients,
            newPatientsThisMonth,
            todayAppointments,
            totalAppointmentsThisMonth,
            completedAppointments,
            cancelledAppointments,
            monthlyRevenue,
            doctors,
        ] = await Promise.all([
            this.prisma.patient.count({ where: { clinicId } }),
            this.prisma.patient.count({
                where: { clinicId, createdAt: { gte: thisMonth, lt: nextMonth } },
            }),
            this.prisma.appointment.count({
                where: { clinicId, date: { gte: today, lt: tomorrow } },
            }),
            this.prisma.appointment.count({
                where: { clinicId, date: { gte: thisMonth, lt: nextMonth } },
            }),
            this.prisma.appointment.count({
                where: { clinicId, status: 'COMPLETED', date: { gte: thisMonth, lt: nextMonth } },
            }),
            this.prisma.appointment.count({
                where: { clinicId, status: 'CANCELLED', date: { gte: thisMonth, lt: nextMonth } },
            }),
            this.prisma.revenueRecord.aggregate({
                where: { clinicId, date: { gte: thisMonth, lt: nextMonth } },
                _sum: { amount: true },
            }),
            this.prisma.user.count({
                where: { clinicId, role: 'DOCTOR', isActive: true },
            }),
        ]);

        return {
            summary: {
                totalPatients,
                newPatientsThisMonth,
                todayAppointments,
                totalAppointmentsThisMonth,
                completedAppointments,
                cancelledAppointments,
                monthlyRevenue: monthlyRevenue._sum.amount || 0,
                activeDoctors: doctors,
            },
        };
    }

    async getPatientGrowth(clinicId: string, months = 6) {
        const data = [];
        const now = new Date();

        for (let i = months - 1; i >= 0; i--) {
            const start = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const end = new Date(now.getFullYear(), now.getMonth() - i + 1, 1);

            const count = await this.prisma.patient.count({
                where: {
                    clinicId,
                    createdAt: { gte: start, lt: end },
                },
            });

            data.push({
                month: start.toLocaleString('default', { month: 'short', year: 'numeric' }),
                count,
            });
        }

        return data;
    }

    async getAppointmentStats(clinicId: string, months = 6) {
        const data = [];
        const now = new Date();

        for (let i = months - 1; i >= 0; i--) {
            const start = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const end = new Date(now.getFullYear(), now.getMonth() - i + 1, 1);

            const [total, completed, cancelled, noShow] = await Promise.all([
                this.prisma.appointment.count({
                    where: { clinicId, date: { gte: start, lt: end } },
                }),
                this.prisma.appointment.count({
                    where: { clinicId, status: 'COMPLETED', date: { gte: start, lt: end } },
                }),
                this.prisma.appointment.count({
                    where: { clinicId, status: 'CANCELLED', date: { gte: start, lt: end } },
                }),
                this.prisma.appointment.count({
                    where: { clinicId, status: 'NO_SHOW', date: { gte: start, lt: end } },
                }),
            ]);

            data.push({
                month: start.toLocaleString('default', { month: 'short', year: 'numeric' }),
                total,
                completed,
                cancelled,
                noShow,
            });
        }

        return data;
    }

    async getRevenueStats(clinicId: string, months = 6) {
        const data = [];
        const now = new Date();

        for (let i = months - 1; i >= 0; i--) {
            const start = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const end = new Date(now.getFullYear(), now.getMonth() - i + 1, 1);

            const result = await this.prisma.revenueRecord.aggregate({
                where: { clinicId, date: { gte: start, lt: end } },
                _sum: { amount: true },
            });

            data.push({
                month: start.toLocaleString('default', { month: 'short', year: 'numeric' }),
                revenue: result._sum.amount || 0,
            });
        }

        return data;
    }

    async getDoctorPerformance(clinicId: string) {
        const thisMonth = new Date();
        thisMonth.setDate(1);
        thisMonth.setHours(0, 0, 0, 0);
        const nextMonth = new Date(thisMonth.getFullYear(), thisMonth.getMonth() + 1, 1);

        const doctors = await this.prisma.user.findMany({
            where: { clinicId, role: 'DOCTOR', isActive: true },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                specialization: true,
                appointments: {
                    where: { date: { gte: thisMonth, lt: nextMonth } },
                    select: { status: true, fee: true },
                },
            },
        });

        return doctors.map((doc) => ({
            id: doc.id,
            name: `Dr. ${doc.firstName} ${doc.lastName}`,
            specialization: doc.specialization,
            totalAppointments: doc.appointments.length,
            completed: doc.appointments.filter((a) => a.status === 'COMPLETED').length,
            cancelled: doc.appointments.filter((a) => a.status === 'CANCELLED').length,
            noShow: doc.appointments.filter((a) => a.status === 'NO_SHOW').length,
            revenue: doc.appointments
                .filter((a) => a.status === 'COMPLETED')
                .reduce((sum, a) => sum + (a.fee || 0), 0),
        }));
    }
}
