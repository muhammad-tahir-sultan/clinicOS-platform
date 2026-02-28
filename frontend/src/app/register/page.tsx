'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Activity, Building2, User, ArrowRight, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';
import { authApi } from '@/lib/api';
import { useAuthStore } from '@/store/auth.store';

const registerSchema = z.object({
    clinicName: z.string().min(2, 'Clinic name too short'),
    clinicSlug: z.string().min(2, 'Slug too short').regex(/^[a-z0-9-]+$/, 'Only lowercase, numbers, hyphens'),
    clinicEmail: z.string().email('Invalid email'),
    clinicPhone: z.string().optional(),
    clinicAddress: z.string().optional(),
    adminFirstName: z.string().min(1, 'Required'),
    adminLastName: z.string().min(1, 'Required'),
    adminEmail: z.string().email('Invalid email'),
    adminPassword: z.string().min(8, 'Min 8 characters'),
});
type RegisterForm = z.infer<typeof registerSchema>;

export default function RegisterPage() {
    const router = useRouter();
    const { setAuth } = useAuthStore();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { register, handleSubmit, formState: { errors }, trigger, getValues } = useForm<RegisterForm>({
        resolver: zodResolver(registerSchema),
    });

    const nextStep = async () => {
        const fields = step === 1
            ? ['clinicName', 'clinicSlug', 'clinicEmail', 'clinicPhone', 'clinicAddress'] as const
            : ['adminFirstName', 'adminLastName', 'adminEmail', 'adminPassword'] as const;
        const valid = await trigger(fields);
        if (valid) setStep(2);
    };

    const onSubmit = async (data: RegisterForm) => {
        setLoading(true);
        setError('');
        try {
            const res = await authApi.register(data);
            const { user, accessToken, refreshToken } = res.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            setAuth(user, accessToken, refreshToken);
            router.push('/clinic');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.07) 0%, transparent 50%), var(--bg-primary)',
            padding: '24px',
        }}>
            <div style={{ width: '100%', maxWidth: '500px' }}>
                {/* Logo */}
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2))', border: '1px solid rgba(59,130,246,0.3)', marginBottom: '14px' }}>
                        <Activity size={30} color="#60a5fa" />
                    </div>
                    <h1 style={{ fontSize: '26px', fontWeight: '700' }}><span className="gradient-text">Register Your Clinic</span></h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '6px' }}>
                        Set up your ClinicOS account in minutes
                    </p>
                </div>

                {/* Step indicator */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '28px', gap: '8px' }}>
                    {[1, 2].map((s) => (
                        <div key={s} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                            <div style={{
                                width: '100%', height: '4px', borderRadius: '2px',
                                background: s <= step ? 'linear-gradient(90deg, #3b82f6, #06b6d4)' : 'var(--border)',
                                transition: 'background 0.3s',
                            }} />
                            <span style={{ fontSize: '12px', color: s <= step ? '#60a5fa' : 'var(--text-muted)', fontWeight: '500' }}>
                                {s === 1 ? '🏥 Clinic Details' : '👤 Admin Account'}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="glass-card" style={{ padding: '28px' }}>
                    {error && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#f87171', fontSize: '14px' }}>
                            <AlertCircle size={16} />{error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {step === 1 && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                    <Building2 size={18} color="#60a5fa" /> Clinic Information
                                </h3>
                                <div>
                                    <label className="label">Clinic Name *</label>
                                    <input {...register('clinicName')} className="input" placeholder="City Medical Center" />
                                    {errors.clinicName && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.clinicName.message}</p>}
                                </div>
                                <div>
                                    <label className="label">URL Slug * <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '400' }}>(unique identifier, e.g. city-medical)</span></label>
                                    <input {...register('clinicSlug')} className="input" placeholder="city-medical" />
                                    {errors.clinicSlug && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.clinicSlug.message}</p>}
                                </div>
                                <div>
                                    <label className="label">Clinic Email *</label>
                                    <input {...register('clinicEmail')} type="email" className="input" placeholder="info@clinic.com" />
                                    {errors.clinicEmail && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.clinicEmail.message}</p>}
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                                    <div>
                                        <label className="label">Phone</label>
                                        <input {...register('clinicPhone')} className="input" placeholder="+1 234 567 8900" />
                                    </div>
                                    <div>
                                        <label className="label">Address</label>
                                        <input {...register('clinicAddress')} className="input" placeholder="123 Main St" />
                                    </div>
                                </div>
                                <button type="button" className="btn-primary" onClick={nextStep} style={{ marginTop: '8px', justifyContent: 'center' }}>
                                    Continue <ArrowRight size={16} />
                                </button>
                            </div>
                        )}

                        {step === 2 && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                    <User size={18} color="#60a5fa" /> Admin Account
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                                    <div>
                                        <label className="label">First Name *</label>
                                        <input {...register('adminFirstName')} className="input" />
                                        {errors.adminFirstName && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.adminFirstName.message}</p>}
                                    </div>
                                    <div>
                                        <label className="label">Last Name *</label>
                                        <input {...register('adminLastName')} className="input" />
                                    </div>
                                </div>
                                <div>
                                    <label className="label">Admin Email *</label>
                                    <input {...register('adminEmail')} type="email" className="input" placeholder="admin@clinic.com" />
                                    {errors.adminEmail && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.adminEmail.message}</p>}
                                </div>
                                <div>
                                    <label className="label">Password *</label>
                                    <input {...register('adminPassword')} type="password" className="input" placeholder="Min 8 characters" />
                                    {errors.adminPassword && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.adminPassword.message}</p>}
                                </div>

                                <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', fontSize: '13px', color: '#34d399', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                    <CheckCircle size={16} style={{ flexShrink: 0, marginTop: '1px' }} />
                                    Your clinic will start with a 30-day free trial on the Basic plan. No credit card required.
                                </div>

                                <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                                    <button type="button" className="btn-secondary" onClick={() => setStep(1)} style={{ flex: 1, justifyContent: 'center' }}>
                                        <ArrowLeft size={16} /> Back
                                    </button>
                                    <button type="submit" className="btn-primary" disabled={loading} style={{ flex: 2, justifyContent: 'center' }}>
                                        {loading ? <><div className="spinner" /> Registering...</> : 'Create Clinic Account'}
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>

                    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border)', textAlign: 'center', fontSize: '13px', color: 'var(--text-secondary)' }}>
                        Already have an account?{' '}
                        <a href="/login" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '500' }}>Sign in</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
