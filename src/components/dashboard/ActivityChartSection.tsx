
import React from 'react';
import DashboardCard from './DashboardCard';
import { BarChart } from '@/components/ui/chart';

const ActivityChartSection: React.FC = () => {
  // Fake data for demonstration
  const mockChartData = [
    { name: 'Ene', creditos: 400, depositos: 240 },
    { name: 'Feb', creditos: 300, depositos: 139 },
    { name: 'Mar', creditos: 200, depositos: 980 },
    { name: 'Abr', creditos: 278, depositos: 390 },
    { name: 'May', creditos: 189, depositos: 480 },
    { name: 'Jun', creditos: 239, depositos: 380 },
    { name: 'Jul', creditos: 349, depositos: 430 },
  ];

  return (
    <div className="lg:col-span-2">
      <DashboardCard title="Actividad Reciente" gradient="primary">
        <div className="h-80">
          <BarChart
            data={mockChartData}
            categories={['creditos', 'depositos']}
            index="name"
            colors={['#8b5cf6', '#10b981']}
            valueFormatter={(value: number) => `$${value.toLocaleString()}`}
            yAxisWidth={60}
          />
        </div>
      </DashboardCard>
    </div>
  );
};

export default ActivityChartSection;
