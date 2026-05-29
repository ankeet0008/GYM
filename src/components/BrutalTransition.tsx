import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export const BrutalTransition = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ '--h1-scale-x': 0, opacity: 0 } as any}
      animate={{ '--h1-scale-x': 1, opacity: 1 } as any}
      exit={{ '--h1-scale-x': 6, opacity: 0 } as any}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Snappy rubber band ease
      className="brutal-transition-wrapper"
    >
      {children}
    </motion.div>
  );
};
