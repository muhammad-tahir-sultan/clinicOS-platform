'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { subscriptionApi } from '@/lib/api';
import { PageHeader } from '@/components/layout/PageHeader';
import { useAuthStore } from '@/store/auth.store';
import { formatDate, formatCurrency } from '@/lib/utils';
import { CreditCard, RefreshCw, Calendar, Users } from 'lucide-react';
import { useState } from 'react';

export default function SubscriptionPage() {
    const { user } = useAuthStore();
    const qc = useQueryClient();
    const [renewMonths, setRenewMonths] = useState(1);
    const [renewing, setRenewing] = useState(false);

    const { data: sub, isLoading } = useQuery({
        queryKey: ['subscription', user?.clinicId],
        queryFn: () => subscriptionApi.get(user!.clinicId!).then((r) => r.data),
        enabled: !!user?.clinicId,
    });

    const renewMutation = useMutation({
        mutationFn: () => subscriptionApi.renew(user!.clinicId!, renewMonths),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['subscription'] });
            setRenewing(false);
        },
    });

    if (isLoading) {
        return (
            <div>
                <PageHeader title="Subscription" subtitle="Manage your clinic's plan" />
                <div style={{ display: 'flex', justifyContent: 'center', padding: '80px' }}>
                    <div className="spinner" style={{ width: '32px', height: '32px' }} />
                </div>
            </div>
        );
    }

    if (!sub) return null;

    const isExpired = sub.status === 'EXPIRED' || new Date() > new Date(sub.expiryDate);
    const daysLeft = Math.max(0, Math.ceil((new Date(sub.expiryDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)));

    const planFeatures: Record<string, string[]> = {
        BASIC: ['Up to 2 doctors', 'Up to 2 staff', 'Patient management', 'Appointment scheduling', 'Basic analytics'],
        PRO: ['Unlimited doctors', 'Unlimited staff', 'Advanced analytics', 'Revenue tracking', 'Priority support'],
        ENTERPRISE: ['Everything in PRO', 'Dedicated support', 'Custom integrations', 'SLA guarantee', 'Audit logs'],
    };

    const features = planFeatures[sub.plan] || planFeatures.BASIC;

    return (
        <div className="animate-fade-in">
            <PageHeader title="Subscription" subtitle="Manage your clinic's subscription plan" />

            <div style={{ padding: '28px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', maxWidth: '900px' }}>
                    {/* Current plan */}
                    <div className="glass-card" style={{ padding: '24px', borderColor: isExpired ? 'rgba(239,68,68,0.3)' : 'rgba(59,130,246,0.3)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(59,130,246,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CreditCard size={22} color="#60a5fa" />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '18px', fontWeight: '700' }}>{sub.plan} Plan</h3>
                                <span className={`badge ${sub.status === 'ACTIVE' ? 'badge-green' : sub.status === 'SUSPENDED' ? 'badge-yellow' : 'badge-red'}`}>
                                    {sub.status}
                                </span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Started</span>
                                <span style={{ fontSize: '13px', fontWeight: '500' }}>{formatDate(sub.startDate)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Expires</span>
                                <span style={{ fontSize: '13px', fontWeight: '500', color: isExpired ? '#f87171' : daysLeft <= 7 ? '#f59e0b' : 'var(--text-primary)' }}>
                                    {formatDate(sub.expiryDate)} {!isExpired && `(${daysLeft}d left)`}
                                </span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}><Users size={14} /> Max Doctors</span>
                                <span style={{ fontSize: '13px', fontWeight: '500' }}>{sub.maxDoctors >= 999 ? 'Unlimited' : sub.maxDoctors}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
                                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}><Users size={14} /> Max Staff</span>
                                <span style={{ fontSize: '13px', fontWeight: '500' }}>{sub.maxStaff >= 999 ? 'Unlimited' : sub.maxStaff}</span>
                            </div>
                        </div>

                        {/* Renew */}
                        <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(59,130,246,0.06)', borderRadius: '10px', border: '1px solid rgba(59,130,246,0.15)' }}>
                            <p style={{ fontSize: '13px', fontWeight: '600', marginBottom: '12px' }}>Renew Subscription</p>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <select
                                    className="input"
                                    value={renewMonths}
                                    onChange={(e) => setRenewMonths(Number(e.target.value))}
                                    style={{ flex: 1, height: '38px' }}
                                >
                                    <option value={1}>1 Month</option>
                                    <option value={3}>3 Months</option>
                                    <option value={6}>6 Months</option>
                                    <option value={12}>12 Months</option>
                                </select>
                                <button
                                    className="btn-primary"
                                    style={{ height: '38px', padding: '0 16px' }}
                                    onClick={() => renewMutation.mutate()}
                                    disabled={renewMutation.isPending}
                                >
                                    {renewMutation.isPending ? <><div className="spinner" /> Renewing...</> : <><RefreshCw size={14} /> Renew</>}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Plan features */}
                    <div className="glass-card" style={{ padding: '24px' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Plan Features</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {features.map((f) => (
                                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>
                                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <span style={{ color: '#10b981', fontSize: '11px' }}>✓</span>
                                    </div>
                                    {f}
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(139,92,246,0.06)', borderRadius: '10px', border: '1px solid rgba(139,92,246,0.15)', fontSize: '13px', color: 'var(--text-secondary)' }}>
                            <p style={{ fontWeight: '600', color: 'var(--text-primary)', marginBottom: '6px' }}>Need more features?</p>
                            <p>Contact your super administrator to upgrade your plan to PRO or Enterprise.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
