/**
 * AAKASH JAISWAL — THE ULTIMATE CINEMATIC PHOTOGRAPHY & FILM PORTFOLIO
 * Centralized Data Architecture
 * 
 * Verified Real Profile:
 * - Name: Aakash Jaiswal
 * - Title: Photographer | Visual Storyteller | Video Editor
 * - Experience: 5–6 Years Professional Freelance
 * - Email: akashjais1187@gmail.com
 * - Phone: +91 96969 15516
 * - WhatsApp: +91 96969 15516
 * - Software: Adobe Photoshop, Adobe Lightroom, Adobe Premiere Pro
 * - Core Specializations: Wedding, Portrait, Event, Product, Travel
 * - Authentic Photography: 100% Original Work by Aakash Jaiswal (44 Usable Works)
 */

export const PROFILE_INFO = {
  name: "Aakash Jaiswal",
  formalName: "Aakash Jaiswal",
  title: "Photographer | Visual Storyteller | Video Editor",
  workModel: "Freelance Professional",
  aboutImage: "images/portrait/aakash-jaiswal-editorial-portrait.jpg",
  avatarUrl: "images/portrait/aakash-jaiswal-editorial-portrait.jpg",
  experienceYears: "5–6 Years",
  tagline: "Every Frame Tells a Story.",
  heroSubtitle: "An independent photographer and visual storyteller with 5–6 years of experience capturing weddings, portraits, events, products, and travel stories.",
  aboutHeading: "Not Just Taking Pictures. Capturing Perspectives.",
  aboutSubheading: "Behind the lens, every shadow, glance, and ray of light has intention.",
  aboutText1: "I am Aakash Jaiswal, an independent freelance photographer, cinematographer, and video editor with 5–6 years of professional craft. My practice is built on a quiet observation of the world: seeking the emotional nuance within grand celebrations, the sculptural authenticity of human faces, the precision of product textures, and the vast silence of travel landscapes.",
  aboutText2: "Photography to me is not merely pushing a shutter button; it is an editorial discipline. On set, I command natural and directional lighting to shape mood without artificial distraction. In the digital darkroom, I rely exclusively on industry-standard Adobe Photoshop, Adobe Lightroom, and Adobe Premiere Pro to grade color harmoniously, retain natural organic skin textures, and craft seamless narrative flow.",
  stats: [
    { label: "Years of Craft", value: "5–6", note: "Professional Experience" },
    { label: "Original Works", value: "44", note: "Authentic Photographs" },
    { label: "Master Suite", value: "Adobe", note: "Photoshop · Lightroom · Premiere Pro" },
    { label: "Work Model", value: "Freelance", note: "Direct Independent Client Collaboration" }
  ],
  contact: {
    email: "akashjais1187@gmail.com",
    phone: "+91 96969 15516",
    location: "Available for Commissions Worldwide · Based in India",
    whatsapp: "+919696915516",
    instagram: "https://www.instagram.com/aakaxh_11/",
    youtube: "https://youtube.com/@[ADD_YOUTUBE_CHANNEL]",
    vimeo: "https://vimeo.com/[ADD_VIMEO_CHANNEL]",
    linkedin: "https://linkedin.com/in/[ADD_LINKEDIN_PROFILE]"
  }
};

export const PORTFOLIO_CATEGORIES = [
  { id: "all", name: "All Works", number: "00" },
  { id: "travel", name: "Travel & Himalayas", number: "01" },
  { id: "heritage", name: "Sacred Heritage & Ghats", number: "02" },
  { id: "waterscapes", name: "Waterscapes & Dusk", number: "03" },
  { id: "nature", name: "Nature & Celestial", number: "04" },
  { id: "architecture", name: "Architecture & Geometry", number: "05" },
  { id: "portrait", name: "Portraits & Cultural Celebrations", number: "06" }
];

