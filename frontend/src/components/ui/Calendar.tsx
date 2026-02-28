'use client';

import React, { useState } from 'react';
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    isSameMonth,
    isSameDay,
    addDays,
    parseISO,
    isToday
} from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Types ---
interface CalendarProps {
    appointments: any[];
    onDateSelect?: (date: Date) => void;
    onAppointmentClick?: (appointment: any) => void;
}

interface Appointment {
    id: string;
    date: string;
    startTime: string;
    endTime: string;
    status: string;
    patient?: { firstName: string; lastName: string };
    [key: string]: any;
}

// --- Sub-components ---

const CalendarHeader = ({
    currentMonth,
    onPrevMonth,
    onNextMonth,
    onToday
}: {
    currentMonth: Date;
    onPrevMonth: () => void;
    onNextMonth: () => void;
    onToday: () => void;
}) => (
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

const CalendarGridHeader = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (
        <div className="grid grid-cols-7 border-b border-[var(--border)] bg-[var(--bg-secondary)]/50">
            {days.map((day, index) => (
                <div key={index} className="py-3.5 text-center text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-widest">
                    <span className="hidden sm:inline">{day}</span>
                    <span className="sm:hidden">{day.slice(0, 3)}</span>
                </div>
            ))}
        </div>
    );
};

const AppointmentChip = ({ appt, onClick }: { appt: Appointment; onClick: (appt: Appointment) => void }) => {
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

const CalendarCell = ({
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

// --- Main Component ---

export function AppointmentCalendar({ appointments = [], onDateSelect, onAppointmentClick }: CalendarProps) {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const goToToday = () => {
        const today = new Date();
        setCurrentMonth(today);
        setSelectedDate(today);
        onDateSelect?.(today);
    };

    const handleDateSelect = (day: Date) => {
        setSelectedDate(day);
        onDateSelect?.(day);
    };

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const rows = [];
        let days = [];
        let day = startDate;

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                const cloneDay = day;
                const dayAppointments = appointments
                    .filter(appt => appt.date && isSameDay(parseISO(appt.date), cloneDay))
                    .sort((a, b) => a.startTime.localeCompare(b.startTime));

                days.push(
                    <CalendarCell
                        key={day.toString()}
                        day={cloneDay}
                        monthStart={monthStart}
                        selectedDate={selectedDate}
                        dayAppointments={dayAppointments}
                        onSelect={handleDateSelect}
                        onAppointmentClick={onAppointmentClick}
                    />
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="grid grid-cols-7" key={day.toString()}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="calendar-body flex-1">{rows}</div>;
    };

    return (
        <div className="glass-card shadow-xl ring-1 ring-white/5 animate-fade-in flex flex-col border-[var(--border)] rounded-2xl overflow-hidden bg-[rgba(19,29,53,0.7)] backdrop-blur-md">
            <CalendarHeader
                currentMonth={currentMonth}
                onPrevMonth={prevMonth}
                onNextMonth={nextMonth}
                onToday={goToToday}
            />
            <CalendarGridHeader />
            <div className="flex-1 bg-[var(--bg-primary)]/20">
                {renderCells()}
            </div>
        </div>
    );
}
