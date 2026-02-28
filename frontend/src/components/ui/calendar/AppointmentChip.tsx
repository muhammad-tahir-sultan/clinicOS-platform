import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Appointment } from './types';

export const AppointmentChip = ({ appt, onClick }: { appt: Appointment; onClick: (appt: Appointment) => void }) => {
    let statusConfig = {
        bg: "bg-[rgba(59,130,246,0.08)]",
        border: "border-l-[rgba(59,130,246,0.8)]",
        text: "text-[var(--accent-blue-light)]",
        hover: "hover:bg-[rgba(59,130,246,0.15)] hover:scale-[1.02]"
    };

    if (appt.status === 'COMPLETED') {
        statusConfig = {
            bg: "bg-[rgba(16,185,129,0.08)]",
            border: "border-l-[rgba(16,185,129,0.8)]",
            text: "text-[var(--accent-green)]",
            hover: "hover:bg-[rgba(16,185,129,0.15)] hover:scale-[1.02]"
        };
    } else if (appt.status === 'CANCELLED') {
        statusConfig = {
            bg: "bg-[rgba(239,68,68,0.08)]",
            border: "border-l-[rgba(239,68,68,0.8)]",
            text: "text-[var(--accent-red)]",
            hover: "hover:bg-[rgba(239,68,68,0.15)] hover:scale-[1.02]"
        };
    } else if (appt.status === 'IN_PROGRESS') {
        statusConfig = {
            bg: "bg-[rgba(139,92,246,0.08)]",
            border: "border-l-[rgba(139,92,246,0.8)]",
            text: "text-[var(--accent-purple)]",
            hover: "hover:bg-[rgba(139,92,246,0.15)] hover:scale-[1.02]"
        };
    }

    const patientName = appt.patient ? `${appt.patient.firstName} ${appt.patient.lastName?.charAt(0) || ''}.` : 'Unknown';

    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                onClick(appt);
            }}
            className={cn(
                "group/chip flex flex-col justify-center px-2.5 py-1.5 text-[10px] rounded-r-md border-y border-r border-l-2 cursor-pointer transition-all duration-200 shadow-sm",
                "border-y-[var(--border)] border-r-[var(--border)]",
                statusConfig.bg, statusConfig.border, statusConfig.text, statusConfig.hover
            )}
        >
            <span className="font-semibold truncate text-[11px] mb-[1px]">
                {patientName}
            </span>
            <div className="flex items-center gap-1 opacity-80 text-[9px] font-medium">
                <Clock size={9} />
                <span className="truncate">{appt.startTime}</span>
            </div>
        </div>
    );
};