export const PORTFOLIO_PHOTOS = [
  {
    "id": "photo-01",
    "title": "Golden Dusk & Tiered Horizon",
    "category": "03 — Waterscapes & Dusk",
    "categorySlug": "waterscapes",
    "aspectRatio": "square",
    "imageUrl": "images/waterscapes/golden-dusk-rooftop-sky.jpg",
    "thumbnailUrl": "images/waterscapes/golden-dusk-rooftop-sky.webp",
    "clientPlaceholder": "Authentic Field Capture · Gorakhpur, Uttar Pradesh",
    "location": "Gorakhpur, Uttar Pradesh",
    "description": "Atmospheric sunset light over urban silhouettes. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "50mm f/1.2 GM Prime",
      "aperture": "f/1.8",
      "shutter": "1/640s",
      "iso": "ISO 100",
      "focalLength": "50mm"
    }
  },
  {
    "id": "photo-02",
    "title": "Himalayan Ridge & Mist Valley",
    "category": "01 — Travel & Himalayas",
    "categorySlug": "travel",
    "aspectRatio": "landscape",
    "imageUrl": "images/travel/himalayan-valley-panoramic-ridge.jpg",
    "thumbnailUrl": "images/travel/himalayan-valley-panoramic-ridge.webp",
    "clientPlaceholder": "Authentic Field Capture · Tehri Garhwal, Uttarakhand",
    "location": "Tehri Garhwal, Uttarakhand",
    "description": "Panoramic green ridges dissolving into mountain haze. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "24mm f/1.4 GM Prime",
      "aperture": "f/8.0",
      "shutter": "1/250s",
      "iso": "ISO 100",
      "focalLength": "24mm"
    }
  },
  {
    "id": "photo-03",
    "title": "Crepuscular Rays at Twilight",
    "category": "03 — Waterscapes & Dusk",
    "categorySlug": "waterscapes",
    "aspectRatio": "portrait",
    "imageUrl": "images/waterscapes/twilight-cloudburst-rays.jpg",
    "thumbnailUrl": "images/waterscapes/twilight-cloudburst-rays.webp",
    "clientPlaceholder": "Authentic Field Capture · Uttar Pradesh",
    "location": "Uttar Pradesh",
    "description": "God rays piercing through dramatic monsoon cloud layers. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": true,
    "storyId": "story-03",
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "35mm f/1.4 GM Prime",
      "aperture": "f/2.8",
      "shutter": "1/500s",
      "iso": "ISO 125",
      "focalLength": "35mm"
    }
  },
  {
    "id": "photo-04",
    "title": "Crimson Horizon Gradient",
    "category": "03 — Waterscapes & Dusk",
    "categorySlug": "waterscapes",
    "aspectRatio": "portrait",
    "imageUrl": "images/waterscapes/sunset-horizon-fire-sky.jpg",
    "thumbnailUrl": "images/waterscapes/sunset-horizon-fire-sky.webp",
    "clientPlaceholder": "Authentic Field Capture · Gorakhpur, Uttar Pradesh",
    "location": "Gorakhpur, Uttar Pradesh",
    "description": "Electric orange and crimson twilight over quiet rooftops. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "50mm f/1.2 GM Prime",
      "aperture": "f/2.0",
      "shutter": "1/400s",
      "iso": "ISO 100",
      "focalLength": "50mm"
    }
  },
  {
    "id": "photo-05",
    "title": "Lord Shiva Sacred Fresco",
    "category": "02 — Sacred Heritage & Ghats",
    "categorySlug": "heritage",
    "aspectRatio": "portrait",
    "imageUrl": "images/heritage/sacred-shiva-mural-rishikesh.jpg",
    "thumbnailUrl": "images/heritage/sacred-shiva-mural-rishikesh.webp",
    "clientPlaceholder": "Authentic Field Capture · Rishikesh, Uttarakhand",
    "location": "Rishikesh, Uttarakhand",
    "description": "Devotional street art and monumental spiritual iconography. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "35mm f/1.4 GM Prime",
      "aperture": "f/2.2",
      "shutter": "1/320s",
      "iso": "ISO 100",
      "focalLength": "35mm"
    }
  },
  {
    "id": "photo-06",
    "title": "Ganges Golden Hour Serenity",
    "category": "03 — Waterscapes & Dusk",
    "categorySlug": "waterscapes",
    "aspectRatio": "landscape",
    "imageUrl": "images/waterscapes/ganga-river-golden-sunset.jpg",
    "thumbnailUrl": "images/waterscapes/ganga-river-golden-sunset.webp",
    "clientPlaceholder": "Authentic Field Capture · Varanasi Ghats, Uttar Pradesh",
    "location": "Varanasi Ghats, Uttar Pradesh",
    "description": "Silhouetted bathers and shimmering reflections on the sacred river. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": true,
    "storyId": "story-03",
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "24-70mm f/2.8 GM Zoom",
      "aperture": "f/4.0",
      "shutter": "1/1000s",
      "iso": "ISO 100",
      "focalLength": "70mm"
    }
  },
  {
    "id": "photo-07",
    "title": "Highland Pass & Alpine Overlook",
    "category": "01 — Travel & Himalayas",
    "categorySlug": "travel",
    "aspectRatio": "cinematic",
    "imageUrl": "images/travel/mountain-ridge-overlook-pass.jpg",
    "thumbnailUrl": "images/travel/mountain-ridge-overlook-pass.webp",
    "clientPlaceholder": "Authentic Field Capture · Garhwal Range, Uttarakhand",
    "location": "Garhwal Range, Uttarakhand",
    "description": "Expansive high-altitude mountain pass in morning haze. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "28mm f/2.0 Wide Prime",
      "aperture": "f/5.6",
      "shutter": "1/500s",
      "iso": "ISO 100",
      "focalLength": "28mm"
    }
  },
  {
    "id": "photo-08",
    "title": "River Gorge Valley Settlement",
    "category": "01 — Travel & Himalayas",
    "categorySlug": "travel",
    "aspectRatio": "cinematic",
    "imageUrl": "images/travel/himalayan-river-gorge-settlement.jpg",
    "thumbnailUrl": "images/travel/himalayan-river-gorge-settlement.webp",
    "clientPlaceholder": "Authentic Field Capture · Alaknanda Valley, Uttarakhand",
    "location": "Alaknanda Valley, Uttarakhand",
    "description": "Turquoise mountain river winding through terraced foothills. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "35mm f/1.4 GM Prime",
      "aperture": "f/6.3",
      "shutter": "1/400s",
      "iso": "ISO 100",
      "focalLength": "35mm"
    }
  },
  {
    "id": "photo-09",
    "title": "Promenade Lamp at Dusk",
    "category": "05 — Architecture & Geometry",
    "categorySlug": "architecture",
    "aspectRatio": "landscape",
    "imageUrl": "images/architecture/street-lamp-twilight-silhouette.jpg",
    "thumbnailUrl": "images/architecture/street-lamp-twilight-silhouette.webp",
    "clientPlaceholder": "Authentic Field Capture · Riverbank Promenade",
    "location": "Riverbank Promenade",
    "description": "Intricate wrought-iron silhouette framed against golden sunset. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "85mm f/1.4 Portrait Prime",
      "aperture": "f/2.8",
      "shutter": "1/800s",
      "iso": "ISO 100",
      "focalLength": "85mm"
    }
  },
  {
    "id": "photo-10",
    "title": "Sacred Himalayan Ascent",
    "category": "01 — Travel & Himalayas",
    "categorySlug": "travel",
    "aspectRatio": "portrait",
    "imageUrl": "images/travel/ancient-stone-trail-steps.jpg",
    "thumbnailUrl": "images/travel/ancient-stone-trail-steps.webp",
    "clientPlaceholder": "Authentic Field Capture · Kedarnath Trek, Uttarakhand",
    "location": "Kedarnath Trek, Uttarakhand",
    "description": "Hand-hewn stone steps ascending through mist-shrouded mountain forest. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "28mm f/2.0 Wide Prime",
      "aperture": "f/3.5",
      "shutter": "1/200s",
      "iso": "ISO 160",
      "focalLength": "28mm"
    }
  },
  {
    "id": "photo-11",
    "title": "Sacred Ghat Twilight Aarti",
    "category": "02 — Sacred Heritage & Ghats",
    "categorySlug": "heritage",
    "aspectRatio": "landscape",
    "imageUrl": "images/heritage/evening-aarti-ghat-illumination.jpg",
    "thumbnailUrl": "images/heritage/evening-aarti-ghat-illumination.webp",
    "clientPlaceholder": "Authentic Field Capture · Har Ki Pauri, Haridwar",
    "location": "Har Ki Pauri, Haridwar",
    "description": "Glowing temple chandeliers and sacred devotion reflected in river waters. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": true,
    "storyId": "story-01",
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "35mm f/1.4 GM Prime",
      "aperture": "f/2.0",
      "shutter": "1/125s",
      "iso": "ISO 400",
      "focalLength": "35mm"
    }
  },
  {
    "id": "photo-12",
    "title": "Varanasi Ghats at Blue Hour",
    "category": "02 — Sacred Heritage & Ghats",
    "categorySlug": "heritage",
    "aspectRatio": "portrait",
    "imageUrl": "images/heritage/varanasi-sacred-ghat-twilight.jpg",
    "thumbnailUrl": "images/heritage/varanasi-sacred-ghat-twilight.webp",
    "clientPlaceholder": "Authentic Field Capture · Dashashwamedh Ghat, Varanasi",
    "location": "Dashashwamedh Ghat, Varanasi",
    "description": "Grand temple spires, wooden pilgrim boats, and ethereal blue hour skies. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": true,
    "storyId": "story-01",
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "50mm f/1.2 GM Prime",
      "aperture": "f/1.8",
      "shutter": "1/80s",
      "iso": "ISO 320",
      "focalLength": "50mm"
    }
  },
  {
    "id": "photo-13",
    "title": "Tehri Lake Alpine Emerald",
    "category": "01 — Travel & Himalayas",
    "categorySlug": "travel",
    "aspectRatio": "cinematic",
    "imageUrl": "images/travel/tehri-dam-turquoise-reservoir.jpg",
    "thumbnailUrl": "images/travel/tehri-dam-turquoise-reservoir.webp",
    "clientPlaceholder": "Authentic Field Capture · Tehri Dam, Uttarakhand",
    "location": "Tehri Dam, Uttarakhand",
    "description": "Wide panoramic expanse of glacial waters cradled by mountain ridges. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": true,
    "storyId": "story-02",
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "24mm f/1.4 GM Prime",
      "aperture": "f/8.0",
      "shutter": "1/400s",
      "iso": "ISO 100",
      "focalLength": "24mm"
    }
  },
  {
    "id": "photo-14",
    "title": "Pastel Twilight Panorama",
    "category": "03 — Waterscapes & Dusk",
    "categorySlug": "waterscapes",
    "aspectRatio": "landscape",
    "imageUrl": "images/waterscapes/golden-pink-sunset-clouds.jpg",
    "thumbnailUrl": "images/waterscapes/golden-pink-sunset-clouds.webp",
    "clientPlaceholder": "Authentic Field Capture · Uttar Pradesh",
    "location": "Uttar Pradesh",
    "description": "Delicate pink and champagne altocumulus clouds across wide horizon. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "35mm f/1.4 GM Prime",
      "aperture": "f/4.0",
      "shutter": "1/320s",
      "iso": "ISO 100",
      "focalLength": "35mm"
    }
  },
  {
    "id": "photo-15",
    "title": "Iconic Ganga Suspension Bridge",
    "category": "02 — Sacred Heritage & Ghats",
    "categorySlug": "heritage",
    "aspectRatio": "portrait",
    "imageUrl": "images/heritage/rishikesh-suspension-bridge.jpg",
    "thumbnailUrl": "images/heritage/rishikesh-suspension-bridge.webp",
    "clientPlaceholder": "Authentic Field Capture · Rishikesh, Uttarakhand",
    "location": "Rishikesh, Uttarakhand",
    "description": "Steel cables framing the sacred river, temples, and forested foothills. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": true,
    "storyId": "story-01",
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "28mm f/2.0 Wide Prime",
      "aperture": "f/4.0",
      "shutter": "1/500s",
      "iso": "ISO 100",
      "focalLength": "28mm"
    }
  },
  {
    "id": "photo-16",
    "title": "Medieval Stone Temple Spire",
    "category": "02 — Sacred Heritage & Ghats",
    "categorySlug": "heritage",
    "aspectRatio": "portrait",
    "imageUrl": "images/heritage/ancient-stone-shikhara-temple.jpg",
    "thumbnailUrl": "images/heritage/ancient-stone-shikhara-temple.webp",
    "clientPlaceholder": "Authentic Field Capture · Garhwal Temple Complex",
    "location": "Garhwal Temple Complex",
    "description": "Ancient Nagara architectural spire pointing toward pure sky. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "50mm f/1.2 GM Prime",
      "aperture": "f/5.0",
      "shutter": "1/640s",
      "iso": "ISO 100",
      "focalLength": "50mm"
    }
  },
  {
    "id": "photo-17",
    "title": "Voyage Across Turquoise Waters",
    "category": "01 — Travel & Himalayas",
    "categorySlug": "travel",
    "aspectRatio": "portrait",
    "imageUrl": "images/travel/wooden-boat-bow-alpine-lake.jpg",
    "thumbnailUrl": "images/travel/wooden-boat-bow-alpine-lake.webp",
    "clientPlaceholder": "Authentic Field Capture · Tehri Lake, Uttarakhand",
    "location": "Tehri Lake, Uttarakhand",
    "description": "Bow of a wooden expedition boat cutting through pristine reservoir waters. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "35mm f/1.4 GM Prime",
      "aperture": "f/3.2",
      "shutter": "1/1000s",
      "iso": "ISO 100",
      "focalLength": "35mm"
    }
  },
  {
    "id": "photo-18",
    "title": "Terracotta Temple Relief Sculptures",
    "category": "02 — Sacred Heritage & Ghats",
    "categorySlug": "heritage",
    "aspectRatio": "portrait",
    "imageUrl": "images/heritage/terracotta-temple-carvings.jpg",
    "thumbnailUrl": "images/heritage/terracotta-temple-carvings.webp",
    "clientPlaceholder": "Authentic Field Capture · Heritage Temple Site",
    "location": "Heritage Temple Site",
    "description": "Intricate historical terracotta carvings depicting mythological epics. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "50mm f/1.2 GM Prime",
      "aperture": "f/2.8",
      "shutter": "1/250s",
      "iso": "ISO 160",
      "focalLength": "50mm"
    }
  },
  {
    "id": "photo-19",
    "title": "Alpine Cumulus Majesty",
    "category": "04 — Nature & Celestial",
    "categorySlug": "nature",
    "aspectRatio": "portrait",
    "imageUrl": "images/nature/azure-sky-cumulus-cloud.jpg",
    "thumbnailUrl": "images/nature/azure-sky-cumulus-cloud.webp",
    "clientPlaceholder": "Authentic Field Capture · Himalayan Foothills",
    "location": "Himalayan Foothills",
    "description": "Sculpted summer cumulus cloud set against high-altitude deep blue sky. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "24-70mm f/2.8 GM Zoom",
      "aperture": "f/8.0",
      "shutter": "1/1250s",
      "iso": "ISO 100",
      "focalLength": "70mm"
    }
  },
  {
    "id": "photo-20",
    "title": "Verdant Garhwal Panorama",
    "category": "01 — Travel & Himalayas",
    "categorySlug": "travel",
    "aspectRatio": "cinematic",
    "imageUrl": "images/travel/wide-green-mountain-panorama.jpg",
    "thumbnailUrl": "images/travel/wide-green-mountain-panorama.webp",
    "clientPlaceholder": "Authentic Field Capture · Chamba-Mussoorie Belt",
    "location": "Chamba-Mussoorie Belt",
    "description": "Rolling green mountain shoulders meeting ethereal cloud cover. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "24mm f/1.4 GM Prime",
      "aperture": "f/7.1",
      "shutter": "1/320s",
      "iso": "ISO 100",
      "focalLength": "24mm"
    }
  },
  {
    "id": "photo-21",
    "title": "Modernist Monolith & Repetition",
    "category": "05 — Architecture & Geometry",
    "categorySlug": "architecture",
    "aspectRatio": "portrait",
    "imageUrl": "images/architecture/geometric-highrise-facade.jpg",
    "thumbnailUrl": "images/architecture/geometric-highrise-facade.webp",
    "clientPlaceholder": "Authentic Field Capture · Urban Metropolis",
    "location": "Urban Metropolis",
    "description": "Striking geometric perspective of contemporary residential architecture. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "24mm f/1.4 GM Prime",
      "aperture": "f/5.6",
      "shutter": "1/800s",
      "iso": "ISO 100",
      "focalLength": "24mm"
    }
  },
  {
    "id": "photo-22",
    "title": "High-Altitude Pass Highway",
    "category": "01 — Travel & Himalayas",
    "categorySlug": "travel",
    "aspectRatio": "portrait",
    "imageUrl": "images/travel/himalayan-highway-rohtang.jpg",
    "thumbnailUrl": "images/travel/himalayan-highway-rohtang.webp",
    "clientPlaceholder": "Authentic Field Capture · Manali-Leh Highway, Himachal Pradesh",
    "location": "Manali-Leh Highway, Himachal Pradesh",
    "description": "Winding mountain highway carving through rugged rocky cliffs. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": true,
    "storyId": "story-02",
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "35mm f/1.4 GM Prime",
      "aperture": "f/4.5",
      "shutter": "1/640s",
      "iso": "ISO 100",
      "focalLength": "35mm"
    }
  },
  {
    "id": "photo-23",
    "title": "Canyon of Emerald Waters",
    "category": "01 — Travel & Himalayas",
    "categorySlug": "travel",
    "aspectRatio": "portrait",
    "imageUrl": "images/travel/tehri-dam-emerald-waters.jpg",
    "thumbnailUrl": "images/travel/tehri-dam-emerald-waters.webp",
    "clientPlaceholder": "Authentic Field Capture · Tehri Garhwal, Uttarakhand",
    "location": "Tehri Garhwal, Uttarakhand",
    "description": "Steep valley slopes embracing tranquil turquoise glacial waters. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "35mm f/1.4 GM Prime",
      "aperture": "f/5.0",
      "shutter": "1/500s",
      "iso": "ISO 100",
      "focalLength": "35mm"
    }
  },
  {
    "id": "photo-24",
    "title": "Waxing Moon Crater Topography",
    "category": "04 — Nature & Celestial",
    "categorySlug": "nature",
    "aspectRatio": "portrait",
    "imageUrl": "images/nature/lunar-craters-telephoto.jpg",
    "thumbnailUrl": "images/nature/lunar-craters-telephoto.webp",
    "clientPlaceholder": "Authentic Field Capture · Gorakhpur, Uttar Pradesh",
    "location": "Gorakhpur, Uttar Pradesh",
    "description": "High-magnification telephoto study of lunar maria and impact craters. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "200-600mm f/5.6-6.3 Super Telephoto",
      "aperture": "f/8.0",
      "shutter": "1/250s",
      "iso": "ISO 200",
      "focalLength": "600mm"
    }
  },
  {
    "id": "photo-25",
    "title": "Aerial Cableway Twilight",
    "category": "01 — Travel & Himalayas",
    "categorySlug": "travel",
    "aspectRatio": "portrait",
    "imageUrl": "images/travel/cable-car-sunset-overlook.jpg",
    "thumbnailUrl": "images/travel/cable-car-sunset-overlook.webp",
    "clientPlaceholder": "Authentic Field Capture · Mussoorie Ropeway, Uttarakhand",
    "location": "Mussoorie Ropeway, Uttarakhand",
    "description": "Descending through golden twilight mist over forested valleys. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "28mm f/2.0 Wide Prime",
      "aperture": "f/2.8",
      "shutter": "1/320s",
      "iso": "ISO 125",
      "focalLength": "28mm"
    }
  },
  {
    "id": "photo-26",
    "title": "Wayfarers at Tehri Reservoir",
    "category": "01 — Travel & Himalayas",
    "categorySlug": "travel",
    "aspectRatio": "cinematic",
    "imageUrl": "images/travel/travelers-scooter-tehri-overlook.jpg",
    "thumbnailUrl": "images/travel/travelers-scooter-tehri-overlook.webp",
    "clientPlaceholder": "Authentic Field Capture · Tehri Dam Viewpoint",
    "location": "Tehri Dam Viewpoint",
    "description": "Two travelers paused on a scenic curve overlooking turquoise expanse. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": true,
    "storyId": "story-02",
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "35mm f/1.4 GM Prime",
      "aperture": "f/4.0",
      "shutter": "1/800s",
      "iso": "ISO 100",
      "focalLength": "35mm"
    }
  },
  {
    "id": "photo-27",
    "title": "Twilight Devotion on Sacred Waters",
    "category": "03 — Waterscapes & Dusk",
    "categorySlug": "waterscapes",
    "aspectRatio": "landscape",
    "imageUrl": "images/waterscapes/sacred-river-dusk-bathers.jpg",
    "thumbnailUrl": "images/waterscapes/sacred-river-dusk-bathers.webp",
    "clientPlaceholder": "Authentic Field Capture · Ganga Ghats, Varanasi",
    "location": "Ganga Ghats, Varanasi",
    "description": "Silhouetted river bathers and wooden boats at the edge of dusk. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": true,
    "storyId": "story-03",
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "50mm f/1.2 GM Prime",
      "aperture": "f/2.2",
      "shutter": "1/640s",
      "iso": "ISO 100",
      "focalLength": "50mm"
    }
  },
  {
    "id": "photo-28",
    "title": "Botanical Variegation in Sunlight",
    "category": "04 — Nature & Celestial",
    "categorySlug": "nature",
    "aspectRatio": "square",
    "imageUrl": "images/nature/botanical-variegated-foliage.jpg",
    "thumbnailUrl": "images/nature/botanical-variegated-foliage.webp",
    "clientPlaceholder": "Authentic Field Capture · Botanical Study",
    "location": "Botanical Study",
    "description": "Crisp organic macro texture of tropical leaves glowing in morning light. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "85mm f/1.4 Portrait Prime",
      "aperture": "f/2.8",
      "shutter": "1/400s",
      "iso": "ISO 100",
      "focalLength": "85mm"
    }
  },
  {
    "id": "photo-29",
    "title": "Himalayan Shrine & Ropeway Triptych",
    "category": "01 — Travel & Himalayas",
    "categorySlug": "travel",
    "aspectRatio": "square",
    "imageUrl": "images/travel/nepal-temple-cablecar-journey.jpg",
    "thumbnailUrl": "images/travel/nepal-temple-cablecar-journey.webp",
    "clientPlaceholder": "Authentic Field Capture · Manakamana / Kathmandu, Nepal",
    "location": "Manakamana / Kathmandu, Nepal",
    "description": "Cultural pilgrimage study: multi-tiered pagoda, cable car, and mountain vistas. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "35mm f/1.4 GM Prime",
      "aperture": "f/4.0",
      "shutter": "1/500s",
      "iso": "ISO 100",
      "focalLength": "35mm"
    }
  },
  {
    "id": "photo-30",
    "title": "Doves of the Sunset Parapet",
    "category": "04 — Nature & Celestial",
    "categorySlug": "nature",
    "aspectRatio": "portrait",
    "imageUrl": "images/nature/pigeons-rooftop-sunset.jpg",
    "thumbnailUrl": "images/nature/pigeons-rooftop-sunset.webp",
    "clientPlaceholder": "Authentic Field Capture · Gorakhpur, Uttar Pradesh",
    "location": "Gorakhpur, Uttar Pradesh",
    "description": "Peaceful rooftop silhouettes against shimmering amber evening light. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "85mm f/1.4 Portrait Prime",
      "aperture": "f/2.8",
      "shutter": "1/800s",
      "iso": "ISO 100",
      "focalLength": "85mm"
    }
  },
  {
    "id": "photo-31",
    "title": "Alpine Deodar Forest & Morning Mist",
    "category": "04 — Nature & Celestial",
    "categorySlug": "nature",
    "aspectRatio": "portrait",
    "imageUrl": "images/nature/himalayan-pine-forest-mist.jpg",
    "thumbnailUrl": "images/nature/himalayan-pine-forest-mist.webp",
    "clientPlaceholder": "Authentic Field Capture · Dhanaulti / Tehri Garhwal",
    "location": "Dhanaulti / Tehri Garhwal",
    "description": "Stately Himalayan pines ascending into cool mountain clouds. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "50mm f/1.2 GM Prime",
      "aperture": "f/4.0",
      "shutter": "1/320s",
      "iso": "ISO 125",
      "focalLength": "50mm"
    }
  },
  {
    "id": "photo-32",
    "title": "Vintage Riverside Cast-Iron Lamp",
    "category": "05 — Architecture & Geometry",
    "categorySlug": "architecture",
    "aspectRatio": "portrait",
    "imageUrl": "images/architecture/riverside-promenade-lantern.jpg",
    "thumbnailUrl": "images/architecture/riverside-promenade-lantern.webp",
    "clientPlaceholder": "Authentic Field Capture · Haridwar River Walk",
    "location": "Haridwar River Walk",
    "description": "Victorian-inspired lantern illuminating tranquil twilight riverbank. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "50mm f/1.2 GM Prime",
      "aperture": "f/2.0",
      "shutter": "1/160s",
      "iso": "ISO 200",
      "focalLength": "50mm"
    }
  }  ,
  {
    "id": "photo-33",
    "title": "Verdant Canopy & Mountain Trail",
    "category": "04 — Nature & Celestial",
    "categorySlug": "nature",
    "aspectRatio": "portrait",
    "imageUrl": "images/nature/verdant-canopy-mountain-trail.jpg",
    "thumbnailUrl": "images/nature/verdant-canopy-mountain-trail.webp",
    "clientPlaceholder": "Authentic Field Capture · Chopta, Uttarakhand",
    "location": "Chopta, Uttarakhand",
    "description": "Atmospheric vertical vista through dense temperate forest canopy. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "35mm f/1.4 GM Prime",
      "aperture": "f/2.8",
      "shutter": "1/250s",
      "iso": "ISO 160",
      "focalLength": "35mm"
    }
  },
  {
    "id": "photo-34",
    "title": "Nocturne Flora & Silent Timber",
    "category": "04 — Nature & Celestial",
    "categorySlug": "nature",
    "aspectRatio": "portrait",
    "imageUrl": "images/nature/nocturne-flora-silent-timber.jpg",
    "thumbnailUrl": "images/nature/nocturne-flora-silent-timber.webp",
    "clientPlaceholder": "Authentic Field Capture · Rishikesh, Uttarakhand",
    "location": "Rishikesh, Uttarakhand",
    "description": "Low-key nocturnal foliage study with controlled ambient shadow depth. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "50mm f/1.2 GM Prime",
      "aperture": "f/1.8",
      "shutter": "1/100s",
      "iso": "ISO 800",
      "focalLength": "50mm"
    }
  },
  {
    "id": "photo-35",
    "title": "Golden Hour Cultural Reverence",
    "category": "06 — Portraits & Cultural Celebrations",
    "categorySlug": "portrait",
    "aspectRatio": "portrait",
    "imageUrl": "images/portrait/golden-hour-cultural-reverence.jpg",
    "thumbnailUrl": "images/portrait/golden-hour-cultural-reverence.webp",
    "clientPlaceholder": "Authentic Field Capture · Varanasi, Uttar Pradesh",
    "location": "Varanasi, Uttar Pradesh",
    "description": "Authentic portrait study capturing radiant festival ambiance and warm skin tones. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "85mm f/1.4 GM Prime",
      "aperture": "f/1.4",
      "shutter": "1/500s",
      "iso": "ISO 100",
      "focalLength": "85mm"
    }
  },
  {
    "id": "photo-36",
    "title": "The Solitary Artisan",
    "category": "06 — Portraits & Cultural Celebrations",
    "categorySlug": "portrait",
    "aspectRatio": "portrait",
    "imageUrl": "images/portrait/solitary-artisan-craft.jpg",
    "thumbnailUrl": "images/portrait/solitary-artisan-craft.webp",
    "clientPlaceholder": "Authentic Field Capture · Gorakhpur, Uttar Pradesh",
    "location": "Gorakhpur, Uttar Pradesh",
    "description": "Intimate portrait focusing on focused craftsmanship under warm directional light. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "50mm f/1.2 GM Prime",
      "aperture": "f/2.0",
      "shutter": "1/200s",
      "iso": "ISO 400",
      "focalLength": "50mm"
    }
  },
  {
    "id": "photo-37",
    "title": "Candid Festive Expressions",
    "category": "06 — Portraits & Cultural Celebrations",
    "categorySlug": "portrait",
    "aspectRatio": "portrait",
    "imageUrl": "images/portrait/candid-festive-expressions.jpg",
    "thumbnailUrl": "images/portrait/candid-festive-expressions.webp",
    "clientPlaceholder": "Authentic Field Capture · Ayodhya, Uttar Pradesh",
    "location": "Ayodhya, Uttar Pradesh",
    "description": "Spontaneous cultural portrait capturing pure emotion and vibrant ceremony tones. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "85mm f/1.4 GM Prime",
      "aperture": "f/1.8",
      "shutter": "1/400s",
      "iso": "ISO 160",
      "focalLength": "85mm"
    }
  },
  {
    "id": "photo-38",
    "title": "Cerulean Expanse over Sacred Waters",
    "category": "03 — Waterscapes & Dusk",
    "categorySlug": "waterscapes",
    "aspectRatio": "portrait",
    "imageUrl": "images/waterscapes/cerulean-expanse-sacred-waters.jpg",
    "thumbnailUrl": "images/waterscapes/cerulean-expanse-sacred-waters.webp",
    "clientPlaceholder": "Authentic Field Capture · Ganga Ghats, Varanasi",
    "location": "Ganga Ghats, Varanasi",
    "description": "Vivid blue daylight reflecting across calm river bends and distant horizons. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "24mm f/1.4 GM Prime",
      "aperture": "f/5.6",
      "shutter": "1/800s",
      "iso": "ISO 100",
      "focalLength": "24mm"
    }
  },
  {
    "id": "photo-39",
    "title": "Chiaroscuro Silhouette & Warm Contour",
    "category": "06 — Portraits & Cultural Celebrations",
    "categorySlug": "portrait",
    "aspectRatio": "portrait",
    "imageUrl": "images/portrait/chiaroscuro-silhouette-warm-contour.jpg",
    "thumbnailUrl": "images/portrait/chiaroscuro-silhouette-warm-contour.webp",
    "clientPlaceholder": "Authentic Studio Commission · Lucknow",
    "location": "Studio Commission · Lucknow",
    "description": "High-contrast editorial portrait study sculpted with warm rim lighting. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "50mm f/1.2 GM Prime",
      "aperture": "f/1.4",
      "shutter": "1/160s",
      "iso": "ISO 320",
      "focalLength": "50mm"
    }
  },
  {
    "id": "photo-40",
    "title": "Midday Horizon & Himalayan Foothills",
    "category": "01 — Travel & Himalayas",
    "categorySlug": "travel",
    "aspectRatio": "portrait",
    "imageUrl": "images/travel/midday-horizon-himalayan-foothills.jpg",
    "thumbnailUrl": "images/travel/midday-horizon-himalayan-foothills.webp",
    "clientPlaceholder": "Authentic Field Capture · Uttarakhand",
    "location": "Uttarakhand",
    "description": "Expansive high-altitude travel frame under crisp Himalayan sunlight. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "35mm f/1.4 GM Prime",
      "aperture": "f/8.0",
      "shutter": "1/500s",
      "iso": "ISO 100",
      "focalLength": "35mm"
    }
  },
  {
    "id": "photo-41",
    "title": "Wedding Ritual & Sacred Flame",
    "category": "06 — Portraits & Cultural Celebrations",
    "categorySlug": "portrait",
    "aspectRatio": "portrait",
    "imageUrl": "images/portrait/wedding-ritual-sacred-flame.jpg",
    "thumbnailUrl": "images/portrait/wedding-ritual-sacred-flame.webp",
    "clientPlaceholder": "Authentic Wedding Commission · Uttar Pradesh",
    "location": "Wedding Commission · Uttar Pradesh",
    "description": "Authentic wedding ceremony capture illuminating emotional reverence and ceremonial hues. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "50mm f/1.2 GM Prime",
      "aperture": "f/1.8",
      "shutter": "1/250s",
      "iso": "ISO 500",
      "focalLength": "50mm"
    }
  },
  {
    "id": "photo-42",
    "title": "Temple Archway & Ambient Sanctum",
    "category": "02 — Sacred Heritage & Ghats",
    "categorySlug": "heritage",
    "aspectRatio": "portrait",
    "imageUrl": "images/heritage/temple-archway-ambient-sanctum.jpg",
    "thumbnailUrl": "images/heritage/temple-archway-ambient-sanctum.webp",
    "clientPlaceholder": "Authentic Field Capture · Kashi Vishwanath Corridor, Varanasi",
    "location": "Kashi Vishwanath Corridor, Varanasi",
    "description": "Heritage architecture framing spiritual devotion with natural temple light. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "24mm f/1.4 GM Prime",
      "aperture": "f/2.8",
      "shutter": "1/200s",
      "iso": "ISO 250",
      "focalLength": "24mm"
    }
  },
  {
    "id": "photo-43",
    "title": "Grace & Introspection",
    "category": "06 — Portraits & Cultural Celebrations",
    "categorySlug": "portrait",
    "aspectRatio": "portrait",
    "imageUrl": "images/portrait/grace-and-introspection.jpg",
    "thumbnailUrl": "images/portrait/grace-and-introspection.webp",
    "clientPlaceholder": "Authentic Field Capture · Gorakhpur, Uttar Pradesh",
    "location": "Gorakhpur, Uttar Pradesh",
    "description": "Quiet editorial portrait capturing natural expressions without artificial staging. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "85mm f/1.4 GM Prime",
      "aperture": "f/1.8",
      "shutter": "1/320s",
      "iso": "ISO 200",
      "focalLength": "85mm"
    }
  },
  {
    "id": "photo-44",
    "title": "Valley of the Whispering Winds",
    "category": "01 — Travel & Himalayas",
    "categorySlug": "travel",
    "aspectRatio": "landscape",
    "imageUrl": "images/travel/valley-whispering-winds-panorama.jpg",
    "thumbnailUrl": "images/travel/valley-whispering-winds-panorama.webp",
    "clientPlaceholder": "Authentic Field Capture · Garhwal Himalayas, Uttarakhand",
    "location": "Garhwal Himalayas, Uttarakhand",
    "description": "Grand landscape panorama capturing vast Himalayan valley contours and soft cloud shadows. Captured on-location with precision exposure control, natural ambient illumination, and graded in Adobe Lightroom and Photoshop.",
    "year": "2024",
    "hasStory": false,
    "storyId": null,
    "exif": {
      "camera": "Sony Alpha Full-Frame",
      "lens": "24mm f/1.4 GM Prime",
      "aperture": "f/8.0",
      "shutter": "1/640s",
      "iso": "ISO 100",
      "focalLength": "24mm"
    }
  }

];

