/**
 * AAKASH JAISWAL — THE ULTIMATE CINEMATIC PHOTOGRAPHY & FILM PORTFOLIO
 * Main Interactive Application Controller
 */

import {
  PROFILE_INFO,
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PHOTOS,
  SIGNATURE_PROJECTS,
  VIDEOGRAPHY_PROJECTS,
  CREATIVE_SERVICES,
  CREATIVE_PROCESS,
  TOOLKIT_AND_EQUIPMENT,
  PROFESSIONAL_JOURNEY,
  CLIENT_TESTIMONIALS
} from '../data/portfolioData.js';

import { soundFx } from './soundfx.js';
import { AIChatbot } from './chatbot.js';

class CinematicPortfolioApp {
  constructor() {
    this.currentCategory = 'all';
    this.currentVideoCategory = 'all';
    this.currentPhotoIndex = 0;
    this.filteredPhotos = [...PORTFOLIO_PHOTOS];
    this.albumCategory = 'all';
    this.albumFilteredPhotos = [...PORTFOLIO_PHOTOS];
    this.viewfinderActive = false;
    this.soundActive = true;
    this.currentTestimonialIndex = 0;
    this.activeServiceTab = 'photography';
    this.galleryViewMode = 'reel';
    this.isReelAutoPlaying = true;
    this.reelRafId = null;
    this.gridExpanded = false;
    this.currentStoryIndex = 0;

    this.init();
  }

  init() {
    window.app = this;
    const safeExec = (fn, name) => {
      try {
        fn.call(this);
      } catch (err) {
        console.warn(`[CinematicPortfolioApp] ${name} notice:`, err);
      }
    };

    safeExec(this.setupCinematicLoader, 'setupCinematicLoader');
    safeExec(this.setupFilmGrain, 'setupFilmGrain');
    safeExec(this.setupCustomCursor, 'setupCustomCursor');
    safeExec(this.setupHeroParallax, 'setupHeroParallax');
    safeExec(this.populateHero, 'populateHero');
    safeExec(this.populateAbout, 'populateAbout');
    safeExec(this.renderGalleryCategories, 'renderGalleryCategories');
    safeExec(this.renderGalleryReel, 'renderGalleryReel');
    safeExec(this.renderGalleryGrid, 'renderGalleryGrid');
    safeExec(this.setupGalleryReelInteractivity, 'setupGalleryReelInteractivity');
    safeExec(this.setupGalleryViewToggle, 'setupGalleryViewToggle');
    safeExec(this.setupFullAlbumModal, 'setupFullAlbumModal');
    safeExec(this.renderSignatureStories, 'renderSignatureStories');
    safeExec(this.renderVideoSection, 'renderVideoSection');
    safeExec(this.renderServicesSection, 'renderServicesSection');
    safeExec(this.renderProcessSection, 'renderProcessSection');
    safeExec(this.renderEquipmentSection, 'renderEquipmentSection');
    safeExec(this.renderTimelineSection, 'renderTimelineSection');
    safeExec(this.renderTestimonials, 'renderTestimonials');
    safeExec(this.setupContactForm, 'setupContactForm');
    safeExec(this.setupEventListeners, 'setupEventListeners');
    safeExec(this.setupScrollSpy, 'setupScrollSpy');
    safeExec(this.setupConfigGuideModal, 'setupConfigGuideModal');
    safeExec(this.setupAIChatbot, 'setupAIChatbot');
  }

