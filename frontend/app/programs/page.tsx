import type { Metadata } from "next";
import Container from "@/components/Container";
import PageBanner from "@/components/PageBanner";
import ProgramCard from "@/components/ProgramCard";
import { getPrograms } from "@/lib/api";

export const metadata: Metadata = {
  title: "Programu",
  description:
    "Orodha kamili ya vipindi vya Habari Maalum TV — habari, mahojiano, michezo, burudani na zaidi.",
};

export default async function ProgramsPage() {
  const programs = await getPrograms();

  return (
    <>
      <PageBanner
        eyebrow="VIPINDI VYETU"
        title="Programu Zote"
        description="Gundua vipindi vyote vya Habari Maalum TV, kutoka habari hadi burudani na michezo."
      />

      <section className="py-16 sm:py-20">
        <Container>
          {programs.length === 0 ? (
            <p className="py-20 text-center text-navy-400">
              Hakuna programu kwa sasa. Tafadhali rudi baadaye.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {programs.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