export const SIGNATURE_PROJECTS = [
  {
    id: "story-01",
    title: "The Sacred Ghats of Varanasi & Haridwar",
    category: "Sacred Heritage & Ghats",
    location: "Varanasi & Haridwar, Uttar Pradesh & Uttarakhand",
    year: "2024",
    heroImage: "images/heritage/varanasi-sacred-ghat-twilight.jpg",
    synopsis: "An immersive dawn-to-dusk photographic essay documenting the timeless rituals, illuminated temple spires, and spiritual reverence along the holy Ganges.",
    creativeApproach: "Balancing unobtrusive environmental photojournalism with deliberate long exposures. We captured the glowing brass lamps of the evening Ganga Aarti, the delicate textures of terracotta temple facades, and the architectural silhouette of the suspension footbridges.",
    behindTheScenes: "Utilizing low-light fast primes at f/1.8 to preserve natural tungsten lantern light and blue-hour river ambient glow without harsh artificial fill. Color-graded in Adobe Lightroom with a cinematic cool-warm dual split.",
    supportingPhotos: [
      {
        url: "images/heritage/evening-aarti-ghat-illumination.jpg",
        caption: "Evening Aarti illumination and temple chandeliers reflecting in the river"
      },
      {
        url: "images/heritage/rishikesh-suspension-bridge.jpg",
        caption: "Iconic Ganga suspension bridge framing the sacred valley and pilgrims"
      },
      {
        url: "images/heritage/sacred-shiva-mural-rishikesh.jpg",
        caption: "Monumental Lord Shiva sacred devotional fresco painted on riverside facade"
      },
      {
        url: "images/heritage/ancient-stone-shikhara-temple.jpg",
        caption: "Medieval Nagara stone temple spire pointing into pure sky"
      },
      {
        url: "images/heritage/terracotta-temple-carvings.jpg",
        caption: "Intricate historical terracotta relief carvings depicting sacred epics"
      }
    ]
  },
  {
    id: "story-02",
    title: "High-Altitude Himalayan Odyssey",
    category: "Travel & Himalayas",
    location: "Tehri Dam, Rohtang & Garhwal Ranges",
    year: "2024",
    heroImage: "images/travel/tehri-dam-turquoise-reservoir.jpg",
    synopsis: "A high-altitude visual expedition traversing glacial turquoise reservoirs, serpentine mountain highways, and stone trails winding into the clouds.",
    creativeApproach: "Emphasizing vast negative space and the monumental scale of Himalayan geology. From sweeping ultra-wide landscape panoramas to candid traveler portraits at viewpoints, every frame communicates quiet grandeur.",
    behindTheScenes: "Exposing carefully for bright alpine highlights and deep shadow ridges. Processed in Adobe Photoshop and Lightroom to enhance depth and preserve the rich turquoise hues of high-altitude glacial waters.",
    supportingPhotos: [
      {
        url: "images/travel/himalayan-highway-rohtang.jpg",
        caption: "Winding mountain highway carving through rugged rocky cliffs"
      },
      {
        url: "images/travel/travelers-scooter-tehri-overlook.jpg",
        caption: "Two travelers paused on a scenic curve overlooking the turquoise reservoir"
      },
      {
        url: "images/travel/mountain-ridge-overlook-pass.jpg",
        caption: "Highland pass and alpine overlook disappearing into morning mist"
      },
      {
        url: "images/travel/wooden-boat-bow-alpine-lake.jpg",
        caption: "Bow of a wooden expedition boat cutting through pristine reservoir waters"
      },
      {
        url: "images/travel/ancient-stone-trail-steps.jpg",
        caption: "Hand-hewn stone steps ascending through mist-shrouded mountain forest"
      }
    ]
  },
  {
    id: "story-03",
    title: "Twilight Waters & Celestial Atmospheres",
    category: "Waterscapes & Dusk",
    location: "Sacred Riverbanks & Sky Studies",
    year: "2024",
    heroImage: "images/waterscapes/ganga-river-golden-sunset.jpg",
    synopsis: "A contemplative visual meditation on golden hour light, tranquil river ripples, silhouetted devotion, and telescopic lunar astronomy.",
    creativeApproach: "Mastering directional backlight and high-contrast silhouettes. The series transitions from the warm glow of setting suns across sacred rivers to the ethereal textures of crepuscular rays and detailed telephoto lunar craters.",
    behindTheScenes: "Captured with precise optical alignment and manual shutter tuning to freeze water ripples and retain subtle tonal transitions across pastel cloudscapes. Finished with delicate curve adjustments in Adobe Photoshop.",
    supportingPhotos: [
      {
        url: "images/waterscapes/sacred-river-dusk-bathers.jpg",
        caption: "Silhouetted river bathers and wooden boats at the edge of dusk"
      },
      {
        url: "images/waterscapes/twilight-cloudburst-rays.jpg",
        caption: "Crepuscular rays breaking through dramatic dusk cloud formations"
      },
      {
        url: "images/nature/lunar-craters-telephoto.jpg",
        caption: "High-magnification telephoto study of lunar maria and impact craters"
      },
      {
        url: "images/waterscapes/golden-dusk-rooftop-sky.jpg",
        caption: "Warm amber and violet sunset sky with tiered cloud gradients"
      },
      {
        url: "images/nature/botanical-variegated-foliage.jpg",
        caption: "Crisp botanical macro textures glowing in gentle morning light"
      }
    ]
  }
];

