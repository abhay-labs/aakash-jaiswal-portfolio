import React from 'react';

interface NavigationProps {
  onOpenGuide: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenGuide }) => {
  return (
    <header>
      <nav id="primary-navbar" className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-6 px-6 lg:px-12 flex items-center justify-between bg-black/80 backdrop-blur-xl border-b border-zinc-900">
        <a href="#hero" className="flex flex-col group">
          <span className="font-display text-lg lg:text-xl font-bold tracking-widest text-zinc-100 group-hover:text-amber-200 transition-colors">
            AAKASH JAISWAL
          </span>
          <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-mono">
            Photography &amp; Motion
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-zinc-300">
          <a href="#portfolio" className="hover:text-amber-300 transition-colors">Portfolio</a>
          <a href="#videography" className="hover:text-amber-300 transition-colors">Motion</a>
          <a href="#services" className="hover:text-amber-300 transition-colors">Services</a>
          <a href="#process" className="hover:text-amber-300 transition-colors">Process</a>
          <a href="#equipment" className="hover:text-amber-300 transition-colors">Kit</a>
          <a href="#journey" className="hover:text-amber-300 transition-colors">Journey</a>
          <a href="#about" className="hover:text-amber-300 transition-colors">About</a>
          <a href="#testimonials" className="hover:text-amber-300 transition-colors">Reviews</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-400/10 hover:shadow-amber-400/20"
          >
            Inquire Project
          </a>

          <button
            onClick={onOpenGuide}
            className="text-xs font-mono text-amber-300 border border-amber-400/30 px-3 py-1.5 rounded-full hover:bg-amber-400/10 transition-colors"
          >
            ⚙ Guide
          </button>
        </div>
      </nav>
    </header>
  );
};
