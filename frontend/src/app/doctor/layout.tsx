'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LayoutDashboard, Calendar, UserCircle, ClipboardList } from 'lucide-react';
import { Sidebar } from '@/components/layout/Sidebar';
import { useAuthStore } from '@/store/auth.store';

const navItems = [
    { label: 'My Schedule', href: '/doctor', icon: <LayoutDashboard size={16} /> },
    { label: 'Appointments', href: '/doctor/appointments', icon: <Calendar size={16} /> },
    { label: 'Patients', href: '/doctor/patients', icon: <UserCircle size={16} /> },
];

export default function DoctorLayout({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, user, hasHydrated } = useAuthStore();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!hasHydrated) return;
        if (!isAuthenticated) { router.replace('/login'); return; }
        if (user?.role !== 'DOCTOR') router.replace('/login');
    }, [hasHydrated, isAuthenticated, user, router]);

    if (!hasHydrated) return null;
    if (!isAuthenticated || user?.role !== 'DOCTOR') return null;

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar navItems={navItems} currentPath={pathname} title="Doctor Portal" accentColor="#10b981" />
            <main style={{ flex: 1, background: 'var(--bg-primary)', overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
                {children}
            </main>
        </div>
    );
}
