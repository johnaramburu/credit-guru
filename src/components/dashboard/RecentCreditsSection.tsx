
import React from 'react';
import DashboardCard from './DashboardCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CreditCard } from 'lucide-react';

interface RecentCreditsSectionProps {
  formatCurrency: (amount: number) => string;
}

const RecentCreditsSection: React.FC<RecentCreditsSectionProps> = ({ formatCurrency }) => {
  const recentCredits = [
    { id: 1, title: 'Crédito Hipotecario #123', amount: 250000, date: '2023-06-15', status: 'active' },
    { id: 2, title: 'Crédito Hipotecario #124', amount: 180000, date: '2023-06-10', status: 'active' },
    { id: 3, title: 'Crédito Hipotecario #125', amount: 320000, date: '2023-06-05', status: 'pending' },
  ];

  return (
    <DashboardCard title="Créditos Recientes">
      <div className="space-y-4">
        {recentCredits.map((credit) => (
          <div
            key={credit.id}
            className="flex items-center justify-between p-4 border border-border/50 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-md ${
                credit.status === 'active' ? 'bg-green-500/10' : 'bg-amber-500/10'
              }`}>
                <CreditCard className={`h-5 w-5 ${
                  credit.status === 'active' ? 'text-green-500' : 'text-amber-500'
                }`} />
              </div>
              <div>
                <p className="font-medium">{credit.title}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(credit.date).toLocaleDateString('es-MX', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">{formatCurrency(credit.amount)}</p>
              <span className={`text-xs px-2 py-1 rounded-full ${
                credit.status === 'active' 
                  ? 'bg-green-500/10 text-green-500' 
                  : 'bg-amber-500/10 text-amber-500'
              }`}>
                {credit.status === 'active' ? 'Activo' : 'Pendiente'}
              </span>
            </div>
          </div>
        ))}
        
        <Button asChild variant="outline" className="w-full">
          <Link to="/credits" className="flex items-center justify-center">
            <CreditCard className="mr-2 h-4 w-4" />
            Ver todos los créditos
          </Link>
        </Button>
      </div>
    </DashboardCard>
  );
};

export default RecentCreditsSection;
