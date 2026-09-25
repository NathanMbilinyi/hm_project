import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark"; // "dark" = on a dark background (footer)

  return (
    <Link href="/" className="flex items-center gap-3 shrink-0 group">
      <span
        className={cn(
          "relative flex h-11 w-11 items-center justify-center rounded-xl border-2 font-display text-lg font-bold",
          isDark ? "border-white/20 bg-white/5 text-white" : "border-navy-800 bg-navy-800 text-white"
        )}
      >
        HM
        <span className="absolute -bottom-1.5 -right-1.5 rounded-md bg-brand-red px-1 text-[9px] font-bold leading-[14px] text-white">
          TV
        </span>
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-display text-[17px] font-bold tracking-tight sm:text-lg",
            isDark ? "text-white" : "text-navy-800"
          )}
        >
          HABARI MAALUM <span className="text-brand-red">TV</span>
        </span>
        <span
          className={cn(
            "text-[11px] font-medium tracking-wide",
            isDark ? "text-white/50" : "text-navy-400"
          )}
        >
          Habari &middot; Ukweli &middot; Uhalisia
        </span>
      </span>
    </Link>
  );
}
