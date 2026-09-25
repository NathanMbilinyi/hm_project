import { cn } from "@/lib/utils";

export default function SectionHeading({
  title,
  action,
  light = false,
}: {
  title: string;
  action?: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mb-9 flex flex-wrap items-center justify-between gap-4">
      <h2
        className={cn(
          "flex items-center font-display text-[1.6rem] font-bold sm:text-[1.85rem]",
          light ? "text-white" : "text-navy-800"
        )}
      >
        <span className="accent-bar" />
        {title}
      </h2>
      {action}
    </div>
  );
}
