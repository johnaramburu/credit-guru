
import React, { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';
import DashboardCard from '@/components/dashboard/DashboardCard';
import MetricCard from '@/components/dashboard/MetricCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BarChart as ChartComponent } from '@/components/ui/chart';
import { 
  CreditCard, 
  DollarSign, 
  Users, 
  ArrowUpRight, 
  BarChart, 
  ChartPieIcon, 
  Plus 
} from 'lucide-react';

const Dashboard = () => {
  const { user, profile } = useAuth();

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

  const recentCredits = [
    { id: 1, title: 'Crédito Hipotecario #123', amount: 250000, date: '2023-06-15', status: 'active' },
    { id: 2, title: 'Crédito Hipotecario #124', amount: 180000, date: '2023-06-10', status: 'active' },
    { id: 3, title: 'Crédito Hipotecario #125', amount: 320000, date: '2023-06-05', status: 'pending' },
  ];

  const topInvestors = [
    { id: 1, name: 'Juan Pérez', amount: 450000, growth: 5.2 },
    { id: 2, name: 'María Rodríguez', amount: 320000, growth: 3.8 },
    { id: 3, name: 'Carlos Sánchez', amount: 280000, growth: 4.1 },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

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

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        <motion.div variants={item}>
          <MetricCard
            title="Total Créditos Activos"
            value="12"
            subtitle="3 pendientes de aprobación"
            icon={CreditCard}
            trend={{ value: 8.2, label: "vs mes anterior", isPositive: true }}
            iconColor="text-primary"
          />
        </motion.div>
        
        <motion.div variants={item}>
          <MetricCard
            title="Total Inversiones"
            value={formatCurrency(2450000)}
            subtitle="En 8 créditos activos"
            icon={DollarSign}
            trend={{ value: 12.5, label: "vs mes anterior", isPositive: true }}
            iconColor="text-green-500"
          />
        </motion.div>
        
        <motion.div variants={item}>
          <MetricCard
            title="Inversionistas"
            value="24"
            subtitle="3 nuevos este mes"
            icon={Users}
            trend={{ value: 4.2, label: "vs mes anterior", isPositive: true }}
            iconColor="text-blue-500"
          />
        </motion.div>
        
        <motion.div variants={item}>
          <MetricCard
            title="Rendimiento Promedio"
            value="12.5%"
            subtitle="Anualizado"
            icon={ArrowUpRight}
            trend={{ value: 1.2, label: "vs mes anterior", isPositive: true }}
            iconColor="text-amber-500"
          />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <DashboardCard title="Actividad Reciente" gradient="primary">
            <div className="h-80">
              <ChartComponent
                type="bar"
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
        
        <div>
          <DashboardCard title="Distribución por Estado" gradient="secondary">
            <div className="h-80">
              <ChartComponent
                type="pie"
                data={[
                  { name: 'Activos', value: 60 },
                  { name: 'Pendientes', value: 25 },
                  { name: 'Completados', value: 15 },
                ]}
                index="name"
                category="value"
                colors={['#8b5cf6', '#60a5fa', '#34d399']}
                valueFormatter={(value: number) => `${value}%`}
              />
            </div>
          </DashboardCard>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
      </div>
    </div>
  );
};

export default Dashboard;
