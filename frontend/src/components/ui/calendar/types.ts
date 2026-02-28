export interface CalendarProps {
    appointments: any[];
    onDateSelect?: (date: Date) => void;
    onAppointmentClick?: (appointment: any) => void;
}

export interface Appointment {
    id: string;
    date: string;
    startTime: string;
    endTime: string;
    status: string;
    patient?: { firstName: string; lastName: string };
    [key: string]: any;
}
