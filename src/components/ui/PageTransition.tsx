
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  location: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, location }) => {
  const [renderKey, setRenderKey] = useState(location);
  
  useEffect(() => {
    setRenderKey(location);
  }, [location]);

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
