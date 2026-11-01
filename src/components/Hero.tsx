import React from 'react';
import { PROFILE_INFO } from '../data/portfolioData';

interface HeroProps {
  onToggleViewfinder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onToggleViewfinder }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2200&q=90"
          alt="Cinematic Photography by Aakash Jaiswal"
          className="w-full h-full object-cover animate-kenburns scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/60 to-black/70"></div>
        <div className="absolute inset-0 hero-vignette"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 backdrop-blur-md border border-amber-400/30 text-[11px] uppercase tracking-widest text-amber-300 mb-6 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
          <span>{PROFILE_INFO.experienceYears} Industry Craft</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white mb-4">
          {PROFILE_INFO.name.toUpperCase()}
        </h1>

        <p className="font-display text-lg sm:text-2xl md:text-3xl italic text-amber-200/90 font-light mb-6">
          {PROFILE_INFO.tagline}
        </p>

        <p className="max-w-2xl text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed font-light mb-10">
          {PROFILE_INFO.heroSubtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl shadow-amber-400/20 hover:scale-105 flex items-center justify-center gap-2"
          >
            <span>Explore My Work</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:border-amber-400/50 flex items-center justify-center"
          >
            Contact Me
          </a>
        </div>

        <button
          onClick={onToggleViewfinder}
          className="mt-12 text-xs font-mono text-zinc-400 hover:text-amber-300 flex items-center gap-2 border border-zinc-800 rounded-full px-4 py-1.5 bg-black/40 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          Toggle Camera Viewfinder Overlay (HUD)
        </button>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-zinc-400 hover:text-amber-300 transition-colors">
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll to Discover</span>
        <div className="w-5 h-9 rounded-full border-2 border-zinc-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-amber-400 animate-bounce"></div>
        </div>
      </a>
    </section>
  );
};
