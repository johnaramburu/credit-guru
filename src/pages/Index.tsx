
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PageTransition from '@/components/ui/PageTransition';
import { ArrowRight, BarChart3, Coins, CreditCard, Lock, Users } from 'lucide-react';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        {/* Hero section */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Plataforma de Gestión de <span className="text-primary">Créditos e Inversiones</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Administra créditos, realiza inversiones y controla tu cartera en una sola plataforma segura y eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/register">
                  Crear cuenta <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/login">
                  Iniciar sesión
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="bg-secondary/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Características principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card>
                <CardHeader>
                  <CreditCard className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Gestión de Créditos</CardTitle>
                  <CardDescription>
                    Administra créditos de forma eficiente con toda la información centralizada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Crea, edita y da seguimiento a tus créditos. Visualiza estados, vencimientos y rendimientos de forma clara y organizada.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card>
                <CardHeader>
                  <Coins className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Inversiones Seguras</CardTitle>
                  <CardDescription>
                    Invierte en créditos predefinidos y obtén rendimientos atractivos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Accede a oportunidades de inversión verificadas, con tasas de interés competitivas y plazos flexibles.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card>
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Análisis y Reportes</CardTitle>
                  <CardDescription>
                    Visualiza el desempeño de tus inversiones en tiempo real
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Gráficos detallados, estadísticas y reportes descargables para un seguimiento completo de tu actividad financiera.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 4 */}
              <Card>
                <CardHeader>
                  <Lock className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Seguridad Avanzada</CardTitle>
                  <CardDescription>
                    Tus datos y transacciones protegidos en todo momento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Implementamos las medidas de seguridad más avanzadas para proteger tus datos y garantizar la integridad de cada transacción.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 5 */}
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Perfiles Múltiples</CardTitle>
                  <CardDescription>
                    Diferentes roles para distintas necesidades
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Administradores, inversionistas y gestores con acceso personalizado según sus responsabilidades en la plataforma.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Únete a nuestra plataforma y empieza a gestionar tus inversiones de manera inteligente y segura.
            </p>
            <Button size="lg" asChild>
              <Link to="/register">
                Crear cuenta gratuita
              </Link>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground mb-4 md:mb-0">
                © 2024 Credit Guru. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6">
                <Link to="#" className="text-muted-foreground hover:text-foreground">
                  Términos de servicio
                </Link>
                <Link to="#" className="text-muted-foreground hover:text-foreground">
                  Política de privacidad
                </Link>
                <Link to="#" className="text-muted-foreground hover:text-foreground">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Index;
