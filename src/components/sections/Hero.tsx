"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { PAGE_IMAGES } from "@/lib/data/images";
import { SERVICES } from "@/lib/data/services";

const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  "commodity-trading": PAGE_IMAGES.commodities,
  "general-merchanting": PAGE_IMAGES.merchanting,
  "digital-payment-solutions": PAGE_IMAGES.payments,
  "business-advisory": PAGE_IMAGES.advisory,
};

const SLIDES = SERVICES.map((service) => ({
  name: service.name,
  image: SERVICE_IMAGES[service.slug],
}));

const SLIDE_DURATION = 5000;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-navy-950 pt-24 pb-20 sm:min-h-[720px]">
      {SLIDES.map((slide, i) => (
        <Image
          key={slide.name}
          src={slide.image.src}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/75 to-navy-950/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-navy-950/30" />

      <Container className="relative">
        <FadeIn>
          <h1 className="max-w-xl font-display text-4xl leading-[1.08] font-medium text-balance text-off-white sm:text-5xl lg:text-[3.4rem]">
            Connecting Markets. Creating Opportunities.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-off-white/75 sm:text-lg">
            Commodity trading, merchant services, digital payments, and
            business advisory across Ghana and international markets.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="primary">
              Discuss an Opportunity
            </Button>
            <Button href="/services" variant="outline-light">
              Explore Our Services
            </Button>
          </div>
        </FadeIn>
      </Container>

      <Container className="absolute inset-x-0 bottom-8 z-10 sm:bottom-10">
        <div className="flex items-center gap-4">
          <span
            key={SLIDES[active].name}
            className="animate-fade-in text-xs font-semibold tracking-[0.2em] text-off-white/70 uppercase"
          >
            {SLIDES[active].name}
          </span>
          <div className="flex items-center gap-2">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.name}
                type="button"
                aria-label={`Show ${slide.name}`}
                onClick={() => setActive(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-gold-400" : "w-3 bg-off-white/30 hover:bg-off-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
