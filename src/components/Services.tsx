import React, { useState } from 'react';
import { CREATIVE_SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onPreselectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onPreselectService }) => {
  const [activeTab, setActiveTab] = useState<'photography' | 'postProduction' | 'videoProduction'>('photography');

  const items = CREATIVE_SERVICES[activeTab];

  return (
    <section id="services" className="py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-mono mb-2">
          <span>// 04 — BESPOKE SERVICES</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Creative Capabilities
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
          Comprehensive end-to-end production across photography, post-production retouching, and cinematic video editing.
        </p>

        <div className="flex items-center justify-center gap-4 sm:gap-8 mt-8 border-b border-zinc-800">
          <button
            onClick={() => setActiveTab('photography')}
            className={`pb-3 px-2 text-sm font-medium uppercase tracking-wider transition-all border-b-2 ${
              activeTab === 'photography' ? 'border-amber-400 text-amber-300 font-semibold' : 'border-transparent text-zinc-400'
            }`}
          >
            Photography Disciplines
          </button>
          <button
            onClick={() => setActiveTab('postProduction')}
            className={`pb-3 px-2 text-sm font-medium uppercase tracking-wider transition-all border-b-2 ${
              activeTab === 'postProduction' ? 'border-amber-400 text-amber-300 font-semibold' : 'border-transparent text-zinc-400'
            }`}
          >
            Post-Production
          </button>
          <button
            onClick={() => setActiveTab('videoProduction')}
            className={`pb-3 px-2 text-sm font-medium uppercase tracking-wider transition-all border-b-2 ${
              activeTab === 'videoProduction' ? 'border-amber-400 text-amber-300 font-semibold' : 'border-transparent text-zinc-400'
            }`}
          >
            Video &amp; Reels
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((service, i) => (
          <div key={i} className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-400/40 hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  {service.highlight}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-white group-hover:text-amber-100 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-4 space-y-1.5">
                {service.deliverables.map((d, di) => (
                  <div key={di} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800">
              <button
                onClick={() => onPreselectService(service.title)}
                className="w-full py-2.5 rounded-lg bg-zinc-800 hover:bg-amber-400 hover:text-black text-zinc-200 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
              >
                Inquire for This Service →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
