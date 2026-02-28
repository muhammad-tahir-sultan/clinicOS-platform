'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { appointmentsApi, patientsApi, usersApi } from '@/lib/api';

const apptSchema = z.object({
    patientId: z.string().min(1, 'Required'),
    doctorId: z.string().min(1, 'Required'),
    date: z.string().min(1, 'Required'),
    startTime: z.string().min(1, 'Required'),
    endTime: z.string().min(1, 'Required'),
    reason: z.string().optional(),
    fee: z.string().optional(),
});
type ApptForm = z.infer<typeof apptSchema>;

interface AppointmentModalProps {
    onClose: () => void;
}

export function AppointmentModal({ onClose }: AppointmentModalProps) {
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
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['appointments'] });
            onClose();
        },
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
