'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LayoutDashboard, Users, UserCircle, Calendar, BarChart3, CreditCard } from 'lucide-react';
import { Sidebar } from '@/components/layout/Sidebar';
import { useAuthStore } from '@/store/auth.store';

const navItems = [
    { label: 'Dashboard', href: '/clinic', icon: <LayoutDashboard size={16} /> },
    { label: 'Patients', href: '/clinic/patients', icon: <UserCircle size={16} /> },
    { label: 'Appointments', href: '/clinic/appointments', icon: <Calendar size={16} /> },
    { label: 'Staff', href: '/clinic/staff', icon: <Users size={16} /> },
    { label: 'Analytics', href: '/clinic/analytics', icon: <BarChart3 size={16} /> },
    { label: 'Subscription', href: '/clinic/subscription', icon: <CreditCard size={16} /> },
];

export default function ClinicLayout({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, user } = useAuthStore();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!isAuthenticated) {
            router.replace('/login');
            return;
        }
        if (user?.role !== 'CLINIC_ADMIN') {
            router.replace('/login');
        }
    }, [isAuthenticated, user, router]);

    if (!isAuthenticated || user?.role !== 'CLINIC_ADMIN') return null;

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar
                navItems={navItems}
                currentPath={pathname}
                title="Clinic Admin"
                accentColor="#3b82f6"
            />
            <main style={{ flex: 1, background: 'var(--bg-primary)', overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
                {children}
            </main>
        </div>
    );
}
