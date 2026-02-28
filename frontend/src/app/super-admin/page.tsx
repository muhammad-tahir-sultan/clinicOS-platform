'use client';

import { useQuery } from '@tanstack/react-query';
import { Building2, Users, CreditCard, Activity, TrendingUp, CheckCircle, XCircle } from 'lucide-react';
import { tenantApi } from '@/lib/api';
import { PageHeader } from '@/components/layout/PageHeader';
import { StatCard, StatCardSkeleton } from '@/components/ui/StatCard';
import { formatDate } from '@/lib/utils';
import { useAuthStore } from '@/store/auth.store';

export default function SuperAdminDashboard() {
    const { user } = useAuthStore();

    const { data: statsData, isLoading: statsLoading } = useQuery({
        queryKey: ['tenant-stats'],
        queryFn: () => tenantApi.stats().then((r) => r.data),
    });

    const { data: clinicsData, isLoading: clinicsLoading } = useQuery({
        queryKey: ['tenants', { page: 1 }],
        queryFn: () => tenantApi.getAll({ page: 1, limit: 5 }).then((r) => r.data),
    });

    const stats = statsData?.data || {};
    const clinics = clinicsData?.data || [];

    return (
        <div className="animate-fade-in">
            <PageHeader
                title={`Welcome back, ${user?.firstName}! 👋`}
                subtitle="Here's what's happening across all clinics today."
            />

            <div style={{ padding: '28px' }}>
                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                    {statsLoading ? (
                        <StatCardSkeleton count={4} />
                    ) : (
                        <>
                            <StatCard
                                title="Total Clinics"
                                value={stats.totalClinics ?? '—'}
                                subtitle={`${stats.activeClinics ?? 0} active`}
                                icon={<Building2 size={20} />}
                                colorClass="stat-purple"
                                iconClass="icon-purple"
                            />
                            <StatCard
                                title="Active Subscriptions"
                                value={stats.activeSubscriptions ?? '—'}
                                subtitle={`${stats.expiredSubscriptions ?? 0} expired`}
                                icon={<CreditCard size={20} />}
                                colorClass="stat-blue"
                                iconClass="icon-blue"
                            />
                            <StatCard
                                title="New This Month"
                                value={stats.newClinicsThisMonth ?? '—'}
                                subtitle="clinic registrations"
                                icon={<TrendingUp size={20} />}
                                colorClass="stat-green"
                                iconClass="icon-green"
                            />
                            <StatCard
                                title="Suspended"
                                value={stats.suspendedClinics ?? '—'}
                                subtitle="need attention"
                                icon={<XCircle size={20} />}
                                colorClass="stat-orange"
                                iconClass="icon-orange"
                            />
                        </>
                    )}
                </div>

                {/* Recent Clinics Table */}
                <div className="glass-card" style={{ overflow: 'hidden' }}>
                    <div style={{
                        padding: '18px 20px',
                        borderBottom: '1px solid var(--border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    }}>
                        <h3 style={{ fontSize: '15px', fontWeight: '600' }}>Recent Clinics</h3>
                        <a href="/super-admin/clinics" style={{ fontSize: '13px', color: '#60a5fa', textDecoration: 'none', fontWeight: '500' }}>
                            View all →
                        </a>
                    </div>
                    <div className="table-container" style={{ border: 'none', borderRadius: 0 }}>
                        {clinicsLoading ? (
                            <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
                                <div className="spinner" style={{ width: '28px', height: '28px' }} />
                            </div>
                        ) : clinics.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
                                No clinics registered yet
                            </div>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Clinic</th>
                                        <th>Slug</th>
                                        <th>Subscription</th>
                                        <th>Status</th>
                                        <th>Joined</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clinics.map((clinic: any) => (
                                        <tr key={clinic.id}>
                                            <td>
                                                <div style={{ fontWeight: '500' }}>{clinic.name}</div>
                                                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{clinic.email}</div>
                                            </td>
                                            <td>
                                                <code style={{ fontSize: '12px', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px', color: '#94a3b8' }}>
                                                    {clinic.slug}
                                                </code>
                                            </td>
                                            <td>
                                                {clinic.subscription ? (
                                                    <span className={`badge ${clinic.subscription.plan === 'ENTERPRISE' ? 'badge-purple' :
                                                            clinic.subscription.plan === 'PRO' ? 'badge-blue' : 'badge-gray'
                                                        }`}>
                                                        {clinic.subscription.plan}
                                                    </span>
                                                ) : '—'}
                                            </td>
                                            <td>
                                                <span className={`badge ${clinic.isActive ? 'badge-green' : 'badge-red'}`}>
                                                    {clinic.isActive ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
                                                {formatDate(clinic.createdAt)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
