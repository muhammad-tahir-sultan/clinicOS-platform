'use client';

import { useState } from 'react';
import {
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    isSameDay,
    addDays,
    parseISO,
} from 'date-fns';
import { CalendarProps } from './types';
import { CalendarHeader } from './CalendarHeader';
import { CalendarGridHeader } from './CalendarGridHeader';
import { CalendarCell } from './CalendarCell';

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
