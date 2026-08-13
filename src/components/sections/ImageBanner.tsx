import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function ImageBanner({
  eyebrow,
  title,
  description,
  image,
  primaryHref,
  primaryLabel,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: { src: string; alt: string };
  primaryHref: string;
  primaryLabel: string;
}) {
  return (
    <section className="relative isolate flex min-h-[380px] items-center overflow-hidden bg-navy-950">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/75 to-navy-950/20" />
      <Container className="relative py-20">
        <FadeIn className="max-w-lg">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase">
            <span className="h-px w-8 bg-gold-400" />
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl leading-[1.15] font-medium text-balance text-off-white sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-base leading-relaxed text-off-white/70">
              {description}
            </p>
          )}
          <div className="mt-9">
            <Button href={primaryHref} variant="primary">
              {primaryLabel}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
