
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, PlusCircle, Filter } from 'lucide-react';
import { Credit } from '@/lib/supabase';

const Credits = () => {
  const { profile } = useAuth();
  const isAdmin = profile?.role === 'admin';
  const isManager = profile?.role === 'manager';
  const canCreateCredit = isAdmin || isManager;

  // Datos de ejemplo para créditos
  const credits: Credit[] = [
    { 
      id: '1', 
      title: 'Crédito Hipotecario #123', 
      description: 'Propiedad en Colonia Roma',
      total_amount: 250000, 
      assigned_amount: 150000,
      interest_rate: 12.5,
      start_date: '2023-06-15',
      end_date: '2028-06-15',
      status: 'active',
      created_at: '2023-06-01'
    },
    { 
      id: '2', 
      title: 'Crédito Hipotecario #124', 
      description: 'Propiedad en Polanco',
      total_amount: 180000, 
      assigned_amount: 180000,
      interest_rate: 11.8,
      start_date: '2023-06-10',
      end_date: '2027-06-10',
      status: 'active',
      created_at: '2023-06-05'
    },
    { 
      id: '3', 
      title: 'Crédito Hipotecario #125', 
      description: 'Propiedad en Condesa',
      total_amount: 320000, 
      assigned_amount: 160000,
      interest_rate: 13.2,
      start_date: '2023-06-05',
      end_date: '2029-06-05',
      status: 'pending',
      created_at: '2023-05-25'
    },
    { 
      id: '4', 
      title: 'Crédito Hipotecario #126', 
      description: 'Propiedad en Santa Fe',
      total_amount: 420000, 
      assigned_amount: 0,
      interest_rate: 14.0,
      start_date: '2023-07-01',
      end_date: '2030-07-01',
      status: 'pending',
      created_at: '2023-06-20'
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Créditos</h1>
          <p className="text-muted-foreground mt-1">
            Administra y consulta los créditos hipotecarios disponibles.
          </p>
        </div>
        {canCreateCredit && (
          <Button className="flex items-center gap-1">
            <PlusCircle className="h-4 w-4 mr-1" /> Nuevo Crédito
          </Button>
        )}
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="active">Activos</TabsTrigger>
            <TabsTrigger value="pending">Pendientes</TabsTrigger>
            {profile?.role === 'investor' && (
              <TabsTrigger value="my-investments">Mis Inversiones</TabsTrigger>
            )}
          </TabsList>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter className="h-4 w-4 mr-1" /> Filtrar
          </Button>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {credits.map((credit) => (
              <Card key={credit.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{credit.title}</CardTitle>
                      <CardDescription>{credit.description}</CardDescription>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      credit.status === 'active' 
                        ? 'bg-green-500/10 text-green-500' 
                        : credit.status === 'pending'
                        ? 'bg-amber-500/10 text-amber-500'
                        : 'bg-blue-500/10 text-blue-500'
                    }`}>
                      {credit.status === 'active' ? 'Activo' : 
                       credit.status === 'pending' ? 'Pendiente' : 'Completado'}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                    <div>
                      <p className="text-muted-foreground">Monto Total</p>
                      <p className="font-medium">{formatCurrency(credit.total_amount)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Asignado</p>
                      <p className="font-medium">{formatCurrency(credit.assigned_amount)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Tasa de Interés</p>
                      <p className="font-medium">{credit.interest_rate}% anual</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Plazo</p>
                      <p className="font-medium">
                        {formatDate(credit.start_date)} - {formatDate(credit.end_date)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="bg-secondary h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-primary h-full rounded-full"
                        style={{ width: `${(credit.assigned_amount / credit.total_amount) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Asignado: {Math.round((credit.assigned_amount / credit.total_amount) * 100)}%</span>
                      <span>Meta: {formatCurrency(credit.total_amount)}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4 gap-2" disabled={credit.assigned_amount >= credit.total_amount}>
                    <CreditCard className="h-4 w-4" /> Invertir en este crédito
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="active" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {credits.filter(credit => credit.status === 'active').map((credit) => (
              <Card key={credit.id} className="overflow-hidden">
                {/* El mismo contenido que en la pestaña "all" */}
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{credit.title}</CardTitle>
                      <CardDescription>{credit.description}</CardDescription>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-500">
                      Activo
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                    <div>
                      <p className="text-muted-foreground">Monto Total</p>
                      <p className="font-medium">{formatCurrency(credit.total_amount)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Asignado</p>
                      <p className="font-medium">{formatCurrency(credit.assigned_amount)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Tasa de Interés</p>
                      <p className="font-medium">{credit.interest_rate}% anual</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Plazo</p>
                      <p className="font-medium">
                        {formatDate(credit.start_date)} - {formatDate(credit.end_date)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="bg-secondary h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-primary h-full rounded-full"
                        style={{ width: `${(credit.assigned_amount / credit.total_amount) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Asignado: {Math.round((credit.assigned_amount / credit.total_amount) * 100)}%</span>
                      <span>Meta: {formatCurrency(credit.total_amount)}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4 gap-2" disabled={credit.assigned_amount >= credit.total_amount}>
                    <CreditCard className="h-4 w-4" /> Invertir en este crédito
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {credits.filter(credit => credit.status === 'pending').map((credit) => (
              <Card key={credit.id} className="overflow-hidden">
                {/* El mismo contenido que en la pestaña "all" */}
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{credit.title}</CardTitle>
                      <CardDescription>{credit.description}</CardDescription>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-500">
                      Pendiente
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                    <div>
                      <p className="text-muted-foreground">Monto Total</p>
                      <p className="font-medium">{formatCurrency(credit.total_amount)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Asignado</p>
                      <p className="font-medium">{formatCurrency(credit.assigned_amount)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Tasa de Interés</p>
                      <p className="font-medium">{credit.interest_rate}% anual</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Plazo</p>
                      <p className="font-medium">
                        {formatDate(credit.start_date)} - {formatDate(credit.end_date)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="bg-secondary h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-primary h-full rounded-full"
                        style={{ width: `${(credit.assigned_amount / credit.total_amount) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Asignado: {Math.round((credit.assigned_amount / credit.total_amount) * 100)}%</span>
                      <span>Meta: {formatCurrency(credit.total_amount)}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4 gap-2" disabled={credit.assigned_amount >= credit.total_amount}>
                    <CreditCard className="h-4 w-4" /> Invertir en este crédito
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {profile?.role === 'investor' && (
          <TabsContent value="my-investments" className="mt-0">
            <div className="text-center py-12">
              <CreditCard className="h-12 w-12 mx-auto text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">No tienes inversiones en créditos</h3>
              <p className="text-muted-foreground mt-1">
                Explora los créditos disponibles y comienza a invertir.
              </p>
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default Credits;
