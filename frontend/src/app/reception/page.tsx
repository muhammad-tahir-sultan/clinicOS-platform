'use client';

import { useQuery } from '@tanstack/react-query';
import { Calendar, Clock, UserCheck, XCircle } from 'lucide-react';
import { dashboardApi, appointmentsApi } from '@/lib/api';
import { PageHeader } from '@/components/layout/PageHeader';
import { StatCard, StatCardSkeleton } from '@/components/ui/StatCard';
import { useAuthStore } from '@/store/auth.store';
import { formatDate } from '@/lib/utils';

export default function ReceptionDashboard() {
    const { user } = useAuthStore();

    const { data: summary, isLoading } = useQuery({
        queryKey: ['reception-summary'],
        queryFn: () => dashboardApi.getSummary().then((r) => r.data.summary),
    });

    const { data: todayAppts, isLoading: todayLoading } = useQuery({
        queryKey: ['today-appts-reception'],
        queryFn: () => appointmentsApi.getToday().then((r) => r.data),
    });

    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    return (
        <div className="animate-fade-in">
            <PageHeader
                title={`Reception Desk — ${user?.firstName} ${user?.lastName}`}
                subtitle={`${formatDate(now)} · ${timeStr} · Patient check-in & scheduling`}
            />

            <div style={{ padding: '28px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '28px' }}>
                    {isLoading ? <StatCardSkeleton count={4} /> : (
                        <>
                            <StatCard title="Today's Appointments" value={summary?.todayAppointments ?? 0} subtitle="in queue" icon={<Calendar size={20} />} colorClass="stat-blue" iconClass="icon-blue" />
                            <StatCard title="Total Patients" value={summary?.totalPatients ?? 0} subtitle="registered" icon={<UserCheck size={20} />} colorClass="stat-green" iconClass="icon-green" />
                            <StatCard title="Completed Today" value={summary?.completedAppointments ?? 0} subtitle="this month" icon={<Clock size={20} />} colorClass="stat-cyan" iconClass="icon-cyan" />
                            <StatCard title="Cancelled" value={summary?.cancelledAppointments ?? 0} subtitle="this month" icon={<XCircle size={20} />} colorClass="stat-orange" iconClass="icon-orange" />
                        </>
                    )}
                </div>

                {/* Live appointment queue */}
                <div className="glass-card" style={{ overflow: 'hidden' }}>
                    <div style={{
                        padding: '16px 20px', borderBottom: '1px solid var(--border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    }}>
                        <h3 style={{ fontSize: '15px', fontWeight: '600' }}>🟢 Today's Appointment Queue</h3>
                        <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                            {todayAppts?.length ?? 0} appointments
                        </div>
                    </div>

                    {todayLoading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
                            <div className="spinner" style={{ width: '28px', height: '28px' }} />
                        </div>
                    ) : !todayAppts || todayAppts.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                            <Calendar size={40} style={{ marginBottom: '12px', opacity: 0.3 }} />
                            <p>No appointments scheduled for today</p>
                        </div>
                    ) : (
                        <div className="table-container" style={{ border: 'none', borderRadius: 0 }}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Time</th>
                                        <th>Patient</th>
                                        <th>Doctor</th>
                                        <th>Reason</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {todayAppts.map((appt: any, idx: number) => (
                                        <tr key={appt.id}>
                                            <td style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
                                                {String(idx + 1).padStart(2, '0')}
                                            </td>
                                            <td>
                                                <div style={{ fontWeight: '600', color: '#60a5fa', fontSize: '13px' }}>
                                                    {appt.startTime}
                                                </div>
                                                <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{appt.endTime}</div>
                                            </td>
                                            <td>
                                                <div style={{ fontWeight: '500' }}>{appt.patient?.firstName} {appt.patient?.lastName}</div>
                                                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{appt.patient?.phone}</div>
                                            </td>
                                            <td>
                                                <div style={{ fontSize: '13px' }}>Dr. {appt.doctor?.firstName} {appt.doctor?.lastName}</div>
                                                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{appt.doctor?.specialization || 'General'}</div>
                                            </td>
                                            <td style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                                                {appt.reason || '—'}
                                            </td>
                                            <td>
                                                <span className={`badge ${appt.status === 'COMPLETED' ? 'badge-green' :
                                                        appt.status === 'IN_PROGRESS' ? 'badge-purple' :
                                                            appt.status === 'CANCELLED' ? 'badge-red' :
                                                                appt.status === 'NO_SHOW' ? 'badge-gray' : 'badge-blue'
                                                    }`}>
                                                    {appt.status.replace('_', ' ')}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
