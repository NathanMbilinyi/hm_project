import { Program, SocialLink, SiteSettings, ContactMessagePayload } from "./types";
import { FALLBACK_PROGRAMS, FALLBACK_SOCIAL_LINKS, FALLBACK_SETTINGS } from "./fallback-data";

// Base URL of the Django REST API. Set NEXT_PUBLIC_API_URL in .env.local
// once the backend (Phase 8+) is running. Until then, every function below
// falls back to static placeholder content so the UI is never empty.
const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

async function safeFetch<T>(path: string, fallback: T, options?: RequestInit): Promise<T> {
  if (!API_URL) return fallback;
  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: 60 },
      ...options,
    });
    if (!res.ok) return fallback;
    return (await res.json()) as T;
  } catch {
    return fallback;
  }
}

export async function getPrograms(): Promise<Program[]> {
  return safeFetch<Program[]>("/api/programs/", FALLBACK_PROGRAMS);
}

export async function getFeaturedPrograms(): Promise<Program[]> {
  const programs = await getPrograms();
  return programs.filter((p) => p.is_featured);
}

export async function getSocialLinks(): Promise<SocialLink[]> {
  return safeFetch<SocialLink[]>("/api/social-links/", FALLBACK_SOCIAL_LINKS);
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return safeFetch<SiteSettings>("/api/settings/", FALLBACK_SETTINGS);
}

export async function sendContactMessage(
  payload: ContactMessagePayload
): Promise<{ ok: boolean; error?: string }> {
  if (!API_URL) {
    // No backend connected yet — simulate success so the form UX can be tested.
    return { ok: true };
  }
  try {
    const res = await fetch(`${API_URL}/api/contact-messages/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return { ok: false, error: "Imeshindwa kutuma ujumbe. Jaribu tena." };
    return { ok: true };
  } catch {
    return { ok: false, error: "Hitilafu ya mtandao. Jaribu tena." };
  }
}
