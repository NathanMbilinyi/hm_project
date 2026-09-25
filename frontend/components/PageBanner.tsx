import Container from "./Container";

export default function PageBanner({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-navy-100 bg-navy-50 py-14 sm:py-16">
      <Container>
        <div className="flex items-center gap-2 text-brand-red">
          <span className="h-[3px] w-6 rounded-full bg-brand-red" />
          <span className="text-sm font-semibold tracking-wide">{eyebrow}</span>
        </div>
        <h1 className="mt-3 font-display text-[2rem] font-bold text-navy-800 sm:text-[2.4rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-navy-500 sm:text-base">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
