import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, formatDistanceToNow } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date, fmt = 'MMM d, yyyy') {
    return format(new Date(date), fmt);
}

export function formatDateTime(date: string | Date) {
    return format(new Date(date), 'MMM d, yyyy h:mm a');
}

export function fromNow(date: string | Date) {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

export function getInitials(firstName: string, lastName: string) {
    return `${firstName[0] || ''}${lastName[0] || ''}`.toUpperCase();
}

export function getStatusBadgeClass(status: string) {
    const map: Record<string, string> = {
        ACTIVE: 'badge-green',
        SCHEDULED: 'badge-blue',
        CONFIRMED: 'badge-blue',
        IN_PROGRESS: 'badge-purple',
        COMPLETED: 'badge-green',
        CANCELLED: 'badge-red',
        NO_SHOW: 'badge-gray',
        EXPIRED: 'badge-red',
        SUSPENDED: 'badge-yellow',
        BASIC: 'badge-gray',
        PRO: 'badge-blue',
        ENTERPRISE: 'badge-purple',
    };
    return map[status] || 'badge-gray';
}

export function getRoleBadgeClass(role: string) {
    const map: Record<string, string> = {
        SUPER_ADMIN: 'badge-purple',
        CLINIC_ADMIN: 'badge-blue',
        DOCTOR: 'badge-green',
        RECEPTIONIST: 'badge-yellow',
    };
    return map[role] || 'badge-gray';
}

export function formatRole(role: string) {
    return role.replace('_', ' ').toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
}
