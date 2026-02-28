'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus, Trash2, Edit, Users } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { usersApi } from '@/lib/api';
import { PageHeader } from '@/components/layout/PageHeader';
import { formatDate, formatRole, getRoleBadgeClass } from '@/lib/utils';

const staffSchema = z.object({
    firstName: z.string().min(1, 'Required'),
    lastName: z.string().min(1, 'Required'),
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Min 8 characters').optional().or(z.literal('')),
    role: z.enum(['DOCTOR', 'RECEPTIONIST']),
    phone: z.string().optional(),
    specialization: z.string().optional(),
});
type StaffForm = z.infer<typeof staffSchema>;

function StaffModal({ onClose, staff }: { onClose: () => void; staff?: any }) {
    const qc = useQueryClient();
    const isEdit = !!staff;

    const { register, handleSubmit, formState: { errors } } = useForm<StaffForm>({
        resolver: zodResolver(staffSchema),
        defaultValues: staff ? {
            firstName: staff.firstName,
            lastName: staff.lastName,
            email: staff.email,
            role: staff.role,
            phone: staff.phone || '',
            specialization: staff.specialization || '',
        } : { role: 'DOCTOR' },
    });

    const mutation = useMutation({
        mutationFn: (data: StaffForm) => {
            const payload = { ...data };
            if (!payload.password) delete payload.password;
            return isEdit ? usersApi.update(staff.id, payload) : usersApi.create(payload);
        },
        onSuccess: () => { qc.invalidateQueries({ queryKey: ['staff'] }); onClose(); },
    });

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div style={{ padding: '24px', borderBottom: '1px solid var(--border)' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '600' }}>{isEdit ? 'Edit Staff Member' : 'Add Staff Member'}</h2>
                </div>
                <form onSubmit={handleSubmit((d) => mutation.mutate(d))} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                        <div>
                            <label className="label">First Name *</label>
                            <input {...register('firstName')} className="input" />
                            {errors.firstName && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.firstName.message}</p>}
                        </div>
                        <div>
                            <label className="label">Last Name *</label>
                            <input {...register('lastName')} className="input" />
                        </div>
                    </div>
                    <div>
                        <label className="label">Email *</label>
                        <input {...register('email')} type="email" className="input" />
                        {errors.email && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.email.message}</p>}
                    </div>
                    {!isEdit && (
                        <div>
                            <label className="label">Password *</label>
                            <input {...register('password')} type="password" className="input" placeholder="Min 8 characters" />
                            {errors.password && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.password.message}</p>}
                        </div>
                    )}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                        <div>
                            <label className="label">Role *</label>
                            <select {...register('role')} className="input">
                                <option value="DOCTOR">Doctor</option>
                                <option value="RECEPTIONIST">Receptionist</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">Phone</label>
                            <input {...register('phone')} className="input" />
                        </div>
                    </div>
                    <div>
                        <label className="label">Specialization (for doctors)</label>
                        <input {...register('specialization')} className="input" placeholder="Cardiology, Neurology..." />
                    </div>
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '8px' }}>
                        <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
                        <button type="submit" className="btn-primary" disabled={mutation.isPending}>
                            {mutation.isPending ? <><div className="spinner" /> {isEdit ? 'Saving...' : 'Adding...'}</> : isEdit ? 'Save Changes' : 'Add Staff'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default function StaffPage() {
    const qc = useQueryClient();
    const [showModal, setShowModal] = useState(false);
    const [editStaff, setEditStaff] = useState<any>(null);
    const [roleFilter, setRoleFilter] = useState('');

    const { data, isLoading } = useQuery({
        queryKey: ['staff', { roleFilter }],
        queryFn: () => usersApi.getAll({ role: roleFilter || undefined, limit: 50 }).then((r) => r.data),
        staleTime: 0,
    });

    const deleteMutation = useMutation({
        mutationFn: (id: string) => usersApi.delete(id),
        onSuccess: () => qc.invalidateQueries({ queryKey: ['staff'] }),
    });

    const staff = data?.data || [];

    return (
        <div className="animate-fade-in">
            <PageHeader
                title="Staff Management"
                subtitle="Manage doctors and receptionists"
                actions={
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <select
                            className="input"
                            value={roleFilter}
                            onChange={(e) => setRoleFilter(e.target.value)}
                            style={{ height: '38px', width: '160px' }}
                        >
                            <option value="">All roles</option>
                            <option value="DOCTOR">Doctors</option>
                            <option value="RECEPTIONIST">Receptionists</option>
                        </select>
                        <button className="btn-primary" onClick={() => { setEditStaff(null); setShowModal(true); }}>
                            <Plus size={16} /> Add Staff
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
                        ) : staff.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-secondary)' }}>
                                <Users size={40} style={{ marginBottom: '12px', opacity: 0.3 }} />
                                <p>No staff found</p>
                            </div>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Specialization</th>
                                        <th>Status</th>
                                        <th>Joined</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {staff.map((s: any) => (
                                        <tr key={s.id}>
                                            <td>
                                                <div style={{ fontWeight: '600' }}>
                                                    {s.role === 'DOCTOR' ? 'Dr. ' : ''}{s.firstName} {s.lastName}
                                                </div>
                                                {s.phone && <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{s.phone}</div>}
                                            </td>
                                            <td style={{ fontSize: '13px' }}>{s.email}</td>
                                            <td>
                                                <span className={`badge ${getRoleBadgeClass(s.role)}`}>{formatRole(s.role)}</span>
                                            </td>
                                            <td style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                                                {s.specialization || '—'}
                                            </td>
                                            <td>
                                                <span className={`badge ${s.isActive ? 'badge-green' : 'badge-red'}`}>
                                                    {s.isActive ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                                                {formatDate(s.createdAt)}
                                            </td>
                                            <td>
                                                <div style={{ display: 'flex', gap: '6px' }}>
                                                    <button className="btn-secondary" style={{ padding: '4px 10px', fontSize: '12px' }} onClick={() => { setEditStaff(s); setShowModal(true); }}>
                                                        <Edit size={12} /> Edit
                                                    </button>
                                                    <button className="btn-danger" style={{ padding: '4px 10px', fontSize: '12px' }} onClick={() => { if (confirm(`Remove ${s.firstName}?`)) deleteMutation.mutate(s.id); }}>
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
                </div>
            </div>

            {showModal && <StaffModal staff={editStaff} onClose={() => { setShowModal(false); setEditStaff(null); }} />}
        </div>
    );
}
