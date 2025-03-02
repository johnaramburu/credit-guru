
import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, TooltipProps } from 'recharts';
import { cn } from '@/lib/utils';

interface BarChartProps {
  data: any[];
  categories: string[];
  index: string;
  colors?: string[];
  valueFormatter?: (value: number) => string;
  yAxisWidth?: number;
  className?: string;
}

export function BarChart({
  data,
  categories,
  index,
  colors = ['#8b5cf6', '#10b981'],
  valueFormatter = (value: number) => `${value}`,
  yAxisWidth = 40,
  className,
}: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%" className={cn("", className)}>
      <RechartsBarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
        <XAxis 
          dataKey={index} 
          tick={{ fill: 'currentColor' }}
          axisLine={{ stroke: 'currentColor', opacity: 0.3 }}
          tickLine={{ stroke: 'currentColor', opacity: 0.3 }}
        />
        <YAxis 
          width={yAxisWidth}
          tick={{ fill: 'currentColor' }}
          axisLine={{ stroke: 'currentColor', opacity: 0.3 }}
          tickLine={{ stroke: 'currentColor', opacity: 0.3 }}
          tickFormatter={valueFormatter}
        />
        <Tooltip 
          contentStyle={{ backgroundColor: 'rgba(17, 24, 39, 0.8)', border: 'none', borderRadius: '6px', color: 'white' }}
          formatter={(value: number) => [valueFormatter(value), '']}
        />
        <Legend wrapperStyle={{ paddingTop: '10px' }} />
        {categories.map((category, index) => (
          <Bar 
            key={category}
            dataKey={category} 
            fill={colors[index % colors.length]} 
            radius={[4, 4, 0, 0]}
          />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}
