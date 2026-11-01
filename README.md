# Aakash Jaiswal — World-Class Cinematic Photography & Videography Portfolio

> **"Capturing Moments. Creating Stories."**  
> Premium, editorial portfolio website built for **Aakash Jaiswal**, Professional Photographer & Video Editor with 5–6 years of industry experience.

---

## 🌟 Visual Identity & Design Direction

- **Theme**: Deep Charcoal (`#08080a`) / Near-Black with warm champagne gold (`#e5c18a`) accents and crisp off-white typography.
- **Typography**: 
  - **Cinzel** — Editorial luxury serif for oversized cinematic headlines.
  - **Plus Jakarta Sans** — Contemporary, high-legibility sans-serif for body and navigation.
  - **Space Mono** — Authentic camera EXIF technical metadata font (`f/1.8`, `1/500s`, `ISO 100`, `85mm`).
- **Cinematic Interactions**:
  - Procedural silver-halide film grain overlay.
  - Desktop custom magnetic cursor.
  - Interactive **Camera Viewfinder HUD mode** (press `V` to toggle grid lines, AF brackets, exposure meter, REC indicator).
  - Synthetic Web Audio API camera shutter sound effects (zero external files).
  - Full-screen high-resolution image lightbox with optical EXIF drawer and filmstrip navigation.
  - Responsive video modal supporting 16:9 cinematic widescreen & 9:16 vertical reels.

---

## 📁 Project Architecture

```
aakash-jaiswal-portfolio/
├── index.html                   # Master entrypoint with responsive layout, semantic HTML & SEO
├── server.js                    # Built-in zero-dependency preview server
├── package.json                 # Project manifest & metadata
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration
├── README.md                    # Comprehensive documentation
│
├── data/
│   └── portfolioData.js         # 💡 CENTRAL DATA STORE (Edit your photos, bio, kit & contact here)
│
├── js/
│   ├── app.js                   # Client controller (gallery filters, lightbox, modals, form)
│   └── soundfx.js               # Web Audio API camera shutter & tactile click synthesizer
│
├── css/
│   └── custom.css               # Editorial serif styling, cursor, viewfinder HUD, film grain
│
└── src/
    ├── types.ts                 # Full TypeScript definitions
    └── data/
        └── portfolioData.ts     # TypeScript data store
```

---

## 🚀 Instant Quickstart

### 1. Run the Built-in Preview Server (Zero Dependencies Required)

```bash
cd aakash-jaiswal-portfolio
node server.js
```

Open your browser to: **`http://localhost:3000`**

---

## 🛠️ How to Customize for Aakash Jaiswal

All portfolio content is decoupled from the UI and centralized in `data/portfolioData.js` (and `src/data/portfolioData.ts`).

### 1. Update Contact & Profile Information
Open `data/portfolioData.js` and locate `PROFILE_INFO`:
```javascript
export const PROFILE_INFO = {
  name: "Aakash Jaiswal",
  title: "Professional Photographer & Video Editor",
  experienceYears: "5–6 Years",
  contact: {
    email: "your-actual-email@gmail.com",
    phone: "+91 98765 43210",
    city: "Mumbai / Delhi / Available Worldwide",
    whatsapp: "+919876543210", // Digits with country code
    instagram: "https://instagram.com/yourhandle",
    youtube: "https://youtube.com/@yourchannel"
  }
};
```
*The WhatsApp button automatically connects potential clients directly to your WhatsApp with a prefilled inquiry.*

### 2. Replace Portfolio Photographs
Locate `PORTFOLIO_PHOTOS` in `data/portfolioData.js`. Each photo entry accepts:
- `title`: Project / Shoot Title
- `categorySlug`: One of `portrait`, `wedding`, `event`, `product`, `fashion`, `commercial`, `lifestyle`, `creative`
- `aspectRatio`: `portrait`, `landscape`, `square`, or `cinematic`
- `imageUrl`: High-resolution link (e.g. `/images/...` local path, Cloudinary, or CDN)
- `thumbnailUrl`: Fast loading preview
- `exif`: Camera body, lens, aperture, shutter speed, ISO, focal length

### 3. Add Video Projects & Instagram Reels
Locate `VIDEOGRAPHY_PROJECTS` in `data/portfolioData.js`:
- Supports both **16:9 Widescreen Films** and **9:16 Vertical Instagram Reels**.
- Supports YouTube embeds, Vimeo links, and direct MP4 video URLs.

### 4. Customize Equipment & Toolkit
Locate `TOOLKIT_AND_EQUIPMENT` to list your confirmed camera bodies, prime & zoom lenses, lighting modifiers, and software.

---

## 📸 Key Features Checklist

- [x] Full-Screen Cinematic Hero with Ken Burns zoom & scroll indicator.
- [x] Editorial "Behind Every Frame, There's a Story" About section with 4 verified metrics.
- [x] 8 Primary Photography Disciplines with filter pill navigation.
- [x] Masonry asymmetric grid with hover EXIF reveals.
- [x] Fullscreen Lightbox with metadata sidebar, filmstrip bar, and arrow keyboard navigation.
- [x] Motion & Videography section with format filter (16:9 Cinema & 9:16 Reels).
- [x] 3 Creative Service Pillars (Photography, Post-Production, Video Production) with pre-fill inquiry buttons.
- [x] 5-Step Visual Process (Understanding the Vision to Final Delivery).
- [x] Configurable Equipment & Software Toolkit.
- [x] 5–6 Year Career Timeline with labeled milestones.
- [x] Curated Testimonial Carousel with client placeholders.
- [x] Contact section with direct WhatsApp integration and interactive brief submission form.
- [x] Camera Viewfinder HUD overlay mode (press `V`).
- [x] Mechanical camera shutter sound synthesizer (Web Audio API).

---

## 📄 License

Created with precision for Aakash Jaiswal. All rights reserved.
