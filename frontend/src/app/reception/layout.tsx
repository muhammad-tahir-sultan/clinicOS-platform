'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LayoutDashboard, Calendar, UserCircle } from 'lucide-react';
import { Sidebar } from '@/components/layout/Sidebar';
import { useAuthStore } from '@/store/auth.store';

const navItems = [
    { label: 'Dashboard', href: '/reception', icon: <LayoutDashboard size={16} /> },
    { label: 'Appointments', href: '/reception/appointments', icon: <Calendar size={16} /> },
    { label: 'Patients', href: '/reception/patients', icon: <UserCircle size={16} /> },
];

export default function ReceptionLayout({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, user, hasHydrated } = useAuthStore();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!hasHydrated) return;
        if (!isAuthenticated) { router.replace('/login'); return; }
        if (user?.role !== 'RECEPTIONIST') router.replace('/login');
    }, [hasHydrated, isAuthenticated, user, router]);

    if (!hasHydrated) return null;
    if (!isAuthenticated || user?.role !== 'RECEPTIONIST') return null;

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar navItems={navItems} currentPath={pathname} title="Reception" accentColor="#f59e0b" />
            <main style={{ flex: 1, background: 'var(--bg-primary)', overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
                {children}
            </main>
        </div>
    );
}
