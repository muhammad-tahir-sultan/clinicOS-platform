export const CalendarGridHeader = () => {
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
