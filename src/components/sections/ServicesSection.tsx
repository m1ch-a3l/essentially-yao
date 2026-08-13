import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/data/services";
import { PAGE_IMAGES } from "@/lib/data/images";

const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  "commodity-trading": PAGE_IMAGES.commodities,
  "general-merchanting": PAGE_IMAGES.merchanting,
  "digital-payment-solutions": PAGE_IMAGES.payments,
  "business-advisory": PAGE_IMAGES.advisory,
};

export default function ServicesSection() {
  return (
    <section className="bg-navy-950 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="How we create opportunity"
          tone="light"
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-off-white/10 shadow-xl shadow-navy-950/20 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.1} className="flex h-full flex-col bg-navy-950">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={SERVICE_IMAGES[service.slug].src}
                  alt={SERVICE_IMAGES[service.slug].alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/10 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-8 lg:p-10">
                <h3 className="font-display text-xl font-medium text-off-white">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-gold-300">
                  {service.tagline}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {service.bullets.slice(0, 3).map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm text-off-white/70"
                    >
                      <Check className="mt-0.5 size-3.5 shrink-0 text-gold-400" strokeWidth={2} />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-2">
                  <Button href={service.href} variant="link-light" showArrow>
                    {service.ctaLabel}
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
