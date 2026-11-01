import React from 'react';
import { TOOLKIT_AND_EQUIPMENT } from '../data/portfolioData';

interface EquipmentToolkitProps {
  onOpenGuide: () => void;
}

export const EquipmentToolkit: React.FC<EquipmentToolkitProps> = ({ onOpenGuide }) => {
  return (
    <section id="equipment" className="py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-mono mb-2">
            <span>// 06 — HARDWARE &amp; SOFTWARE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Equipment &amp; Creative Toolkit
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mt-2 leading-relaxed">
            Crafted with industry-grade optical bodies, fast primes, precision lighting modifiers, and Adobe's flagship creative suite.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-full mb-4 p-4 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></span>
            <p className="text-xs font-mono text-amber-200">
              {TOOLKIT_AND_EQUIPMENT.notice}
            </p>
          </div>
          <button
            onClick={onOpenGuide}
            className="text-xs font-mono underline text-amber-300 hover:text-white"
          >
            How to edit equipment →
          </button>
        </div>

        {TOOLKIT_AND_EQUIPMENT.categories.map((cat, ci) => (
          <div key={ci} className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-400/30 transition-all duration-300">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800">
              <h3 className="text-lg font-display font-bold text-white">
                {cat.name}
              </h3>
              <span className="text-xs text-amber-300 font-mono">{cat.items.length} units</span>
            </div>

            <div className="space-y-3">
              {cat.items.map((item, ii) => (
                <div key={ii} className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/60 hover:border-zinc-700 transition-colors">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xs font-semibold text-zinc-100">
                      {item.name}
                    </h4>
                    <span className="text-[9px] px-2 py-0.5 rounded bg-zinc-800 text-amber-200 font-mono whitespace-nowrap">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1">
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
