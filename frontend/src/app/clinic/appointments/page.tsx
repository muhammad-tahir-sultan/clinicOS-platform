'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus, Search, Calendar, XCircle, Filter } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { appointmentsApi, patientsApi, usersApi } from '@/lib/api';
import { PageHeader } from '@/components/layout/PageHeader';
import { formatDate } from '@/lib/utils';

const apptSchema = z.object({
    patientId: z.string().min(1, 'Required'),
    doctorId: z.string().min(1, 'Required'),
    date: z.string().min(1, 'Required'),
    startTime: z.string().min(1, 'Required'),
    endTime: z.string().min(1, 'Required'),
    reason: z.string().optional(),
    notes: z.string().optional(),
    fee: z.string().optional(),
});
type ApptForm = z.infer<typeof apptSchema>;

function AppointmentModal({ onClose }: { onClose: () => void }) {
    const qc = useQueryClient();
    const { register, handleSubmit, formState: { errors } } = useForm<ApptForm>({ resolver: zodResolver(apptSchema) });

    const { data: patientsData } = useQuery({
        queryKey: ['patients-list'],
        queryFn: () => patientsApi.getAll({ limit: 100 }).then((r) => r.data.data),
    });

    const { data: doctorsData } = useQuery({
        queryKey: ['doctors-list'],
        queryFn: () => usersApi.getAll({ role: 'DOCTOR', limit: 50 }).then((r) => r.data.data),
    });

    const mutation = useMutation({
        mutationFn: (data: ApptForm) =>
            appointmentsApi.create({ ...data, fee: data.fee ? parseFloat(data.fee) : undefined }),
        onSuccess: () => { qc.invalidateQueries({ queryKey: ['appointments'] }); onClose(); },
    });

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div style={{ padding: '24px', borderBottom: '1px solid var(--border)' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '600' }}>Schedule Appointment</h2>
                </div>
                <form onSubmit={handleSubmit((d) => mutation.mutate(d))} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div>
                        <label className="label">Patient *</label>
                        <select {...register('patientId')} className="input">
                            <option value="">Select patient</option>
                            {(patientsData || []).map((p: any) => (
                                <option key={p.id} value={p.id}>{p.firstName} {p.lastName} · {p.phone}</option>
                            ))}
                        </select>
                        {errors.patientId && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.patientId.message}</p>}
                    </div>
                    <div>
                        <label className="label">Doctor *</label>
                        <select {...register('doctorId')} className="input">
                            <option value="">Select doctor</option>
                            {(doctorsData || []).map((d: any) => (
                                <option key={d.id} value={d.id}>Dr. {d.firstName} {d.lastName} {d.specialization ? `· ${d.specialization}` : ''}</option>
                            ))}
                        </select>
                        {errors.doctorId && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.doctorId.message}</p>}
                    </div>
                    <div>
                        <label className="label">Date *</label>
                        <input {...register('date')} type="date" className="input" min={new Date().toISOString().split('T')[0]} />
                        {errors.date && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.date.message}</p>}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                        <div>
                            <label className="label">Start Time *</label>
                            <input {...register('startTime')} type="time" className="input" />
                        </div>
                        <div>
                            <label className="label">End Time *</label>
                            <input {...register('endTime')} type="time" className="input" />
                        </div>
                    </div>
                    <div>
                        <label className="label">Reason</label>
                        <input {...register('reason')} className="input" placeholder="Consultation, Follow-up..." />
                    </div>
                    <div>
                        <label className="label">Consultation Fee ($)</label>
                        <input {...register('fee')} type="number" step="0.01" className="input" placeholder="50.00" />
                    </div>
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '8px' }}>
                        <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
                        <button type="submit" className="btn-primary" disabled={mutation.isPending}>
                            {mutation.isPending ? <><div className="spinner" /> Scheduling...</> : 'Schedule'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default function AppointmentsPage() {
    const qc = useQueryClient();
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [statusFilter, setStatusFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');

    const { data, isLoading } = useQuery({
        queryKey: ['appointments', { page, statusFilter, dateFilter }],
        queryFn: () =>
            appointmentsApi.getAll({
                page, limit: 10,
                status: statusFilter || undefined,
                date: dateFilter || undefined,
            }).then((r) => r.data),
        staleTime: 0,
    });

    const cancelMutation = useMutation({
        mutationFn: (id: string) => appointmentsApi.cancel(id),
        onSuccess: () => qc.invalidateQueries({ queryKey: ['appointments'] }),
    });

    const appointments = data?.data || [];
    const meta = data?.meta || {};

    const statusColors: Record<string, string> = {
        SCHEDULED: 'badge-blue',
        CONFIRMED: 'badge-blue',
        IN_PROGRESS: 'badge-purple',
        COMPLETED: 'badge-green',
        CANCELLED: 'badge-red',
        NO_SHOW: 'badge-gray',
    };

    return (
        <div className="animate-fade-in">
            <PageHeader
                title="Appointments"
                subtitle={`${meta.total ?? 0} total appointments`}
                actions={
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <input
                            type="date"
                            className="input"
                            value={dateFilter}
                            onChange={(e) => setDateFilter(e.target.value)}
                            style={{ height: '38px', width: '160px' }}
                        />
                        <select
                            className="input"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            style={{ height: '38px', width: '140px' }}
                        >
                            <option value="">All statuses</option>
                            <option value="SCHEDULED">Scheduled</option>
                            <option value="CONFIRMED">Confirmed</option>
                            <option value="IN_PROGRESS">In Progress</option>
                            <option value="COMPLETED">Completed</option>
                            <option value="CANCELLED">Cancelled</option>
                            <option value="NO_SHOW">No Show</option>
                        </select>
                        <button className="btn-primary" onClick={() => setShowModal(true)}>
                            <Plus size={16} /> Schedule
                        </button>
                    </div>
                }
            />

            <div style={{ padding: '28px' }}>
                <div className="glass-card" style={{ overflow: 'hidden' }}>
                    <div className="table-container" style={{ border: 'none', borderRadius: 0 }}>
                        {isLoading ? (
                            <div style={{ display: 'flex', justifyContent: 'center', padding: '60px' }}>
                                <div className="spinner" style={{ width: '32px', height: '32px' }} />
                            </div>
                        ) : appointments.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-secondary)' }}>
                                <Calendar size={40} style={{ marginBottom: '12px', opacity: 0.3 }} />
                                <p>No appointments found</p>
                            </div>
                        ) : (
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
                                                <div style={{ fontWeight: '500' }}>{appt.patient?.firstName} {appt.patient?.lastName}</div>
                                                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{appt.patient?.phone}</div>
                                            </td>
                                            <td>
                                                <div style={{ fontSize: '13px' }}>Dr. {appt.doctor?.firstName} {appt.doctor?.lastName}</div>
                                                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{appt.doctor?.specialization || 'General'}</div>
                                            </td>
                                            <td>
                                                <div style={{ fontSize: '13px' }}>{formatDate(appt.date)}</div>
                                                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{appt.startTime} – {appt.endTime}</div>
                                            </td>
                                            <td style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                {appt.reason || '—'}
                                            </td>
                                            <td style={{ fontSize: '13px' }}>
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
                                                        className="btn-danger"
                                                        style={{ padding: '4px 10px', fontSize: '12px' }}
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
                        )}
                    </div>

                    {meta.totalPages > 1 && (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderTop: '1px solid var(--border)' }}>
                            <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                                Page {meta.page} of {meta.totalPages} · {meta.total} appointments
                            </span>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <button className="btn-secondary" style={{ padding: '6px 14px', fontSize: '13px' }} disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>Previous</button>
                                <button className="btn-secondary" style={{ padding: '6px 14px', fontSize: '13px' }} disabled={page >= meta.totalPages} onClick={() => setPage((p) => p + 1)}>Next</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {showModal && <AppointmentModal onClose={() => setShowModal(false)} />}
        </div>
    );
}
