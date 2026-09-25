import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

export default function AboutSection() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl2 shadow-card">
          <Image
            src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop"
            alt="Studio ya utangazaji ya Habari Maalum TV"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="flex items-center font-display text-[1.6rem] font-bold text-navy-800 sm:text-[1.85rem]">
            <span className="accent-bar" />
            Kuhusu Habari Maalum TV
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-navy-500 sm:text-base">
            Habari Maalum TV ni kituo cha televisheni kinachotoa habari, mahojiano, burudani na vipindi mbalimbali vya kijamii na maendeleo.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-navy-500 sm:text-base">
            Lengo letu ni kuleta habari za uhakika, kuchochea mijadala ya kijamii na kuelimisha jamii kwa njia ya televisheni na mitandao ya kijamii.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy-800 px-6 py-3 text-[14px] font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Soma Zaidi
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
