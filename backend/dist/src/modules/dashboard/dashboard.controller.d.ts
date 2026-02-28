import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private dashboardService;
    constructor(dashboardService: DashboardService);
    getDashboard(clinicId: string): Promise<{
        summary: {
            totalPatients: number;
            newPatientsThisMonth: number;
            todayAppointments: number;
            totalAppointmentsThisMonth: number;
            completedAppointments: number;
            cancelledAppointments: number;
            monthlyRevenue: number;
            activeDoctors: number;
        };
    }>;
    getPatientGrowth(clinicId: string, months?: string): Promise<{
        month: string;
        count: number;
    }[]>;
    getAppointmentStats(clinicId: string, months?: string): Promise<{
        month: string;
        total: number;
        completed: number;
        cancelled: number;
        noShow: number;
    }[]>;
    getRevenueStats(clinicId: string, months?: string): Promise<{
        month: string;
        revenue: number;
    }[]>;
    getDoctorPerformance(clinicId: string): Promise<{
        id: string;
        name: string;
        specialization: string | null;
        totalAppointments: number;
        completed: number;
        cancelled: number;
        noShow: number;
        revenue: number;
    }[]>;
}
