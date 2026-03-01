import { Plus, Filter, LayoutGrid, List } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderActionsProps {
    view: 'list' | 'calendar';
    setView: (v: 'list' | 'calendar') => void;
    dateFilter: string;
    setDateFilter: (v: string) => void;
    statusFilter: string;
    setStatusFilter: (v: string) => void;
    onSchedule: () => void;
}

export function AppointmentsHeaderActions({
    view, setView, dateFilter, setDateFilter, statusFilter, setStatusFilter, onSchedule
}: HeaderActionsProps) {
    return (
        <div className="flex flex-wrap items-center gap-3">
            {/* View Toggle */}
            <div className="flex bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-1 shadow-sm">
                <button
                    onClick={() => setView('list')}
                    className={cn(
                        "px-3 py-1.5 rounded-md flex items-center justify-center transition-all duration-300",
                        view === 'list'
                            ? "bg-[var(--accent-blue)] text-white shadow-md shadow-[var(--glow-blue)]"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
                    )}
                    title="List View"
                >
                    <List size={16} strokeWidth={2.5} />
                </button>
                <button
                    onClick={() => setView('calendar')}
                    className={cn(
                        "px-3 py-1.5 rounded-md flex items-center justify-center transition-all duration-300",
                        view === 'calendar'
                            ? "bg-[var(--accent-blue)] text-white shadow-md shadow-[var(--glow-blue)]"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
                    )}
                    title="Calendar View"
                >
                    <LayoutGrid size={16} strokeWidth={2.5} />
                </button>
            </div>

            {/* Filters Container */}
            <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-1 shadow-sm">
                {/* Date Filter */}
                <div className="relative flex items-center">
                    <div className="absolute left-3 text-[var(--accent-blue)] pointer-events-none flex items-center justify-center">
                        <Filter size={14} strokeWidth={2.5} />
                    </div>
                    <input
                        type="date"
                        className="input pl-8 pr-3 h-[36px] bg-transparent border-none text-[13px] font-semibold text-[var(--text-primary)] focus:ring-1 focus:ring-[var(--accent-blue)] rounded-md cursor-pointer transition-all duration-200 hover:bg-[var(--bg-card)] w-[145px] m-0"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                    />
                </div>

                <div className="w-px h-5 bg-[var(--border-light)] mx-1" />

                {/* Status Filter */}
                <select
                    className="input h-[36px] bg-transparent border-none text-[13px] font-semibold text-[var(--text-primary)] focus:ring-1 focus:ring-[var(--accent-blue)] rounded-md cursor-pointer transition-all duration-200 hover:bg-[var(--bg-card)] w-[140px] m-0"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="">All Statuses</option>
                    <option value="SCHEDULED">Scheduled</option>
                    <option value="CONFIRMED">Confirmed</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="COMPLETED">Completed</option>
                    <option value="CANCELLED">Cancelled</option>
                    <option value="NO_SHOW">No Show</option>
                </select>
            </div>

            {/* Schedule Action */}
            <button
                className="btn-primary ml-2 shadow-[var(--glow-blue)] hover:shadow-lg hover:-translate-y-[1px]"
                onClick={onSchedule}
            >
                <Plus size={16} className="stroke-[2.5]" />
                <span className="font-semibold tracking-wide">Schedule</span>
            </button>
        </div>
    );
}
