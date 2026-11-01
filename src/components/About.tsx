import React from 'react';
import { PROFILE_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85"
              alt="Aakash Jaiswal Portrait"
              className="w-full aspect-[4/5] object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-zinc-800">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-display font-bold text-white">AAKASH JAISWAL</h2>
                  <p className="text-[11px] font-mono text-amber-300">Photographer &amp; Visual Storyteller</p>
                </div>
                <div className="text-[10px] font-mono text-zinc-400 text-right">
                  5–6 YRS EXP<br />
                  MUMBAI / GLOBAL
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-mono mb-3">
            <span>// 01 — THE ARTIST &amp; THE VISION</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            {PROFILE_INFO.aboutHeading}
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light mb-4">
            {PROFILE_INFO.aboutText1}
          </p>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light mb-8">
            {PROFILE_INFO.aboutText2}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PROFILE_INFO.stats.map((stat, i) => (
              <div key={i} className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-400/30 transition-all duration-300 group">
                <div className="text-3xl lg:text-4xl font-display font-bold text-amber-200 group-hover:text-amber-100 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-zinc-300 mt-2 font-medium">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-500 mt-1 font-mono">
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
