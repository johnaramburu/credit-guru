
import React from 'react';
import DashboardCard from './DashboardCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

interface TopInvestorsSectionProps {
  formatCurrency: (amount: number) => string;
}

const TopInvestorsSection: React.FC<TopInvestorsSectionProps> = ({ formatCurrency }) => {
  const topInvestors = [
    { id: 1, name: 'Juan Pérez', amount: 450000, growth: 5.2 },
    { id: 2, name: 'María Rodríguez', amount: 320000, growth: 3.8 },
    { id: 3, name: 'Carlos Sánchez', amount: 280000, growth: 4.1 },
  ];

  return (
    <DashboardCard title="Principales Inversionistas">
      <div className="space-y-4">
        {topInvestors.map((investor) => (
          <div
            key={investor.id}
            className="flex items-center justify-between p-4 border border-border/50 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-md bg-blue-500/10">
                <Users className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="font-medium">{investor.name}</p>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-green-500">
                    +{investor.growth}%
                  </span>
                  <span className="text-xs text-muted-foreground ml-2">
                    este mes
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">{formatCurrency(investor.amount)}</p>
              <p className="text-xs text-muted-foreground">inversión total</p>
            </div>
          </div>
        ))}
        
        <Button asChild variant="outline" className="w-full">
          <Link to="/investors" className="flex items-center justify-center">
            <Users className="mr-2 h-4 w-4" />
            Ver todos los inversionistas
          </Link>
        </Button>
      </div>
    </DashboardCard>
  );
};

export default TopInvestorsSection;
