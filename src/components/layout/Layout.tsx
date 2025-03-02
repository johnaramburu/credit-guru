
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useAuth } from '@/context/AuthContext';
import PageTransition from '@/components/ui/PageTransition';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  
  // Public routes (no sidebar)
  const publicRoutes = ['/', '/login', '/register'];
  const isPublicRoute = publicRoutes.includes(location.pathname);

  useEffect(() => {
    // Close sidebar on mobile when navigating
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [location.pathname, isMobile]);

  // Only show sidebar if authenticated and not on a public route
  const showSidebar = user && !isPublicRoute;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="flex h-full">
        {showSidebar && sidebarOpen && (
          <div 
            className={`fixed top-0 left-0 z-40 h-screen w-64 pt-16 transition-transform duration-300 lg:translate-x-0 ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <Sidebar />
          </div>
        )}
        
        <main 
          className={`flex-1 pt-16 transition-all duration-300 ${
            showSidebar && sidebarOpen ? 'lg:ml-64' : ''
          }`}
        >
          <PageTransition location={location.pathname}>
            <div className="container mx-auto px-4 py-8">
              {children}
            </div>
          </PageTransition>
        </main>
      </div>
    </div>
  );
};

export default Layout;