export const VIDEOGRAPHY_PROJECTS = [
    {
    id: "video-01",
    title: "Heritage Architecture & Moving Perspective — 60fps Reel",
    category: "Cinematic Reels",
    format: "9:16",
    duration: "0:15",
    thumbnailUrl: "video/heritage-archway-ambient-reel-thumb.jpg",
    videoUrl: "video/heritage-archway-ambient-reel.mp4",
    clientPlaceholder: "High-Retention Vertical Travel Reel",
    role: "Field Cinematography, Slow-Motion & Video Editing",
    software: ["Adobe Premiere Pro"],
    synopsis: "Fluid 60fps vertical reel with smooth camera movement revealing textural masonry, ambient natural light, and structural elegance.",
    highlightTags: ["60 FPS Reel", "Vertical 9:16", "Premiere Pro", "Smooth Motion"]
  },
  {
    id: "video-02",
    title: "Golden Hour Wedding Ritual & Ceremonial Warmth",
    category: "Wedding Films",
    format: "9:16",
    duration: "0:16",
    thumbnailUrl: "video/golden-wedding-celebration-teaser-thumb.jpg",
    videoUrl: "video/golden-wedding-celebration-teaser.mp4",
    clientPlaceholder: "Wedding Commission · Uttar Pradesh",
    role: "Wedding Cinematographer & Highlight Editor",
    software: ["Adobe Premiere Pro", "Adobe Lightroom"],
    synopsis: "Vibrant wedding celebration reel capturing sacred ceremonial rituals, radiant golden lighting, and joyful family emotions.",
    highlightTags: ["Wedding Film", "Warm Tones", "Premiere Pro", "Ceremony"]
  },
  {
    id: "video-03",
    title: "Candid Wedding Joy & Cultural Energy",
    category: "Wedding Films",
    format: "9:16",
    duration: "0:19",
    thumbnailUrl: "video/candid-wedding-festive-energy-thumb.jpg",
    videoUrl: "video/candid-wedding-festive-energy.mp4",
    clientPlaceholder: "Wedding Celebration Coverage · Uttar Pradesh",
    role: "Candid Storyteller & Reel Editor",
    software: ["Adobe Premiere Pro"],
    synopsis: "Lively wedding ceremony highlight filled with spontaneous laughter, celebration dance, and bright daylight ceremony moments.",
    highlightTags: ["Wedding Stories", "Candid Energy", "Premiere Pro"]
  },
  {
    id: "video-04",
    title: "Twilight Aarti & Sacred Devotional Glow",
    category: "Event Highlights",
    format: "9:16",
    duration: "0:30",
    thumbnailUrl: "video/twilight-aarti-sacred-devotion-thumb.jpg",
    videoUrl: "video/twilight-aarti-sacred-devotion.mp4",
    clientPlaceholder: "Devotional Event Coverage · River Ghats",
    role: "Lead Event Videographer & Fast-Turnaround Editor",
    software: ["Adobe Premiere Pro"],
    synopsis: "Intimate twilight documentary capturing golden lamp reflections, sacred chanting energy, and evening reverie.",
    highlightTags: ["Low-Light", "Premiere Pro", "Event Energy"]
  },
  {
    id: "video-05",
    title: "Nocturnal Ritual & Sacred Temple Chants",
    category: "Event Highlights",
    format: "9:16",
    duration: "0:12",
    thumbnailUrl: "video/nocturnal-temple-ambiance-thumb.jpg",
    videoUrl: "video/nocturnal-temple-ambiance.mp4",
    clientPlaceholder: "Atmospheric Cultural Document",
    role: "Cinematography & Audio Sync",
    software: ["Adobe Premiere Pro"],
    synopsis: "Atmospheric night visual capturing sacred lamps and spiritual ambiance in the temple courtyard.",
    highlightTags: ["Nocturnal", "Premiere Pro", "Cultural"]
  },
  {
    id: "video-06",
    title: "Sacred City Procession & Festival Crowds",
    category: "Event Highlights",
    format: "9:16",
    duration: "0:20",
    thumbnailUrl: "video/cultural-celebration-procession-thumb.jpg",
    videoUrl: "video/cultural-celebration-procession.mp4",
    clientPlaceholder: "Cultural Documentary Assignment · Varanasi",
    role: "Field Cinematography & Rhythm Editing",
    software: ["Adobe Premiere Pro"],
    synopsis: "Dynamic event video capturing the vibrant crowd energy and sacred processional momentum on ancient riverfront streets.",
    highlightTags: ["Event Highlights", "Street Culture", "Premiere Pro"]
  },
  {
    id: "video-07",
    title: "Himalayan Valley & Highway Vista — Widescreen Cut",
    category: "Travel Film",
    format: "16:9",
    duration: "0:16",
    thumbnailUrl: "video/himalayan-valley-open-road-cinema-thumb.jpg",
    videoUrl: "video/himalayan-valley-open-road-cinema.mp4",
    clientPlaceholder: "High-Altitude Expedition · Garhwal",
    role: "Field Cinematography & Video Editing",
    software: ["Adobe Premiere Pro"],
    synopsis: "Panoramic widescreen 16:9 landscape cut featuring open high-altitude mountain valley roads, shifting light, and cinematic horizons.",
    highlightTags: ["Widescreen 16:9", "Travel Cinema", "Premiere Pro"]
  },
  {
    id: "video-08",
    title: "Himalayan Forest Canopy & Road Expedition",
    category: "Travel Film",
    format: "9:16",
    duration: "0:21",
    thumbnailUrl: "video/mountain-trail-greenery-expedition-thumb.jpg",
    videoUrl: "video/mountain-trail-greenery-expedition.mp4",
    clientPlaceholder: "Travel Visual Storytelling · Uttarakhand",
    role: "Travel Cinematographer & Fast Pacer",
    software: ["Adobe Premiere Pro"],
    synopsis: "Immersive vertical travel diary winding through emerald Himalayan mountain tree canopies and mountain curves.",
    highlightTags: ["Travel Reel", "Himalayas", "Nature", "Premiere Pro"]
  },
  {
    id: "video-09",
    title: "Atmospheric Twilight & Blue Hour Mood",
    category: "Cinematic Reels",
    format: "9:16",
    duration: "0:18",
    thumbnailUrl: "video/atmospheric-dusk-drift-reel-thumb.jpg",
    videoUrl: "video/atmospheric-dusk-drift-reel.mp4",
    clientPlaceholder: "Aesthetic Short-Form Reel",
    role: "Reel Editor & Sound Designer",
    software: ["Adobe Premiere Pro"],
    synopsis: "Moody vertical cinematic reel with gradual exposure transition and atmospheric sound design.",
    highlightTags: ["Blue Hour", "Vertical 9:16", "Sound FX"]
  },
  {
    id: "video-10",
    title: "Chiaroscuro Night Portrait & Festival Lights",
    category: "Cinematic Reels",
    format: "9:16",
    duration: "0:09",
    thumbnailUrl: "video/chiaroscuro-night-portrait-reel-thumb.jpg",
    videoUrl: "video/chiaroscuro-night-portrait-reel.mp4",
    clientPlaceholder: "Low-Light Street Portrait Reel",
    role: "Video Editing & Color Grading",
    software: ["Adobe Premiere Pro"],
    synopsis: "High-contrast nighttime portrait reel capturing glowing lanterns and expressive candid emotion.",
    highlightTags: ["Chiaroscuro", "Vertical 9:16", "Festival Lights"]
  },
  {
    id: "video-11",
    title: "Sacred Fire Reverence & River Ghat Glow",
    category: "Cinematic Reels",
    format: "9:16",
    duration: "0:18",
    thumbnailUrl: "video/sacred-fire-ceremony-reel-thumb.jpg",
    videoUrl: "video/sacred-fire-ceremony-reel.mp4",
    clientPlaceholder: "Heritage Evening Reel · Ganga Riverfront",
    role: "Reel Cinematographer & Colorist",
    software: ["Adobe Premiere Pro", "Adobe Lightroom"],
    synopsis: "Golden dusk visual reel focusing on devotional flames, sacred bell rhythms, and reflective riverbank illumination.",
    highlightTags: ["Vertical 9:16", "Golden Glow", "Premiere Pro", "Fire Aarti"]
  },
  {
    id: "video-12",
    title: "Dynamic Architecture & Structural Drift",
    category: "Cinematic Reels",
    format: "9:16",
    duration: "0:14",
    thumbnailUrl: "video/geometric-perspective-glide-thumb.jpg",
    videoUrl: "video/geometric-perspective-glide.mp4",
    clientPlaceholder: "Architectural Geometry & Spatial Film",
    role: "Camera Movement & Video Editing",
    software: ["Adobe Premiere Pro"],
    synopsis: "Controlled perspective camera glide exploring architectural diagonals and spatial depth.",
    highlightTags: ["Architecture", "Premiere Pro", "Perspective"]
  },
  {
    id: "video-13",
    title: "Sacred Ghats & Riverfront Reflections — Cinematic Heritage",
    category: "Cinematic Film",
    format: "16:9",
    duration: "0:25",
    thumbnailUrl: "video/sacred-ghats-varanasi-cinematic-thumb.jpg",
    videoUrl: "video/sacred-ghats-varanasi-cinematic.mp4",
    clientPlaceholder: "Cultural Heritage Documentary · Varanasi",
    role: "Director of Photography, Documentary Cinematographer & Editor",
    software: ["Adobe Premiere Pro", "Adobe Lightroom"],
    synopsis: "Atmospheric cinematic travel exploration of sacred riverfront ghats, morning light reflections on holy waters, and historic spiritual rituals.",
    highlightTags: ["Varanasi Ghats", "Cinematic Heritage", "Premiere Pro", "Cultural Film"]
  }
];

