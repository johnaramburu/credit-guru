
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
  location?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, location }) => {
  const routerLocation = useLocation();
  const [renderKey, setRenderKey] = useState(location || routerLocation.pathname);
  
  useEffect(() => {
    setRenderKey(location || routerLocation.pathname);
  }, [location, routerLocation.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={renderKey}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ 
          type: "spring", 
          stiffness: 350, 
          damping: 30,
          duration: 0.3
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
