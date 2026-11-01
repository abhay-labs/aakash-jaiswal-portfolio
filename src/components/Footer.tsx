import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-zinc-900 bg-black text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display text-base font-bold text-zinc-200">AAKASH JAISWAL</span>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            Professional Photographer &amp; Video Editor · 5–6 Years Craft
          </span>
        </div>

        <div className="flex items-center gap-6 text-zinc-400 font-mono text-xs">
          <a href="#portfolio" className="hover:text-amber-300 transition-colors">Portfolio</a>
          <a href="#videography" className="hover:text-amber-300 transition-colors">Motion</a>
          <a href="#services" className="hover:text-amber-300 transition-colors">Services</a>
          <a href="#contact" className="hover:text-amber-300 transition-colors">Inquire</a>
        </div>

        <div className="text-[11px] font-mono text-zinc-600 text-center md:text-right">
          Designed for cinematic excellence.<br />
          © 2026 Aakash Jaiswal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
