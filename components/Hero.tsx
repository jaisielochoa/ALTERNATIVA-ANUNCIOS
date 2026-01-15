import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HERO_TITLE, HERO_SUBTITLE } from '../constants';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden bg-brand-dark">
      {/* Background Image Layer */}
      <motion.div 
        style={{ y: backgroundY, scale: scale }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1563245372-f21724e3a8c9?q=80&w=2940&auto=format&fit=crop')`,
            filter: 'brightness(0.6)'
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/50 to-brand-dark" />
      </motion.div>

      {/* Content Layer */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
      >
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4 text-xl font-bold tracking-[0.5em] text-brand-red uppercase md:text-2xl"
          >
            {HERO_TITLE}
          </motion.h2>
        </div>
        
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl font-extrabold uppercase tracking-tight text-white font-display md:text-7xl lg:text-8xl drop-shadow-2xl"
          >
            ALTERNATIVAS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              IDENTIDAD - ANUNCIOS
            </span>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl font-light"
        >
          {HERO_SUBTITLE}
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 transform text-white"
      >
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="h-6 w-6 text-brand-red" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};