  /* ---------------- 01. CINEMATIC OPENING LOADER ---------------- */
  setupCinematicLoader() {
    const loader = document.getElementById('cinematic-loader');
    const counter = document.getElementById('loader-counter');
    const skipBtn = document.getElementById('loader-skip-btn');
    if (!loader) return;

    let progress = 0;
    let isSkipped = false;

    const finishLoading = () => {
      if (isSkipped) return;
      isSkipped = true;
      if (counter) counter.textContent = '100%';
      try {
        soundFx.playShutter();
      } catch (e) {
        // audio autoplay restriction safe
      }
      setTimeout(() => {
        loader.classList.add('loader-hidden');
        document.body.style.overflow = '';
      }, 300);
    };

    if (skipBtn) {
      skipBtn.addEventListener('click', (e) => {
        e.preventDefault();
        finishLoading();
      });
    }

    // Smooth counter progression
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 8) + 4;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        finishLoading();
      }
      if (counter) counter.textContent = `${progress}%`;
    }, 35);

    // Guaranteed failsafe: auto-dismiss loader after max 1.4 seconds
    setTimeout(() => {
      if (!isSkipped) {
        clearInterval(interval);
        finishLoading();
      }
    }, 1400);
  }

  /* ---------------- 02. FILM GRAIN CANVAS ---------------- */
  setupFilmGrain() {
    const canvas = document.getElementById('film-grain-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const isMobile = window.innerWidth < 768 || ('ontouchstart' in window);

    // Optimized resolution scaling for silky smooth 60fps/120fps mobile performance
    const scale = isMobile ? 0.35 : 0.6;
    let width = (canvas.width = Math.floor(window.innerWidth * scale));
    let height = (canvas.height = Math.floor(window.innerHeight * scale));

    window.addEventListener('resize', () => {
      width = canvas.width = Math.floor(window.innerWidth * scale);
      height = canvas.height = Math.floor(window.innerHeight * scale);
    });

    const generateGrain = () => {
      const imgData = ctx.createImageData(width, height);
      const buffer32 = new Uint32Array(imgData.data.buffer);
      const len = buffer32.length;
      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.11) {
          buffer32[i] = 0x09ffffff; // Subtle grain speck
        }
      }
      ctx.putImageData(imgData, 0, 0);
    };

    generateGrain();
    if (!isMobile) {
      setInterval(generateGrain, 160);
    } else {
      setInterval(generateGrain, 450);
    }
  }

  /* ---------------- 03. CUSTOM CURSOR ---------------- */
  setupCustomCursor() {
    // Only run cursor tracking on desktop fine-pointer devices
    if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) {
      return;
    }

    const dot = document.querySelector('.custom-cursor-dot');
    const ring = document.querySelector('.custom-cursor-ring');
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(animateRing);
    };
    animateRing();

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('button, a, input, select, textarea, .portfolio-card, .story-card, .video-card')) {
        document.body.classList.add('cursor-hover');
      } else {
        document.body.classList.remove('cursor-hover');
      }
    });
  }

  /* ---------------- 04. HERO MOUSE PARALLAX ---------------- */
  setupHeroParallax() {
    const heroImg = document.getElementById('hero-parallax-img');
    const heroSection = document.getElementById('hero');
    if (!heroImg || !heroSection) return;

    heroSection.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 28;
      const y = (e.clientY / window.innerHeight - 0.5) * 28;
      heroImg.style.transform = `scale(1.06) translate(${x}px, ${y}px)`;
    });

    heroSection.addEventListener('mouseleave', () => {
      heroImg.style.transform = `scale(1.04) translate(0px, 0px)`;
    });
  }

  /* ---------------- 05. HERO SECTION POPULATION ---------------- */
  populateHero() {
    const heroTagline = document.getElementById('hero-tagline');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const expBadge = document.getElementById('hero-exp-badge');

    if (heroTagline) heroTagline.textContent = `"${PROFILE_INFO.tagline}"`;
    if (heroSubtitle) heroSubtitle.textContent = PROFILE_INFO.heroSubtitle;
    if (expBadge) expBadge.textContent = `${PROFILE_INFO.experienceYears} Industry Experience · ${PROFILE_INFO.workModel}`;
  }

  /* ---------------- 06. ABOUT SECTION ---------------- */
  populateAbout() {
    const heading = document.getElementById('about-heading');
    const sub = document.getElementById('about-subheading');
    const text1 = document.getElementById('about-text-1');
    const text2 = document.getElementById('about-text-2');
    const statsContainer = document.getElementById('about-stats-grid');
    const portraitImg = document.getElementById('about-portrait-img');

    if (portraitImg && PROFILE_INFO.aboutImage) {
      portraitImg.src = PROFILE_INFO.aboutImage;
    }
    if (heading) heading.textContent = PROFILE_INFO.aboutHeading;
    if (sub) sub.textContent = PROFILE_INFO.aboutSubheading;
    if (text1) text1.textContent = PROFILE_INFO.aboutText1;
    if (text2) text2.textContent = PROFILE_INFO.aboutText2;

    if (statsContainer) {
      statsContainer.innerHTML = PROFILE_INFO.stats
        .map((stat) => {
          const isWord = stat.value.length > 4;
          return `
          <div class="p-4 sm:p-4 lg:p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-amber-400/40 transition-all duration-300 group flex flex-col justify-between overflow-hidden">
            <div class="h-9 sm:h-8 lg:h-10 flex items-center">
              <span class="${
                isWord
                  ? 'text-lg sm:text-base md:text-lg lg:text-base xl:text-xl font-display font-bold tracking-tight text-amber-200 group-hover:text-amber-100 transition-colors uppercase leading-none truncate max-w-full'
                  : 'text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-amber-200 group-hover:text-amber-100 transition-colors leading-none'
              }" title="${stat.value}">
                ${stat.value}
              </span>
            </div>
            <div class="mt-3">
              <div class="text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-300 font-medium truncate" title="${stat.label}">
                ${stat.label}
              </div>
              <div class="text-[10px] sm:text-[11px] text-zinc-500 mt-1 font-mono-meta leading-snug line-clamp-2" title="${stat.note}">
                ${stat.note}
              </div>
            </div>
          </div>
        `;
        })
        .join('');
    }
  }

  /* ---------------- 07. GALLERY CATEGORIES & MASONRY ---------------- */
  renderGalleryCategories() {
    const nav = document.getElementById('gallery-category-nav');
    if (!nav) return;

    nav.innerHTML = PORTFOLIO_CATEGORIES.map((cat) => {
      const count =
        cat.id === 'all'
          ? PORTFOLIO_PHOTOS.length
          : PORTFOLIO_PHOTOS.filter((p) => p.categorySlug === cat.id).length;

      return `
        <button 
          data-category="${cat.id}"
          class="gallery-filter-btn px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 whitespace-nowrap ${
            cat.id === this.currentCategory
              ? 'bg-amber-400 text-black font-semibold shadow-lg shadow-amber-400/20'
              : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
          }">
          <span class="opacity-50 font-mono-meta mr-1 text-[10px]">${cat.number}</span>
          ${cat.name}
          <span class="ml-1.5 opacity-60 text-[10px] font-mono-meta">(${count})</span>
        </button>
      `;
    }).join('');

    nav.querySelectorAll('.gallery-filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        soundFx.playClick();
        const cat = btn.getAttribute('data-category');
        this.filterGallery(cat);
      });
    });
  }

  filterGallery(categorySlug) {
    this.currentCategory = categorySlug;
    this.renderGalleryCategories();

    if (categorySlug === 'all') {
      this.filteredPhotos = [...PORTFOLIO_PHOTOS];
    } else {
      this.filteredPhotos = PORTFOLIO_PHOTOS.filter(
        (p) => p.categorySlug === categorySlug
      );
    }
    
    // Smooth reset scroll position
    const track = document.getElementById('gallery-reel-track');
    if (track) track.scrollLeft = 0;

    this.renderGalleryReel();
    this.renderGalleryGrid();
  }

  /* ---------------- 07A. CINEMATIC HORIZONTAL REEL SHOWCASE ---------------- */
  renderGalleryReel() {
    const track = document.getElementById('gallery-reel-track');
    if (!track) return;

    if (this.filteredPhotos.length === 0) {
      track.innerHTML = `
        <div class="py-16 text-center text-zinc-500 font-mono-meta w-full">
          <p class="text-base">No photographs found under this collection.</p>
        </div>
      `;
      return;
    }

    track.innerHTML = this.filteredPhotos
      .map((photo, index) => {
        // Dynamic responsive width based on orientation for visual cadence
        let cardWidth = 'w-[320px] sm:w-[400px]'; // default landscape
        if (photo.aspectRatio === 'portrait') {
          cardWidth = 'w-[260px] sm:w-[310px]';
        } else if (photo.aspectRatio === 'cinematic') {
          cardWidth = 'w-[420px] sm:w-[500px]';
        } else if (photo.aspectRatio === 'square') {
          cardWidth = 'w-[290px] sm:w-[350px]';
        }

        return `
        <div 
          data-reel-index="${index}"
          class="reel-card ${cardWidth} group cursor-pointer">
          
          <img 
            src="${photo.thumbnailUrl}" 
            alt="${photo.title} by Aakash Jaiswal" 
            loading="lazy"
            class="w-full h-full object-cover"
          />

          <!-- Luxury Dark Vignette -->
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20 opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

          <!-- Top Meta Badges -->
          <div class="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10 pointer-events-none">
            <span class="px-2.5 py-1 rounded-full bg-amber-400 text-black text-[10px] font-bold tracking-wider uppercase shadow-md">
              ${photo.category}
            </span>

            <span class="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[10px] text-zinc-300 font-mono-meta opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              ${photo.exif.lens} · ${photo.exif.aperture}
            </span>
          </div>

          <!-- Central Optical Viewfinder Center on Hover -->
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div class="w-12 h-12 rounded-full bg-amber-400/90 text-black flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <svg class="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>
          </div>

          <!-- Bottom Card Content -->
          <div class="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 transform transition-transform duration-300">
            <p class="text-[11px] text-amber-300/90 font-mono-meta mb-1.5 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span class="truncate">${photo.location || photo.clientPlaceholder}</span>
            </p>
            <h3 class="text-lg sm:text-xl font-display font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
              ${photo.title}
            </h3>
            <p class="text-xs text-zinc-300 line-clamp-2 mt-1.5 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              ${photo.description}
            </p>

            <div class="mt-3 flex items-center justify-between text-[11px] text-zinc-400 font-mono-meta pt-2.5 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-zinc-300">${photo.exif.camera}</span>
              <span class="text-amber-400 font-bold flex items-center gap-1">
                Inspect Frame ↗
              </span>
            </div>
          </div>
        </div>
      `;
      })
      .join('');

    track.querySelectorAll('.reel-card').forEach((card) => {
      card.addEventListener('click', () => {
        const index = parseInt(card.getAttribute('data-reel-index'), 10);
        soundFx.playShutter();
        this.openLightbox(index);
      });
    });

    this.updateReelProgress();
  }

  setupGalleryReelInteractivity() {
    const track = document.getElementById('gallery-reel-track');
    const prevBtn = document.getElementById('gallery-reel-prev');
    const nextBtn = document.getElementById('gallery-reel-next');
    const autoplayToggle = document.getElementById('reel-autoplay-toggle');
    const autoplayDot = document.getElementById('reel-autoplay-dot');
    const autoplayText = document.getElementById('reel-autoplay-text');
    if (!track) return;

    let isHovered = false;
    let isUserDragging = false;
    let startX = 0;
    let scrollStart = 0;
    const glideSpeed = 0.85;

    // Smooth auto-glide loop
    const animateReel = () => {
      if (
        this.galleryViewMode === 'reel' && 
        this.isReelAutoPlaying && 
        !isHovered && 
        !isUserDragging
      ) {
        track.scrollLeft += glideSpeed;
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (track.scrollLeft >= maxScroll - 2) {
          track.scrollLeft = 0;
        }
        this.updateReelProgress();
      }
      this.reelRafId = requestAnimationFrame(animateReel);
    };

    if (this.reelRafId) cancelAnimationFrame(this.reelRafId);
    this.reelRafId = requestAnimationFrame(animateReel);

    // Pause on hover / touch
    track.addEventListener('mouseenter', () => { isHovered = true; });
    track.addEventListener('mouseleave', () => { isHovered = false; });
    track.addEventListener('touchstart', () => { isHovered = true; }, { passive: true });
    track.addEventListener('touchend', () => { isHovered = false; }, { passive: true });

    // Autoplay toggle button
    if (autoplayToggle) {
      autoplayToggle.addEventListener('click', () => {
        soundFx.playClick();
        this.isReelAutoPlaying = !this.isReelAutoPlaying;
        if (this.isReelAutoPlaying) {
          if (autoplayDot) {
            autoplayDot.className = 'w-2 h-2 rounded-full bg-emerald-400 animate-pulse';
          }
          if (autoplayText) autoplayText.textContent = 'Auto-Glide Active';
        } else {
          if (autoplayDot) {
            autoplayDot.className = 'w-2 h-2 rounded-full bg-amber-400';
          }
          if (autoplayText) autoplayText.textContent = 'Auto-Glide Paused';
        }
      });
    }

    // Prev / Next Arrows
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        soundFx.playClick();
        const scrollAmount = track.clientWidth * 0.75;
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setTimeout(() => this.updateReelProgress(), 300);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        soundFx.playClick();
        const scrollAmount = track.clientWidth * 0.75;
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setTimeout(() => this.updateReelProgress(), 300);
      });
    }

    // Mouse Drag
    track.addEventListener('mousedown', (e) => {
      isUserDragging = true;
      track.classList.add('cursor-grabbing');
      startX = e.pageX - track.offsetLeft;
      scrollStart = track.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      if (isUserDragging) {
        isUserDragging = false;
        track.classList.remove('cursor-grabbing');
      }
    });

    track.addEventListener('mousemove', (e) => {
      if (!isUserDragging) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollStart - walk;
      this.updateReelProgress();
    });

    // Horizontal wheel scroll
    track.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        track.scrollLeft += e.deltaY * 1.25;
        this.updateReelProgress();
      }
    }, { passive: false });

    track.addEventListener('scroll', () => {
      this.updateReelProgress();
    }, { passive: true });
  }

  updateReelProgress() {
    const track = document.getElementById('gallery-reel-track');
    const fill = document.getElementById('reel-progress-fill');
    const counter = document.getElementById('reel-frame-counter');
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const progress = maxScroll > 0 ? (track.scrollLeft / maxScroll) * 100 : 0;

    if (fill) {
      fill.style.width = `${Math.min(Math.max(progress, 3), 100)}%`;
    }

    if (counter && this.filteredPhotos.length > 0) {
      const cards = track.querySelectorAll('.reel-card');
      let currentIdx = 0;
      cards.forEach((card, idx) => {
        const cardOffset = card.offsetLeft - track.offsetLeft;
        if (cardOffset <= track.scrollLeft + 120) {
          currentIdx = idx;
        }
      });
      counter.textContent = `Frame ${String(currentIdx + 1).padStart(2, '0')} of ${String(this.filteredPhotos.length).padStart(2, '0')}`;
    }
  }

  setupGalleryViewToggle() {
    const reelBtn = document.getElementById('view-mode-reel-btn');
    const gridBtn = document.getElementById('view-mode-grid-btn');
    const reelContainer = document.getElementById('gallery-reel-container');
    const gridContainer = document.getElementById('gallery-grid-container');
    const arrows = document.getElementById('gallery-reel-arrows');
    const expandBtn = document.getElementById('grid-expand-toggle-btn');

    if (reelBtn && gridBtn) {
      reelBtn.addEventListener('click', () => {
        soundFx.playClick();
        this.galleryViewMode = 'reel';
        reelBtn.className = 'px-3.5 py-1.5 rounded-full bg-amber-400 text-black font-semibold flex items-center gap-1.5 transition-all shadow-md active-touch';
        gridBtn.className = 'px-3.5 py-1.5 rounded-full text-zinc-400 hover:text-white transition-all flex items-center gap-1.5 active-touch';
        if (reelContainer) reelContainer.classList.remove('hidden');
        if (gridContainer) gridContainer.classList.add('hidden');
        if (arrows) arrows.classList.remove('hidden');
        this.renderGalleryReel();
      });

      gridBtn.addEventListener('click', () => {
        soundFx.playClick();
        this.galleryViewMode = 'grid';
        gridBtn.className = 'px-3.5 py-1.5 rounded-full bg-amber-400 text-black font-semibold flex items-center gap-1.5 transition-all shadow-md active-touch';
        reelBtn.className = 'px-3.5 py-1.5 rounded-full text-zinc-400 hover:text-white transition-all flex items-center gap-1.5 active-touch';
        if (reelContainer) reelContainer.classList.add('hidden');
        if (gridContainer) gridContainer.classList.remove('hidden');
        if (arrows) arrows.classList.add('hidden');
        this.renderGalleryGrid();
      });
    }

    if (expandBtn) {
      expandBtn.addEventListener('click', () => {
        soundFx.playClick();
        this.gridExpanded = !this.gridExpanded;
        expandBtn.textContent = this.gridExpanded 
          ? 'Show Fewer Frames ↑' 
          : `Show All ${this.filteredPhotos.length} Frames ↓`;
        this.renderGalleryGrid();
      });
    }
  }

  /* ---------------- 07B. COMPACT MASONRY GRID (COLLAPSIBLE) ---------------- */
  renderGalleryGrid() {
    const grid = document.getElementById('gallery-masonry-grid');
    const expandWrapper = document.getElementById('grid-expand-wrapper');
    const expandBtn = document.getElementById('grid-expand-toggle-btn');
    if (!grid) return;

    if (this.filteredPhotos.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center text-zinc-500 font-mono-meta">
          <p class="text-base">No photographs found under this collection.</p>
        </div>
      `;
      if (expandWrapper) expandWrapper.classList.add('hidden');
      return;
    }

    // Default to initial 6 cards if not expanded so it never bloats vertical space
    const displayPhotos = this.gridExpanded 
      ? this.filteredPhotos 
      : this.filteredPhotos.slice(0, 6);

    if (expandWrapper) {
      if (this.filteredPhotos.length > 6) {
        expandWrapper.classList.remove('hidden');
        if (expandBtn) {
          expandBtn.textContent = this.gridExpanded 
            ? 'Show Fewer Frames ↑' 
            : `Show All ${this.filteredPhotos.length} Frames ↓`;
        }
      } else {
        expandWrapper.classList.add('hidden');
      }
    }

    grid.innerHTML = displayPhotos
      .map((photo, index) => {
        const aspectClass =
          photo.aspectRatio === 'portrait'
            ? 'aspect-[3/4] md:row-span-2'
            : photo.aspectRatio === 'cinematic'
            ? 'aspect-[21/9] md:col-span-2'
            : photo.aspectRatio === 'square'
            ? 'aspect-square'
            : 'aspect-[16/10]';

        return `
        <div 
          data-photo-index="${index}"
          class="portfolio-card group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/80 cursor-pointer transition-all duration-500 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-black ${aspectClass}">
          
          <img 
            src="${photo.thumbnailUrl}" 
            alt="${photo.title} by Aakash Jaiswal" 
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-75 group-hover:opacity-95 transition-opacity duration-300"></div>

          <!-- Top Meta Pills -->
          <div class="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
            <span class="px-2.5 py-1 rounded-md bg-amber-400/90 text-black text-[10px] font-bold tracking-wider uppercase">
              ${photo.category}
            </span>

            <span class="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[10px] text-zinc-300 font-mono-meta opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              ${photo.exif.lens} · ${photo.exif.aperture}
            </span>
          </div>

          <!-- Bottom Card Content -->
          <div class="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300">
            <p class="text-[11px] text-amber-200/80 font-mono-meta mb-1">${photo.location || photo.clientPlaceholder}</p>
            <h3 class="text-lg md:text-xl font-display font-bold text-white group-hover:text-amber-100 transition-colors">
              ${photo.title}
            </h3>
            <p class="text-xs text-zinc-400 line-clamp-2 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              ${photo.description}
            </p>

            <div class="mt-3 flex items-center justify-between text-[11px] text-zinc-400 font-mono-meta pt-2 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>${photo.exif.camera}</span>
              <span class="text-amber-300 font-medium flex items-center gap-1">
                View Frame ↗
              </span>
            </div>
          </div>
        </div>
      `;
      })
      .join('');

    grid.querySelectorAll('.portfolio-card').forEach((card) => {
      card.addEventListener('click', () => {
        const index = parseInt(card.getAttribute('data-photo-index'), 10);
        soundFx.playShutter();
        this.openLightbox(index);
      });
    });
  }

  /* ---------------- 07C. DEDICATED FULL EXHIBITION ALBUM MODAL ---------------- */
  setupFullAlbumModal() {
    const openBtn = document.getElementById('open-full-album-btn');
    const closeBtn = document.getElementById('close-full-album-btn');
    const modal = document.getElementById('full-album-modal');
    if (!modal) return;

    if (openBtn) {
      openBtn.addEventListener('click', () => {
        soundFx.playShutter();
        this.openFullAlbum();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        soundFx.playClick();
        this.closeFullAlbum();
      });
    }

    // Escape key listener for album modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        this.closeFullAlbum();
      }
    });

    this.renderAlbumCategories();
    this.renderFullAlbumGrid();
  }

  openFullAlbum() {
    const modal = document.getElementById('full-album-modal');
    if (!modal) return;
    this.renderAlbumCategories();
    this.renderFullAlbumGrid();
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  closeFullAlbum() {
    const modal = document.getElementById('full-album-modal');
    if (!modal) return;
    soundFx.playClick();
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  renderAlbumCategories() {
    const nav = document.getElementById('album-category-nav');
    if (!nav) return;

    nav.innerHTML = PORTFOLIO_CATEGORIES.map((cat) => {
      const count =
        cat.id === 'all'
          ? PORTFOLIO_PHOTOS.length
          : PORTFOLIO_PHOTOS.filter((p) => p.categorySlug === cat.id).length;

      const isActive = cat.id === this.albumCategory;

      return `
        <button 
          data-album-category="${cat.id}"
          class="album-filter-btn px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all duration-300 whitespace-nowrap active-touch ${
            isActive
              ? 'bg-amber-400 text-black font-semibold shadow-md'
              : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
          }">
          ${cat.name}
          <span class="ml-1 opacity-70 text-[9px]">(${count})</span>
        </button>
      `;
    }).join('');

    nav.querySelectorAll('.album-filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        soundFx.playClick();
        const cat = btn.getAttribute('data-album-category');
        this.filterAlbum(cat);
      });
    });
  }

  filterAlbum(categorySlug) {
    this.albumCategory = categorySlug;
    this.renderAlbumCategories();

    if (categorySlug === 'all') {
      this.albumFilteredPhotos = [...PORTFOLIO_PHOTOS];
    } else {
      this.albumFilteredPhotos = PORTFOLIO_PHOTOS.filter(
        (p) => p.categorySlug === categorySlug
      );
    }

    this.renderFullAlbumGrid();
  }

  renderFullAlbumGrid() {
    const grid = document.getElementById('full-album-grid');
    const counter = document.getElementById('album-counter-display');
    if (!grid) return;

    if (counter) {
      const catObj = PORTFOLIO_CATEGORIES.find((c) => c.id === this.albumCategory);
      const catLabel = catObj ? catObj.name : 'Selected';
      counter.textContent = `Displaying ${this.albumFilteredPhotos.length} Photographs · Collection: ${catLabel}`;
    }

    if (this.albumFilteredPhotos.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-20 text-center text-zinc-500 font-mono-meta">
          <p class="text-base">No photographs found under this collection.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = this.albumFilteredPhotos
      .map((photo, index) => {
        const aspectClass =
          photo.aspectRatio === 'portrait'
            ? 'aspect-[3/4]'
            : photo.aspectRatio === 'cinematic'
            ? 'aspect-[16/9]'
            : photo.aspectRatio === 'square'
            ? 'aspect-square'
            : 'aspect-[4/3]';

        return `
        <div 
          data-album-photo-index="${index}"
          class="album-card group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-400/80 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-black">
          
          <div class="w-full ${aspectClass} overflow-hidden bg-zinc-950 relative">
            <img 
              src="${photo.thumbnailUrl}" 
              alt="${photo.title} by Aakash Jaiswal" 
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
            
            <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
              <span class="px-2 py-0.5 rounded-full bg-amber-400 text-black text-[9px] font-bold tracking-wider uppercase font-mono">
                ${photo.category}
              </span>
              <span class="px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[9px] text-zinc-300 font-mono">
                ${photo.exif.focalLength}
              </span>
            </div>

            <!-- View Icon Center Overlay -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div class="w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <svg class="w-4 h-4 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
              </div>
            </div>
          </div>

          <div class="p-4 bg-zinc-900/90 border-t border-zinc-800/80">
            <p class="text-[10px] text-amber-300 font-mono mb-1 truncate">${photo.location || photo.clientPlaceholder}</p>
            <h3 class="text-sm font-display font-bold text-white group-hover:text-amber-200 transition-colors truncate">
              ${photo.title}
            </h3>
            <div class="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-400">
              <span>${photo.exif.lens}</span>
              <span class="text-amber-400 font-medium">View Frame ↗</span>
            </div>
          </div>
        </div>
        `;
      })
      .join('');

    grid.querySelectorAll('.album-card').forEach((card) => {
      card.addEventListener('click', () => {
        const index = parseInt(card.getAttribute('data-album-photo-index'), 10);
        const photo = this.albumFilteredPhotos[index];
        const globalIndex = this.filteredPhotos.findIndex((p) => p.id === photo.id);
        soundFx.playShutter();
        this.openLightbox(globalIndex >= 0 ? globalIndex : 0);
      });
    });
  }

  /* ---------------- 08. SIGNATURE PROJECT STORYTELLING (MAGAZINE EDITORIAL SPREAD) ---------------- */
  renderSignatureStories() {
    this.renderStoryTabsNav();
    this.renderActiveStorySpread();
    this.renderStoryCoversGrid();
    this.setupStoryNavigation();
  }

  renderStoryTabsNav() {
    const nav = document.getElementById('story-tabs-nav');
    if (!nav) return;

    nav.innerHTML = SIGNATURE_PROJECTS.map((story, idx) => {
      const isActive = idx === this.currentStoryIndex;
      const cleanCat = story.category.split('&')[0].trim();

      return `
        <button 
          data-story-tab-idx="${idx}"
          class="px-3.5 py-1.5 rounded-full text-xs font-mono transition-all active-touch ${
            isActive
              ? 'bg-amber-400 text-black font-semibold shadow-md'
              : 'text-zinc-400 hover:text-white'
          }">
          <span>0${idx + 1}</span>
          <span class="hidden sm:inline ml-1">· ${cleanCat}</span>
        </button>
      `;
    }).join('');

    nav.querySelectorAll('[data-story-tab-idx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        soundFx.playClick();
        const idx = parseInt(btn.getAttribute('data-story-tab-idx'), 10);
        this.currentStoryIndex = idx;
        this.renderStoryTabsNav();
        this.renderActiveStorySpread();
        this.renderStoryCoversGrid();
      });
    });
  }

  renderActiveStorySpread() {
    const stage = document.getElementById('active-story-stage');
    if (!stage) return;
    const story = SIGNATURE_PROJECTS[this.currentStoryIndex];
    if (!story) return;

    stage.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <!-- Left Column: Master Display Visual + Interactive Supporting Filmstrip -->
        <div class="lg:col-span-7 flex flex-col gap-4">
          <!-- Main Selected Frame Display -->
          <div class="group relative rounded-2xl overflow-hidden bg-zinc-950 aspect-[16/10] border border-zinc-800 shadow-2xl">
            <img 
              id="active-story-main-img"
              src="${story.heroImage}" 
              alt="${story.title}" 
              class="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
            
            <!-- Badges -->
            <div class="absolute top-4 left-4 flex items-center gap-2 z-10">
              <span class="px-3 py-1 rounded-full bg-amber-400 text-black text-[11px] font-bold font-mono uppercase tracking-wider shadow-md">
                ${story.category}
              </span>
              <span class="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300">
                ${story.year}
              </span>
            </div>

            <!-- Live Caption on Main Frame -->
            <div class="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between z-10">
              <div class="flex items-center gap-2 text-xs font-mono text-zinc-300 truncate mr-2">
                <span class="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 animate-pulse"></span>
                <span id="active-story-caption" class="truncate">${story.title} · Hero Composition</span>
              </div>
              <span class="text-[10px] font-mono text-amber-300 flex-shrink-0 font-semibold">Active View</span>
            </div>

            <!-- Corner Viewfinder Marks -->
            <div class="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-amber-400/80 pointer-events-none"></div>
            <div class="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-amber-400/80 pointer-events-none"></div>
          </div>

          <!-- Interactive Supporting Filmstrip (Mini Gallery within Story) -->
          <div class="bg-zinc-950/80 p-3 sm:p-4 rounded-2xl border border-zinc-800/80">
            <div class="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2.5 px-1">
              <span>Supporting Sequence (${story.supportingPhotos.length + 1} Frames)</span>
              <span class="text-amber-300/80">Hover/click thumbnail to swap frame ↗</span>
            </div>
            
            <div class="flex items-center gap-2.5 overflow-x-auto scrollbar-none pb-1">
              <!-- Master Frame Thumbnail -->
              <button 
                data-story-thumb="${story.heroImage}"
                data-story-caption="${story.title} · Hero Composition"
                class="story-thumb-btn flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 border-amber-400 transition-all active-touch relative shadow-md">
                <img src="${story.heroImage}" alt="Hero" class="w-full h-full object-cover"/>
                <span class="absolute bottom-0 inset-x-0 bg-amber-400 text-black text-[8px] font-bold font-mono text-center">HERO</span>
              </button>

              <!-- Supporting Frame Thumbnails -->
              ${story.supportingPhotos.map((sp) => `
                <button 
                  data-story-thumb="${sp.url}"
                  data-story-caption="${sp.caption}"
                  class="story-thumb-btn flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 border-zinc-700/80 hover:border-amber-400/70 opacity-70 hover:opacity-100 transition-all active-touch">
                  <img src="${sp.url}" alt="${sp.caption}" class="w-full h-full object-cover"/>
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Right Column: Typographic Editorial Review -->
        <div class="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <!-- Roman Numeral Monogram & Location -->
            <div class="flex items-center justify-between text-xs font-mono text-zinc-500 mb-3">
              <span class="text-amber-400 font-bold tracking-widest">// ESSAY 0${this.currentStoryIndex + 1} OF 03</span>
              <span class="truncate max-w-[200px] text-right">${story.location}</span>
            </div>

            <!-- Title -->
            <h3 class="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              ${story.title}
            </h3>

            <!-- Synopsis -->
            <p class="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
              ${story.synopsis}
            </p>

            <!-- Curated Notes: Creative Approach & Behind the Scenes -->
            <div class="space-y-3 mb-6">
              <div class="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
                <span class="text-[10px] font-mono uppercase tracking-widest text-amber-300 block mb-1">
                  Creative Direction &amp; Lighting
                </span>
                <p class="text-xs text-zinc-400 leading-relaxed font-light">
                  ${story.creativeApproach}
                </p>
              </div>

              <div class="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
                <span class="text-[10px] font-mono uppercase tracking-widest text-amber-300 block mb-1">
                  Behind the Shutter &amp; Optics
                </span>
                <p class="text-xs text-zinc-400 leading-relaxed font-light">
                  ${story.behindTheScenes}
                </p>
              </div>
            </div>
          </div>

          <!-- CTAs -->
          <div class="pt-4 border-t border-zinc-800 flex items-center justify-between gap-4 flex-wrap">
            <button 
              id="open-active-story-modal-btn"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-lg active-touch">
              <span>Read Full Case Study</span>
              <span>→</span>
            </button>

            <span class="text-xs font-mono text-zinc-500">
              ${story.supportingPhotos.length + 1} Curated Assets
            </span>
          </div>
        </div>

      </div>
    `;

    // Bind thumbnail click/hover to swap the main photo and caption
    const mainImg = document.getElementById('active-story-main-img');
    const captionEl = document.getElementById('active-story-caption');
    const thumbBtns = stage.querySelectorAll('.story-thumb-btn');

    thumbBtns.forEach((btn) => {
      const handleSwap = () => {
        const thumbUrl = btn.getAttribute('data-story-thumb');
        const caption = btn.getAttribute('data-story-caption');
        if (mainImg && thumbUrl) {
          mainImg.style.opacity = '0.5';
          setTimeout(() => {
            mainImg.src = thumbUrl;
            mainImg.style.opacity = '1';
          }, 120);
        }
        if (captionEl && caption) {
          captionEl.textContent = caption;
        }
        thumbBtns.forEach((b) => {
          b.classList.remove('border-amber-400', 'opacity-100');
          b.classList.add('border-zinc-700/80', 'opacity-70');
        });
        btn.classList.add('border-amber-400', 'opacity-100');
        btn.classList.remove('opacity-70');
      };

      btn.addEventListener('click', handleSwap);
      btn.addEventListener('mouseenter', handleSwap);
    });

    const openModalBtn = document.getElementById('open-active-story-modal-btn');
    if (openModalBtn) {
      openModalBtn.addEventListener('click', () => {
        soundFx.playShutter();
        this.openStoryModal(story);
      });
    }
  }

  renderStoryCoversGrid() {
    const grid = document.getElementById('story-cover-cards-grid');
    if (!grid) return;

    grid.innerHTML = SIGNATURE_PROJECTS.map((story, idx) => {
      const isActive = idx === this.currentStoryIndex;

      return `
      <div 
        data-story-cover-idx="${idx}"
        class="group relative rounded-2xl overflow-hidden bg-zinc-900 border transition-all duration-300 cursor-pointer ${
          isActive 
            ? 'border-amber-400 ring-1 ring-amber-400 shadow-xl shadow-amber-400/10' 
            : 'border-zinc-800 hover:border-zinc-600'
        }">
        <div class="aspect-[16/10] overflow-hidden bg-zinc-950 relative">
          <img 
            src="${story.heroImage}" 
            alt="${story.title}" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          
          <div class="absolute top-3 left-3 flex items-center gap-1.5 z-10">
            <span class="px-2.5 py-1 rounded-full ${isActive ? 'bg-amber-400 text-black' : 'bg-black/80 text-zinc-300'} text-[10px] font-bold font-mono">
              0${idx + 1} · ${story.category.split('&')[0].trim()}
            </span>
          </div>

          <div class="absolute bottom-3 left-3 right-3 z-10">
            <p class="text-[10px] font-mono text-zinc-400 mb-0.5 truncate">${story.location}</p>
            <h4 class="text-sm font-display font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
              ${story.title}
            </h4>
          </div>
        </div>

        <div class="p-3 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono">
          <span class="${isActive ? 'text-amber-400 font-semibold' : 'text-zinc-500'}">
            ${isActive ? '● Currently Active Spread' : 'Click to Load Spread'}
          </span>
          <span class="text-amber-300">↗</span>
        </div>
      </div>
      `;
    }).join('');

    grid.querySelectorAll('[data-story-cover-idx]').forEach((card) => {
      card.addEventListener('click', () => {
        soundFx.playClick();
        const idx = parseInt(card.getAttribute('data-story-cover-idx'), 10);
        this.currentStoryIndex = idx;
        this.renderStoryTabsNav();
        this.renderActiveStorySpread();
        this.renderStoryCoversGrid();
        
        const stage = document.getElementById('active-story-stage');
        if (stage) {
          stage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });
  }

  setupStoryNavigation() {
    const prevBtn = document.getElementById('story-prev-btn');
    const nextBtn = document.getElementById('story-next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        soundFx.playClick();
        this.currentStoryIndex = (this.currentStoryIndex - 1 + SIGNATURE_PROJECTS.length) % SIGNATURE_PROJECTS.length;
        this.renderStoryTabsNav();
        this.renderActiveStorySpread();
        this.renderStoryCoversGrid();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        soundFx.playClick();
        this.currentStoryIndex = (this.currentStoryIndex + 1) % SIGNATURE_PROJECTS.length;
        this.renderStoryTabsNav();
        this.renderActiveStorySpread();
        this.renderStoryCoversGrid();
      });
    }
  }

  /* ---------------- STORY CASE STUDY MODAL ---------------- */
  openStoryModal(story) {
    const modal = document.getElementById('story-detail-modal');
    const container = document.getElementById('story-modal-content');
    if (!modal || !container) return;

    container.innerHTML = `
      <div class="relative w-full aspect-[21/9] sm:aspect-[16/8] rounded-2xl overflow-hidden mb-8 bg-zinc-950">
        <img src="${story.heroImage}" alt="${story.title}" class="w-full h-full object-cover"/>
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6">
          <span class="px-3 py-1 rounded bg-amber-400 text-black text-[11px] font-bold uppercase tracking-wider font-mono-meta">
            ${story.category}
          </span>
          <h2 class="font-display text-3xl sm:text-5xl font-bold text-white mt-2">
            ${story.title}
          </h2>
          <p class="text-xs font-mono-meta text-amber-200 mt-1">
            ${story.location} · Year ${story.year}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-8 border-b border-zinc-800">
        <div>
          <h3 class="text-sm font-mono-meta uppercase tracking-widest text-amber-300 mb-2">// The Narrative & Vision</h3>
          <p class="text-sm text-zinc-300 leading-relaxed font-light">${story.synopsis}</p>
          <p class="text-sm text-zinc-400 leading-relaxed font-light mt-3">${story.creativeApproach}</p>
        </div>
        <div class="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
          <h3 class="text-sm font-mono-meta uppercase tracking-widest text-amber-300 mb-2">// Behind The Lens & Post-Production</h3>
          <p class="text-xs text-zinc-300 leading-relaxed">${story.behindTheScenes}</p>
          <div class="mt-4 flex flex-wrap gap-2 text-[10px] font-mono-meta">
            <span class="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">Adobe Photoshop</span>
            <span class="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">Adobe Lightroom</span>
            <span class="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">RAW Color Science</span>
          </div>
        </div>
      </div>

      <h3 class="font-display text-2xl font-bold text-white mb-6">Supporting Frames in the Sequence</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${story.supportingPhotos
          .map(
            (sp) => `
          <div class="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800">
            <img src="${sp.url}" alt="${sp.caption}" class="w-full aspect-[4/3] object-cover"/>
            <div class="p-4 bg-zinc-900/90 border-t border-zinc-800">
              <p class="text-xs font-mono-meta text-zinc-300">${sp.caption}</p>
            </div>
          </div>
        `
          )
          .join('')}
      </div>

      <div class="mt-12 pt-8 border-t border-zinc-800 flex justify-center">
        <a 
          href="#contact" 
          onclick="document.getElementById('story-detail-modal').classList.add('hidden');"
          class="px-8 py-3.5 rounded-full bg-amber-400 text-black text-xs font-bold uppercase tracking-wider hover:bg-amber-300 transition-colors">
          Inquire for Similar Project →
        </a>
      </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  closeStoryModal() {
    const modal = document.getElementById('story-detail-modal');
    if (!modal) return;
    soundFx.playClick();
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  /* ---------------- 09. FULLSCREEN LIGHTBOX ---------------- */
  openLightbox(filteredIndex) {
    this.currentPhotoIndex = filteredIndex;
    const photo = this.filteredPhotos[this.currentPhotoIndex];
    if (!photo) return;

    const modal = document.getElementById('image-lightbox-modal');
    if (!modal) return;

    this.updateLightboxContent(photo);
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  updateLightboxContent(photo) {
    const mainImg = document.getElementById('lightbox-main-img');
    const title = document.getElementById('lightbox-title');
    const category = document.getElementById('lightbox-category');
    const description = document.getElementById('lightbox-description');
    const client = document.getElementById('lightbox-client');
    const camera = document.getElementById('lightbox-camera');
    const lens = document.getElementById('lightbox-lens');
    const aperture = document.getElementById('lightbox-aperture');
    const shutter = document.getElementById('lightbox-shutter');
    const iso = document.getElementById('lightbox-iso');
    const focal = document.getElementById('lightbox-focal');
    const counter = document.getElementById('lightbox-counter');
    const filmstrip = document.getElementById('lightbox-filmstrip');

    if (mainImg) {
      mainImg.src = photo.imageUrl;
      mainImg.alt = photo.title;
    }
    if (title) title.textContent = photo.title;
    if (category) category.textContent = photo.category;
    if (description) description.textContent = photo.description;
    if (client) client.textContent = photo.location || photo.clientPlaceholder;
    if (camera) camera.textContent = photo.exif.camera;
    if (lens) lens.textContent = photo.exif.lens;
    if (aperture) aperture.textContent = photo.exif.aperture;
    if (shutter) shutter.textContent = photo.exif.shutter;
    if (iso) iso.textContent = photo.exif.iso;
    if (focal) focal.textContent = photo.exif.focalLength;

    if (counter) {
      counter.textContent = `${this.currentPhotoIndex + 1} / ${this.filteredPhotos.length}`;
    }

    if (filmstrip) {
      filmstrip.innerHTML = this.filteredPhotos
        .map(
          (p, i) => `
          <button 
            data-filmstrip-index="${i}"
            class="flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
              i === this.currentPhotoIndex
                ? 'border-amber-400 scale-105'
                : 'border-zinc-700 opacity-60 hover:opacity-100'
            }">
            <img src="${p.thumbnailUrl}" alt="${p.title}" class="w-full h-full object-cover"/>
          </button>
        `
        )
        .join('');

      filmstrip.querySelectorAll('button').forEach((btn) => {
        btn.addEventListener('click', () => {
          soundFx.playClick();
          const i = parseInt(btn.getAttribute('data-filmstrip-index'), 10);
          this.currentPhotoIndex = i;
          this.updateLightboxContent(this.filteredPhotos[i]);
        });
      });
    }
  }

  nextLightboxPhoto() {
    this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.filteredPhotos.length;
    soundFx.playShutter();
    this.updateLightboxContent(this.filteredPhotos[this.currentPhotoIndex]);
  }

  prevLightboxPhoto() {
    this.currentPhotoIndex =
      (this.currentPhotoIndex - 1 + this.filteredPhotos.length) % this.filteredPhotos.length;
    soundFx.playShutter();
    this.updateLightboxContent(this.filteredPhotos[this.currentPhotoIndex]);
  }

  closeLightbox() {
    const modal = document.getElementById('image-lightbox-modal');
    if (!modal) return;
    soundFx.playClick();
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  /* ---------------- 10. FILMS & VIDEO SHOWREEL ---------------- */
  renderVideoSection() {
    const container = document.getElementById('video-cards-grid');
    const filterNav = document.getElementById('video-filter-nav');
    const masterShowreelBtn = document.getElementById('play-master-showreel-btn');

    if (masterShowreelBtn) {
      masterShowreelBtn.addEventListener('click', () => {
        soundFx.playClick();
        const showreel = VIDEOGRAPHY_PROJECTS[0];
        if (showreel) this.openVideoModal(showreel);
      });
    }

    const categories = [
      { id: 'all', label: 'All Motion Works (13)' },
      { id: 'Cinematic Film', label: 'Cinematic Films' },
      { id: 'Wedding Films', label: 'Wedding Stories' },
      { id: 'Cinematic Reels', label: 'Vertical Reels (9:16)' },
      { id: 'Travel Film', label: 'Travel Films' },
      { id: 'Event Highlights', label: 'Events & Ceremonies' }
    ];

    if (filterNav) {
      filterNav.innerHTML = categories
        .map(
          (c) => `
          <button 
            data-video-cat="${c.id}"
            class="video-cat-btn px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
              c.id === this.currentVideoCategory
                ? 'bg-amber-400 text-black font-semibold'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }">
            ${c.label}
          </button>
        `
        )
        .join('');

      filterNav.querySelectorAll('.video-cat-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          soundFx.playClick();
          this.currentVideoCategory = btn.getAttribute('data-video-cat');
          this.renderVideoSection();
        });
      });
    }

    if (!container) return;

    const filtered =
      this.currentVideoCategory === 'all'
        ? VIDEOGRAPHY_PROJECTS
        : VIDEOGRAPHY_PROJECTS.filter((v) => v.category === this.currentVideoCategory);

    container.innerHTML = filtered
      .map((video) => {
        const isReel = video.format === '9:16';
        return `
        <div 
          data-video-id="${video.id}"
          class="video-card group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer ${
            isReel ? 'max-w-sm mx-auto' : ''
          }">
          
          <div class="relative overflow-hidden ${isReel ? 'aspect-[9/16]' : 'aspect-video'} bg-zinc-950">
            <img 
              src="${video.thumbnailUrl}" 
              alt="${video.title}" 
              loading="lazy" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-16 h-16 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-xl transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-amber-300">
                <svg class="w-7 h-7 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>

            <div class="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono-meta text-zinc-300 border border-white/10">
              ${video.duration}
            </div>

            <div class="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-md text-[10px] font-mono-meta text-amber-300 border border-amber-400/30">
              ${video.format === '9:16' ? 'Reel · 9:16' : 'Cinema · 16:9'}
            </div>
          </div>

          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div class="text-[10px] uppercase tracking-wider text-amber-300 font-mono-meta mb-1">
                ${video.category} · ${video.clientPlaceholder}
              </div>
              <h3 class="text-lg font-display font-bold text-white group-hover:text-amber-100 transition-colors">
                ${video.title}
              </h3>
              <p class="text-xs text-zinc-400 mt-2 line-clamp-2 font-light">
                ${video.synopsis}
              </p>
            </div>

            <div class="mt-4 pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2">
              <div class="flex flex-wrap gap-1">
                ${video.software
                  .map(
                    (s) => `
                  <span class="text-[9px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-mono-meta">
                    ${s}
                  </span>
                `
                  )
                  .join('')}
              </div>
              <span class="text-xs text-amber-300 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Watch Film →
              </span>
            </div>
          </div>
        </div>
      `;
      })
      .join('');

    container.querySelectorAll('.video-card').forEach((card) => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-video-id');
        const video = VIDEOGRAPHY_PROJECTS.find((v) => v.id === id);
        if (video) {
          soundFx.playClick();
          this.openVideoModal(video);
        }
      });
    });
  }

  /* ---------------- VIDEO PLAYER MODAL ---------------- */
  openVideoModal(video) {
    const modal = document.getElementById('video-player-modal');
    const container = document.getElementById('video-embed-container');
    const title = document.getElementById('video-modal-title');
    const role = document.getElementById('video-modal-role');
    const synopsis = document.getElementById('video-modal-synopsis');
    const tags = document.getElementById('video-modal-tags');

    if (!modal || !container) return;

    if (title) title.textContent = video.title;
    if (role) role.textContent = `Role: ${video.role}`;
    if (synopsis) synopsis.textContent = video.synopsis;

    if (tags) {
      tags.innerHTML = video.highlightTags
        .map(
          (t) => `
        <span class="px-2.5 py-1 rounded bg-zinc-800 text-amber-200 text-xs font-mono-meta">
          #${t}
        </span>
      `
        )
        .join('');
    }

    const isDirectMp4 = video.videoUrl.endsWith('.mp4');
    const isReel = video.format === '9:16';

    if (isDirectMp4) {
      container.innerHTML = `
        <div class="${isReel ? 'max-w-xs mx-auto aspect-[9/16]' : 'aspect-video'} w-full bg-black rounded-lg overflow-hidden">
          <video controls autoplay class="w-full h-full object-contain">
            <source src="${video.videoUrl}" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="aspect-video w-full bg-black rounded-lg overflow-hidden">
          <iframe 
            src="${video.videoUrl}" 
            title="${video.title}" 
            class="w-full h-full border-0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      `;
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  closeVideoModal() {
    const modal = document.getElementById('video-player-modal');
    const container = document.getElementById('video-embed-container');
    if (!modal) return;
    soundFx.playClick();
    if (container) container.innerHTML = '';
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  /* ---------------- 11. CREATIVE SERVICES ---------------- */
  renderServicesSection() {
    const tabNav = document.getElementById('services-tabs-nav');
    const content = document.getElementById('services-content-grid');
    if (!tabNav || !content) return;

    const tabs = [
      { id: 'photography', label: 'Photography Disciplines' },
      { id: 'postProduction', label: 'Post-Production & Retouching' },
      { id: 'videoProduction', label: 'Video Production & Reels' }
    ];

    tabNav.innerHTML = tabs
      .map(
        (t) => `
        <button 
          data-service-tab="${t.id}"
          class="service-tab-btn pb-3 px-2 text-sm font-medium uppercase tracking-wider transition-all border-b-2 ${
            t.id === this.activeServiceTab
              ? 'border-amber-400 text-amber-300 font-semibold'
              : 'border-transparent text-zinc-400 hover:text-white'
          }">
          ${t.label}
        </button>
      `
      )
      .join('');

    tabNav.querySelectorAll('.service-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        soundFx.playClick();
        this.activeServiceTab = btn.getAttribute('data-service-tab');
        this.renderServicesSection();
      });
    });

    const items = CREATIVE_SERVICES[this.activeServiceTab] || [];
    content.innerHTML = items
      .map(
        (service) => `
        <div class="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-400/40 hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-[11px] font-mono-meta uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                ${service.highlight}
              </span>
            </div>
            <h3 class="text-xl font-display font-bold text-white group-hover:text-amber-100 transition-colors">
              ${service.title}
            </h3>
            <p class="text-xs text-zinc-400 mt-2 leading-relaxed font-light">
              ${service.description}
            </p>
            
            <div class="mt-4 space-y-1.5">
              ${service.deliverables
                .map(
                  (d) => `
                <div class="flex items-center gap-2 text-xs text-zinc-300 font-light">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>${d}</span>
                </div>
              `
                )
                .join('')}
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-zinc-800">
            <button 
              data-inquire-service="${service.title}"
              class="inquire-service-btn w-full py-2.5 rounded-lg bg-zinc-800 hover:bg-amber-400 hover:text-black text-zinc-200 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2">
              Inquire for This Service →
            </button>
          </div>
        </div>
      `
      )
      .join('');

    content.querySelectorAll('.inquire-service-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-inquire-service');
        soundFx.playClick();
        this.preselectServiceInContact(title);
      });
    });
  }

  preselectServiceInContact(serviceName) {
    const contactSection = document.getElementById('contact');
    const serviceSelect = document.getElementById('contact-service-select');
    const messageField = document.getElementById('contact-message');

    if (serviceSelect) {
      let found = false;
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].text.includes(serviceName)) {
          serviceSelect.selectedIndex = i;
          found = true;
          break;
        }
      }
      if (!found) {
        serviceSelect.value = 'Comprehensive Freelance Package';
      }
    }

    if (messageField) {
      messageField.value = `Hi Aakash, I would like to discuss a project regarding ${serviceName}. Here are some details about our vision: `;
      messageField.focus();
    }

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /* ---------------- 12. THE 5-STEP CREATIVE PROCESS ---------------- */
  renderProcessSection() {
    const container = document.getElementById('creative-process-container');
    if (!container) return;

    container.innerHTML = CREATIVE_PROCESS.map(
      (step, idx) => `
      <div class="relative group p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-400/40 hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between">
            <span class="text-4xl font-display font-bold text-amber-400/40 group-hover:text-amber-400 transition-colors">
              ${step.step}
            </span>
            <span class="text-[10px] uppercase font-mono-meta text-zinc-500">
              Phase 0${idx + 1}
            </span>
          </div>
          <div class="text-[11px] uppercase tracking-widest text-amber-300 font-mono-meta mt-2">
            ${step.subtitle}
          </div>
          <h3 class="text-xl font-display font-bold text-white mt-1 group-hover:text-amber-100 transition-colors">
            ${step.title}
          </h3>
          <p class="text-xs text-zinc-400 mt-2.5 leading-relaxed font-light">
            ${step.description}
          </p>
        </div>

        <div class="mt-6 pt-3 border-t border-zinc-800/60 flex flex-wrap gap-1.5">
          ${step.deliverables
            .map(
              (d) => `
            <span class="text-[10px] px-2 py-0.5 rounded bg-zinc-800/90 text-zinc-300 font-mono-meta">
              ✓ ${d}
            </span>
          `
            )
            .join('')}
        </div>
      </div>
    `
    ).join('');
  }

  /* ---------------- 13. EQUIPMENT & TOOLKIT ---------------- */
  renderEquipmentSection() {
    const container = document.getElementById('equipment-toolkit-container');
    if (!container) return;

    const { categories, notice } = TOOLKIT_AND_EQUIPMENT;

    container.innerHTML = `
      <div class="col-span-full mb-4 p-4 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-between flex-wrap gap-3">
        <div class="flex items-center gap-3">
          <span class="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></span>
          <p class="text-xs font-mono-meta text-amber-200">
            ${notice}
          </p>
        </div>
        <button 
          id="open-gear-guide-btn"
          class="text-xs font-mono-meta underline text-amber-300 hover:text-white">
          Configuration notes →
        </button>
      </div>

      ${categories
        .map(
          (cat) => `
        <div class="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-400/30 transition-all duration-300">
          <div class="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800">
            <h3 class="text-lg font-display font-bold text-white">
              ${cat.name}
            </h3>
            <span class="text-xs text-amber-300 font-mono-meta">${cat.items.length} units</span>
          </div>

          <div class="space-y-3">
            ${cat.items
              .map(
                (item) => `
              <div class="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/60 hover:border-zinc-700 transition-colors">
                <div class="flex items-center justify-between gap-2">
                  <h4 class="text-xs font-semibold text-zinc-100 font-sans">
                    ${item.name}
                  </h4>
                  <span class="text-[9px] px-2 py-0.5 rounded bg-zinc-800 text-amber-200 font-mono-meta whitespace-nowrap">
                    ${item.tag}
                  </span>
                </div>
                <p class="text-[11px] text-zinc-400 mt-1 font-light">
                  ${item.role}
                </p>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      `
        )
        .join('')}
    `;

    const guideBtn = document.getElementById('open-gear-guide-btn');
    if (guideBtn) {
      guideBtn.addEventListener('click', () => {
        soundFx.playClick();
        this.openConfigGuideModal();
      });
    }
  }

  /* ---------------- 14. EXPERIENCE TIMELINE ---------------- */
  renderTimelineSection() {
    const container = document.getElementById('career-timeline-container');
    if (!container) return;

    container.innerHTML = PROFESSIONAL_JOURNEY.map(
      (milestone) => `
      <div class="relative pl-8 md:pl-12 pb-10 border-l-2 border-zinc-800 last:border-transparent group">
        <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-amber-400 group-hover:scale-125 transition-transform"></div>

        <div class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-amber-400/40 transition-all duration-300">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="text-xs font-mono-meta font-bold text-amber-300 px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/20">
              ${milestone.period}
            </span>
            <span class="text-xs text-zinc-500 font-mono-meta">
              ${milestone.type}
            </span>
          </div>

          <h3 class="text-xl font-display font-bold text-white mt-3 group-hover:text-amber-100 transition-colors">
            ${milestone.role}
          </h3>
          <p class="text-xs font-mono-meta text-zinc-400 mt-1">
            ${milestone.organization}
          </p>

          <p class="text-xs text-zinc-300 mt-3 leading-relaxed font-light">
            ${milestone.description}
          </p>

          <ul class="mt-4 space-y-1.5 border-t border-zinc-800/60 pt-3">
            ${milestone.highlights
              .map(
                (h) => `
              <li class="flex items-start gap-2 text-xs text-zinc-400 font-light">
                <span class="text-amber-400 mt-0.5">▹</span>
                <span>${h}</span>
              </li>
            `
              )
              .join('')}
          </ul>
        </div>
      </div>
    `
    ).join('');
  }

  /* ---------------- 15. CLIENT TESTIMONIALS ---------------- */
  renderTestimonials() {
    const quoteEl = document.getElementById('testimonial-quote');
    const nameEl = document.getElementById('testimonial-name');
    const projectEl = document.getElementById('testimonial-project');
    const locationEl = document.getElementById('testimonial-location');
    const counterEl = document.getElementById('testimonial-counter');

    const item = CLIENT_TESTIMONIALS[this.currentTestimonialIndex];
    if (!item) return;

    if (quoteEl) quoteEl.textContent = `“${item.quote}”`;
    if (nameEl) nameEl.textContent = item.clientName;
    if (projectEl) projectEl.textContent = item.projectType;
    if (locationEl) locationEl.textContent = item.location;
    if (counterEl) {
      counterEl.textContent = `0${this.currentTestimonialIndex + 1} / 0${CLIENT_TESTIMONIALS.length}`;
    }
  }

  nextTestimonial() {
    this.currentTestimonialIndex =
      (this.currentTestimonialIndex + 1) % CLIENT_TESTIMONIALS.length;
    soundFx.playClick();
    this.renderTestimonials();
  }

  prevTestimonial() {
    this.currentTestimonialIndex =
      (this.currentTestimonialIndex - 1 + CLIENT_TESTIMONIALS.length) %
      CLIENT_TESTIMONIALS.length;
    soundFx.playClick();
    this.renderTestimonials();
  }

  /* ---------------- 16. CONTACT CONVERSION FORM ---------------- */
  setupContactForm() {
    const form = document.getElementById('portfolio-contact-form');
    const feedback = document.getElementById('contact-form-feedback');
    const whatsappBtn = document.getElementById('whatsapp-direct-btn');

    if (whatsappBtn) {
      const whatsappNumber = PROFILE_INFO.contact.whatsapp.replace(/\D/g, '');
      const defaultMsg = encodeURIComponent(
        `Hi Aakash! I came across your portfolio and would like to discuss a project.`
      );
      whatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${defaultMsg}`;
    }

    const emailEl = document.getElementById('contact-info-email');
    const phoneEl = document.getElementById('contact-info-phone');
    const locationEl = document.getElementById('contact-info-location');

    if (emailEl) {
      emailEl.textContent = PROFILE_INFO.contact.email;
      emailEl.href = `mailto:${PROFILE_INFO.contact.email}`;
    }
    if (phoneEl) {
      phoneEl.textContent = PROFILE_INFO.contact.phone;
      phoneEl.href = `tel:${PROFILE_INFO.contact.phone.replace(/\s+/g, '')}`;
    }
    if (locationEl) locationEl.textContent = PROFILE_INFO.contact.location;

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      soundFx.playShutter();

      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const phone = form.querySelector('[name="phone"]').value.trim();
      const service = form.querySelector('[name="service"]').value;
      const date = form.querySelector('[name="date"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();

      if (!name || !email || !message) {
        if (feedback) {
          feedback.innerHTML = `
            <div class="p-3 rounded-lg bg-red-500/20 border border-red-500/40 text-red-200 text-xs">
              Please provide your full name, email address, and project brief.
            </div>
          `;
        }
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `Transmitting Project Brief...`;
      }

      setTimeout(() => {
        // Dispatch mailto backup link
        const subject = encodeURIComponent(`New Project Inquiry from ${name} [${service}]`);
        const body = encodeURIComponent(
          `Client: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nTarget Date: ${date}\n\nProject Brief:\n${message}`
        );
        window.open(`mailto:${PROFILE_INFO.contact.email}?subject=${subject}&body=${body}`, '_blank');

        if (feedback) {
          feedback.innerHTML = `
            <div class="p-4 rounded-xl bg-amber-400/20 border border-amber-400/50 text-amber-200 text-xs leading-relaxed space-y-1">
              <p class="font-bold text-amber-300">✓ Project Brief Dispatched</p>
              <p>Thank you, <strong>${name}</strong>. Your project inquiry regarding <em>${service}</em> has been prepared for transmission.</p>
              <p class="text-zinc-400">Aakash reviews all inquiries personally and will respond to <strong>${email}</strong> or <strong>${phone || 'your provided number'}</strong> shortly.</p>
            </div>
          `;
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `Inquiry Sent Successfully ✓`;
          setTimeout(() => {
            submitBtn.innerHTML = `LET'S CREATE SOMETHING →`;
          }, 4500);
        }
      }, 700);
    });
  }

  /* ---------------- 17. VIEWFINDER & AUDIO ---------------- */
  toggleViewfinder() {
    this.viewfinderActive = !this.viewfinderActive;
    const overlay = document.getElementById('camera-viewfinder-overlay');
    const toggleBtn = document.getElementById('viewfinder-toggle-btn');
    const mobileStatus = document.getElementById('mobile-vf-status');
    soundFx.playShutter();

    if (overlay) {
      overlay.classList.toggle('hidden', !this.viewfinderActive);
    }
    if (toggleBtn) {
      toggleBtn.classList.toggle('text-amber-400', this.viewfinderActive);
    }
    if (mobileStatus) {
      mobileStatus.textContent = this.viewfinderActive ? 'ON' : 'OFF';
      mobileStatus.className = this.viewfinderActive ? 'text-amber-300 font-bold' : 'text-zinc-500 font-bold';
    }
  }

  toggleSound() {
    this.soundActive = soundFx.toggleSound();
    const toggleBtn = document.getElementById('sound-toggle-btn');
    const mobileStatus = document.getElementById('mobile-sound-status');
    if (toggleBtn) {
      toggleBtn.classList.toggle('opacity-50', !this.soundActive);
      toggleBtn.title = this.soundActive ? 'Sound FX Enabled' : 'Sound FX Muted';
    }
    if (mobileStatus) {
      mobileStatus.textContent = this.soundActive ? 'ON' : 'OFF';
      mobileStatus.className = this.soundActive ? 'text-amber-300 font-bold' : 'text-zinc-500 font-bold';
    }
  }

  /* ---------------- 18. CONFIG GUIDE MODAL ---------------- */
  setupConfigGuideModal() {
    const modal = document.getElementById('config-guide-modal');
    const openBtns = document.querySelectorAll('.open-config-guide-trigger');
    const closeBtn = document.getElementById('close-config-guide-btn');

    openBtns.forEach((b) => {
      b.addEventListener('click', () => {
        soundFx.playClick();
        this.openConfigGuideModal();
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        soundFx.playClick();
        this.closeConfigGuideModal();
      });
    }
  }

  openConfigGuideModal() {
    const modal = document.getElementById('config-guide-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  }

  closeConfigGuideModal() {
    const modal = document.getElementById('config-guide-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }

  /* ---------------- 19. GLOBAL EVENT LISTENERS ---------------- */
  setupEventListeners() {
    // Lightbox Controls
    const closeLightboxBtn = document.getElementById('lightbox-close-btn');
    const nextLightboxBtn = document.getElementById('lightbox-next-btn');
    const prevLightboxBtn = document.getElementById('lightbox-prev-btn');
    const lightboxModal = document.getElementById('image-lightbox-modal');

    if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', () => this.closeLightbox());
    if (nextLightboxBtn) nextLightboxBtn.addEventListener('click', () => this.nextLightboxPhoto());
    if (prevLightboxBtn) prevLightboxBtn.addEventListener('click', () => this.prevLightboxPhoto());

    if (lightboxModal) {
      lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) this.closeLightbox();
      });

      // Lightbox Touch Swipe Navigation for Mobile
      let touchStartX = 0;
      let touchStartY = 0;

      lightboxModal.addEventListener('touchstart', (e) => {
        if (e.changedTouches && e.changedTouches.length > 0) {
          touchStartX = e.changedTouches[0].screenX;
          touchStartY = e.changedTouches[0].screenY;
        }
      }, { passive: true });

      lightboxModal.addEventListener('touchend', (e) => {
        if (e.changedTouches && e.changedTouches.length > 0) {
          const touchEndX = e.changedTouches[0].screenX;
          const touchEndY = e.changedTouches[0].screenY;
          const deltaX = touchEndX - touchStartX;
          const deltaY = touchEndY - touchStartY;
          if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
            if (deltaX < 0) {
              this.nextLightboxPhoto();
            } else {
              this.prevLightboxPhoto();
            }
          }
        }
      }, { passive: true });
    }

    // Story Modal Controls
    const closeStoryBtn = document.getElementById('story-modal-close-btn');
    const storyModal = document.getElementById('story-detail-modal');
    if (closeStoryBtn) closeStoryBtn.addEventListener('click', () => this.closeStoryModal());
    if (storyModal) {
      storyModal.addEventListener('click', (e) => {
        if (e.target === storyModal) this.closeStoryModal();
      });
    }

    // Video Modal Controls
    const closeVideoBtn = document.getElementById('video-modal-close-btn');
    const videoModal = document.getElementById('video-player-modal');
    if (closeVideoBtn) closeVideoBtn.addEventListener('click', () => this.closeVideoModal());
    if (videoModal) {
      videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) this.closeVideoModal();
      });
    }

    // Testimonials Controls & Touch Swipe
    const nextTestimonialBtn = document.getElementById('testimonial-next-btn');
    const prevTestimonialBtn = document.getElementById('testimonial-prev-btn');
    if (nextTestimonialBtn) nextTestimonialBtn.addEventListener('click', () => this.nextTestimonial());
    if (prevTestimonialBtn) prevTestimonialBtn.addEventListener('click', () => this.prevTestimonial());

    const testimonialsSection = document.getElementById('testimonials');
    if (testimonialsSection) {
      let tStartX = 0;
      testimonialsSection.addEventListener('touchstart', (e) => {
        if (e.changedTouches && e.changedTouches.length > 0) {
          tStartX = e.changedTouches[0].screenX;
        }
      }, { passive: true });

      testimonialsSection.addEventListener('touchend', (e) => {
        if (e.changedTouches && e.changedTouches.length > 0) {
          const tEndX = e.changedTouches[0].screenX;
          const delta = tEndX - tStartX;
          if (Math.abs(delta) > 50) {
            if (delta < 0) this.nextTestimonial();
            else this.prevTestimonial();
          }
        }
      }, { passive: true });
    }

    // Viewfinder & Sound Toggles (Desktop Studio Bar)
    const vfBtn = document.getElementById('viewfinder-toggle-btn');
    const soundBtn = document.getElementById('sound-toggle-btn');
    if (vfBtn) vfBtn.addEventListener('click', () => this.toggleViewfinder());
    if (soundBtn) soundBtn.addEventListener('click', () => this.toggleSound());

    // Mobile Navigation Drawer Toggle & Body Scroll Lock
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
    const closeMobileNavBtn = document.getElementById('close-mobile-nav-btn');

    const openMobileNav = () => {
      soundFx.playClick();
      if (mobileNavDrawer) {
        mobileNavDrawer.classList.remove('drawer-closed');
        mobileNavDrawer.classList.add('drawer-open');
        document.body.style.overflow = 'hidden';
      }
    };

    const closeMobileNav = () => {
      soundFx.playClick();
      if (mobileNavDrawer) {
        mobileNavDrawer.classList.remove('drawer-open');
        mobileNavDrawer.classList.add('drawer-closed');
        document.body.style.overflow = '';
      }
    };

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileNav);
    if (closeMobileNavBtn) closeMobileNavBtn.addEventListener('click', closeMobileNav);

    document.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', closeMobileNav);
    });

    // Wire Mobile Drawer Studio Controls
    const mobileSoundBtn = document.getElementById('mobile-sound-toggle-btn');
    const mobileVfBtn = document.getElementById('mobile-viewfinder-toggle-btn');
    if (mobileSoundBtn) mobileSoundBtn.addEventListener('click', () => this.toggleSound());
    if (mobileVfBtn) mobileVfBtn.addEventListener('click', () => this.toggleViewfinder());

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeLightbox();
        this.closeStoryModal();
        this.closeVideoModal();
        this.closeConfigGuideModal();
      } else if (e.key === 'ArrowRight') {
        if (lightboxModal && !lightboxModal.classList.contains('hidden')) {
          this.nextLightboxPhoto();
        }
      } else if (e.key === 'ArrowLeft') {
        if (lightboxModal && !lightboxModal.classList.contains('hidden')) {
          this.prevLightboxPhoto();
        }
      } else if (e.key === 'v' || e.key === 'V') {
        this.toggleViewfinder();
      }
    });

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  /* ---------------- 20. SCROLL SPY & STICKY NAV ---------------- */
  setupScrollSpy() {
    const navbar = document.getElementById('primary-navbar');
    window.addEventListener('scroll', () => {
      if (!navbar) return;
      if (window.scrollY > 40) {
        navbar.classList.add('bg-black/90', 'backdrop-blur-xl', 'border-b', 'border-zinc-800/80', 'py-3.5');
        navbar.classList.remove('py-6');
      } else {
        navbar.classList.remove('bg-black/90', 'backdrop-blur-xl', 'border-b', 'border-zinc-800/80', 'py-3.5');
        navbar.classList.add('py-6');
      }
    });
  }

  /* ---------------- 21. STUDIO AI CHATBOT (BOTTOM-LEFT) ---------------- */
  setupAIChatbot() {
    try {
      this.chatbot = new AIChatbot();
    } catch (err) {
      console.warn("Studio AI Chatbot initialization error:", err);
    }
  }
}

// Resilient App Instantiation
function startPortfolioApp() {
  if (!window.app) {
    window.app = new CinematicPortfolioApp();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startPortfolioApp);
} else {
  startPortfolioApp();
}
