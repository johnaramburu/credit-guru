
import React from 'react';
import { motion } from 'framer-motion';
import MetricCard from './MetricCard';
import { CreditCard, DollarSign, Users, ArrowUpRight } from 'lucide-react';

interface MetricCardsSectionProps {
  formatCurrency: (amount: number) => string;
}

const MetricCardsSection: React.FC<MetricCardsSectionProps> = ({ formatCurrency }) => {
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

  return (
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
  );
};

export default MetricCardsSection;
