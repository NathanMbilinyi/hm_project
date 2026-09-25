// These types mirror the Django REST Framework serializers in backend/programs
// and backend/core, so the frontend and backend stay in sync as the API grows.

export interface Category {
  id: number;
  name: string;
  slug: string;
  color: string; // hex color used for the badge
}

export interface Program {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  category: Category;
  youtube_url: string;
  is_featured: boolean;
}

export interface SocialLink {
  id: number;
  platform: "youtube" | "instagram" | "facebook" | "tiktok" | "x";
  label: string;
  url: string;
  is_active: boolean;
}

export interface SiteSettings {
  site_name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  hero_description: string;
}

export interface ContactMessagePayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
