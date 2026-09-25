"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Youtube, Instagram, Facebook } from "lucide-react";
import Logo from "./Logo";
import Container from "./Container";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/contact", label: "Contact" },
];

const SOCIALS = [
  { href: "https://youtube.com/@habarimaalumtv", icon: Youtube, label: "YouTube", bg: "bg-brand-red" },
  { href: "https://instagram.com/habarimaalumtv", icon: Instagram, label: "Instagram", bg: "bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600" },
  { href: "https://facebook.com/habarimaalumtv", icon: Facebook, label: "Facebook", bg: "bg-[#1877F2]" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/90 backdrop-blur-md">
      <Container className="flex h-[76px] items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-1 text-[15px] font-medium transition-colors",
                  active ? "text-brand-red" : "text-navy-700 hover:text-brand-red"
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-[26px] left-0 h-[3px] w-full rounded-full bg-brand-red" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop socials */}
        <div className="hidden items-center gap-2.5 md:flex">
          {SOCIALS.map(({ href, icon: Icon, label, bg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-lg text-white transition-transform hover:scale-105",
                bg
              )}
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-800 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Funga menyu" : "Fungua menyu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile menu panel */}
      <div
        className={cn(
          "overflow-hidden border-t border-navy-100 bg-white transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0"
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2.5 text-[15px] font-medium",
                pathname === link.href ? "bg-brand-red/10 text-brand-red" : "text-navy-700"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-2.5 border-t border-navy-100 px-3 pt-4">
            {SOCIALS.map(({ href, icon: Icon, label, bg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={cn("flex h-9 w-9 items-center justify-center rounded-lg text-white", bg)}
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
}
