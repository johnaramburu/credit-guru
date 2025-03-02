
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  title: string;
  className?: string;
  gradient?: 'primary' | 'secondary' | 'accent' | 'none';
  children: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  className,
  gradient = 'none',
  children,
}) => {
  const getGradientClass = () => {
    switch (gradient) {
      case 'primary':
        return 'card-gradient-primary';
      case 'secondary':
        return 'card-gradient-secondary';
      case 'accent':
        return 'card-gradient-accent';
      default:
        return 'bg-card';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'rounded-xl border border-border shadow-sm overflow-hidden',
        getGradientClass(),
        className
      )}
    >
      <div className="px-6 py-5 border-b border-border/50">
        <h3 className="text-lg font-medium tracking-tight">{title}</h3>
      </div>
      <div className="p-6">{children}</div>
    </motion.div>
  );
};

export default DashboardCard;
