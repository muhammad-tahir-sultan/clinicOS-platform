import { format } from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

interface CalendarHeaderProps {
    currentMonth: Date;
    onPrevMonth: () => void;
    onNextMonth: () => void;
    onToday: () => void;
}

export const CalendarHeader = ({
    currentMonth,
    onPrevMonth,
    onNextMonth,
    onToday
}: CalendarHeaderProps) => (
    <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border)] bg-[rgba(10,15,30,0.4)]">
        <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-xl bg-[var(--glow-blue)] text-[var(--accent-blue)] ring-1 ring-[var(--accent-blue)]/20 shadow-[0_0_15px_var(--glow-blue)]">
                <CalendarIcon size={22} className="stroke-[2.5]" />
            </div>
            <div>
                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[var(--text-secondary)]">
                    {format(currentMonth, 'MMMM yyyy')}
                </h2>
                <p className="text-xs font-medium text-[var(--text-muted)] mt-0.5 uppercase tracking-wider">
                    {format(currentMonth, 'yyyy')} Year Overview
                </p>
            </div>
        </div>
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]">
            <button
                onClick={onPrevMonth}
                className="p-2 rounded-md hover:bg-[var(--bg-card)] hover:text-white transition-all text-[var(--text-secondary)] hover:shadow-sm"
                title="Previous Month"
            >
                <ChevronLeft size={18} strokeWidth={2.5} />
            </button>
            <button
                onClick={onToday}
                className="px-4 py-1.5 text-xs font-bold rounded-md hover:bg-[var(--accent-blue)] hover:text-white transition-all text-[var(--text-primary)] hover:shadow-[0_0_10px_var(--glow-blue)]"
            >
                Today
            </button>
            <button
                onClick={onNextMonth}
                className="p-2 rounded-md hover:bg-[var(--bg-card)] hover:text-white transition-all text-[var(--text-secondary)] hover:shadow-sm"
                title="Next Month"
            >
                <ChevronRight size={18} strokeWidth={2.5} />
            </button>
        </div>
    </div>
);