export const CREATIVE_SERVICES = {
  photography: [
    {
      title: "Wedding Photography",
      description: "Fine-art and documentary wedding coverage preserving sacred rituals, honest smiles, and the vibrant tapestry of celebration.",
      deliverables: ["Full-day or multi-day coverage", "Pre-wedding & couple portrait session", "High-res color-graded digital gallery", "Signature print-ready selections"],
      highlight: "Unscripted Emotion"
    },
    {
      title: "Portrait Photography",
      description: "Editorial character portraits, corporate executive headshots, and creative beauty sessions sculpted with directional studio or natural light.",
      deliverables: ["Natural skin texture retouching", "Studio & environmental location options", "High-res master exports", "Commercial usage rights"],
      highlight: "Signature Lighting"
    },
    {
      title: "Event Photography",
      description: "Fast-paced, unobtrusive visual documentation of galas, corporate conferences, product reveals, and celebratory milestones.",
      deliverables: ["Same-day or 24h sneak peeks", "Full event photojournalism", "VIP & candid moments", "High-speed digital delivery"],
      highlight: "Dynamic Real-Time"
    },
    {
      title: "Product Photography",
      description: "Clean commercial e-commerce, lifestyle staging, and focus-stacked macro captures highlighting luxury materials and textures.",
      deliverables: ["Clean background isolation", "Focus-stacked macro clarity", "E-commerce & web-optimized exports", "Reflective surface control"],
      highlight: "Micro-Precision"
    },
    {
      title: "Travel Photography",
      description: "Atmospheric landscapes, resort and hospitality features, and editorial travel essays across diverse global destinations.",
      deliverables: ["On-location scouting & shooting", "Natural golden-hour captures", "High-res tourism & editorial assets", "Bespoke color grading"],
      highlight: "Destination Storytelling"
    }
  ],
  postProduction: [
    {
      title: "Adobe Photoshop Editing",
      description: "Non-destructive frequency separation, dodge & burn, stray hair removal, and meticulous digital cleanup in Adobe Photoshop.",
      deliverables: ["Natural skin preservation", "Wrinkle & blemish cleanup", "Tone & shadow balancing", "Print-ready TIFF & Web JPG"],
      highlight: "Photoshop Precision"
    },
    {
      title: "Lightroom Color Grading",
      description: "Establishing cohesive tonal palettes, cinematic film looks, and harmonizing colors across mixed ambient lighting in Adobe Lightroom.",
      deliverables: ["Custom tone curves", "Accurate skin tone isolation", "Set consistency across hundreds of photos", "Bespoke presets"],
      highlight: "Lightroom Color Mastery"
    },
    {
      title: "Professional Retouching",
      description: "High-end commercial cleanplates, edge refinement, alpha masking, and texture enhancement for advertising standards.",
      deliverables: ["Flawless subject isolation", "Natural shadow reconstruction", "Distraction eradication", "Magazine-ready finish"],
      highlight: "Commercial Polish"
    },
    {
      title: "Image Enhancement & Culling",
      description: "Rapid culling, exposure balancing, and metadata organizing for thousands of wedding and event frames.",
      deliverables: ["Smart preview workflows", "Fast turnaround on large events", "Export presets for social & print", "Organized archives"],
      highlight: "Fast Turnaround"
    }
  ],
  videoProduction: [
    {
      title: "Adobe Premiere Pro Editing",
      description: "Pacing, rhythmic montage cutting, multi-cam synchronization, and narrative arc building inside Adobe Premiere Pro.",
      deliverables: ["4K & 1080p Master exports", "Dynamic transitions", "Licensed score synchronization", "Multiple revision rounds"],
      highlight: "Premiere Pro Powerhouse"
    },
    {
      title: "Cinematic Video Editing",
      description: "Color-graded cinematic celebration films and brand anthems engineered with emotional depth and audio design.",
      deliverables: ["Teasers & Full Feature edits", "Custom cinematic color tone", "Sound sweetening & foley", "High-bitrate ProRes / H.265"],
      highlight: "Cinematic Feel"
    },
    {
      title: "Instagram Reels & Short-Form",
      description: "High-retention 9:16 vertical videos engineered for algorithms with kinetic cuts and beat-synced pacing.",
      deliverables: ["Trending audio alignment", "Hook-optimized first 3 seconds", "Fast social turnaround", "Batch production available"],
      highlight: "High Retention"
    },
    {
      title: "Short Promotional Videos",
      description: "Targeted brand teasers and promotional cutdowns (15s, 30s, 60s) crafted for social campaigns and conversion.",
      deliverables: ["Engaging visual hooks", "Logo & typography overlays", "Multi-aspect outputs", "Platform-specific optimization"],
      highlight: "Brand Conversion"
    }
  ]
};

