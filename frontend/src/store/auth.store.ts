'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'SUPER_ADMIN' | 'CLINIC_ADMIN' | 'DOCTOR' | 'RECEPTIONIST';

export interface AuthUser {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: UserRole;
    clinicId: string | null;
    specialization?: string | null;
}

interface AuthState {
    user: AuthUser | null;
    accessToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
    hasHydrated: boolean;
    setAuth: (user: AuthUser, accessToken: string, refreshToken: string) => void;
    clearAuth: () => void;
    setHasHydrated: (hydrated: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            accessToken: null,
            refreshToken: null,
            isAuthenticated: false,
            hasHydrated: false,
            setAuth: (user, accessToken, refreshToken) =>
                set({ user, accessToken, refreshToken, isAuthenticated: true }),
            clearAuth: () =>
                set({ user: null, accessToken: null, refreshToken: null, isAuthenticated: false }),
            setHasHydrated: (hydrated) => set({ hasHydrated: hydrated }),
        }),
        {
            name: 'clinicos-auth',
            partialize: (state) => ({
                user: state.user,
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
                isAuthenticated: state.isAuthenticated,
            }),
            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            },
        },
    ),
);
