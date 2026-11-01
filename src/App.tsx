import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PortfolioGrid } from './components/PortfolioGrid';
import { VideoSection } from './components/VideoSection';
import { Services } from './components/Services';
import { CreativeProcess } from './components/CreativeProcess';
import { EquipmentToolkit } from './components/EquipmentToolkit';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PortfolioPhoto, VideographyProject } from './types';

export const App: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PortfolioPhoto | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideographyProject | null>(null);
  const [viewfinderActive, setViewfinderActive] = useState<boolean>(false);
  const [guideOpen, setGuideOpen] = useState<boolean>(false);
  const [prefilledService, setPrefilledService] = useState<string>('Wedding Photography & Films');

  return (
    <div className="bg-[#08080a] text-zinc-100 min-h-screen">
      <Navigation onOpenGuide={() => setGuideOpen(true)} />
      <Hero onToggleViewfinder={() => setViewfinderActive(!viewfinderActive)} />
      <About />
      <PortfolioGrid onSelectPhoto={(p) => setSelectedPhoto(p)} />
      <VideoSection onSelectVideo={(v) => setSelectedVideo(v)} />
      <Services
        onPreselectService={(serviceName) => {
          setPrefilledService(serviceName);
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      <CreativeProcess />
      <EquipmentToolkit onOpenGuide={() => setGuideOpen(true)} />
      <ExperienceTimeline />
      <Testimonials />
      <ContactSection initialService={prefilledService} />
      <Footer />

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-6">
          <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
            <span className="text-amber-400 font-mono text-sm">{selectedPhoto.category}</span>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="text-white text-lg px-3 py-1 bg-zinc-800 rounded-full"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center p-4">
            <img
              src={selectedPhoto.imageUrl}
              alt={selectedPhoto.title}
              className="max-h-[75vh] object-contain rounded-lg"
            />
          </div>
          <div className="p-4 bg-zinc-900 rounded-xl flex justify-between items-center">
            <div>
              <h3 className="font-display text-xl font-bold">{selectedPhoto.title}</h3>
              <p className="text-xs text-zinc-400 font-mono">
                {selectedPhoto.exif.camera} · {selectedPhoto.exif.lens} · {selectedPhoto.exif.aperture} · {selectedPhoto.exif.shutter}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display text-lg font-bold">{selectedVideo.title}</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-white text-lg px-3 py-1 bg-zinc-800 rounded-full"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Viewfinder Mode */}
      {viewfinderActive && (
        <div className="fixed inset-0 pointer-events-none z-50 border-4 border-amber-400/30">
          <div className="absolute top-4 left-4 text-xs font-mono text-red-500 font-bold">● REC [HUD ACTIVE]</div>
          <div className="absolute bottom-4 right-4 text-xs font-mono text-amber-300">ISO 100 · F1.8 · 1/500s</div>
        </div>
      )}

      {/* Guide Modal */}
      {guideOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-xl p-6 text-zinc-200">
            <h3 className="font-display text-xl font-bold mb-3 text-amber-300">Customization Guide</h3>
            <p className="text-xs leading-relaxed text-zinc-400 mb-4">
              Edit <code>src/data/portfolioData.ts</code> or <code>data/portfolioData.js</code> to plug in your confirmed photography, reels, equipment, and contact numbers.
            </p>
            <button
              onClick={() => setGuideOpen(false)}
              className="px-4 py-2 bg-amber-400 text-black text-xs font-bold rounded-lg"
            >
              Close Guide
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
