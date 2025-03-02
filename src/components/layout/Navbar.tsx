
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  User,
  LogOut,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, profile, signOut } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [location]);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container px-4 sm:px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-foreground tracking-tight flex items-center"
          >
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded mr-2">CG</span>
            <span className="hidden sm:inline">Crédito Garantía</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/' ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              Inicio
            </Link>
            {user ? (
              <>
                <Link 
                  to="/dashboard" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === '/dashboard' ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  Panel
                </Link>
                <Link 
                  to="/investors" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === '/investors' ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  Inversionistas
                </Link>
                <Link 
                  to="/credits" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === '/credits' ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  Créditos
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === '/login' ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  Iniciar Sesión
                </Link>
                <Link 
                  to="/register" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === '/register' ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  Registrarse
                </Link>
              </>
            )}
          </nav>

          <div className="flex items-center">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-9 w-9 border border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary-foreground">
                        {profile ? getInitials(profile.full_name) : 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{profile?.full_name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                      <p className="text-xs leading-none text-primary mt-1 capitalize">{profile?.role}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link to="/profile" className="flex w-full items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>Perfil</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer text-destructive focus:text-destructive"
                    onClick={() => signOut()}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Cerrar sesión</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:block space-x-2">
                <Button asChild variant="outline" size="sm" className="mr-2">
                  <Link to="/login">Iniciar Sesión</Link>
                </Button>
                <Button asChild size="sm">
                  <Link to="/register">Registrarse</Link>
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-card rounded-lg border border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-sm font-medium p-2 rounded-md transition-colors hover:bg-primary/10 ${
                  location.pathname === '/' ? 'bg-primary/10 text-primary' : 'text-foreground/80'
                }`}
              >
                Inicio
              </Link>
              
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className={`text-sm font-medium p-2 rounded-md transition-colors hover:bg-primary/10 ${
                      location.pathname === '/dashboard' ? 'bg-primary/10 text-primary' : 'text-foreground/80'
                    }`}
                  >
                    Panel
                  </Link>
                  <Link
                    to="/investors"
                    className={`text-sm font-medium p-2 rounded-md transition-colors hover:bg-primary/10 ${
                      location.pathname === '/investors' ? 'bg-primary/10 text-primary' : 'text-foreground/80'
                    }`}
                  >
                    Inversionistas
                  </Link>
                  <Link
                    to="/credits"
                    className={`text-sm font-medium p-2 rounded-md transition-colors hover:bg-primary/10 ${
                      location.pathname === '/credits' ? 'bg-primary/10 text-primary' : 'text-foreground/80'
                    }`}
                  >
                    Créditos
                  </Link>
                  <Button
                    variant="ghost"
                    className="justify-start text-sm font-medium p-2 rounded-md transition-colors hover:bg-destructive/10 text-destructive"
                    onClick={() => signOut()}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Cerrar sesión
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className={`text-sm font-medium p-2 rounded-md transition-colors hover:bg-primary/10 ${
                      location.pathname === '/login' ? 'bg-primary/10 text-primary' : 'text-foreground/80'
                    }`}
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    to="/register"
                    className={`text-sm font-medium p-2 rounded-md transition-colors hover:bg-primary/10 ${
                      location.pathname === '/register' ? 'bg-primary/10 text-primary' : 'text-foreground/80'
                    }`}
                  >
                    Registrarse
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
