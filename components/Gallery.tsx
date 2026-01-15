import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Title Overlay */}
        <div className="absolute left-8 top-12 z-20 md:left-20">
          <h2 className="text-6xl md:text-9xl font-bold font-display uppercase text-white opacity-20 md:opacity-10">
            LOGOTIPOS
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24">
            <div className="flex w-[30vw] flex-col justify-center text-white shrink-0">
                <h3 className="text-4xl font-bold font-display uppercase text-brand-red mb-6">NUESTROS LOGOTIPOS</h3>
                
                <div className="flex items-center gap-2 text-white">
                    <ArrowRight size={32} className="text-brand-white" />
                </div>
            </div>

          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              data-hover="true"
              className="group relative h-[60vh] w-[80vw] md:w-[45vw] flex-shrink-0 overflow-hidden rounded-xl bg-neutral-900 border border-white/10"
            >
              <img
                src={item.imageUrl}
                alt={item.client}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8">
                <h3 className="mb-1 text-3xl font-bold font-display text-white uppercase">{item.client}</h3>
                <p className="mb-4 text-brand-red font-medium">{item.type}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item.details.map((detail, idx) => (
                    <span 
                        key={idx} 
                        className="rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-md"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};