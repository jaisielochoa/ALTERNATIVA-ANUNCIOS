import React from 'react';
import { HERO_TITLE } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 text-white border-t border-white/10">
      <div className="container mx-auto flex flex-col items-center justify-center px-6 text-center">
        <h2 className="text-3xl font-bold font-display uppercase tracking-widest text-brand-red mb-2">{HERO_TITLE}</h2>
        <p className="text-sm text-gray-500 tracking-wider">Tires & Wheels Shop</p>
      </div>
      <div className="mt-12 text-center text-xs text-gray-700">
        &copy; {new Date().getFullYear()} Pro Dynamics. All rights reserved. Premium Presentation.
      </div>
    </footer>
  );
};