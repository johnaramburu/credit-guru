
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import {
  CreditCard,
  DollarSign,
  Users,
  Shield,
  BarChart,
  ChevronRight
} from 'lucide-react';

const Index = () => {
  const { user } = useAuth();

  const features = [
    {
      title: 'Gestión de Créditos',
      description: 'Administra y visualiza todos tus créditos hipotecarios en un solo lugar.',
      icon: <CreditCard className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Control de Inversiones',
      description: 'Seguimiento detallado de todas tus inversiones y rendimientos.',
      icon: <DollarSign className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Administración de Inversionistas',
      description: 'Gestiona eficientemente la información de todos tus inversionistas.',
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Máxima Seguridad',
      description: 'Protección de datos con los más altos estándares de seguridad.',
      icon: <Shield className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Reportes y Estadísticas',
      description: 'Visualización gráfica de datos para una mejor toma de decisiones.',
      icon: <BarChart className="h-8 w-8 text-primary" />,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            Gestión de Créditos Garantía Hipotecaria
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Potencia tus inversiones con créditos garantizados
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Plataforma integral para administrar y hacer seguimiento a tus inversiones en créditos con garantía hipotecaria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <Link to={user ? "/dashboard" : "/register"}>
                {user ? "Ir al panel" : "Comenzar ahora"}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link to="/login">
                {user ? "Ver mi cuenta" : "Iniciar sesión"}
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Todo lo que necesitas para gestionar tus inversiones
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nuestra plataforma ofrece herramientas potentes y fáciles de usar para optimizar tus inversiones en créditos garantía hipotecaria.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="glass-card p-6 rounded-xl"
              >
                <div className="bg-primary/10 rounded-lg inline-block p-3 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Empieza a controlar tus inversiones hoy
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a nuestra plataforma y descubre una nueva forma de gestionar tus créditos garantía hipotecaria.
          </p>
          <Button asChild size="lg" className="px-8">
            <Link to={user ? "/dashboard" : "/register"} className="flex items-center">
              {user ? "Ir al panel" : "Registrarse gratis"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 md:px-6 lg:px-8 bg-card mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold text-foreground tracking-tight flex items-center">
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded mr-2">CG</span>
                <span>Crédito Garantía</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Plataforma de gestión de créditos garantía hipotecaria
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Acerca de
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacidad
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Términos
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Crédito Garantía. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
