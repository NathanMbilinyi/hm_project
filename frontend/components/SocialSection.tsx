import { Youtube, Instagram, Facebook, LucideIcon } from "lucide-react";
import Container from "./Container";
import { SocialLink } from "@/lib/types";
import { platformLabel } from "@/lib/utils";

const PLATFORM_STYLES: Record<string, { icon: LucideIcon; bg: string }> = {
  youtube: { icon: Youtube, bg: "bg-brand-red" },
  instagram: { icon: Instagram, bg: "bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600" },
  facebook: { icon: Facebook, bg: "bg-[#1877F2]" },
};

export default function SocialSection({ links }: { links: SocialLink[] }) {
  const active = links.filter((l) => l.is_active);

  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="flex flex-col items-start gap-8 rounded-xl2 bg-navy-50 p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <h2 className="flex items-center font-display text-[1.4rem] font-bold text-navy-800 sm:text-[1.6rem]">
              <span className="accent-bar" />
              Tufuatilie kwenye Mitandao ya Kijamii
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-navy-500 sm:text-[15px]">
              Usikose kufuatilia kwenye majukwaa yetu ya kijamii kwa video mpya, matukio ya moja kwa moja na zaidi.
            </p>
          </div>

          <div className="flex w-full flex-wrap gap-3 lg:w-auto">
            {active.map((link) => {
              const style = PLATFORM_STYLES[link.platform];
              if (!style) return null;
              const Icon = style.icon;
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex min-w-[132px] flex-1 flex-col items-center justify-center gap-1.5 rounded-xl2 ${style.bg} px-6 py-5 text-white shadow-card transition-transform hover:scale-[1.04] sm:flex-none`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2} />
                  <span className="text-[14px] font-semibold">{platformLabel(link.platform)}</span>
                  <span className="text-[11px] font-medium text-white/80">{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
