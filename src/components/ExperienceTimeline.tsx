import React from 'react';
import { PROFESSIONAL_JOURNEY } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="journey" className="py-28 px-6 lg:px-12 max-w-5xl mx-auto border-t border-zinc-900">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-mono mb-2">
          <span>// 07 — PROFESSIONAL TIMELINE</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
          5–6 Years of Visual Craft
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
          An editorial progression from foundational lighting apprenticeships to directing high-impact visual campaigns.
        </p>
      </div>

      <div className="space-y-2">
        {PROFESSIONAL_JOURNEY.map((milestone, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12 pb-10 border-l-2 border-zinc-800 last:border-transparent group">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-amber-400 group-hover:scale-125 transition-transform"></div>

            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-amber-400/40 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold text-amber-300 px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/20">
                  {milestone.period}
                </span>
                <span className="text-xs text-zinc-500 font-mono">
                  {milestone.type}
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-white mt-3 group-hover:text-amber-100 transition-colors">
                {milestone.role}
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                {milestone.organization}
              </p>

              <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                {milestone.description}
              </p>

              <ul className="mt-4 space-y-1.5 border-t border-zinc-800/60 pt-3">
                {milestone.highlights.map((h, hi) => (
                  <li key={hi} className="flex items-start gap-2 text-xs text-zinc-400">
                    <span className="text-amber-400 mt-0.5">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
