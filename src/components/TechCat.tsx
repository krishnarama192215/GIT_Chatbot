import React from 'react';
import { motion } from 'framer-motion';
import { Cat } from 'lucide-react';

export const TechCat: React.FC = () => {
  return (
    <motion.div
      className="relative w-24 h-24"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Cat className="w-full h-full text-indigo-600" />
      </motion.div>
    </motion.div>
  );
};