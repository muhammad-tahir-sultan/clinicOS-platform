'use client';

import { useQuery } from '@tanstack/react-query';
import { Calendar, CheckCircle, Clock, XCircle } from 'lucide-react';
import { dashboardApi, appointmentsApi } from '@/lib/api';
import { PageHeader } from '@/components/layout/PageHeader';
import { StatCard, StatCardSkeleton } from '@/components/ui/StatCard';
import { useAuthStore } from '@/store/auth.store';

export default function DoctorDashboard() {
    const { user } = useAuthStore();

    const { data: summary, isLoading } = useQuery({
        queryKey: ['doctor-dashboard-summary'],
        queryFn: () => dashboardApi.getSummary().then((r) => r.data.summary),
    });

    const { data: todayAppts, isLoading: todayLoading } = useQuery({
        queryKey: ['today-appts-doctor'],
        queryFn: () => appointmentsApi.getToday({ doctorId: user?.id }).then((r) => r.data),
    });

    return (
        <div className="animate-fade-in">
            <PageHeader
                title={`Dr. ${user?.firstName} ${user?.lastName}'s Schedule`}
                subtitle={user?.specialization ? `${user.specialization} · Today's Overview` : 'Today\'s Overview'}
            />

            <div style={{ padding: '28px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '28px' }}>
                    {isLoading ? <StatCardSkeleton count={3} /> : (
                        <>
                            <StatCard title="Today's Appointments" value={summary?.todayAppointments ?? 0} subtitle="scheduled" icon={<Calendar size={20} />} colorClass="stat-blue" iconClass="icon-blue" />
                            <StatCard title="Completed This Month" value={summary?.completedAppointments ?? 0} subtitle="appointments" icon={<CheckCircle size={20} />} colorClass="stat-green" iconClass="icon-green" />
                            <StatCard title="Cancelled / No-Show" value={(summary?.cancelledAppointments ?? 0)} subtitle="this month" icon={<XCircle size={20} />} colorClass="stat-orange" iconClass="icon-orange" />
                        </>
                    )}
                </div>

                {/* Today's schedule */}
                <div className="glass-card" style={{ overflow: 'hidden' }}>
                    <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
                        <h3 style={{ fontSize: '15px', fontWeight: '600' }}>📅 Today's Patient Schedule</h3>
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
                        <div>
                            {todayAppts.map((appt: any, idx: number) => (
                                <div key={appt.id} style={{
                                    display: 'flex', alignItems: 'center', gap: '16px',
                                    padding: '16px 20px',
                                    borderBottom: idx < todayAppts.length - 1 ? '1px solid rgba(30,45,74,0.5)' : 'none',
                                    transition: 'background 0.15s',
                                }}>
                                    <div style={{ textAlign: 'center', minWidth: '60px' }}>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: '#60a5fa' }}>{appt.startTime}</div>
                                        <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{appt.endTime}</div>
                                    </div>
                                    <div style={{ width: '1px', height: '40px', background: 'var(--border)' }} />
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: '14px', fontWeight: '600' }}>
                                            {appt.patient?.firstName} {appt.patient?.lastName}
                                        </div>
                                        <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                                            {appt.reason || 'No reason specified'} · {appt.patient?.phone}
                                        </div>
                                    </div>
                                    <span className={`badge ${appt.status === 'COMPLETED' ? 'badge-green' :
                                            appt.status === 'IN_PROGRESS' ? 'badge-purple' :
                                                appt.status === 'CANCELLED' ? 'badge-red' :
                                                    appt.status === 'NO_SHOW' ? 'badge-gray' : 'badge-blue'
                                        }`}>
                                        {appt.status.replace('_', ' ')}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
