import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import Container from "./Container";
import { SiteSettings } from "@/lib/types";

export default function Hero({ settings }: { settings: SiteSettings }) {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-14 sm:pb-28 sm:pt-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        {/* Copy */}
        <div className="animate-fade-up">
          <div className="mb-5 flex items-center gap-2 text-brand-red">
            <span className="h-[3px] w-6 rounded-full bg-brand-red" />
            <span className="text-sm font-semibold tracking-wide text-brand-red">
              KARIBU KWENYE
            </span>
          </div>

          <h1 className="font-display text-[2.6rem] font-bold leading-[1.08] text-navy-800 sm:text-[3.4rem] lg:text-[3.75rem]">
            {settings.site_name.split(" TV")[0]}{" "}
            <span className="text-brand-red">TV</span>
          </h1>

          <p className="mt-4 text-lg font-medium text-navy-500 sm:text-xl">
            {settings.tagline}
          </p>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-navy-500 sm:text-base">
            {settings.hero_description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/programs"
              className="group inline-flex items-center gap-2.5 rounded-full bg-brand-red px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-brand-red/25 transition-transform hover:scale-[1.03] active:scale-100"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <Play className="h-3 w-3 fill-white text-white" />
              </span>
              Tazama Programu Zetu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[4/3.1] w-full overflow-hidden rounded-xl2 shadow-card-hover sm:aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1611348586804-61bf6c080437?q=80&w=1400&auto=format&fit=crop"
              alt="Jiji la Dar es Salaam, Tanzania"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/25 via-transparent to-transparent" />
          </div>
          {/* Accent blob behind the image, TV-signal inspired */}
          <div className="absolute -bottom-8 -left-8 -z-10 h-40 w-40 rounded-full bg-brand-red/10 blur-2xl sm:h-56 sm:w-56" />
        </div>
      </Container>

      {/* bottom curve divider like the reference design */}
      <svg
        className="absolute inset-x-0 bottom-0 h-14 w-full text-white sm:h-20"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0,100 C480,0 960,0 1440,100 L1440,100 L0,100 Z" />
      </svg>
    </section>
  );
}
