import { format, isSameMonth, isSameDay, isToday } from 'date-fns';
import { cn } from '@/lib/utils';
import { Appointment } from './types';
import { AppointmentChip } from './AppointmentChip';

export const CalendarCell = ({
    day,
    monthStart,
    selectedDate,
    dayAppointments,
    onSelect,
    onAppointmentClick
}: {
    day: Date;
    monthStart: Date;
    selectedDate: Date;
    dayAppointments: Appointment[];
    onSelect: (day: Date) => void;
    onAppointmentClick?: (appt: Appointment) => void;
}) => {
    const isCurrentMonth = isSameMonth(day, monthStart);
    const isSelected = isSameDay(day, selectedDate);
    const isTodayDate = isToday(day);

    const formattedDate = format(day, "d");
    const visibleAppointments = dayAppointments.slice(0, 3);
    const hiddenCount = dayAppointments.length - 3;

    return (
        <div
            className={cn(
                "min-h-[140px] p-2.5 border-r border-b border-[var(--border)] transition-all duration-200 relative flex flex-col group",
                !isCurrentMonth ? "bg-[rgba(15,22,41,0.4)] text-[var(--text-muted)]" : "bg-transparent text-[var(--text-primary)] hover:bg-[rgba(59,130,246,0.02)]",
                isSelected && "bg-[rgba(59,130,246,0.03)]/50 ring-1 ring-inset ring-[var(--accent-blue)]/20"
            )}
            onClick={() => onSelect(day)}
        >
            <div className="flex justify-between items-start mb-3">
                <span className={cn(
                    "flex items-center justify-center w-8 h-8 text-[13px] font-semibold rounded-full transition-all duration-300",
                    isTodayDate ? "bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-cyan)] text-white shadow-[0_4px_12px_var(--glow-blue)] scale-110" :
                        isSelected ? "bg-[var(--bg-secondary)] text-[var(--accent-blue)] border border-[var(--accent-blue)]/30" :
                            "group-hover:bg-[var(--bg-secondary)]"
                )}>
                    {formattedDate}
                </span>

                {dayAppointments.length > 0 && (
                    <span className="flex items-center justify-center h-5 px-1.5 min-w-[20px] text-[10px] font-bold bg-[var(--bg-card)] text-[var(--text-secondary)] rounded-md border border-[var(--border)] shadow-sm">
                        {dayAppointments.length}
                    </span>
                )}
            </div>

            <div className="flex-1 space-y-1.5 overflow-hidden">
                {visibleAppointments.map((appt) => (
                    <AppointmentChip
                        key={appt.id}
                        appt={appt}
                        onClick={(a) => onAppointmentClick?.(a)}
                    />
                ))}
            </div>

            {hiddenCount > 0 && (
                <div className="mt-2 text-center">
                    <span className="inline-block px-2.5 py-0.5 text-[9px] font-semibold text-[var(--text-muted)] bg-[var(--bg-secondary)] rounded-full border border-[var(--border)] hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)] transition-colors cursor-pointer shadow-sm">
                        +{hiddenCount} more
                    </span>
                </div>
            )}
        </div>
    );
};
