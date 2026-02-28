'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus, Search, UserCircle, Trash2, Edit, Eye } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { patientsApi } from '@/lib/api';
import { PageHeader } from '@/components/layout/PageHeader';
import { formatDate } from '@/lib/utils';

const patientSchema = z.object({
    firstName: z.string().min(1, 'Required'),
    lastName: z.string().min(1, 'Required'),
    phone: z.string().min(1, 'Required'),
    email: z.string().email().optional().or(z.literal('')),
    gender: z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),
    dateOfBirth: z.string().optional(),
    address: z.string().optional(),
    bloodGroup: z.string().optional(),
    allergies: z.string().optional(),
    medicalNotes: z.string().optional(),
});
type PatientForm = z.infer<typeof patientSchema>;

function PatientModal({ onClose, patient }: { onClose: () => void; patient?: any }) {
    const qc = useQueryClient();
    const isEdit = !!patient;

    const { register, handleSubmit, formState: { errors } } = useForm<PatientForm>({
        resolver: zodResolver(patientSchema),
        defaultValues: patient ? {
            firstName: patient.firstName,
            lastName: patient.lastName,
            phone: patient.phone,
            email: patient.email || '',
            gender: patient.gender,
            dateOfBirth: patient.dateOfBirth ? patient.dateOfBirth.split('T')[0] : '',
            address: patient.address || '',
            bloodGroup: patient.bloodGroup || '',
            allergies: patient.allergies || '',
            medicalNotes: patient.medicalNotes || '',
        } : {},
    });

    const mutation = useMutation({
        mutationFn: (data: PatientForm) =>
            isEdit
                ? patientsApi.update(patient.id, data)
                : patientsApi.create(data),
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ['patients'] });
            onClose();
        },
    });

    const onSubmit = (data: PatientForm) => mutation.mutate(data);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div style={{ padding: '24px', borderBottom: '1px solid var(--border)' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '600' }}>
                        {isEdit ? 'Edit Patient' : 'Add New Patient'}
                    </h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                        <div>
                            <label className="label">First Name *</label>
                            <input {...register('firstName')} className="input" placeholder="John" />
                            {errors.firstName && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.firstName.message}</p>}
                        </div>
                        <div>
                            <label className="label">Last Name *</label>
                            <input {...register('lastName')} className="input" placeholder="Doe" />
                            {errors.lastName && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.lastName.message}</p>}
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                        <div>
                            <label className="label">Phone *</label>
                            <input {...register('phone')} className="input" placeholder="+1 234 567 8900" />
                            {errors.phone && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.phone.message}</p>}
                        </div>
                        <div>
                            <label className="label">Email</label>
                            <input {...register('email')} type="email" className="input" placeholder="patient@email.com" />
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
                        <div>
                            <label className="label">Gender</label>
                            <select {...register('gender')} className="input">
                                <option value="">Select</option>
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                                <option value="OTHER">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">Date of Birth</label>
                            <input {...register('dateOfBirth')} type="date" className="input" />
                        </div>
                        <div>
                            <label className="label">Blood Group</label>
                            <input {...register('bloodGroup')} className="input" placeholder="A+" />
                        </div>
                    </div>
                    <div>
                        <label className="label">Address</label>
                        <input {...register('address')} className="input" placeholder="123 Main St, City" />
                    </div>
                    <div>
                        <label className="label">Allergies</label>
                        <input {...register('allergies')} className="input" placeholder="Penicillin, Peanuts..." />
                    </div>
                    <div>
                        <label className="label">Medical Notes</label>
                        <textarea {...register('medicalNotes')} className="input" rows={3} placeholder="Any relevant medical history..." style={{ resize: 'vertical' }} />
                    </div>
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '8px' }}>
                        <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
                        <button type="submit" className="btn-primary" disabled={mutation.isPending}>
                            {mutation.isPending ? <><div className="spinner" />{isEdit ? 'Saving...' : 'Adding...'}</> : isEdit ? 'Save Changes' : 'Add Patient'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default function PatientsPage() {
    const qc = useQueryClient();
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [editPatient, setEditPatient] = useState<any>(null);

    const { data, isLoading } = useQuery({
        queryKey: ['patients', { page, search }],
        queryFn: () => patientsApi.getAll({ page, limit: 10, search }).then((r) => r.data),
        staleTime: 0,
    });

    const deleteMutation = useMutation({
        mutationFn: (id: string) => patientsApi.delete(id),
        onSuccess: () => qc.invalidateQueries({ queryKey: ['patients'] }),
    });

    const patients = data?.data || [];
    const meta = data?.meta || {};

    return (
        <div className="animate-fade-in">
            <PageHeader
                title="Patients"
                subtitle={`${meta.total ?? 0} total patients registered`}
                actions={
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div style={{ position: 'relative' }}>
                            <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input
                                className="input"
                                placeholder="Search patients..."
                                value={search}
                                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                                style={{ paddingLeft: '32px', width: '220px', height: '38px' }}
                            />
                        </div>
                        <button className="btn-primary" onClick={() => { setEditPatient(null); setShowModal(true); }}>
                            <Plus size={16} /> Add Patient
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
                        ) : patients.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-secondary)' }}>
                                <UserCircle size={40} style={{ marginBottom: '12px', opacity: 0.3 }} />
                                <p>No patients found</p>
                            </div>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Patient</th>
                                        <th>Contact</th>
                                        <th>Gender</th>
                                        <th>Blood Group</th>
                                        <th>Registered</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {patients.map((p: any) => (
                                        <tr key={p.id}>
                                            <td>
                                                <div style={{ fontWeight: '500' }}>{p.firstName} {p.lastName}</div>
                                                {p.dateOfBirth && (
                                                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                                                        DOB: {formatDate(p.dateOfBirth)}
                                                    </div>
                                                )}
                                            </td>
                                            <td>
                                                <div style={{ fontSize: '13px' }}>{p.phone}</div>
                                                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{p.email || '—'}</div>
                                            </td>
                                            <td>
                                                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                                                    {p.gender || '—'}
                                                </span>
                                            </td>
                                            <td>
                                                {p.bloodGroup ? (
                                                    <span className="badge badge-red">{p.bloodGroup}</span>
                                                ) : '—'}
                                            </td>
                                            <td style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                                                {formatDate(p.createdAt)}
                                            </td>
                                            <td>
                                                <div style={{ display: 'flex', gap: '6px' }}>
                                                    <button
                                                        className="btn-secondary"
                                                        style={{ padding: '4px 10px', fontSize: '12px' }}
                                                        onClick={() => { setEditPatient(p); setShowModal(true); }}
                                                    >
                                                        <Edit size={12} /> Edit
                                                    </button>
                                                    <button
                                                        className="btn-danger"
                                                        style={{ padding: '4px 10px', fontSize: '12px' }}
                                                        onClick={() => {
                                                            if (confirm(`Delete ${p.firstName} ${p.lastName}?`)) {
                                                                deleteMutation.mutate(p.id);
                                                            }
                                                        }}
                                                    >
                                                        <Trash2 size={12} />
                                                    </button>
                                                </div>
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
                                Page {meta.page} of {meta.totalPages} · {meta.total} patients
                            </span>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <button className="btn-secondary" style={{ padding: '6px 14px', fontSize: '13px' }} disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>Previous</button>
                                <button className="btn-secondary" style={{ padding: '6px 14px', fontSize: '13px' }} disabled={page >= meta.totalPages} onClick={() => setPage((p) => p + 1)}>Next</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {showModal && (
                <PatientModal
                    patient={editPatient}
                    onClose={() => { setShowModal(false); setEditPatient(null); }}
                />
            )}
        </div>
    );
}
