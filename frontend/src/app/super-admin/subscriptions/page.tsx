'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { subscriptionApi, tenantApi } from '@/lib/api';
import { PageHeader } from '@/components/layout/PageHeader';
import { formatDate } from '@/lib/utils';
import { Search, RefreshCw } from 'lucide-react';

export default function SubscriptionsPage() {
    const qc = useQueryClient();
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    const { data, isLoading } = useQuery({
        queryKey: ['tenants-subs', { page, search }],
        queryFn: () => tenantApi.getAll({ page, limit: 15, search }).then((r) => r.data),
        staleTime: 0,
    });

    const renewMutation = useMutation({
        mutationFn: ({ clinicId, months }: { clinicId: string; months: number }) =>
            subscriptionApi.renew(clinicId, months),
        onSuccess: () => qc.invalidateQueries({ queryKey: ['tenants-subs'] }),
    });

    const clinics = data?.data || [];
    const meta = data?.meta || {};

    const planColor = (plan: string) =>
        plan === 'ENTERPRISE' ? 'badge-purple' : plan === 'PRO' ? 'badge-blue' : 'badge-gray';

    return (
        <div className="animate-fade-in">
            <PageHeader
                title="Subscription Management"
                subtitle="Manage clinic subscriptions and plans"
                actions={
                    <div style={{ position: 'relative' }}>
                        <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            className="input"
                            placeholder="Search clinics..."
                            value={search}
                            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                            style={{ paddingLeft: '32px', width: '220px', height: '38px' }}
                        />
                    </div>
                }
            />

            <div style={{ padding: '28px' }}>
                <div className="glass-card" style={{ overflow: 'hidden' }}>
                    <div className="table-container" style={{ border: 'none', borderRadius: 0 }}>
                        {isLoading ? (
                            <div style={{ display: 'flex', justifyContent: 'center', padding: '60px' }}>
                                <div className="spinner" style={{ width: '32px', height: '32px' }} />
                            </div>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Clinic</th>
                                        <th>Plan</th>
                                        <th>Status</th>
                                        <th>Started</th>
                                        <th>Expires</th>
                                        <th>Doctors / Staff</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clinics.map((clinic: any) => {
                                        const sub = clinic.subscription;
                                        const isExpired = sub && (sub.status === 'EXPIRED' || new Date() > new Date(sub.expiryDate));
                                        return (
                                            <tr key={clinic.id}>
                                                <td>
                                                    <div style={{ fontWeight: '600' }}>{clinic.name}</div>
                                                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{clinic.email}</div>
                                                </td>
                                                <td>
                                                    {sub ? <span className={`badge ${planColor(sub.plan)}`}>{sub.plan}</span> : '—'}
                                                </td>
                                                <td>
                                                    {sub ? (
                                                        <span className={`badge ${sub.status === 'ACTIVE' && !isExpired ? 'badge-green' : sub.status === 'SUSPENDED' ? 'badge-yellow' : 'badge-red'}`}>
                                                            {isExpired ? 'EXPIRED' : sub.status}
                                                        </span>
                                                    ) : '—'}
                                                </td>
                                                <td style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                                                    {sub ? formatDate(sub.startDate) : '—'}
                                                </td>
                                                <td style={{ fontSize: '13px' }}>
                                                    {sub ? (
                                                        <span style={{ color: isExpired ? '#f87171' : 'var(--text-primary)' }}>
                                                            {formatDate(sub.expiryDate)}
                                                        </span>
                                                    ) : '—'}
                                                </td>
                                                <td style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                                                    {sub ? `${sub.maxDoctors >= 999 ? '∞' : sub.maxDoctors} / ${sub.maxStaff >= 999 ? '∞' : sub.maxStaff}` : '—'}
                                                </td>
                                                <td>
                                                    {sub && (
                                                        <button
                                                            className="btn-secondary"
                                                            style={{ padding: '4px 10px', fontSize: '12px' }}
                                                            onClick={() => renewMutation.mutate({ clinicId: clinic.id, months: 1 })}
                                                            disabled={renewMutation.isPending}
                                                        >
                                                            <RefreshCw size={12} /> Renew 1mo
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {meta.totalPages > 1 && (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderTop: '1px solid var(--border)' }}>
                            <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                                Page {meta.page} of {meta.totalPages} · {meta.total} clinics
                            </span>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <button className="btn-secondary" style={{ padding: '6px 14px', fontSize: '13px' }} disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>Previous</button>
                                <button className="btn-secondary" style={{ padding: '6px 14px', fontSize: '13px' }} disabled={page >= meta.totalPages} onClick={() => setPage((p) => p + 1)}>Next</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
