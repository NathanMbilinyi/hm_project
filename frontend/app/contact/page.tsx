import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "@/components/Container";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import { getSiteSettings } from "@/lib/api";

export const metadata: Metadata = {
  title: "Wasiliana Nasi",
  description: "Wasiliana na Habari Maalum TV kwa maswali, ushirikiano au taarifa.",
};

export default async function ContactPage() {
  const settings = await getSiteSettings();

  const details = [
    { icon: Phone, label: "Simu / WhatsApp", value: settings.phone },
    { icon: Mail, label: "Barua Pepe", value: settings.email },
    { icon: MapPin, label: "Tupo Tanzania", value: settings.address },
  ];

  return (
    <>
      <PageBanner
        eyebrow="WASILIANA NASI"
        title="Tuandikie Ujumbe"
        description="Una swali, maoni au ungependa kushirikiana nasi? Jaza fomu hapa chini au tumia mawasiliano yetu."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="grid gap-4">
            {details.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3.5 rounded-xl2 bg-white p-4 shadow-card ring-1 ring-navy-100"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[14px] font-semibold text-navy-800">{value}</p>
                  <p className="text-[12px] text-navy-400">{label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl2 bg-white p-6 shadow-card ring-1 ring-navy-100 sm:p-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
