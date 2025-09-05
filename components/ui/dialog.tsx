import React from 'react';
import { cn } from '@/lib/utils';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Dialog: React.FC<DialogProps> = ({ open, onClose, children, className }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className={cn('bg-white rounded-lg p-6 max-w-lg w-full', className)}>
        {children}
        <button onClick={onClose} className="mt-4 border border-emerald-500 text-emerald-600 hover:bg-emerald-50 rounded-lg px-4 py-1 transition
">Close</button>
      </div>
    </div>
  );
};