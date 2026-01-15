import React from 'react';
import { motion } from 'framer-motion';
import { INTRO_CONTENT } from '../constants';

export const Intro: React.FC = () => {
  return (
    <section className="relative w-full bg-brand-dark py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-6 text-4xl font-bold font-display uppercase leading-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500">
              {INTRO_CONTENT.title}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-300">
              {INTRO_CONTENT.description}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {INTRO_CONTENT.advantages.map((adv, idx) => (
                <div key={idx} className="flex items-center gap-3 border-l-2 border-brand-red pl-4">
                  <span className="text-sm font-semibold tracking-wider text-white">{adv}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Cards */}
          <div className="grid gap-6">
            {INTRO_CONTENT.types.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-brand-gray p-6 transition-all hover:bg-neutral-800 border border-white/5 hover:border-brand-red/50"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y-[-50%] rounded-full bg-brand-red/10 blur-2xl transition-all group-hover:bg-brand-red/20" />
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-brand-red">{type.title}</h3>
                <p className="text-sm text-gray-400">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};