
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Users,
  CreditCard,
  DollarSign,
  ChartPieIcon,
  BarChart,
  Settings,
  HelpCircle,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { profile } = useAuth();

  const routes = [
    {
      title: 'Panel',
      href: '/dashboard',
      icon: <LayoutDashboard className="h-5 w-5" />,
      roles: ['admin', 'investor', 'manager'] as const,
    },
    {
      title: 'Inversionistas',
      href: '/investors',
      icon: <Users className="h-5 w-5" />,
      roles: ['admin', 'manager'] as const,
    },
    {
      title: 'Créditos',
      href: '/credits',
      icon: <CreditCard className="h-5 w-5" />,
      roles: ['admin', 'investor', 'manager'] as const,
    },
    {
      title: 'Depósitos',
      href: '/deposits',
      icon: <DollarSign className="h-5 w-5" />,
      roles: ['admin', 'investor', 'manager'] as const,
    },
    {
      title: 'Reportes',
      href: '/reports',
      icon: <BarChart className="h-5 w-5" />,
      roles: ['admin', 'manager'] as const,
    },
    {
      title: 'Estadísticas',
      href: '/statistics',
      icon: <ChartPieIcon className="h-5 w-5" />,
      roles: ['admin', 'manager'] as const,
    },
    {
      title: 'Configuración',
      href: '/settings',
      icon: <Settings className="h-5 w-5" />,
      roles: ['admin'] as const,
    },
    {
      title: 'Ayuda',
      href: '/help',
      icon: <HelpCircle className="h-5 w-5" />,
      roles: ['admin', 'investor', 'manager'] as const,
    },
  ];

  // Only show routes the user has access to based on their role
  const allowedRoutes = profile 
    ? routes.filter(route => route.roles.includes(profile.role as any))
    : [];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="h-screen flex flex-col bg-sidebar border-r border-border">
      <div className="p-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary text-primary-foreground font-semibold rounded-md p-1 text-lg">
            CG
          </div>
          <span className="font-semibold text-lg tracking-tight">Crédito Garantía</span>
        </Link>
      </div>

      <ScrollArea className="flex-1 py-2">
        <div className="space-y-1 px-4">
          {allowedRoutes.map((route) => (
            <Button
              key={route.href}
              variant="ghost"
              className={cn(
                'w-full justify-start gap-3 font-normal hover:bg-sidebar-accent hover:text-sidebar-accent-foreground py-2.5',
                location.pathname === route.href
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                  : 'text-sidebar-foreground/80'
              )}
              asChild
            >
              <Link to={route.href}>
                {route.icon}
                {route.title}
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>

      {profile && (
        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 border border-primary/20">
              <AvatarFallback className="bg-primary/10 text-primary-foreground">
                {getInitials(profile.full_name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col space-y-0.5">
              <p className="text-sm font-medium line-clamp-1">{profile.full_name}</p>
              <p className="text-xs text-primary capitalize">{profile.role}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
