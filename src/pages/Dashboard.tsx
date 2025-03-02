
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import MetricCardsSection from '@/components/dashboard/MetricCardsSection';
import ActivityChartSection from '@/components/dashboard/ActivityChartSection';
import DistributionSection from '@/components/dashboard/DistributionSection';
import RecentCreditsSection from '@/components/dashboard/RecentCreditsSection';
import TopInvestorsSection from '@/components/dashboard/TopInvestorsSection';

const Dashboard = () => {
  const { profile } = useAuth();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Bienvenido, {profile?.full_name || 'Usuario'}
        </h1>
        <p className="text-muted-foreground mt-1">
          Aquí tienes un resumen de la actividad reciente.
        </p>
      </div>

      <MetricCardsSection formatCurrency={formatCurrency} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <ActivityChartSection />
        <DistributionSection />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentCreditsSection formatCurrency={formatCurrency} />
        <TopInvestorsSection formatCurrency={formatCurrency} />
      </div>
    </div>
  );
};

export default Dashboard;
