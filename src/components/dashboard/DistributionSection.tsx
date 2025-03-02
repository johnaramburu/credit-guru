
import React from 'react';
import DashboardCard from './DashboardCard';

const DistributionSection: React.FC = () => {
  return (
    <div>
      <DashboardCard title="Distribución por Estado" gradient="secondary">
        <div className="h-80 flex items-center justify-center">
          <p className="text-muted-foreground">
            Gráfico de distribución en desarrollo
          </p>
        </div>
      </DashboardCard>
    </div>
  );
};

export default DistributionSection;
