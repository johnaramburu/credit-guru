
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Users, 
  Search, 
  Plus, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  Eye, 
  UserPlus,
  DollarSign,
  Loader2
} from 'lucide-react';

const Investors = () => {
  const { profile } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Fake data for demonstration
  const investorsMockData = [
    { 
      id: 1, 
      name: 'Juan Pérez', 
      email: 'juan.perez@ejemplo.com', 
      phone: '555-123-4567',
      balance: 450000, 
      total_deposited: 450000,
      total_invested: 380000,
      active_credits: 3,
      created_at: '2023-01-15',
    },
    { 
      id: 2, 
      name: 'María Rodríguez', 
      email: 'maria.rodriguez@ejemplo.com', 
      phone: '555-234-5678',
      balance: 320000, 
      total_deposited: 320000,
      total_invested: 280000,
      active_credits: 2,
      created_at: '2023-02-10',
    },
    { 
      id: 3, 
      name: 'Carlos Sánchez', 
      email: 'carlos.sanchez@ejemplo.com', 
      phone: '555-345-6789',
      balance: 280000, 
      total_deposited: 280000,
      total_invested: 200000,
      active_credits: 2,
      created_at: '2023-03-05',
    },
    { 
      id: 4, 
      name: 'Ana López', 
      email: 'ana.lopez@ejemplo.com', 
      phone: '555-456-7890',
      balance: 180000, 
      total_deposited: 180000,
      total_invested: 120000,
      active_credits: 1,
      created_at: '2023-04-12',
    },
    { 
      id: 5, 
      name: 'Roberto Gómez', 
      email: 'roberto.gomez@ejemplo.com', 
      phone: '555-567-8901',
      balance: 150000, 
      total_deposited: 150000,
      total_invested: 100000,
      active_credits: 1,
      created_at: '2023-05-20',
    },
  ];

  // Filter investors based on search term
  const filteredInvestors = investorsMockData.filter(
    (investor) =>
      investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      investor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddInvestor = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Close dialog logic would go here
    }, 1500);
  };

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

  const handleAddDeposit = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Close dialog logic would go here
    }, 1500);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Inversionistas</h1>
          <p className="text-muted-foreground mt-1">
            Gestiona y visualiza todos los inversionistas
          </p>
        </div>
        
        {(profile?.role === 'admin' || profile?.role === 'manager') && (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-4 md:mt-0" size="sm">
                <UserPlus className="mr-2 h-4 w-4" />
                Nuevo Inversionista
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Agregar Inversionista</DialogTitle>
                <DialogDescription>
                  Completa los datos para registrar un nuevo inversionista en el sistema.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre completo
                  </label>
                  <Input id="name" placeholder="Nombre Apellido" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Correo electrónico
                  </label>
                  <Input id="email" placeholder="correo@ejemplo.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Teléfono
                  </label>
                  <Input id="phone" placeholder="(555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="initialDeposit" className="text-sm font-medium">
                    Depósito inicial (opcional)
                  </label>
                  <Input id="initialDeposit" placeholder="0.00" type="number" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancelar</Button>
                </DialogClose>
                <Button onClick={handleAddInvestor} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Guardando...
                    </>
                  ) : (
                    'Guardar'
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Buscar inversionista..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="md:w-auto">
                <DollarSign className="mr-2 h-4 w-4" />
                Registrar Depósito
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Registrar Depósito</DialogTitle>
                <DialogDescription>
                  Agrega un nuevo depósito para un inversionista.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label htmlFor="investor" className="text-sm font-medium">
                    Inversionista
                  </label>
                  <select 
                    id="investor" 
                    className="w-full px-3 py-2 bg-background border border-border rounded-md"
                  >
                    <option value="">Seleccionar inversionista</option>
                    {investorsMockData.map(investor => (
                      <option key={investor.id} value={investor.id}>
                        {investor.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="amount" className="text-sm font-medium">
                    Monto
                  </label>
                  <Input id="amount" placeholder="0.00" type="number" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium">
                    Fecha
                  </label>
                  <Input id="date" type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="notes" className="text-sm font-medium">
                    Notas (opcional)
                  </label>
                  <textarea 
                    id="notes" 
                    placeholder="Detalles adicionales del depósito" 
                    className="w-full px-3 py-2 bg-background border border-border rounded-md h-20"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancelar</Button>
                </DialogClose>
                <Button onClick={handleAddDeposit} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Registrando...
                    </>
                  ) : (
                    'Registrar Depósito'
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>

      <DashboardCard title={`Inversionistas (${filteredInvestors.length})`}>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Correo</TableHead>
                <TableHead>Saldo</TableHead>
                <TableHead>Total Depositado</TableHead>
                <TableHead>Total Invertido</TableHead>
                <TableHead>Créditos Activos</TableHead>
                <TableHead>Fecha Registro</TableHead>
                <TableHead className="w-[80px]">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInvestors.length > 0 ? (
                filteredInvestors.map((investor) => (
                  <TableRow key={investor.id}>
                    <TableCell className="font-medium">{investor.name}</TableCell>
                    <TableCell>{investor.email}</TableCell>
                    <TableCell>{formatCurrency(investor.balance)}</TableCell>
                    <TableCell>{formatCurrency(investor.total_deposited)}</TableCell>
                    <TableCell>{formatCurrency(investor.total_invested)}</TableCell>
                    <TableCell>{investor.active_credits}</TableCell>
                    <TableCell>{formatDate(investor.created_at)}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="cursor-pointer">
                            <Eye className="mr-2 h-4 w-4" />
                            Ver detalle
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <DollarSign className="mr-2 h-4 w-4" />
                            Registrar depósito
                          </DropdownMenuItem>
                          {(profile?.role === 'admin' || profile?.role === 'manager') && (
                            <>
                              <DropdownMenuItem className="cursor-pointer">
                                <Edit className="mr-2 h-4 w-4" />
                                Editar
                              </DropdownMenuItem>
                              <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Eliminar
                              </DropdownMenuItem>
                            </>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                    No se encontraron inversionistas que coincidan con la búsqueda.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </DashboardCard>
    </div>
  );
};

export default Investors;
