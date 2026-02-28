'use client';

import { useQuery } from '@tanstack/react-query';
import { dashboardApi } from '@/lib/api';
import { PageHeader } from '@/components/layout/PageHeader';
import {
    AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from 'recharts';
import { formatCurrency } from '@/lib/utils';

const tooltipStyle = {
    backgroundColor: '#131d35',
    border: '1px solid #1e2d4a',
    borderRadius: '8px',
    color: '#e8edf5',
    fontSize: '13px',
};

const COLORS = ['#3b82f6', '#10b981', '#ef4444', '#f59e0b'];

export default function AnalyticsPage() {
    const { data: patientGrowth } = useQuery({
        queryKey: ['patient-growth-12'],
        queryFn: () => dashboardApi.getPatientGrowth(12).then((r) => r.data),
    });

    const { data: apptStats } = useQuery({
        queryKey: ['appt-stats-12'],
        queryFn: () => dashboardApi.getAppointmentStats(12).then((r) => r.data),
    });

    const { data: revenue } = useQuery({
        queryKey: ['revenue-12'],
        queryFn: () => dashboardApi.getRevenue(12).then((r) => r.data),
    });

    const { data: doctorPerf } = useQuery({
        queryKey: ['doctor-perf'],
        queryFn: () => dashboardApi.getDoctorPerformance().then((r) => r.data),
    });

    // Calculate appointment distribution for pie chart
    const totalCompleted = (apptStats || []).reduce((s: number, d: any) => s + d.completed, 0);
    const totalCancelled = (apptStats || []).reduce((s: number, d: any) => s + d.cancelled, 0);
    const totalNoShow = (apptStats || []).reduce((s: number, d: any) => s + d.noShow, 0);
    const totalScheduled = (apptStats || []).reduce((s: number, d: any) => s + d.total, 0) - totalCompleted - totalCancelled - totalNoShow;

    const pieData = [
        { name: 'Completed', value: totalCompleted },
        { name: 'Scheduled', value: totalScheduled },
        { name: 'Cancelled', value: totalCancelled },
        { name: 'No Show', value: totalNoShow },
    ].filter((d) => d.value > 0);

    const totalRevenue = (revenue || []).reduce((s: number, d: any) => s + d.revenue, 0);

    return (
        <div className="animate-fade-in">
            <PageHeader
                title="Analytics & Reports"
                subtitle="12-month overview of clinic performance"
            />

            <div style={{ padding: '28px' }}>
                {/* Summary row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '28px' }}>
                    <div className="glass-card" style={{ padding: '20px', borderColor: 'rgba(59,130,246,0.3)' }}>
                        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>12-Month Revenue</p>
                        <p style={{ fontSize: '28px', fontWeight: '700', color: '#60a5fa' }}>{formatCurrency(totalRevenue)}</p>
                    </div>
                    <div className="glass-card" style={{ padding: '20px', borderColor: 'rgba(16,185,129,0.3)' }}>
                        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Total Appointments</p>
                        <p style={{ fontSize: '28px', fontWeight: '700', color: '#34d399' }}>{totalCompleted + totalCancelled + totalNoShow + totalScheduled}</p>
                    </div>
                    <div className="glass-card" style={{ padding: '20px', borderColor: 'rgba(139,92,246,0.3)' }}>
                        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Completion Rate</p>
                        <p style={{ fontSize: '28px', fontWeight: '700', color: '#a78bfa' }}>
                            {totalCompleted + totalCancelled > 0
                                ? `${Math.round((totalCompleted / (totalCompleted + totalCancelled + totalNoShow)) * 100)}%`
                                : '—'}
                        </p>
                    </div>
                </div>

                {/* Charts */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginBottom: '20px' }}>
                    <div className="glass-card" style={{ padding: '20px' }}>
                        <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '20px', color: 'var(--text-secondary)' }}>
                            📈 Patient Registrations (12 Months)
                        </h3>
                        <ResponsiveContainer width="100%" height={240}>
                            <AreaChart data={patientGrowth || []}>
                                <defs>
                                    <linearGradient id="pg12" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e2d4a" />
                                <XAxis dataKey="month" tick={{ fill: '#8896b0', fontSize: 10 }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#8896b0', fontSize: 10 }} axisLine={false} tickLine={false} />
                                <Tooltip contentStyle={tooltipStyle} />
                                <Area type="monotone" dataKey="count" stroke="#3b82f6" fill="url(#pg12)" strokeWidth={2} name="Patients" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="glass-card" style={{ padding: '20px' }}>
                        <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '20px', color: 'var(--text-secondary)' }}>
                            🍩 Appointment Distribution
                        </h3>
                        <ResponsiveContainer width="100%" height={240}>
                            <PieChart>
                                <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={4} dataKey="value">
                                    {pieData.map((_, idx) => (
                                        <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={tooltipStyle} />
                                <Legend wrapperStyle={{ fontSize: '12px', color: '#8896b0' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="glass-card" style={{ padding: '20px', marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '20px', color: 'var(--text-secondary)' }}>
                        💰 Monthly Revenue trend (12 Months)
                    </h3>
                    <ResponsiveContainer width="100%" height={220}>
                        <BarChart data={revenue || []}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1e2d4a" />
                            <XAxis dataKey="month" tick={{ fill: '#8896b0', fontSize: 10 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: '#8896b0', fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
                            <Tooltip contentStyle={tooltipStyle} formatter={(v: any) => [`$${v}`, 'Revenue']} />
                            <Bar dataKey="revenue" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Doctor performance table */}
                {doctorPerf && doctorPerf.length > 0 && (
                    <div className="glass-card" style={{ overflow: 'hidden' }}>
                        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
                            <h3 style={{ fontSize: '14px', fontWeight: '600' }}>👨‍⚕️ Doctor Performance (This Month)</h3>
                        </div>
                        <div className="table-container" style={{ border: 'none', borderRadius: 0 }}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Doctor</th>
                                        <th>Appointments</th>
                                        <th>Completed</th>
                                        <th>Cancelled</th>
                                        <th>No Show</th>
                                        <th>Revenue</th>
                                        <th>Completion Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {doctorPerf.map((doc: any) => {
                                        const rate = doc.totalAppointments > 0
                                            ? Math.round((doc.completed / doc.totalAppointments) * 100)
                                            : 0;
                                        return (
                                            <tr key={doc.id}>
                                                <td>
                                                    <div style={{ fontWeight: '600' }}>{doc.name}</div>
                                                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{doc.specialization || 'General'}</div>
                                                </td>
                                                <td style={{ fontWeight: '600' }}>{doc.totalAppointments}</td>
                                                <td><span style={{ color: '#10b981', fontWeight: '500' }}>{doc.completed}</span></td>
                                                <td><span style={{ color: '#ef4444', fontWeight: '500' }}>{doc.cancelled}</span></td>
                                                <td><span style={{ color: '#f59e0b', fontWeight: '500' }}>{doc.noShow}</span></td>
                                                <td style={{ fontWeight: '600', color: '#60a5fa' }}>{formatCurrency(doc.revenue)}</td>
                                                <td>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                        <div style={{ flex: 1, height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                                                            <div style={{ width: `${rate}%`, height: '100%', background: rate >= 70 ? '#10b981' : rate >= 50 ? '#f59e0b' : '#ef4444', borderRadius: '3px', transition: 'width 0.3s' }} />
                                                        </div>
                                                        <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', minWidth: '35px' }}>{rate}%</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
