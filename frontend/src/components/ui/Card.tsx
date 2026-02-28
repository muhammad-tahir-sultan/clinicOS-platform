import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverable = false, ...props }) => {
    return (
        <div
            className={`glass-card ${hoverable ? 'glass-card-hover' : ''} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