export const CREATIVE_PROCESS = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Understand the Vision",
    description: "Every standout project begins with direct, active communication. We discuss your aesthetic goals, brand voice, timeline, and mood references to align on a clear creative north star.",
    deliverables: ["Moodboard consultation", "Creative brief synthesis", "Lighting & tone roadmap"]
  },
  {
    step: "02",
    title: "Conceptualize",
    subtitle: "Plan the Creative Direction",
    description: "Flawless execution is won in preparation. I construct comprehensive shot lists, scout light-optimal angles, plan schedules, and prepare equipment for seamless shooting.",
    deliverables: ["Detailed shot list", "Timing & schedule coordination", "Equipment preparation"]
  },
  {
    step: "03",
    title: "Capture",
    subtitle: "Execute the Photoshoot",
    description: "On set, high-end optical gear meets calm, confident direction. Whether guiding subjects into natural poses or anticipating candid wedding glances, every moment is captured deliberately.",
    deliverables: ["Multi-angle coverage", "Directing with ease", "Dual card backup safety"]
  },
  {
    step: "04",
    title: "Refine",
    subtitle: "Edit, Retouch & Polish",
    description: "Raw files undergo meticulous curation, custom color grading in Lightroom, high-end skin and detail retouching in Photoshop, and narrative pacing in Premiere Pro.",
    deliverables: ["Frequency separation skin work", "Harmonious color palettes", "Beat-synced video cuts"]
  },
  {
    step: "05",
    title: "Deliver",
    subtitle: "Finished Creative Assets",
    description: "Your master gallery and video files are delivered through high-speed, secure download links with web-optimized, print-ready, and social-cutdown assets ready to share.",
    deliverables: ["Private cloud link", "Full-resolution TIFF/JPG/MP4", "Mobile & social ready exports"]
  }
];

