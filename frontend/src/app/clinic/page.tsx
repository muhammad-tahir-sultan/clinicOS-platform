'use client';

import { useQuery } from '@tanstack/react-query';
import { UserCircle, Calendar, TrendingUp, DollarSign, Activity, Clock } from 'lucide-react';
import {
    AreaChart,
    Area,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';
import { dashboardApi, appointmentsApi } from '@/lib/api';
import { PageHeader } from '@/components/layout/PageHeader';
import { StatCard, StatCardSkeleton } from '@/components/ui/StatCard';
import { formatCurrency, formatDate } from '@/lib/utils';
import { useAuthStore } from '@/store/auth.store';

const tooltipStyle = {
    backgroundColor: '#131d35',
    border: '1px solid #1e2d4a',
    borderRadius: '8px',
    color: '#e8edf5',
    fontSize: '13px',
};

export default function ClinicDashboard() {
    const { user } = useAuthStore();

    const { data: summary, isLoading: sumLoading } = useQuery({
        queryKey: ['dashboard-summary'],
        queryFn: () => dashboardApi.getSummary().then((r) => r.data.summary),
    });

    const { data: patientGrowth } = useQuery({
        queryKey: ['patient-growth'],
        queryFn: () => dashboardApi.getPatientGrowth(6).then((r) => r.data),
    });

    const { data: apptStats } = useQuery({
        queryKey: ['appointment-stats'],
        queryFn: () => dashboardApi.getAppointmentStats(6).then((r) => r.data),
    });

    const { data: revenue } = useQuery({
        queryKey: ['revenue-stats'],
        queryFn: () => dashboardApi.getRevenue(6).then((r) => r.data),
    });

    const { data: todayAppts } = useQuery({
        queryKey: ['today-appointments'],
        queryFn: () => appointmentsApi.getToday().then((r) => r.data),
    });

    const { data: doctorPerf } = useQuery({
        queryKey: ['doctor-performance'],
        queryFn: () => dashboardApi.getDoctorPerformance().then((r) => r.data),
    });

    return (
        <div className="animate-fade-in">
            <PageHeader
                title={`Good morning, ${user?.firstName}! 🏥`}
                subtitle="Here's your clinic overview for today."
            />

            <div style={{ padding: '28px' }}>
                {/* Stat cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '28px' }}>
                    {sumLoading ? (
                        <StatCardSkeleton count={5} />
                    ) : (
                        <>
                            <StatCard title="Total Patients" value={summary?.totalPatients ?? 0} subtitle={`+${summary?.newPatientsThisMonth ?? 0} this month`} icon={<UserCircle size={20} />} colorClass="stat-blue" iconClass="icon-blue" />
                            <StatCard title="Today's Appointments" value={summary?.todayAppointments ?? 0} subtitle="scheduled today" icon={<Calendar size={20} />} colorClass="stat-cyan" iconClass="icon-cyan" />
                            <StatCard title="Completed This Month" value={summary?.completedAppointments ?? 0} subtitle={`${summary?.cancelledAppointments ?? 0} cancelled`} icon={<Activity size={20} />} colorClass="stat-green" iconClass="icon-green" />
                            <StatCard title="Monthly Revenue" value={formatCurrency(summary?.monthlyRevenue ?? 0)} subtitle="this month" icon={<DollarSign size={20} />} colorClass="stat-purple" iconClass="icon-purple" />
                            <StatCard title="Active Doctors" value={summary?.activeDoctors ?? 0} subtitle="on duty" icon={<TrendingUp size={20} />} colorClass="stat-orange" iconClass="icon-orange" />
                        </>
                    )}
                </div>

                {/* Charts row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                    {/* Patient growth */}
                    <div className="glass-card" style={{ padding: '20px' }}>
                        <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '20px', color: 'var(--text-secondary)' }}>
                            📈 Patient Growth (6 Months)
                        </h3>
                        <ResponsiveContainer width="100%" height={220}>
                            <AreaChart data={patientGrowth || []}>
                                <defs>
                                    <linearGradient id="patientGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e2d4a" />
                                <XAxis dataKey="month" tick={{ fill: '#8896b0', fontSize: 11 }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#8896b0', fontSize: 11 }} axisLine={false} tickLine={false} />
                                <Tooltip contentStyle={tooltipStyle} />
                                <Area type="monotone" dataKey="count" stroke="#3b82f6" fill="url(#patientGrad)" strokeWidth={2} name="New Patients" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Revenue chart */}
                    <div className="glass-card" style={{ padding: '20px' }}>
                        <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '20px', color: 'var(--text-secondary)' }}>
                            💰 Monthly Revenue
                        </h3>
                        <ResponsiveContainer width="100%" height={220}>
                            <BarChart data={revenue || []}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e2d4a" />
                                <XAxis dataKey="month" tick={{ fill: '#8896b0', fontSize: 11 }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#8896b0', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
                                <Tooltip contentStyle={tooltipStyle} formatter={(v: any) => [`$${v}`, 'Revenue']} />
                                <Bar dataKey="revenue" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="Revenue" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Appointment stats chart */}
                <div className="glass-card" style={{ padding: '20px', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '20px', color: 'var(--text-secondary)' }}>
                        📅 Appointment Statistics (6 Months)
                    </h3>
                    <ResponsiveContainer width="100%" height={220}>
                        <BarChart data={apptStats || []}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1e2d4a" />
                            <XAxis dataKey="month" tick={{ fill: '#8896b0', fontSize: 11 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: '#8896b0', fontSize: 11 }} axisLine={false} tickLine={false} />
                            <Tooltip contentStyle={tooltipStyle} />
                            <Legend wrapperStyle={{ fontSize: '12px', color: '#8896b0' }} />
                            <Bar dataKey="completed" fill="#10b981" radius={[4, 4, 0, 0]} name="Completed" />
                            <Bar dataKey="cancelled" fill="#ef4444" radius={[4, 4, 0, 0]} name="Cancelled" />
                            <Bar dataKey="noShow" fill="#f59e0b" radius={[4, 4, 0, 0]} name="No Show" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Bottom row: Today's appointments + Doctor performance */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    {/* Today's appointments */}
                    <div className="glass-card" style={{ overflow: 'hidden' }}>
                        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
                            <h3 style={{ fontSize: '14px', fontWeight: '600' }}>
                                ⏰ Today's Appointments
                            </h3>
                        </div>
                        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                            {!todayAppts || todayAppts.length === 0 ? (
                                <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    No appointments today
                                </div>
                            ) : (
                                todayAppts.map((appt: any) => (
                                    <div
                                        key={appt.id}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '12px',
                                            padding: '12px 20px', borderBottom: '1px solid rgba(30,45,74,0.5)',
                                        }}
                                    >
                                        <div style={{
                                            width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0,
                                            background: appt.status === 'COMPLETED' ? '#10b981' :
                                                appt.status === 'IN_PROGRESS' ? '#8b5cf6' :
                                                    appt.status === 'CANCELLED' ? '#ef4444' : '#3b82f6',
                                        }} />
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontSize: '13px', fontWeight: '500' }}>
                                                {appt.patient?.firstName} {appt.patient?.lastName}
                                            </div>
                                            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                                                Dr. {appt.doctor?.firstName} {appt.doctor?.lastName} · {appt.startTime}
                                            </div>
                                        </div>
                                        <span className={`badge ${appt.status === 'COMPLETED' ? 'badge-green' :
                                                appt.status === 'IN_PROGRESS' ? 'badge-purple' :
                                                    appt.status === 'CANCELLED' ? 'badge-red' : 'badge-blue'
                                            }`}>
                                            {appt.status.replace('_', ' ')}
                                        </span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Doctor performance */}
                    <div className="glass-card" style={{ overflow: 'hidden' }}>
                        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
                            <h3 style={{ fontSize: '14px', fontWeight: '600' }}>👨‍⚕️ Doctor Performance (This Month)</h3>
                        </div>
                        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                            {!doctorPerf || doctorPerf.length === 0 ? (
                                <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    No doctors found
                                </div>
                            ) : (
                                doctorPerf.map((doc: any) => (
                                    <div
                                        key={doc.id}
                                        style={{
                                            padding: '12px 20px', borderBottom: '1px solid rgba(30,45,74,0.5)',
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                            <div>
                                                <div style={{ fontSize: '13px', fontWeight: '600' }}>{doc.name}</div>
                                                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{doc.specialization || 'General'}</div>
                                            </div>
                                            <div style={{ textAlign: 'right' }}>
                                                <div style={{ fontSize: '13px', fontWeight: '600', color: '#10b981' }}>{formatCurrency(doc.revenue)}</div>
                                                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{doc.totalAppointments} appointments</div>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <span style={{ fontSize: '11px', color: '#10b981' }}>✓ {doc.completed} done</span>
                                            <span style={{ fontSize: '11px', color: '#ef4444' }}>✗ {doc.cancelled} cancelled</span>
                                            <span style={{ fontSize: '11px', color: '#f59e0b' }}>⚠ {doc.noShow} no-show</span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
