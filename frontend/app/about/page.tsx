import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Tv } from "lucide-react";
import Container from "@/components/Container";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jifunze zaidi kuhusu Habari Maalum TV — dhamira yetu, dira yetu na tunachofanya kama kituo cha televisheni cha Kitanzania.",
};

const PILLARS = [
  {
    icon: Target,
    title: "Dhamira Yetu",
    text: "Kutoa habari za uhakika, kwa wakati na bila upendeleo, zinazogusa maisha ya kila Mtanzania.",
  },
  {
    icon: Eye,
    title: "Dira Yetu",
    text: "Kuwa kituo cha televisheni kinachoaminika zaidi Tanzania na Afrika Mashariki ifikapo 2030.",
  },
  {
    icon: Tv,
    title: "Tunachofanya",
    text: "Habari, mahojiano, michezo, burudani na vipindi vya maendeleo ya jamii — televisheni na mitandaoni.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="KUHUSU SISI"
        title="Kuhusu Habari Maalum TV"
        description="Kituo cha televisheni kinachotoa habari, mahojiano, burudani na vipindi mbalimbali vya kijamii na maendeleo kutoka Tanzania na ulimwengu."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl2 shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?q=80&w=1200&auto=format&fit=crop"
              alt="Timu ya wanahabari ya Habari Maalum TV wakiwa studio"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-[1.5rem] font-bold text-navy-800 sm:text-[1.75rem]">
              Sauti ya Kweli kwa Watanzania
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-navy-500 sm:text-base">
              Habari Maalum TV ilianzishwa kwa lengo la kuwapa Watanzania habari za kuaminika, zenye uchambuzi wa kina na zinazogusa maisha ya kila siku. Tunaamini kuwa habari njema hujengwa kwa ukweli, uwazi na uhalisia.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-navy-500 sm:text-base">
              Kupitia vipindi vyetu vya habari, mahojiano, michezo na burudani, tunaunganisha jamii na kuchochea mijadala inayosaidia maendeleo ya taifa.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl2 bg-white p-7 shadow-card ring-1 ring-navy-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-[17px] font-semibold text-navy-800">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-navy-500">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
