export interface ProfileInfo {
  name: string;
  title: string;
  experienceYears: string;
  tagline: string;
  heroSubtitle: string;
  aboutHeading: string;
  aboutText1: string;
  aboutText2: string;
  stats: Array<{ label: string; value: string; note: string }>;
  contact: {
    email: string;
    phone: string;
    city: string;
    whatsapp: string;
    instagram: string;
    youtube: string;
    vimeo: string;
    linkedin: string;
  };
}

export interface ExifData {
  camera: string;
  lens: string;
  aperture: string;
  shutter: string;
  iso: string;
  focalLength: string;
}

export interface PortfolioPhoto {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  aspectRatio: 'portrait' | 'landscape' | 'square' | 'cinematic';
  imageUrl: string;
  thumbnailUrl: string;
  clientPlaceholder: string;
  description: string;
  year: string;
  exif: ExifData;
}

export interface VideographyProject {
  id: string;
  title: string;
  category: string;
  format: '16:9' | '9:16';
  duration: string;
  thumbnailUrl: string;
  videoUrl: string;
  clientPlaceholder: string;
  role: string;
  software: string[];
  synopsis: string;
  highlightTags: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  deliverables: string[];
  highlight: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface EquipmentCategory {
  name: string;
  icon: string;
  items: Array<{ name: string; role: string; tag: string }>;
}

export interface CareerMilestone {
  period: string;
  role: string;
  organization: string;
  type: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  projectType: string;
  rating: number;
  location: string;
}
