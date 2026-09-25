import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import { Program } from "@/lib/types";

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl2 bg-white shadow-card ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className="absolute left-3 top-3 rounded-md px-2.5 py-1 text-[11px] font-semibold text-white"
          style={{ backgroundColor: program.category.color }}
        >
          {program.category.name}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[17px] font-semibold text-navy-800">
          {program.title}
        </h3>
        <p className="mt-1.5 flex-1 text-[14px] leading-relaxed text-navy-500">
          {program.description}
        </p>
        <Link
          href={program.youtube_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-red"
        >
          <Play className="h-3.5 w-3.5 fill-brand-red text-brand-red" />
          Tazama Programu
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
