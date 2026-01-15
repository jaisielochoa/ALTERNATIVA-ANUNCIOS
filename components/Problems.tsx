import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROBLEMS_CONTENT } from '../constants';
import { AlertTriangle, X } from 'lucide-react';

export const Problems: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-neutral-900 py-32 text-white overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-[128px]"></div>
        </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white backdrop-blur-md hover:bg-brand-red transition-colors"
                data-hover="true"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Problem Detail"
                className="w-full h-[60vh] md:h-[70vh] object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2 text-brand-red">
            <AlertTriangle size={24} />
            <span className="text-sm font-bold uppercase tracking-widest">Desafíos Críticos</span>
          </div>
          <h2 className="text-4xl font-bold font-display uppercase md:text-5xl">Principales Problemas</h2>
          <p className="mt-4 text-gray-400">Factores que afectan la durabilidad y estética de su inversión.</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS_CONTENT.map((prob, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center rounded-2xl bg-black/40 p-8 text-center backdrop-blur-sm border border-white/5 hover:border-red-500/50 transition-colors"
            >
              <div 
                onClick={() => setSelectedImage(prob.imageUrl)}
                data-hover="true"
                className="mb-6 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-red-900/20 text-brand-red hover:bg-brand-red hover:text-white transition-all duration-300 hover:scale-110"
              >
                <prob.icon size={32} />
              </div>
              <h3 className="mb-3 text-xl font-bold">{prob.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{prob.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};