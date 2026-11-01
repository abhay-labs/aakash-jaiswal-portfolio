import React, { useState } from 'react';
import { CLIENT_TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? CLIENT_TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx + 1) % CLIENT_TESTIMONIALS.length);
  };

  const item = CLIENT_TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-28 px-6 lg:px-12 max-w-5xl mx-auto border-t border-zinc-900">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-mono mb-2">
          <span>// 08 — CLIENT VOICES</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Words of Trust
        </h2>
        <p className="text-xs font-mono text-zinc-500 mt-2">
          [Curated Client Reviews Placeholder — Replace with genuine testimonials in data/portfolioData.ts]
        </p>
      </div>

      <div className="relative p-8 md:p-14 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 shadow-2xl">
        <div className="text-6xl font-display text-amber-400/20 absolute top-6 left-8 select-none">“</div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-lg sm:text-2xl md:text-3xl font-display font-light text-zinc-100 italic leading-relaxed">
            “{item.quote}”
          </p>

          <div className="mt-8 flex flex-col items-center">
            <div className="flex items-center gap-1 text-amber-400 mb-2">★★★★★</div>
            <h3 className="text-base font-display font-bold text-white">{item.clientName}</h3>
            <p className="text-xs font-mono text-amber-300 mt-0.5">{item.projectType}</p>
            <span className="text-[11px] font-mono text-zinc-500 mt-1">{item.location}</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-500">
            0{currentIndex + 1} / 0{CLIENT_TESTIMONIALS.length}
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="p-2.5 rounded-full bg-zinc-800 text-zinc-300 hover:text-white hover:bg-amber-400 hover:text-black transition-colors"
            >
              ←
            </button>
            <button
              onClick={next}
              className="p-2.5 rounded-full bg-zinc-800 text-zinc-300 hover:text-white hover:bg-amber-400 hover:text-black transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
