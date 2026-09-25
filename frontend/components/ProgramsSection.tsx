import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import ProgramCard from "./ProgramCard";
import { Program } from "@/lib/types";

export default function ProgramsSection({ programs }: { programs: Program[] }) {
  return (
    <section className="py-16 sm:py-20" id="programs">
      <Container>
        <SectionHeading
          title="Programu Maarufu"
          action={
            <Link
              href="/programs"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-navy-700 hover:text-brand-red"
            >
              Tazama Zote
              <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </Container>
    </section>
  );
}
