import React from 'react';
import { CREATIVE_PROCESS } from '../data/portfolioData';

export const CreativeProcess: React.FC = () => {
  return (
    <section id="process" className="py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-mono mb-2">
          <span>// 05 — THE METHODOLOGY</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
          The 5-Step Creative Process
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
          From initial moodboard alignment to final high-resolution delivery, every stage is calibrated for artistic precision and seamless client communication.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {CREATIVE_PROCESS.map((step, idx) => (
          <div key={idx} className="relative group p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-400/40 hover:bg-zinc-900 transition-all duration-300">
            <div className="text-4xl font-display font-bold text-amber-400/40 group-hover:text-amber-400 transition-colors">
              {step.step}
            </div>
            <div className="text-[11px] uppercase tracking-widest text-amber-300 font-mono mt-2">
              {step.subtitle}
            </div>
            <h3 className="text-xl font-display font-bold text-white mt-1 group-hover:text-amber-100 transition-colors">
              {step.title}
            </h3>
            <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">
              {step.description}
            </p>

            <div className="mt-4 pt-3 border-t border-zinc-800/60 flex flex-wrap gap-1.5">
              {step.deliverables.map((d, di) => (
                <span key={di} className="text-[10px] px-2 py-0.5 rounded bg-zinc-800/90 text-zinc-300 font-mono">
                  ✓ {d}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
