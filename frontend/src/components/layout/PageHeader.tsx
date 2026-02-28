'use client';

import { Search, Bell } from 'lucide-react';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    actions?: React.ReactNode;
}

export function PageHeader({ title, subtitle, actions }: PageHeaderProps) {
    return (
        <header
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 28px',
                borderBottom: '1px solid var(--border)',
                background: 'var(--bg-secondary)',
                flexShrink: 0,
            }}
        >
            <div>
                <h1 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {title}
                </h1>
                {subtitle && (
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                        {subtitle}
                    </p>
                )}
            </div>
            {actions && <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>{actions}</div>}
        </header>
    );
}