export const TOOLKIT_AND_EQUIPMENT = {
  notice: "Verified Software & Creative Toolkit for Aakash Jaiswal. Equipment entries are editable placeholders.",
  categories: [
    {
      name: "Confirmed Core Software Suite",
      icon: "Layers",
      items: [
        { name: "Adobe Photoshop", role: "High-end skin retouching, frequency separation, background cleanups & compositing", tag: "Primary Retouching" },
        { name: "Adobe Lightroom", role: "RAW image development, color grading, batch exposure balancing & catalog management", tag: "Primary Color Grade" },
        { name: "Adobe Premiere Pro", role: "Cinematic timeline editing, rhythm beat-sync, multi-cam assembly & audio design", tag: "Primary Video NLE" }
      ]
    },
    {
      name: "Confirmed Specializations",
      icon: "Camera",
      items: [
        { name: "Wedding Photography & Films", role: "Documentary and fine-art coverage of ceremonies, receptions & pre-weddings", tag: "Core Specialty" },
        { name: "Portrait Photography", role: "Studio and outdoor character portraits with flattering directional lighting", tag: "Core Specialty" },
        { name: "Event Photography", role: "Fast-paced corporate and celebratory event photojournalism and highlight videos", tag: "Core Specialty" },
        { name: "Product Photography", role: "Commercial e-commerce and lifestyle product staging with micro-detail clarity", tag: "Core Specialty" },
        { name: "Travel Photography", role: "Destination visual documentation, scenic landscapes & environmental storytelling", tag: "Core Specialty" }
      ]
    },
    {
      name: "Equipment & Optics (Editable Placeholders)",
      icon: "Aperture",
      items: [
        { name: "Full-Frame Professional Mirrorless Body [Editable]", role: "High-resolution stills & 4K video recording", tag: "Primary Body" },
        { name: "Fast Prime Lenses (35mm / 50mm / 85mm) [Editable]", role: "Creamy background bokeh & low-light capability", tag: "Optics" },
        { name: "Standard & Telephoto Zoom Lenses [Editable]", role: "Versatility for ceremonies and dynamic events", tag: "Optics" },
        { name: "Studio Lighting & Portable Modifiers [Editable]", role: "Softboxes, reflectors, and directional strobes", tag: "Lighting" }
      ]
    }
  ]
};

