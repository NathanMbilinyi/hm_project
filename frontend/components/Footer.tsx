import Link from "next/link";
import { Youtube, Instagram, Facebook } from "lucide-react";
import Container from "./Container";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/contact", label: "Contact" },
];

const SOCIALS = [
  { href: "https://youtube.com/@habarimaalumtv", icon: Youtube, label: "YouTube" },
  { href: "https://instagram.com/habarimaalumtv", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com/habarimaalumtv", icon: Facebook, label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-800">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <Logo variant="dark" />

        <nav className="flex flex-wrap gap-x-7 gap-y-2" aria-label="Footer">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {SOCIALS.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-brand-red"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10 py-5">
        <Container>
          <p className="text-center text-[13px] text-white/50">
            © {new Date().getFullYear()} Habari Maalum TV. Haki zote zimehifadhiwa.
          </p>
        </Container>
      </div>
    </footer>
  );
}
