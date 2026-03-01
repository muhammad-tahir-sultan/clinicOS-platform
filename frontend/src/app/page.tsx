'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth.store';

export default function HomePage() {
  const { isAuthenticated, user, hasHydrated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!hasHydrated) return;
    if (!isAuthenticated) {
      router.replace('/login');
      return;
    }
    switch (user?.role) {
      case 'SUPER_ADMIN':
        router.replace('/super-admin');
        break;
      case 'CLINIC_ADMIN':
        router.replace('/clinic');
        break;
      case 'DOCTOR':
        router.replace('/doctor');
        break;
      case 'RECEPTIONIST':
        router.replace('/reception');
        break;
      default:
        router.replace('/login');
    }
  }, [hasHydrated, isAuthenticated, user, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="spinner" style={{ width: 40, height: 40 }} />
    </div>
  );
}