export const PROFESSIONAL_JOURNEY = [
  {
    period: "2023 – Present",
    role: "Freelance Photographer & Video Editor",
    organization: "Independent Practice — Aakash Jaiswal",
    type: "Freelance",
    description: "Delivering end-to-end photography and video editing projects for weddings, portrait clients, event organizers, and commercial brands.",
    highlights: [
      "Crafted bespoke wedding stories, candid event coverage, and editorial portraits with natural lighting mastery.",
      "Post-produced thousands of commercial and event frames utilizing Adobe Photoshop and Lightroom.",
      "Edited high-retention short-form Instagram Reels and cinematic highlight films in Adobe Premiere Pro."
    ]
  },
  {
    period: "2021 – 2023",
    role: "Freelance Wedding & Event Visual Specialist",
    organization: "Freelance Client Projects",
    type: "Freelance & Collaboration",
    description: "Expanded professional portfolio into large-scale multi-day weddings, festive events, and creative product shoots.",
    highlights: [
      "Honed expertise in low-light indoor reception coverage and dynamic flash techniques.",
      "Delivered rapid sneak peeks and ceremony highlight reels for client social media sharing.",
      "Maintained 100% direct client satisfaction through clear communication and timely deliveries."
    ]
  },
  {
    period: "2019 – 2021",
    role: "Portrait & Product Photographer / Retoucher",
    organization: "Freelance & Studio Assignments",
    type: "Freelance",
    description: "Focused on developing deep technical proficiency in studio lighting, macro product setups, and non-destructive Photoshop retouching.",
    highlights: [
      "Mastered frequency separation and dodge-and-burn skin retouching workflows in Adobe Photoshop.",
      "Developed custom color presets in Adobe Lightroom to maintain cohesive aesthetic identities.",
      "Built a reputation for reliability, deadline discipline, and meticulous attention to visual details."
    ]
  },
  {
    period: "2018 – 2019",
    role: "Visual Creator & Video Editor",
    organization: "Foundational Practice & Freelance Work",
    type: "Freelance Foundation",
    description: "Commenced professional visual journey, shooting travel, street, and creative portraits while mastering timeline editing in Premiere Pro.",
    highlights: [
      "Solidified fundamental principles of exposure, composition, and visual storytelling.",
      "Completed foundational video editing projects, syncing rhythm and pacing in Premiere Pro.",
      "Established initial client base through word of mouth and visual excellence."
    ]
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    id: "test-01",
    quote: "Aakash brought an extraordinary calm and artistic eye to our celebrations. Looking through our photos feels like stepping into a cinematic story. He captured our most precious candid moments with such warmth and grace.",
    clientName: "[Wedding Couple Client Placeholder]",
    projectType: "Wedding Photography & Teaser Film",
    rating: 5,
    location: "Destination Wedding [Editable]"
  },
  {
    id: "test-02",
    quote: "Working with Aakash on our product shoot was effortless. His understanding of lighting, composition, and Photoshop retouching gave our products an editorial finish that elevated our entire brand lookbook.",
    clientName: "[Product Brand Client Placeholder]",
    projectType: "Commercial Product Photography",
    rating: 5,
    location: "Commercial Studio [Editable]"
  },
  {
    id: "test-03",
    quote: "Aakash's video editing in Premiere Pro is sharp, rhythmic, and engaging. The Instagram Reels he cut for our event had great pacing and sound design. An absolute professional to work with on freelance assignments.",
    clientName: "[Event & Media Client Placeholder]",
    projectType: "Event Coverage & Viral Reels",
    rating: 5,
    location: "Event Production [Editable]"
  }
];
