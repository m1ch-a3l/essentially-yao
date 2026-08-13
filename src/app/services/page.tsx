import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/sections/CtaBand";
import FadeIn from "@/components/ui/FadeIn";
import { SERVICES } from "@/lib/data/services";
import { PAGE_IMAGES } from "@/lib/data/images";

const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  "commodity-trading": PAGE_IMAGES.commodities,
  "general-merchanting": PAGE_IMAGES.merchanting,
  "digital-payment-solutions": PAGE_IMAGES.payments,
  "business-advisory": PAGE_IMAGES.advisory,
};

export const metadata: Metadata = {
  title: "Services | Trade, Merchant Services, Payments & Advisory",
  description:
    "Essentially Yao Enterprise's four core service lines: commodity trading, general merchant services, digital payment solutions, and business advisory across Ghana and international markets.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Four service lines. One commercial network."
        description="Commodity trading, merchant services, digital payments, and business advisory, run by the same team."
        image={PAGE_IMAGES.home}
      />

      <section className="bg-paper py-24 sm:py-28">
        <Container className="space-y-6">
          {SERVICES.map((service, i) => (
            <FadeIn
              key={service.slug}
              delay={i * 0.08}
              className="grid grid-cols-1 overflow-hidden rounded-lg border border-charcoal-900/10 bg-off-white shadow-sm shadow-navy-950/[0.04] transition-shadow duration-300 hover:shadow-lg hover:shadow-navy-950/[0.08] lg:grid-cols-12"
            >
              <div className="relative aspect-[16/10] lg:col-span-4 lg:aspect-auto">
                <Image
                  src={SERVICE_IMAGES[service.slug].src}
                  alt={SERVICE_IMAGES[service.slug].alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-10 lg:col-span-8 lg:p-14">
                <span className="font-display text-2xl text-gold-500">0{i + 1}</span>
                <h2 className="mt-3 font-display text-2xl font-medium text-navy-950 sm:text-3xl">
                  {service.name}
                </h2>
                <p className="mt-2 text-sm font-medium text-gold-600">
                  {service.tagline}
                </p>
                <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <p className="text-base leading-relaxed text-charcoal-500">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-6">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-charcoal-700"
                      >
                        <Check className="mt-0.5 size-3.5 shrink-0 text-gold-600" strokeWidth={2} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-7">
                  <Button href={service.href} variant="outline">
                    {service.ctaLabel}
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </Container>
      </section>

      <CtaBand title="Not sure which service fits your situation?" />
    </>
  );
}
