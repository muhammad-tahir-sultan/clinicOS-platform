'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LayoutDashboard, Building2, CreditCard, Users, BarChart3, Settings } from 'lucide-react';
import { Sidebar } from '@/components/layout/Sidebar';
import { useAuthStore } from '@/store/auth.store';

const navItems = [
    { label: 'Dashboard', href: '/super-admin', icon: <LayoutDashboard size={16} /> },
    { label: 'Clinics', href: '/super-admin/clinics', icon: <Building2 size={16} /> },
    { label: 'Subscriptions', href: '/super-admin/subscriptions', icon: <CreditCard size={16} /> },
];

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, user } = useAuthStore();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!isAuthenticated) {
            router.replace('/login');
            return;
        }
        if (user?.role !== 'SUPER_ADMIN') {
            router.replace('/login');
        }
    }, [isAuthenticated, user, router]);

    if (!isAuthenticated || user?.role !== 'SUPER_ADMIN') {
        return null;
    }

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar
                navItems={navItems}
                currentPath={pathname}
                title="Super Admin"
                accentColor="#8b5cf6"
            />
            <main style={{ flex: 1, background: 'var(--bg-primary)', overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
                {children}
            </main>
        </div>
    );
}
