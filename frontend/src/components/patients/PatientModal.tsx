'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { patientsApi } from '@/lib/api';

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

export function PatientModal({ onClose, patient }: { onClose: () => void; patient?: any }) {
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
