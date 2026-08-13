import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: { src: string; alt: string };
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-navy-950 pt-28 pb-16 sm:min-h-[480px] sm:pt-32">
      {image && (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-navy-950/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-navy-950/30" />
        </>
      )}
      <Container className="relative">
        <FadeIn>
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase">
            <span className="h-px w-8 bg-gold-400" />
            {eyebrow}
          </p>
          <h1 className="max-w-2xl font-display text-4xl leading-[1.1] font-medium text-balance text-off-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-lg text-base leading-relaxed text-off-white/75 sm:text-lg">
              {description}
            </p>
          )}
          {children}
        </FadeIn>
      </Container>
    </section>
  );
}
