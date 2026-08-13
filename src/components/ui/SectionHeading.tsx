import { clsx } from "clsx";
import FadeIn from "@/components/ui/FadeIn";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <FadeIn
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            "mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase",
            tone === "dark" ? "text-gold-600" : "text-gold-300",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-current" />
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "font-display text-3xl leading-[1.15] font-medium text-balance sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-navy-950" : "text-off-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-charcoal-500" : "text-off-white/70"
          )}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
