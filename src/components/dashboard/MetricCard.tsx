
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  trend?: {
    value: number;
    label: string;
    isPositive: boolean;
  };
  className?: string;
  iconColor?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  className,
  iconColor = 'text-primary',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        'rounded-xl border border-border bg-card shadow-sm overflow-hidden p-6',
        className
      )}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-semibold mt-2 tracking-tight">{value}</h3>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          )}
          
          {trend && (
            <div className="flex items-center mt-2">
              <div
                className={cn(
                  'text-xs font-medium mr-2 px-2 py-0.5 rounded',
                  trend.isPositive
                    ? 'bg-green-500/10 text-green-500'
                    : 'bg-red-500/10 text-red-500'
                )}
              >
                {trend.isPositive ? '+' : ''}{trend.value}%
              </div>
              <span className="text-xs text-muted-foreground">{trend.label}</span>
            </div>
          )}
        </div>
        
        {Icon && (
          <div className={cn('p-3 rounded-lg bg-primary/10', iconColor.replace('text-', 'bg-') + '/10')}>
            <Icon className={cn('h-5 w-5', iconColor)} />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MetricCard;
