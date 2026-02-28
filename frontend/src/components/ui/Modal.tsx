import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="p-6 border-b border-[#1e2d4a]">
                    <h2 className="text-lg font-semibold text-[#e8edf5]">
                        {title}
                    </h2>
                </div>
                <div className="p-6 flex flex-col gap-4">
                    {children}
                </div>
            </div>
        </div>
    );
};
