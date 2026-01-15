import React from 'react';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Problems } from './components/Problems';
import { Solutions } from './components/Solutions';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <main className="bg-brand-dark min-h-screen text-white selection:bg-brand-red selection:text-white cursor-none">
      <CustomCursor />
      <Hero />
      <div className="relative z-10 shadow-2xl shadow-black">
        <Intro />
        <Gallery />
        <Problems />
        <Solutions />
      </div>
      <Footer />
    </main>
  );
}

export default App;