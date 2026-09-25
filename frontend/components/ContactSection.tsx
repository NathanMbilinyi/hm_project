import { Phone, Mail, MapPin } from "lucide-react";
import Container from "./Container";
import ContactForm from "./ContactForm";
import { SiteSettings } from "@/lib/types";

export default function ContactSection({ settings }: { settings: SiteSettings }) {
  const details = [
    { icon: Phone, label: "Simu / WhatsApp", value: settings.phone },
    { icon: Mail, label: "Barua Pepe", value: settings.email },
    { icon: MapPin, label: "Tupo Tanzania", value: settings.address },
  ];

  return (
    <section className="bg-navy-50 py-14 sm:py-20" id="contact">
      <Container>
        <h2 className="flex items-center font-display text-[1.6rem] font-bold text-navy-800 sm:text-[1.85rem]">
          <span className="accent-bar" />
          Wasiliana Nasi
        </h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
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
        </div>
      </Container>
    </section>
  );
}
