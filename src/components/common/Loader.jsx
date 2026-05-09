import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  useEffect(() => {
    // Total cinematic loader duration: ~6.5 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 6500); 

    return () => clearTimeout(timer);
  }, [onComplete]);

  // 12 columns x 8 rows = 96 blocks to construct the grid
  const cols = 12;
  const rows = 8;
  const totalBlocks = cols * rows;
  const blocks = Array.from({ length: totalBlocks });

  // Stagger settings for parent container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03, // Blocks appear in rapid succession
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.02, // Rapidly disassemble at the end
        staggerDirection: -1
      }
    }
  };

  // Individual block animations from infinite directions
  const blockVariants = {
    hidden: (i) => {
      const edge = i % 4; // 0: Top, 1: Right, 2: Bottom, 3: Left
      let x = 0;
      let y = 0;
      
      if (edge === 0) y = '-100vh';
      else if (edge === 1) x = '100vw';
      else if (edge === 2) y = '100vh';
      else x = '-100vw';

      // Scatter blocks so they don't originate from a single straight line
      const scatter = (i % 5 - 2) * 20; 
      if (edge === 0 || edge === 2) x = `${scatter}vw`;
      if (edge === 1 || edge === 3) y = `${scatter}vh`;

      return {
        x,
        y,
        opacity: 0,
        scale: 0,
        rotate: (i % 3 === 0) ? 90 : (i % 2 === 0) ? -90 : 180
      };
    },
    visible: (i) => ({
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 70,
        duration: 1.2,
        delay: (i % 8) * 0.05 // Adds a secondary wave/ripple to the stagger
      }
    }),
    exit: (i) => ({
      opacity: 0,
      scale: 0.2,
      rotate: (i % 2 === 0) ? 45 : -45,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    })
  };

  return (
    <motion.div
      key="loader"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Constructing Grid Background */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-16 md:grid-cols-12 md:grid-rows-8 w-full h-full">
        {blocks.map((_, i) => {
          // Create slight variations in blocks to look like an intricate interface scaffolding
          const isAccent = i % 19 === 0;
          const isDark = i % 4 === 0;
          
          return (
            <motion.div
              key={i}
              custom={i}
              variants={blockVariants}
              className={`w-full h-full border-[0.5px] border-yellow-500/10 backdrop-blur-sm 
                ${isAccent ? 'bg-yellow-400/5' : isDark ? 'bg-black/90' : 'bg-neutral-950/80'}
              `}
            />
          );
        })}
      </div>

      {/* Central Cinematic Core */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0, 1, 1, 0], 
          scale: [0.5, 1, 1, 1.5],
        }}
        transition={{ 
          duration: 6.5, 
          times: [0, 0.2, 0.8, 1],
          ease: "easeInOut" 
        }}
        className="absolute z-10 flex flex-col items-center pointer-events-none"
      >
        {/* High-tech spinning loader elements */}
        <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-t-2 border-r-2 border-yellow-400/80 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.3)]"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-3 border-b-2 border-l-2 border-yellow-200/50 rounded-full"
          />
          <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_20px_rgba(251,191,36,1)] animate-pulse" />
        </div>
        
        <div className="text-yellow-400 font-sans tracking-[0.5em] uppercase text-sm font-bold drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
          Constructing
        </div>
        <div className="text-neutral-500 font-mono text-xs mt-3 tracking-widest uppercase">
          Environment . Init
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;