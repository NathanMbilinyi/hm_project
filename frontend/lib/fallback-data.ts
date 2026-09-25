import { Program, SocialLink, SiteSettings } from "./types";

// This content stands in for the Django API response until the backend
// (Phase 8 onward) is connected. Shapes match the DRF serializers exactly,
// so swapping to live data later requires no component changes.

export const FALLBACK_SETTINGS: SiteSettings = {
  site_name: "Habari Maalum TV",
  tagline: "Habari • Ukweli • Uhalisia",
  phone: "+255 712 345 678",
  email: "info@habarimaalumtv.co.tz",
  address: "Dar es Salaam, Tanzania",
  hero_description:
    "Tunakuletea habari, mahojiano, burudani na matukio muhimu kutoka Tanzania na ulimwengu.",
};

export const FALLBACK_PROGRAMS: Program[] = [
  {
    id: 1,
    title: "Habari Kuu",
    slug: "habari-kuu",
    description: "Uchambuzi wa kina wa habari za ndani na nje ya nchi.",
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=800&auto=format&fit=crop",
    category: { id: 1, name: "Habari", slug: "habari", color: "#E31B23" },
    youtube_url: "https://youtube.com/@habarimaalumtv",
    is_featured: true,
  },
  {
    id: 2,
    title: "Maisha ya Jamii",
    slug: "maisha-ya-jamii",
    description: "Hadithi za watu, changamoto na mafanikio katika jamii.",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop",
    category: { id: 2, name: "Mahojiano", slug: "mahojiano", color: "#0B1A33" },
    youtube_url: "https://youtube.com/@habarimaalumtv",
    is_featured: true,
  },
  {
    id: 3,
    title: "Mchezo na Burudani",
    slug: "mchezo-na-burudani",
    description: "Taarifa, uchambuzi na matukio ya michezo hapa na duniani.",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=800&auto=format&fit=crop",
    category: { id: 3, name: "Michezo", slug: "michezo", color: "#1C7C3E" },
    youtube_url: "https://youtube.com/@habarimaalumtv",
    is_featured: true,
  },
  {
    id: 4,
    title: "Tanzania Yetu",
    slug: "tanzania-yetu",
    description: "Uzuri wa nchi yetu, utamaduni na vivutio vya kitalii.",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800&auto=format&fit=crop",
    category: { id: 4, name: "Utalii", slug: "utalii", color: "#C9821A" },
    youtube_url: "https://youtube.com/@habarimaalumtv",
    is_featured: true,
  },
];

export const FALLBACK_SOCIAL_LINKS: SocialLink[] = [
  {
    id: 1,
    platform: "youtube",
    label: "Subscribe",
    url: "https://youtube.com/@habarimaalumtv",
    is_active: true,
  },
  {
    id: 2,
    platform: "instagram",
    label: "Follow",
    url: "https://instagram.com/habarimaalumtv",
    is_active: true,
  },
  {
    id: 3,
    platform: "facebook",
    label: "Like Page",
    url: "https://facebook.com/habarimaalumtv",
    is_active: true,
  },
];
