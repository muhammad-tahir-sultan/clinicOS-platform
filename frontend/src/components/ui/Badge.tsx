import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'green' | 'blue' | 'yellow' | 'red' | 'gray' | 'purple';
    children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'gray', className = '', children, ...props }) => {
    return (
        <span className={`badge badge-${variant} ${className}`} {...props}>
            {children}
        </span>
    );
};
