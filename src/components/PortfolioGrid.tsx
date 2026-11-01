import React, { useState } from 'react';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_PHOTOS } from '../data/portfolioData';
import { PortfolioPhoto } from '../types';

interface PortfolioGridProps {
  onSelectPhoto: (photo: PortfolioPhoto) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onSelectPhoto }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPhotos =
    activeCategory === 'all'
      ? PORTFOLIO_PHOTOS
      : PORTFOLIO_PHOTOS.filter((p) => p.categorySlug === activeCategory);

  return (
    <section id="portfolio" className="py-28 px-6 lg:px-12 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-mono mb-2">
            <span>// 02 — PHOTOGRAPHY GALLERY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Selected Frames
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mt-2">
            Explore curated visual studies across 8 primary disciplines. Click any image to examine full-resolution details and optical EXIF data.
          </p>
        </div>
      </div>

      <div className="mb-10 overflow-x-auto pb-4 scrollbar-none">
        <div className="flex items-center gap-2 min-w-max">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const count =
              cat.id === 'all'
                ? PORTFOLIO_PHOTOS.length
                : PORTFOLIO_PHOTOS.filter((p) => p.categorySlug === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-amber-400 text-black font-semibold'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat.name}
                <span className="ml-1.5 opacity-60 text-[10px] font-mono">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => onSelectPhoto(photo)}
            className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800/80 cursor-pointer transition-all duration-500 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-black aspect-[3/4]"
          >
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-amber-400/90 text-black text-[10px] font-semibold tracking-wider uppercase">
              {photo.category}
            </div>

            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] text-zinc-300 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {photo.exif.lens} · {photo.exif.aperture}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-xs text-amber-200/80 font-mono mb-1">{photo.clientPlaceholder}</p>
              <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-amber-100 transition-colors">
                {photo.title}
              </h3>
              <p className="text-xs text-zinc-400 line-clamp-2 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {photo.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
