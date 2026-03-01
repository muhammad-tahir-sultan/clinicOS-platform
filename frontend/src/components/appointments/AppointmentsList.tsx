import { Calendar as CalendarIcon, XCircle } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { UseMutationResult } from '@tanstack/react-query';

const statusColors: Record<string, string> = {
    SCHEDULED: 'badge-blue',
    CONFIRMED: 'badge-blue',
    IN_PROGRESS: 'badge-purple',
    COMPLETED: 'badge-green',
    CANCELLED: 'badge-red',
    NO_SHOW: 'badge-gray',
};

interface AppointmentsListProps {
    appointments: any[];
    isLoading: boolean;
    meta: any;
    page: number;
    setPage: (p: number | ((prev: number) => number)) => void;
    cancelMutation: UseMutationResult<any, Error, string, unknown>;
}

export function AppointmentsList({ appointments, isLoading, meta, page, setPage, cancelMutation }: AppointmentsListProps) {
    if (isLoading) {
        return (
            <div className="glass-card flex justify-center py-[60px]">
                <div className="spinner w-8 h-8" />
            </div>
        );
    }

    if (appointments.length === 0) {
        return (
            <div className="glass-card text-center py-[60px] text-[var(--text-secondary)]">
                <CalendarIcon size={40} className="mx-auto mb-3 opacity-30" />
                <p>No appointments found</p>
            </div>
        );
    }

    return (
        <div className="glass-card overflow-hidden mt-12">
            <div className="table-container border-none rounded-none">
                <table>
                    <thead>
                        <tr>
                            <th>Patient</th>
                            <th>Doctor</th>
                            <th>Date & Time</th>
                            <th>Reason</th>
                            <th>Fee</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appt: any) => (
                            <tr key={appt.id}>
                                <td>
                                    <div className="font-medium text-[var(--text-primary)]">{appt.patient?.firstName} {appt.patient?.lastName}</div>
                                    <div className="text-xs text-[var(--text-secondary)]">{appt.patient?.phone}</div>
                                </td>
                                <td>
                                    <div className="text-[13px] text-[var(--text-primary)]">Dr. {appt.doctor?.firstName} {appt.doctor?.lastName}</div>
                                    <div className="text-xs text-[var(--text-secondary)]">{appt.doctor?.specialization || 'General'}</div>
                                </td>
                                <td>
                                    <div className="text-[13px] text-[var(--text-primary)]">{formatDate(appt.date)}</div>
                                    <div className="text-xs text-[var(--text-secondary)]">{appt.startTime} – {appt.endTime}</div>
                                </td>
                                <td className="text-[13px] text-[var(--text-secondary)] max-w-[150px] truncate">
                                    {appt.reason || '—'}
                                </td>
                                <td className="text-[13px] text-[var(--text-primary)]">
                                    {appt.fee ? `$${appt.fee}` : '—'}
                                </td>
                                <td>
                                    <span className={`badge ${statusColors[appt.status] || 'badge-gray'}`}>
                                        {appt.status.replace('_', ' ')}
                                    </span>
                                </td>
                                <td>
                                    {!['CANCELLED', 'COMPLETED', 'NO_SHOW'].includes(appt.status) && (
                                        <button
                                            className="btn-danger px-2.5 py-1 text-xs"
                                            onClick={() => {
                                                if (confirm('Cancel this appointment?')) cancelMutation.mutate(appt.id);
                                            }}
                                        >
                                            <XCircle size={12} /> Cancel
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {meta.totalPages > 1 && (
                <div className="flex items-center justify-between px-5 py-3.5 border-t border-[var(--border)] bg-[rgba(10,15,30,0.3)]">
                    <span className="text-[13px] text-[var(--text-secondary)]">
                        Page {meta.page} of {meta.totalPages} · {meta.total} appointments
                    </span>
                    <div className="flex gap-2">
                        <button className="btn-secondary px-3.5 py-1.5 text-[13px]" disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>Previous</button>
                        <button className="btn-secondary px-3.5 py-1.5 text-[13px]" disabled={page >= meta.totalPages} onClick={() => setPage(page + 1)}>Next</button>
                    </div>
                </div>
            )}
        </div>
    );
}
