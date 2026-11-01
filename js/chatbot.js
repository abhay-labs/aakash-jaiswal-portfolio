/**
 * AAKASH JAISWAL — STUDIO AI CHATBOT CONTROLLER
 * Ultra-responsive, conversational AI assistant embedded in the bottom-left corner.
 * Can answer questions, search & display photos in-chat, play videos, open lightboxes,
 * navigate sections, and facilitate direct booking & WhatsApp communication.
 */

import {
  PROFILE_INFO,
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PHOTOS,
  SIGNATURE_PROJECTS,
  VIDEOGRAPHY_PROJECTS,
  CREATIVE_SERVICES,
  TOOLKIT_AND_EQUIPMENT
} from '../data/portfolioData.js';

import { soundFx } from './soundfx.js';

export class AIChatbot {
  constructor() {
    this.isOpen = false;
    this.soundEnabled = true;
    this.messages = [];
    this.init();
  }

  init() {
    this.renderWidgetMarkup();
    this.bindEvents();
    this.sendInitialGreeting();
  }

  /* ---------------- 1. RENDER WIDGET MARKUP IN BOTTOM-LEFT ---------------- */
  renderWidgetMarkup() {
    const existing = document.getElementById('ai-chatbot-widget');
    if (existing) existing.remove();

    const widget = document.createElement('div');
    widget.id = 'ai-chatbot-widget';
    widget.className = 'fixed left-4 sm:left-6 bottom-20 sm:bottom-6 z-40 select-none';
    widget.innerHTML = `
      <!-- FLOATING LAUNCHER BUTTON -->
      <button 
        id="ai-chatbot-launcher-btn"
        class="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-zinc-950 via-zinc-900 to-black border border-amber-400/40 hover:border-amber-400 text-white shadow-2xl shadow-black/80 hover:shadow-amber-400/20 active:scale-95 transition-all duration-300"
        title="Open Studio AI Assistant">
        
        <!-- Pulsing Live Dot -->
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
        </span>

        <!-- AI Sparkle Aperture Icon -->
        <div class="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-300 text-sm group-hover:scale-110 transition-transform">
          ✨
        </div>

        <div class="text-left">
          <div class="flex items-center gap-1.5">
            <span class="text-xs sm:text-sm font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">Studio AI</span>
            <span class="text-[9px] font-mono uppercase px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 font-semibold">Live</span>
          </div>
          <span class="text-[10px] font-mono text-zinc-400 hidden sm:block">Ask anything · 44 Photos · 13 Films</span>
        </div>
      </button>

      <!-- CHAT WINDOW (BOTTOM-LEFT ANCHORED) -->
      <div 
        id="ai-chatbot-window"
        class="hidden fixed sm:absolute left-3 right-3 sm:left-0 sm:right-auto bottom-24 sm:bottom-16 w-auto sm:w-[430px] h-[580px] max-h-[85vh] bg-[#08080d]/95 backdrop-blur-2xl border border-amber-400/30 rounded-3xl shadow-2xl shadow-black/95 flex flex-col overflow-hidden transition-all duration-300 transform scale-95 opacity-0 z-50">
        
        <!-- Chat Header -->
        <div class="flex-shrink-0 px-5 py-4 border-b border-zinc-800/80 bg-zinc-950/80 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 shadow-md overflow-hidden">
              <img src="images/portrait/aakash-jaiswal-editorial-portrait.jpg" alt="Aakash Jaiswal" class="w-full h-full object-cover object-top rounded-[14px]" />
              <span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-black"></span>
            </div>
            <div>
              <div class="flex items-center gap-1.5">
                <h3 class="font-display font-bold text-sm text-white">Aakash Studio AI</h3>
                <span class="text-[9px] font-mono text-amber-300 px-1 rounded bg-amber-400/10">v2.4</span>
              </div>
              <p class="text-[11px] text-zinc-400 font-light">Interactive Portfolio Navigator & Assistant</p>
            </div>
          </div>

          <!-- Header Actions -->
          <div class="flex items-center gap-1">
            <button 
              id="ai-chat-clear-btn" 
              class="w-8 h-8 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors text-xs" 
              title="Clear Conversation">
              🗑
            </button>
            <button 
              id="ai-chat-close-btn" 
              class="w-8 h-8 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors text-sm font-bold" 
              title="Close Chat">
              ✕
            </button>
          </div>
        </div>

        <!-- Chat History Log -->
        <div id="ai-chat-messages" class="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-none font-sans text-xs">
          <!-- Messages will be injected dynamically -->
        </div>

        <!-- Quick Prompt Chips (Horizontal Scroll) -->
        <div class="flex-shrink-0 px-3 py-2 border-t border-zinc-800/60 bg-zinc-950/60 overflow-x-auto scrollbar-none">
          <div id="ai-quick-chips" class="flex items-center gap-1.5 min-w-max">
            <button class="ai-chip px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-amber-400/20 border border-zinc-800 hover:border-amber-400/40 text-[11px] text-zinc-300 hover:text-amber-200 transition-all" data-prompt="Watch authentic motion films and reels">
              🎬 Video Films
            </button>
            <button class="ai-chip px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-amber-400/20 border border-zinc-800 hover:border-amber-400/40 text-[11px] text-zinc-300 hover:text-amber-200 transition-all" data-prompt="Show wedding photos">
              💍 Wedding Stills
            </button>
            <button class="ai-chip px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-amber-400/20 border border-zinc-800 hover:border-amber-400/40 text-[11px] text-zinc-300 hover:text-amber-200 transition-all" data-prompt="Show 60fps vertical reels">
              📱 60fps Reels
            </button>
            <button class="ai-chip px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-amber-400/20 border border-zinc-800 hover:border-amber-400/40 text-[11px] text-zinc-300 hover:text-amber-200 transition-all" data-prompt="Himalayan travel photos">
              🏔 Himalayas
            </button>
            <button class="ai-chip px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-amber-400/20 border border-zinc-800 hover:border-amber-400/40 text-[11px] text-zinc-300 hover:text-amber-200 transition-all" data-prompt="Open complete 44 photo album">
              🖼 44-Photo Album
            </button>
            <button class="ai-chip px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-amber-400/20 border border-zinc-800 hover:border-amber-400/40 text-[11px] text-zinc-300 hover:text-amber-200 transition-all" data-prompt="How can I book Aakash for a shoot?">
              💼 Booking & Contact
            </button>
          </div>
        </div>

        <!-- Chat Input Bar -->
        <div class="flex-shrink-0 p-3 bg-zinc-950 border-t border-zinc-800/80 flex items-center gap-2">
          <input 
            type="text" 
            id="ai-chat-input"
            placeholder="Ask anything, search photos, play films..." 
            class="flex-1 bg-zinc-900/90 border border-zinc-700/80 focus:border-amber-400 rounded-full px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors"
          />
          <button 
            id="ai-chat-send-btn"
            class="w-9 h-9 rounded-full bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-black flex items-center justify-center font-bold text-sm shadow-md active:scale-90 transition-transform">
            ➔
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(widget);
  }

  /* ---------------- 2. EVENT BINDINGS ---------------- */
  bindEvents() {
    const launcher = document.getElementById('ai-chatbot-launcher-btn');
    const closeBtn = document.getElementById('ai-chat-close-btn');
    const clearBtn = document.getElementById('ai-chat-clear-btn');
    const sendBtn = document.getElementById('ai-chat-send-btn');
    const input = document.getElementById('ai-chat-input');
    const chipsContainer = document.getElementById('ai-quick-chips');

    if (launcher) launcher.addEventListener('click', () => this.toggleChat());
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeChat());
    if (clearBtn) clearBtn.addEventListener('click', () => this.clearChat());

    if (sendBtn) sendBtn.addEventListener('click', () => this.handleUserSubmit());
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.handleUserSubmit();
        }
      });
    }

    if (chipsContainer) {
      chipsContainer.addEventListener('click', (e) => {
        const chip = e.target.closest('.ai-chip');
        if (chip) {
          const prompt = chip.getAttribute('data-prompt');
          if (prompt) {
            this.handleUserMessage(prompt);
          }
        }
      });
    }
  }

  toggleChat() {
    this.isOpen ? this.closeChat() : this.openChat();
  }

  openChat() {
    this.isOpen = true;
    soundFx.playClick();
    const win = document.getElementById('ai-chatbot-window');
    if (win) {
      win.classList.remove('hidden');
      requestAnimationFrame(() => {
        win.classList.remove('scale-95', 'opacity-0');
        win.classList.add('scale-100', 'opacity-100');
      });
    }
    const input = document.getElementById('ai-chat-input');
    if (input) input.focus();
  }

  closeChat() {
    this.isOpen = false;
    soundFx.playClick();
    const win = document.getElementById('ai-chatbot-window');
    if (win) {
      win.classList.remove('scale-100', 'opacity-100');
      win.classList.add('scale-95', 'opacity-0');
      setTimeout(() => win.classList.add('hidden'), 200);
    }
  }

  clearChat() {
    soundFx.playClick();
    const container = document.getElementById('ai-chat-messages');
    if (container) container.innerHTML = '';
    this.sendInitialGreeting();
  }

  /* ---------------- 3. GREETING & MESSAGE RENDERING ---------------- */
  sendInitialGreeting() {
    const greetingText = `
      **Namaste! I am Aakash Jaiswal's Studio AI Assistant.** ✨
      
      I have instant access to Aakash's **complete portfolio**:
      • **44 Authentic Photographs** (Wedding, Portraits, Himalayas, Ghats, Nature)
      • **13 Genuine Motion Films & 60fps Reels**
      • **5–6 Years Professional Experience** in Adobe Photoshop, Lightroom & Premiere Pro
      
      *You can ask me anything, tell me to show photos or videos, or click any suggestion below!*
    `;
    this.appendBotMessage(greetingText, [
      { label: "🎬 Explore 13 Video Films", action: "scroll_section", param: "videography" },
      { label: "🖼 Open Full 44 Album", action: "open_album" },
      { label: "💬 WhatsApp Aakash", action: "open_whatsapp" }
    ]);
  }

  handleUserSubmit() {
    const input = document.getElementById('ai-chat-input');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    this.handleUserMessage(text);
  }

  handleUserMessage(text) {
    this.appendUserMessage(text);
    soundFx.playClick();
    this.showTypingIndicator();

    setTimeout(() => {
      this.hideTypingIndicator();
      this.processQuery(text);
    }, 600);
  }

  appendUserMessage(text) {
    const container = document.getElementById('ai-chat-messages');
    if (!container) return;

    const div = document.createElement('div');
    div.className = 'flex justify-end';
    div.innerHTML = `
      <div class="max-w-[85%] rounded-2xl rounded-tr-none px-4 py-2.5 bg-gradient-to-r from-amber-400 to-amber-300 text-black font-medium shadow-md leading-relaxed text-xs">
        ${this.escapeHtml(text)}
      </div>
    `;
    container.appendChild(div);
    this.scrollToBottom();
  }

  appendBotMessage(markdownText, actionButtons = [], richMedia = null) {
    const container = document.getElementById('ai-chat-messages');
    if (!container) return;

    const div = document.createElement('div');
    div.className = 'flex flex-col gap-2 items-start';

    // Formatted text bubble
    let formattedText = this.formatMarkdown(markdownText);

    let html = `
      <div class="flex items-start gap-2 max-w-[92%]">
        <div class="w-6 h-6 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
          ✨
        </div>
        <div class="rounded-2xl rounded-tl-none px-4 py-3 bg-zinc-900/90 border border-zinc-800 text-zinc-200 leading-relaxed shadow-lg text-xs space-y-2">
          ${formattedText}
        </div>
      </div>
    `;

    // Rich Media (Photos or Videos)
    if (richMedia && richMedia.type === 'photos') {
      html += this.renderPhotoCardsMarkup(richMedia.items);
    } else if (richMedia && richMedia.type === 'videos') {
      html += this.renderVideoCardsMarkup(richMedia.items);
    }

    // Action Buttons
    if (actionButtons && actionButtons.length > 0) {
      html += `
        <div class="flex flex-wrap gap-1.5 pl-8 mt-1">
          ${actionButtons
            .map(
              (btn) => `
            <button 
              class="ai-action-btn px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-amber-400 border border-zinc-800 hover:border-amber-400 text-zinc-300 hover:text-black font-semibold text-[11px] transition-all shadow active:scale-95 flex items-center gap-1"
              data-action="${btn.action}" 
              data-param="${btn.param || ''}">
              ${btn.label}
            </button>
          `
            )
            .join('')}
        </div>
      `;
    }

    div.innerHTML = html;
    container.appendChild(div);

    // Bind action buttons
    div.querySelectorAll('.ai-action-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');
        const param = btn.getAttribute('data-param');
        this.executeAction(action, param);
      });
    });

    // Bind photo card clicks
    div.querySelectorAll('.ai-photo-card').forEach((card) => {
      card.addEventListener('click', () => {
        const photoId = card.getAttribute('data-photo-id');
        const photoIdx = PORTFOLIO_PHOTOS.findIndex((p) => p.id === photoId);
        if (photoIdx !== -1 && window.app && window.app.openLightbox) {
          window.app.openLightbox(photoIdx);
        }
      });
    });

    // Bind video card clicks
    div.querySelectorAll('.ai-video-card').forEach((card) => {
      card.addEventListener('click', () => {
        const videoId = card.getAttribute('data-video-id');
        const videoObj = VIDEOGRAPHY_PROJECTS.find((v) => v.id === videoId);
        if (videoObj && window.app && window.app.openVideoModal) {
          window.app.openVideoModal(videoObj);
        }
      });
    });

    this.scrollToBottom();
  }

  showTypingIndicator() {
    const container = document.getElementById('ai-chat-messages');
    if (!container) return;
    const existing = document.getElementById('ai-typing-indicator');
    if (existing) existing.remove();

    const div = document.createElement('div');
    div.id = 'ai-typing-indicator';
    div.className = 'flex items-center gap-2 text-zinc-400 pl-8 text-xs';
    div.innerHTML = `
      <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce"></span>
      <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce [animation-delay:0.2s]"></span>
      <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce [animation-delay:0.4s]"></span>
      <span class="text-[10px] font-mono text-zinc-500 ml-1">Analyzing studio archive...</span>
    `;
    container.appendChild(div);
    this.scrollToBottom();
  }

  hideTypingIndicator() {
    const indicator = document.getElementById('ai-typing-indicator');
    if (indicator) indicator.remove();
  }

  scrollToBottom() {
    const container = document.getElementById('ai-chat-messages');
    if (container) {
      setTimeout(() => {
        container.scrollTop = container.scrollHeight;
      }, 50);
    }
  }

  /* ---------------- 4. QUERY PROCESSING INTELLIGENCE ---------------- */
  processQuery(rawQuery) {
    const q = rawQuery.toLowerCase();

    // 1. VIDEOS & MOTION FILMS PROMPTS
    if (q.includes('video') || q.includes('film') || q.includes('reel') || q.includes('movie') || q.includes('motion') || q.includes('showreel')) {
      const topVideos = VIDEOGRAPHY_PROJECTS.slice(0, 3);
      this.appendBotMessage(
        `**Authentic Motion Films & 60fps Reels**
        
        Aakash shoots and edits all video projects in Adobe Premiere Pro. Explore his genuine wedding teasers, 60fps vertical reels, and cultural films.`,
        [
          { label: "🎬 View All 13 Films", action: "scroll_section", param: "videography" },
          { label: "💬 Discuss Video Project", action: "open_whatsapp" }
        ],
        { type: "videos", items: topVideos }
      );
      return;
    }

    // 2. WEDDING PHOTOS & VIDEOS
    if (q.includes('wedding') || q.includes('shadi') || q.includes('marriage') || q.includes('ceremony')) {
      const weddingPhotos = PORTFOLIO_PHOTOS.filter(
        (p) => p.categorySlug === 'portrait' || p.title.toLowerCase().includes('wedding') || p.title.toLowerCase().includes('reverence')
      ).slice(0, 3);

      const weddingVideos = VIDEOGRAPHY_PROJECTS.filter((v) => v.category === 'Wedding Films').slice(0, 2);

      this.appendBotMessage(
        `**Wedding Stories & Ceremonial Craft**
        
        Aakash captures fine-art wedding stories focusing on spontaneous emotions, sacred fire rituals, and warm natural lighting without artificial distortion.
        
        • **Stills**: Handled with 35mm & 85mm f/1.4 prime optics for frequency separation skin retention.
        • **Films**: Color-graded cinematic highlight reels in Adobe Premiere Pro.`,
        [
          { label: "💍 Open Wedding Stills", action: "filter_gallery", param: "portrait" },
          { label: "💬 Book Wedding Shoot", action: "open_whatsapp" }
        ],
        { type: "photos", items: weddingPhotos }
      );
      return;
    }

    // 3. 60FPS REELS / VERTICAL REELS / INSTAGRAM
    if (q.includes('reel') || q.includes('vertical') || q.includes('60fps') || q.includes('instagram') || q.includes('short form')) {
      const reelVideos = VIDEOGRAPHY_PROJECTS.filter((v) => v.format === '9:16').slice(0, 3);
      this.appendBotMessage(
        `**High-Retention 9:16 Vertical Reels**
        
        Aakash produces algorithm-optimized 9:16 vertical reels with:
        • **60 FPS Fluid Motion** for smooth slow-motion camera glides
        • **Rhythmic Beat-Sync & Speed Ramping** edited in Adobe Premiere Pro
        • **Punchy Color Grading** optimized for mobile retina screens`,
        [
          { label: "🎬 Scroll to Video Reel", action: "scroll_section", param: "videography" }
        ],
        { type: "videos", items: reelVideos }
      );
      return;
    }

    // 4. HIMALAYAN TRAVEL & LANDSCAPES
    if (q.includes('travel') || q.includes('himalaya') || q.includes('mountain') || q.includes('pahad') || q.includes('valley')) {
      const travelPhotos = PORTFOLIO_PHOTOS.filter((p) => p.categorySlug === 'travel').slice(0, 3);
      const travelVideo = VIDEOGRAPHY_PROJECTS.find((v) => v.category === 'Travel Film');

      this.appendBotMessage(
        `**Travel Diaries & Himalayan Expeditions**
        
        Aakash has documented high-altitude treks across Tehri Garhwal and Uttarakhand.
        
        • **Atmospheric Light**: Widescreen mountain ridges dissolving into mist
        • **Cinema Cut**: 16:9 panoramic highway & valley contours`,
        [
          { label: "🏔 Filter Travel Collection", action: "filter_gallery", param: "travel" },
          { label: "🖼 View Full 44 Album", action: "open_album" }
        ],
        { type: "photos", items: travelPhotos }
      );
      return;
    }

    // 5. SACRED GHATS & HERITAGE (VARANASI / KASHI)
    if (q.includes('varanasi') || q.includes('ghat') || q.includes('heritage') || q.includes('kashi') || q.includes('ganga') || q.includes('aarti')) {
      const heritagePhotos = PORTFOLIO_PHOTOS.filter((p) => p.categorySlug === 'heritage' || p.categorySlug === 'waterscapes').slice(0, 3);
      this.appendBotMessage(
        `**Sacred Heritage & River Ghats**
        
        Exploring twilight devotions, ancient temple masonry, and atmospheric water reflections along the sacred Ganga waterfront.
        
        Captured with prime 24mm & 50mm lenses preserving natural shadow depth and dusk gradients.`,
        [
          { label: "🏛 Filter Heritage Stills", action: "filter_gallery", param: "heritage" },
          { label: "🖼 Open Exhibition Album", action: "open_album" }
        ],
        { type: "photos", items: heritagePhotos }
      );
      return;
    }

    // 6. ALL PHOTOS / ALBUM PROMPTS
    if (q.includes('all photo') || q.includes('saari photo') || q.includes('full album') || q.includes('gallery') || q.includes('photos')) {
      this.appendBotMessage(
        `**Complete Photographic Archive — 44 Original Works**
        
        The entire exhibition archive contains **44 authentic photographs** with zero stock or dummy images:
        • Travel & Himalayas (11)
        • Waterscapes & Dusk (9)
        • Sacred Heritage & Ghats (8)
        • Portraits & Celebrations (6)
        • Nature & Celestial (6)
        • Architecture & Geometry (4)
        
        Click below to open the dedicated full-screen exhibition album!`,
        [
          { label: "🖼 Open Complete 44-Frame Album", action: "open_album" },
          { label: "🎞 Explore Horizontal Cinema Reel", action: "scroll_section", param: "portfolio" }
        ]
      );
      return;
    }

    // 7. ALL VIDEOS / FILMS PROMPTS
    if (q.includes('all video') || q.includes('saari video') || q.includes('films') || q.includes('movies') || q.includes('motion')) {
      const topVideos = VIDEOGRAPHY_PROJECTS.slice(0, 3);
      this.appendBotMessage(
        `**Motion Works — 13 Genuine Films & Reels**
        
        The portfolio features **13 original motion projects**:
        • **01 Master Cinema Film** (1080p Widescreen)
        • **05 High-Retention Vertical Reels** (60 FPS & Beat-Sync)
        • **02 Wedding Stories** (Golden Hour Rituals & Candid Joy)
        • **03 Devotional Events & Ceremonies** (Aarti & Processions)
        • **02 Expedition Travel Films** (Himalayan Valley & Canopies)`,
        [
          { label: "🎬 Go to Films Section", action: "scroll_section", param: "videography" }
        ],
        { type: "videos", items: topVideos }
      );
      return;
    }

    // 8. WHO IS AAKASH / EXPERIENCE / BIO
    if (q.includes('who is') || q.includes('experience') || q.includes('kaun hai') || q.includes('about') || q.includes('profile')) {
      this.appendBotMessage(
        `**About Aakash Jaiswal**
        
        • **Role**: Independent Photographer, Cinematographer & Video Editor
        • **Experience**: **5–6 Years Professional Craft**
        • **Work Model**: Direct Freelance Professional collaboration
        • **Philosophy**: *"Every Frame Tells a Story"* — treating every shoot as an editorial discipline with natural light mastery.
        • **Specializations**: Wedding Stories, Portraits, Devotional Events, Products, and Travel Expeditions.`,
        [
          { label: "📖 Read Full Story", action: "scroll_section", param: "about" },
          { label: "💬 Chat with Aakash", action: "open_whatsapp" }
        ]
      );
      return;
    }

    // 9. SOFTWARE / EDITING TOOLS
    if (q.includes('software') || q.includes('tool') || q.includes('photoshop') || q.includes('lightroom') || q.includes('premiere')) {
      this.appendBotMessage(
        `**Post-Production Master Suite**
        
        Aakash works exclusively in industry-standard creative software:
        • **Adobe Photoshop**: Frequency separation skin retouching, fine texture preservation, focus-stacking.
        • **Adobe Lightroom**: Harmonic color grading, tonal curve balancing, film-like highlight rolloff.
        • **Adobe Premiere Pro**: 60fps timeline editing, rhythm beat-syncing, speed ramps, and multi-track sound design.`,
        [
          { label: "🛠 View Equipment & Toolkit", action: "scroll_section", param: "equipment" }
        ]
      );
      return;
    }

    // 10. GEAR / CAMERA / LENSES
    if (q.includes('camera') || q.includes('gear') || q.includes('lens') || q.includes('equipment')) {
      this.appendBotMessage(
        `**Camera & Optical Gear**
        
        • **Camera Body**: High-Resolution Full-Frame Mirrorless System
        • **Prime Lenses**: 24mm f/1.4 GM (Wide vistas & architecture), 35mm f/1.4 GM (Storytelling), 50mm f/1.2 GM (Portraits & low light), 85mm f/1.4 GM (Editorial portraits)
        • **Audio & Lighting**: Directional lighting shapers, continuous ambient LEDs, precision gimbal stabilization.`,
        [
          { label: "🛠 Check Full Toolkit Section", action: "scroll_section", param: "equipment" }
        ]
      );
      return;
    }

    // 11. PRICING / RATES / PACKAGES / BOOKING
    if (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('package') || q.includes('charges') || q.includes('kitna') || q.includes('fee')) {
      this.appendBotMessage(
        `**Commissions & Pricing Structure**
        
        Aakash operates on a bespoke freelance commission model tailored to project scope:
        • **Wedding Coverage**: Multi-day ceremony stills + cinematic highlight teaser films
        • **Portrait & Editorial Sessions**: Studio or on-location lighting with full frequency-separation retouching
        • **Travel & Commercial Assignments**: Brand visual diaries and social media short-form bundles
        
        *To get an exact quotation for your dates and venue, connect directly with Aakash!*`,
        [
          { label: "💬 Get Instant Quote on WhatsApp", action: "open_whatsapp" },
          { label: "📝 Fill Booking Form", action: "scroll_section", param: "contact" }
        ]
      );
      return;
    }

    // 12. CONTACT / PHONE / EMAIL / LOCATION
    if (q.includes('contact') || q.includes('phone') || q.includes('number') || q.includes('email') || q.includes('whatsapp') || q.includes('call') || q.includes('address') || q.includes('location')) {
      this.appendBotMessage(
        `**Direct Contact Credentials**
        
        • **Email**: \`akashjais1187@gmail.com\`
        • **Phone & WhatsApp**: \`+91 96969 15516\`
        • **Base**: Uttar Pradesh, India
        • **Availability**: Available for commissions worldwide`,
        [
          { label: "💬 WhatsApp (+91 96969 15516)", action: "open_whatsapp" },
          { label: "📸 Instagram (@aakaxh_11)", action: "open_instagram" },
          { label: "📞 Call Direct", action: "call_phone" },
          { label: "📝 Send Inquiry Form", action: "scroll_section", param: "contact" }
        ]
      );
      return;
    }

    // DEFAULT FALLBACK HELPFUL RESPONSE
    this.appendBotMessage(
      `I can help you navigate everything in Aakash Jaiswal's portfolio!
      
      What would you like to explore?
      • View authentic photography (Weddings, Portraits, Himalayas, Ghats)
      • Watch authentic motion reels & cinema films (1080p & 60fps)
      • Learn about Aakash's 5–6 years of experience & Adobe toolset
      • Inquire about project booking and availability`,
      [
        { label: "🎬 Explore 13 Films", action: "scroll_section", param: "videography" },
        { label: "🖼 Open Full 44 Album", action: "open_album" },
        { label: "💍 Wedding Works", action: "filter_gallery", param: "portrait" },
        { label: "💬 Chat on WhatsApp", action: "open_whatsapp" }
      ]
    );
  }

  /* ---------------- 5. ACTION EXECUTION ENGINE ---------------- */
  executeAction(action, param) {
    soundFx.playClick();

    switch (action) {
      case 'play_showreel':
        if (window.app && window.app.openVideoModal) {
          const showreel = VIDEOGRAPHY_PROJECTS[0];
          if (showreel) window.app.openVideoModal(showreel);
        }
        break;

      case 'open_album':
        if (window.app && window.app.openFullAlbum) {
          window.app.openFullAlbum();
        }
        break;

      case 'filter_gallery':
        if (param && window.app && window.app.filterGallery) {
          this.scrollToSection('portfolio');
          window.app.filterGallery(param);
        }
        break;

      case 'scroll_section':
        if (param) {
          this.scrollToSection(param);
        }
        break;

      case 'open_instagram':
        window.open('https://www.instagram.com/aakaxh_11/', '_blank', 'noopener,noreferrer');
        break;

      case 'open_whatsapp':
        window.open('https://wa.me/919696915516?text=Hi%20Aakash!%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project.', '_blank');
        break;

      case 'call_phone':
        window.location.href = 'tel:+919696915516';
        break;

      default:
        console.warn('Unknown chatbot action:', action);
    }
  }

  scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /* ---------------- 6. RICH MEDIA RENDERING ---------------- */
  renderPhotoCardsMarkup(photos) {
    if (!photos || photos.length === 0) return '';

    return `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-8 w-full mt-1">
        ${photos
          .map(
            (p) => `
          <div 
            class="ai-photo-card group relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-amber-400/60 p-2 cursor-pointer transition-all hover:shadow-lg">
            <div class="aspect-[4/3] rounded-lg overflow-hidden bg-black mb-2 relative">
              <img 
                src="${p.thumbnailUrl || p.imageUrl}" 
                alt="${p.title}" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <span class="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-mono text-amber-300">
                ${p.aspectRatio}
              </span>
            </div>
            <h4 class="font-bold text-white text-[11px] truncate group-hover:text-amber-200">${p.title}</h4>
            <p class="text-[10px] text-zinc-400 font-mono truncate">${p.location}</p>
            <div class="mt-1 flex items-center justify-between text-[10px] text-amber-300 font-semibold pt-1 border-t border-zinc-800/60">
              <span>View Lightbox ↗</span>
              <span class="text-zinc-500 font-mono">${p.exif?.focalLength || ''}</span>
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    `;
  }

  renderVideoCardsMarkup(videos) {
    if (!videos || videos.length === 0) return '';

    return `
      <div class="grid grid-cols-1 gap-2 pl-8 w-full mt-1">
        ${videos
          .map(
            (v) => `
          <div 
            class="ai-video-card group relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-amber-400/60 p-2.5 cursor-pointer transition-all hover:shadow-lg flex items-center gap-3"
            data-video-id="${v.id}">
            <div class="w-20 h-14 rounded-lg overflow-hidden bg-black flex-shrink-0 relative">
              <img 
                src="${v.thumbnailUrl}" 
                alt="${v.title}" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span class="w-6 h-6 rounded-full bg-amber-400 text-black flex items-center justify-center text-[10px] font-bold">▶</span>
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-1.5 text-[9px] font-mono text-amber-400">
                <span>${v.category}</span>
                <span>·</span>
                <span>${v.duration}</span>
              </div>
              <h4 class="font-bold text-white text-[11px] truncate group-hover:text-amber-200 mt-0.5">${v.title}</h4>
              <p class="text-[10px] text-zinc-400 truncate">${v.clientPlaceholder}</p>
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    `;
  }

  /* ---------------- 7. TEXT FORMATTING HELPERS ---------------- */
  formatMarkdown(text) {
    if (!text) return '';
    return text
      .trim()
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-zinc-300">$1</em>')
      .replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-black/60 text-amber-300 font-mono text-[10px]">$1</code>')
      .replace(/\n\n/g, '<br/><br/>')
      .replace(/\n• /g, '<br/>• ');
  }

  escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}
