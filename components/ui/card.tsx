
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-md p-4 w-80 max-w-80 flex items-center flex-col',
        className
      )}
      role="article"
      {...props}
    >
      {children}
    </div>
  );
};
