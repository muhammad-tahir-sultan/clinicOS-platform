'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus, Search, UserCircle, Trash2, Edit } from 'lucide-react';
import { patientsApi } from '@/lib/api';
import { PageHeader } from '@/components/layout/PageHeader';
import { formatDate } from '@/lib/utils';
import { PatientModal } from '@/components/patients/PatientModal';

export default function ReceptionPatientsPage() {
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
