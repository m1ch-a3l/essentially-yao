import { MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function CtaBand({
  eyebrow = "Get In Touch",
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Discuss an Opportunity",
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-off-white py-24">
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-gold-400) 0%, transparent 70%)",
        }}
      />
      <Container className="relative text-center">
        <FadeIn>
          <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full border border-gold-500/30 bg-paper shadow-sm shadow-navy-950/[0.04]">
            <MessageCircle className="size-6 text-gold-600" strokeWidth={1.5} />
          </div>
          <p className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.25em] text-gold-600 uppercase">
            <span className="h-px w-8 bg-gold-600" />
            {eyebrow}
            <span className="h-px w-8 bg-gold-600" />
          </p>
          <h2 className="mx-auto max-w-2xl font-display text-3xl leading-[1.15] font-medium text-balance text-navy-950 sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-charcoal-500">
              {description}
            </p>
          )}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={primaryHref} variant="primary">
              {primaryLabel}
            </Button>
            {secondaryHref && secondaryLabel && (
              <Button href={secondaryHref} variant="outline">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
