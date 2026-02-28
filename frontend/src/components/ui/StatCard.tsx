'use client';

interface StatCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    icon: React.ReactNode;
    colorClass: string;
    iconClass: string;
    trend?: { value: number; label: string };
}

export function StatCard({ title, value, subtitle, icon, colorClass, iconClass, trend }: StatCardProps) {
    return (
        <div
            className={`glass-card glass-card-hover ${colorClass}`}
            style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}
        >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div>
                    <p style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                        {title}
                    </p>
                    <p style={{ fontSize: '28px', fontWeight: '700', color: 'var(--text-primary)', lineHeight: 1 }}>
                        {value}
                    </p>
                    {subtitle && (
                        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '6px' }}>
                            {subtitle}
                        </p>
                    )}
                </div>
                <div
                    className={iconClass}
                    style={{ padding: '10px', borderRadius: '10px', flexShrink: 0 }}
                >
                    {icon}
                </div>
            </div>
            {trend && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
                    <span style={{ color: trend.value >= 0 ? '#10b981' : '#ef4444', fontWeight: '600' }}>
                        {trend.value >= 0 ? '↑' : '↓'} {Math.abs(trend.value)}%
                    </span>
                    <span style={{ color: 'var(--text-secondary)' }}>{trend.label}</span>
                </div>
            )}
        </div>
    );
}

interface LoadingSkeletonProps {
    count?: number;
}
export function StatCardSkeleton({ count = 4 }: LoadingSkeletonProps) {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="glass-card" style={{ padding: '20px', height: '120px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '6px', height: '12px', width: '60%', marginBottom: '12px' }} />
                    <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '6px', height: '28px', width: '40%', marginBottom: '8px' }} />
                    <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '6px', height: '12px', width: '50%' }} />
                </div>
            ))}
        </>
    );
}
