import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOLUTIONS_CONTENT } from '../constants';
import { Zap } from 'lucide-react';

export const Solutions: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <section className="w-full bg-white text-black py-24 relative">
      {/* Hover Popup Overlay */}
      <AnimatePresence>
        {hoveredImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none p-6"
          >
            {/* Backdrop Blur */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            
            {/* Image Container */}
            <div className="relative z-10 overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/20">
              <img 
                src={hoveredImage} 
                alt="Preview" 
                className="max-h-[70vh] max-w-[90vw] object-contain shadow-2xl rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-4xl font-bold font-display uppercase tracking-tight text-neutral-900 md:text-6xl">
              Soluciones <span className="text-brand-red">Alternativas</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Proyecto independiente para garantizar durabilidad y un impacto visual superior.
            </p>
          </motion.div>
        </div>

        {/* Protection Grid */}
        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {SOLUTIONS_CONTENT.items.map((item, idx) => (
            <motion.div
              key={idx}
              data-hover="true"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="h-48 w-full overflow-hidden bg-neutral-100">
                <img 
                  src={item.imageUrl} 
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3">
                    <div className="flex items-center justify-center rounded-full bg-brand-red/10 p-2 text-brand-red">
                        <Zap size={20} />
                    </div>
                    <h3 className="font-bold text-lg leading-tight">{item.name}</h3>
                </div>
                <p className="text-sm text-neutral-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alternatives Showcase */}
        <div className="grid gap-8 lg:grid-cols-3">
          {SOLUTIONS_CONTENT.premium.map((item, idx) => (
            <motion.div
              key={idx}
              data-hover="true"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.2 }}
              onMouseEnter={() => setHoveredImage(item.imageUrl)}
              onMouseLeave={() => setHoveredImage(null)}
              className="group relative h-96 overflow-hidden rounded-2xl bg-neutral-900 cursor-pointer"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="mb-2 text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};