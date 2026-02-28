'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus, Search, Building2, CheckCircle, XCircle, MoreHorizontal } from 'lucide-react';
import { tenantApi } from '@/lib/api';
import { PageHeader } from '@/components/layout/PageHeader';
import { formatDate, getStatusBadgeClass } from '@/lib/utils';

export default function ClinicsPage() {
    const qc = useQueryClient();
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    const { data, isLoading } = useQuery({
        queryKey: ['tenants', { page, search }],
        queryFn: () => tenantApi.getAll({ page, limit: 10, search }).then((r) => r.data),
        staleTime: 0,
    });

    const activateMutation = useMutation({
        mutationFn: (id: string) => tenantApi.activate(id),
        onSuccess: () => qc.invalidateQueries({ queryKey: ['tenants'] }),
    });

    const deactivateMutation = useMutation({
        mutationFn: (id: string) => tenantApi.deactivate(id),
        onSuccess: () => qc.invalidateQueries({ queryKey: ['tenants'] }),
    });

    const clinics = data?.data || [];
    const meta = data?.meta || {};

    return (
        <div className="animate-fade-in">
            <PageHeader
                title="Clinic Management"
                subtitle="Manage all registered clinics on the platform."
                actions={
                    <div style={{ display: 'flex', gap: '10px' }}>
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
                        ) : clinics.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-secondary)' }}>
                                <Building2 size={40} style={{ marginBottom: '12px', opacity: 0.3 }} />
                                <p>No clinics found</p>
                            </div>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Clinic</th>
                                        <th>Contact</th>
                                        <th>Plan</th>
                                        <th>Expiry</th>
                                        <th>Status</th>
                                        <th>Registered</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clinics.map((clinic: any) => (
                                        <tr key={clinic.id}>
                                            <td>
                                                <div style={{ fontWeight: '600' }}>{clinic.name}</div>
                                                <code style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>/{clinic.slug}</code>
                                            </td>
                                            <td>
                                                <div style={{ fontSize: '13px' }}>{clinic.email}</div>
                                                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{clinic.phone || '—'}</div>
                                            </td>
                                            <td>
                                                {clinic.subscription ? (
                                                    <span className={`badge ${clinic.subscription.plan === 'ENTERPRISE' ? 'badge-purple' :
                                                            clinic.subscription.plan === 'PRO' ? 'badge-blue' : 'badge-gray'
                                                        }`}>
                                                        {clinic.subscription.plan}
                                                    </span>
                                                ) : (
                                                    <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>—</span>
                                                )}
                                            </td>
                                            <td style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                                                {clinic.subscription?.expiryDate ? formatDate(clinic.subscription.expiryDate) : '—'}
                                            </td>
                                            <td>
                                                <span className={`badge ${clinic.isActive ? 'badge-green' : 'badge-red'}`}>
                                                    {clinic.isActive ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                                                {formatDate(clinic.createdAt)}
                                            </td>
                                            <td>
                                                <div style={{ display: 'flex', gap: '6px' }}>
                                                    {clinic.isActive ? (
                                                        <button
                                                            className="btn-danger"
                                                            style={{ padding: '4px 10px', fontSize: '12px' }}
                                                            onClick={() => deactivateMutation.mutate(clinic.id)}
                                                            disabled={deactivateMutation.isPending}
                                                        >
                                                            <XCircle size={12} /> Deactivate
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="btn-secondary"
                                                            style={{ padding: '4px 10px', fontSize: '12px' }}
                                                            onClick={() => activateMutation.mutate(clinic.id)}
                                                            disabled={activateMutation.isPending}
                                                        >
                                                            <CheckCircle size={12} /> Activate
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Pagination */}
                    {meta.totalPages > 1 && (
                        <div style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '14px 20px', borderTop: '1px solid var(--border)',
                        }}>
                            <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                                Page {meta.page} of {meta.totalPages} ({meta.total} total)
                            </span>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <button
                                    className="btn-secondary"
                                    style={{ padding: '6px 14px', fontSize: '13px' }}
                                    disabled={page <= 1}
                                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                                >
                                    Previous
                                </button>
                                <button
                                    className="btn-secondary"
                                    style={{ padding: '6px 14px', fontSize: '13px' }}
                                    disabled={page >= meta.totalPages}
                                    onClick={() => setPage((p) => p + 1)}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
