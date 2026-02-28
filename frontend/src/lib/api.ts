import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

export const api = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' },
});

// Inject access token
api.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('accessToken');
        if (token) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Handle 401 — try to refresh token
api.interceptors.response.use(
    (res) => res,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const refreshToken = localStorage.getItem('refreshToken');
                if (!refreshToken) throw new Error('No refresh token');
                const { data } = await axios.post(`${API_URL}/auth/refresh`, { refreshToken });
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
                return api(originalRequest);
            } catch {
                localStorage.clear();
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    },
);

// Auth
export const authApi = {
    login: (data: { email: string; password: string }) => api.post('/auth/login', data),
    register: (data: any) => api.post('/auth/register', data),
    logout: () => api.post('/auth/logout'),
    profile: () => api.get('/auth/profile'),
    refresh: (refreshToken: string) => api.post('/auth/refresh', { refreshToken }),
};

// Tenants (Super Admin)
export const tenantApi = {
    getAll: (params?: any) => api.get('/tenants', { params }),
    getOne: (id: string) => api.get(`/tenants/${id}`),
    create: (data: any) => api.post('/tenants', data),
    update: (id: string, data: any) => api.patch(`/tenants/${id}`, data),
    activate: (id: string) => api.patch(`/tenants/${id}/activate`),
    deactivate: (id: string) => api.patch(`/tenants/${id}/deactivate`),
    stats: () => api.get('/tenants/stats'),
};

// Subscription
export const subscriptionApi = {
    get: (clinicId: string) => api.get(`/subscriptions/${clinicId}`),
    update: (clinicId: string, data: any) => api.patch(`/subscriptions/${clinicId}`, data),
    renew: (clinicId: string, months: number) =>
        api.post(`/subscriptions/${clinicId}/renew`, { months }),
};

// Users
export const usersApi = {
    getAll: (params?: any) => api.get('/users', { params }),
    getOne: (id: string) => api.get(`/users/${id}`),
    create: (data: any) => api.post('/users', data),
    update: (id: string, data: any) => api.patch(`/users/${id}`, data),
    delete: (id: string) => api.delete(`/users/${id}`),
    resetPassword: (id: string, data: any) => api.patch(`/users/${id}/reset-password`, data),
};

// Patients
export const patientsApi = {
    getAll: (params?: any) => api.get('/patients', { params }),
    getOne: (id: string) => api.get(`/patients/${id}`),
    create: (data: any) => api.post('/patients', data),
    update: (id: string, data: any) => api.patch(`/patients/${id}`, data),
    delete: (id: string) => api.delete(`/patients/${id}`),
    getVisitLogs: (id: string) => api.get(`/patients/${id}/visit-logs`),
    addVisitLog: (id: string, data: any) => api.post(`/patients/${id}/visit-logs`, data),
};

// Appointments
export const appointmentsApi = {
    getAll: (params?: any) => api.get('/appointments', { params }),
    getOne: (id: string) => api.get(`/appointments/${id}`),
    create: (data: any) => api.post('/appointments', data),
    update: (id: string, data: any) => api.patch(`/appointments/${id}`, data),
    cancel: (id: string) => api.patch(`/appointments/${id}/cancel`),
    getToday: (params?: any) => api.get('/appointments/today', { params }),
};

// Dashboard
export const dashboardApi = {
    getSummary: () => api.get('/dashboard'),
    getPatientGrowth: (months?: number) => api.get('/dashboard/patient-growth', { params: { months } }),
    getAppointmentStats: (months?: number) => api.get('/dashboard/appointment-stats', { params: { months } }),
    getRevenue: (months?: number) => api.get('/dashboard/revenue', { params: { months } }),
    getDoctorPerformance: () => api.get('/dashboard/doctor-performance'),
};
