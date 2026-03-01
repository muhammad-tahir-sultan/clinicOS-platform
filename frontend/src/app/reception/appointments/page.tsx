'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { appointmentsApi } from '@/lib/api';
import { PageHeader } from '@/components/layout/PageHeader';
import { AppointmentCalendar } from '@/components/ui/calendar';

import { AppointmentModal } from '@/components/appointments/AppointmentModal';
import { AppointmentsHeaderActions } from '@/components/appointments/AppointmentsHeaderActions';
import { AppointmentsList } from '@/components/appointments/AppointmentsList';

export default function ReceptionAppointmentsPage() {
    const qc = useQueryClient();
    const [page, setPage] = useState(1);
    const [view, setView] = useState<'list' | 'calendar'>('calendar'); // Default to calendar for reception
    const [showModal, setShowModal] = useState(false);
    const [statusFilter, setStatusFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');

    const { data, isLoading } = useQuery({
        queryKey: ['appointments', { page, statusFilter, dateFilter, view }],
        queryFn: () =>
            appointmentsApi.getAll({
                page,
                limit: view === 'calendar' ? 500 : 10,
                status: statusFilter || undefined,
                date: dateFilter || undefined,
            }).then((r) => r.data),
        staleTime: 1000 * 60 * 5, // 5 minutes cache
    });

    const cancelMutation = useMutation({
        mutationFn: (id: string) => appointmentsApi.cancel(id),
        onSuccess: () => qc.invalidateQueries({ queryKey: ['appointments'] }),
    });

    const appointments = data?.data || [];
    const meta = data?.meta || {};

    const handleAppointmentClick = (appt: any) => {
        console.log('Clicked appointment:', appt);
    };

    return (
        <div className="animate-fade-in">
            <PageHeader
                title="Appointments"
                subtitle={`${meta.total ?? 0} total appointments`}
                actions={
                    <AppointmentsHeaderActions
                        view={view}
                        setView={setView}
                        dateFilter={dateFilter}
                        setDateFilter={setDateFilter}
                        statusFilter={statusFilter}
                        setStatusFilter={setStatusFilter}
                        onSchedule={() => setShowModal(true)}
                    />
                }
            />

            <div className="p-12">
                {view === 'calendar' ? (
                    <AppointmentCalendar
                        appointments={appointments}
                        onAppointmentClick={handleAppointmentClick}
                    />
                ) : (
                    <AppointmentsList
                        appointments={appointments}
                        isLoading={isLoading}
                        meta={meta}
                        page={page}
                        setPage={setPage}
                        cancelMutation={cancelMutation}
                    />
                )}
            </div>

            {showModal && <AppointmentModal onClose={() => setShowModal(false)} />}
        </div>
    );
}
