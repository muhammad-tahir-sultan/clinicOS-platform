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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let DashboardService = class DashboardService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getClinicDashboard(clinicId) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
        const [totalPatients, newPatientsThisMonth, todayAppointments, totalAppointmentsThisMonth, completedAppointments, cancelledAppointments, monthlyRevenue, doctors,] = await Promise.all([
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
    async getPatientGrowth(clinicId, months = 6) {
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
    async getAppointmentStats(clinicId, months = 6) {
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
    async getRevenueStats(clinicId, months = 6) {
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
    async getDoctorPerformance(clinicId) {
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
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map