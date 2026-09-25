import Hero from "@/components/Hero";
import ProgramsSection from "@/components/ProgramsSection";
import SocialSection from "@/components/SocialSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { getFeaturedPrograms, getSocialLinks, getSiteSettings } from "@/lib/api";

export default async function HomePage() {
  const [settings, programs, socialLinks] = await Promise.all([
    getSiteSettings(),
    getFeaturedPrograms(),
    getSocialLinks(),
  ]);

  return (
    <>
      <Hero settings={settings} />
      <ProgramsSection programs={programs} />
      <SocialSection links={socialLinks} />
      <AboutSection />
      <ContactSection settings={settings} />
    </>
  );
}
