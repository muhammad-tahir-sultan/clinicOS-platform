'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Activity, LogOut, Bell, ChevronDown, User } from 'lucide-react';
import { useAuthStore } from '@/store/auth.store';
import { authApi } from '@/lib/api';
import { getInitials, formatRole } from '@/lib/utils';
import { useState } from 'react';

interface NavItem {
    label: string;
    href: string;
    icon: React.ReactNode;
}

interface SidebarProps {
    navItems: NavItem[];
    currentPath: string;
    title: string;
    accentColor?: string;
}

export function Sidebar({ navItems, currentPath, title, accentColor = '#3b82f6' }: SidebarProps) {
    const router = useRouter();
    const { user, clearAuth } = useAuthStore();
    const [loggingOut, setLoggingOut] = useState(false);

    const handleLogout = async () => {
        setLoggingOut(true);
        try {
            await authApi.logout();
        } catch { }
        localStorage.clear();
        clearAuth();
        router.push('/login');
    };

    return (
        <aside
            style={{
                width: '240px',
                minHeight: '100vh',
                background: 'var(--bg-secondary)',
                borderRight: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                padding: '0',
                flexShrink: 0,
            }}
        >
            {/* Logo */}
            <div
                style={{
                    padding: '20px 20px 16px',
                    borderBottom: '1px solid var(--border)',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                        style={{
                            width: '36px', height: '36px', borderRadius: '10px',
                            background: `linear-gradient(135deg, ${accentColor}30, ${accentColor}15)`,
                            border: `1px solid ${accentColor}40`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}
                    >
                        <Activity size={20} color={accentColor} />
                    </div>
                    <div>
                        <div style={{ fontWeight: '700', fontSize: '15px', color: 'var(--text-primary)' }}>
                            ClinicOS
                        </div>
                        <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                            {title}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav style={{ flex: 1, padding: '16px 12px', overflowY: 'auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {navItems.map((item) => {
                        const isActive =
                            currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`sidebar-link ${isActive ? 'active' : ''}`}
                            >
                                <span style={{ flexShrink: 0 }}>{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* User section */}
            <div
                style={{
                    padding: '12px',
                    borderTop: '1px solid var(--border)',
                }}
            >
                <div
                    style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        padding: '10px 12px', borderRadius: '10px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--border)',
                        marginBottom: '8px',
                    }}
                >
                    <div
                        style={{
                            width: '32px', height: '32px', borderRadius: '8px',
                            background: `linear-gradient(135deg, ${accentColor}40, ${accentColor}20)`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '12px', fontWeight: '700', color: accentColor,
                            flexShrink: 0,
                        }}
                    >
                        {user ? getInitials(user.firstName, user.lastName) : 'US'}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {user ? `${user.firstName} ${user.lastName}` : 'User'}
                        </div>
                        <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                            {user ? formatRole(user.role) : ''}
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    disabled={loggingOut}
                    style={{
                        width: '100%', display: 'flex', alignItems: 'center', gap: '8px',
                        padding: '8px 12px', borderRadius: '8px', background: 'none',
                        border: '1px solid transparent', color: 'var(--text-secondary)',
                        fontSize: '13px', fontWeight: '500', cursor: 'pointer',
                        transition: 'all 0.2s',
                    }}
                    onMouseOver={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = 'rgba(239,68,68,0.08)';
                        (e.currentTarget as HTMLButtonElement).style.color = '#f87171';
                        (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(239,68,68,0.15)';
                    }}
                    onMouseOut={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = 'none';
                        (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)';
                        (e.currentTarget as HTMLButtonElement).style.borderColor = 'transparent';
                    }}
                >
                    <LogOut size={14} />
                    Sign out
                </button>
            </div>
        </aside>
    );
}
