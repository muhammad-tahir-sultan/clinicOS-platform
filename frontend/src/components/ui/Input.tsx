import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', label, error, ...props }, ref) => {
        return (
            <div className={`flex flex-col mb-4 ${className}`}>
                {label && <label className="label">{label}</label>}
                <input
                    ref={ref}
                    className={`input ${error ? 'border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]' : ''}`}
                    {...props}
                />
                {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
            </div>
        );
    }
);

Input.displayName = 'Input';
