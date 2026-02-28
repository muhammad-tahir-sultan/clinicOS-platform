'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Activity, Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { authApi } from '@/lib/api';
import { useAuthStore } from '@/store/auth.store';

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const router = useRouter();
    const { setAuth } = useAuthStore();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

    const onSubmit = async (data: LoginForm) => {
        setLoading(true);
        setError('');
        try {
            const res = await authApi.login(data);
            const { user, accessToken, refreshToken } = res.data;

            // Persist tokens
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            setAuth(user, accessToken, refreshToken);

            // Role-based redirect
            switch (user.role) {
                case 'SUPER_ADMIN':
                    router.push('/super-admin');
                    break;
                case 'CLINIC_ADMIN':
                    router.push('/clinic');
                    break;
                case 'DOCTOR':
                    router.push('/doctor');
                    break;
                case 'RECEPTIONIST':
                    router.push('/reception');
                    break;
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.06) 0%, transparent 50%), var(--bg-primary)',
                padding: '24px',
            }}
        >
            {/* Background decorations */}
            <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0,
            }}>
                <div style={{
                    position: 'absolute', top: '-20%', left: '-10%', width: '600px', height: '600px',
                    background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
                    borderRadius: '50%',
                }} />
                <div style={{
                    position: 'absolute', bottom: '-20%', right: '-10%', width: '500px', height: '500px',
                    background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)',
                    borderRadius: '50%',
                }} />
            </div>

            <div style={{ width: '100%', maxWidth: '420px', position: 'relative', zIndex: 1 }}>
                {/* Logo */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        width: '64px', height: '64px', borderRadius: '18px',
                        background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2))',
                        border: '1px solid rgba(59,130,246,0.3)',
                        marginBottom: '16px',
                    }}>
                        <Activity size={32} color="#60a5fa" />
                    </div>
                    <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>
                        <span className="gradient-text">ClinicOS</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
                        Sign in to your healthcare platform
                    </p>
                </div>

                {/* Card */}
                <div className="glass-card" style={{ padding: '32px' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px' }}>
                        Welcome back
                    </h2>

                    {error && (
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '10px',
                            padding: '12px 16px', borderRadius: '8px', marginBottom: '20px',
                            background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
                            color: '#f87171', fontSize: '14px',
                        }}>
                            <AlertCircle size={16} />
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email */}
                        <div style={{ marginBottom: '16px' }}>
                            <label className="label">Email address</label>
                            <div style={{ position: 'relative' }}>
                                <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                                    <Mail size={16} />
                                </div>
                                <input
                                    {...register('email')}
                                    type="email"
                                    placeholder="you@clinic.com"
                                    className="input"
                                    style={{ paddingLeft: '40px' }}
                                    autoComplete="email"
                                />
                            </div>
                            {errors.email && (
                                <p style={{ color: '#f87171', fontSize: '12px', marginTop: '6px' }}>
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div style={{ marginBottom: '24px' }}>
                            <label className="label">Password</label>
                            <div style={{ position: 'relative' }}>
                                <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                                    <Lock size={16} />
                                </div>
                                <input
                                    {...register('password')}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    className="input"
                                    style={{ paddingLeft: '40px', paddingRight: '40px' }}
                                    autoComplete="current-password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
                                        background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer',
                                        padding: '0', display: 'flex', alignItems: 'center',
                                    }}
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                            {errors.password && (
                                <p style={{ color: '#f87171', fontSize: '12px', marginTop: '6px' }}>
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={loading}
                            style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '15px' }}
                        >
                            {loading ? (
                                <>
                                    <div className="spinner" />
                                    Signing in...
                                </>
                            ) : (
                                'Sign in'
                            )}
                        </button>
                    </form>

                    <div style={{
                        marginTop: '24px', paddingTop: '24px',
                        borderTop: '1px solid var(--border)',
                        textAlign: 'center', fontSize: '13px', color: 'var(--text-secondary)',
                    }}>
                        New clinic?{' '}
                        <a href="/register" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: '500' }}>
                            Register your clinic
                        </a>
                    </div>
                </div>

                {/* Demo credentials hint */}
                <div style={{
                    marginTop: '20px', padding: '14px 16px', borderRadius: '10px',
                    background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)',
                    fontSize: '13px', color: 'var(--text-secondary)',
                }}>
                    <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
                        🔑 Super Admin Demo
                    </strong>
                    Email: admin@clinicos.com · Password: SuperAdmin@123
                </div>
            </div>
        </div>
    );
}
