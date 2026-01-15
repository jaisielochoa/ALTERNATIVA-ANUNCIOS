import React from 'react';
import { motion } from 'framer-motion';
import { OUR_LOGOS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const OurLogos: React.FC = () => {
  return (
    <section className="w-full bg-white text-black py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-4xl font-bold font-display uppercase tracking-tight text-neutral-900 md:text-6xl">
              Nuestros <span className="text-brand-red">Logotipos</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Catálogo premium de soluciones visuales para su marca, diseñadas para destacar.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {OUR_LOGOS.map((item, idx) => (
            <motion.div
              key={idx}
              data-hover="true"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.2 }}
              className="group relative h-96 overflow-hidden rounded-2xl bg-neutral-900 shadow-xl"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="mb-2 flex items-center gap-2 text-brand-red">
                    <CheckCircle2 size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">{item.category}</span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white leading-tight">{item.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-3">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};