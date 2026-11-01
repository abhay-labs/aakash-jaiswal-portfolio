import React, { useState } from 'react';
import { VIDEOGRAPHY_PROJECTS } from '../data/portfolioData';
import { VideographyProject } from '../types';

interface VideoSectionProps {
  onSelectVideo: (video: VideographyProject) => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onSelectVideo }) => {
  const [selectedFormat, setSelectedFormat] = useState<'all' | '16:9' | '9:16'>('all');

  const filtered =
    selectedFormat === 'all'
      ? VIDEOGRAPHY_PROJECTS
      : VIDEOGRAPHY_PROJECTS.filter((v) => v.format === selectedFormat);

  return (
    <section id="videography" className="py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-mono mb-2">
            <span>// 03 — CINEMATOGRAPHY &amp; VIDEO EDITING</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Beyond Photography. Into Motion.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mt-2 leading-relaxed">
            Cinematic pacing, dynamic cuts, and precision color grading crafted to elevate visual storytelling.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedFormat('all')}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium ${
              selectedFormat === 'all' ? 'bg-amber-400 text-black font-semibold' : 'bg-zinc-900 text-zinc-400'
            }`}
          >
            All Motion
          </button>
          <button
            onClick={() => setSelectedFormat('16:9')}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium ${
              selectedFormat === '16:9' ? 'bg-amber-400 text-black font-semibold' : 'bg-zinc-900 text-zinc-400'
            }`}
          >
            16:9 Cinema
          </button>
          <button
            onClick={() => setSelectedFormat('9:16')}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium ${
              selectedFormat === '9:16' ? 'bg-amber-400 text-black font-semibold' : 'bg-zinc-900 text-zinc-400'
            }`}
          >
            9:16 Reels
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((video) => (
          <div
            key={video.id}
            onClick={() => onSelectVideo(video)}
            className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer"
          >
            <div className={`relative overflow-hidden ${video.format === '9:16' ? 'aspect-[9/16]' : 'aspect-video'} bg-zinc-950`}>
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-xl transform transition-transform duration-300 group-hover:scale-110">
                  ▶
                </div>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-amber-300 font-mono mb-1">
                  {video.category} · {video.clientPlaceholder}
                </div>
                <h3 className="text-lg font-display font-bold text-white group-hover:text-amber-100 transition-colors">
                  {video.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-2 line-clamp-2">
                  {video.synopsis}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
