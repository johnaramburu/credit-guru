
import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

interface PieChartProps {
  data: {
    name: string;
    value: number;
  }[];
  colors?: string[];
  valueFormatter?: (value: number) => string;
  className?: string;
}

export function PieChart({
  data,
  colors = ['#8b5cf6', '#10b981', '#3b82f6', '#ef4444', '#f59e0b'],
  valueFormatter = (value: number) => `${value}`,
  className,
}: PieChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%" className={cn("", className)}>
      <RechartsPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value: number) => [valueFormatter(value), '']}
          contentStyle={{ backgroundColor: 'rgba(17, 24, 39, 0.8)', border: 'none', borderRadius: '6px', color: 'white' }}
        />
        <Legend />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
}
