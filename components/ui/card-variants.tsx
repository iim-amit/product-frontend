
import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface BaseCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const SmallCard: React.FC<BaseCardProps> = ({ title, children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <Card className={cn('h-32', className)} role="article" aria-label={title}>
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div className="text-sm">{children}</div>
    </Card>
  </motion.div>
);

export const MediumCard: React.FC<BaseCardProps> = ({ title, children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <Card className={cn('h-48', className)} role="article" aria-label={title}>
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div className="text-sm">{children}</div>
    </Card>
  </motion.div>
);

export const LargeCard: React.FC<BaseCardProps> = ({ title, children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <Card className={cn('h-64', className)} role="article" aria-label={title}>
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div className="text-sm">{children}</div>
    </Card>
  </motion.div>
);
