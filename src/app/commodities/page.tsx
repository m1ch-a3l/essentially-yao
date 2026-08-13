import type { Metadata } from "next";
import Image from "next/image";
import { Info } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessSteps from "@/components/ui/ProcessSteps";
import CtaBand from "@/components/sections/CtaBand";
import FadeIn from "@/components/ui/FadeIn";
import { COMMODITY_CATEGORIES, TRADING_PROCESS } from "@/lib/data/commodities";
import { COMMODITY_CATEGORY_IMAGES, PAGE_IMAGES } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Commodity Trading | Sourcing, Grading & Distribution",
  description:
    "Essentially Yao Enterprise sources, aggregates, grades, stores, and distributes agricultural produce, raw materials, and physical commodities across Ghana and Africa.",
  alternates: { canonical: "/commodities" },
};

export default function CommoditiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Commodity Trading"
        title="Structured access to commodity markets."
        description="We connect buyers and suppliers across selected commodity categories, from first contact through to a verified transaction."
        image={PAGE_IMAGES.commodities}
      />

      <section className="bg-paper py-24 sm:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Overview"
              title="A trusted link between suppliers and buyers"
              description="We source, aggregate, grade, store, and distribute physical commodities through dependable supplier and buyer networks."
            />
          </div>
          <div className="space-y-6 text-base leading-relaxed text-charcoal-500 lg:col-span-7">
            <FadeIn>
              <p>
                Clients get consistent supply, tighter quality control, and
                reliable off-taker arrangements, backed by risk management
                across the commodity value chain.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p>
                Volumes, pricing, and counterparties stay confidential
                whenever a client needs that.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-off-white py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Commodity Categories"
            title="Categories our network can support"
            description="Availability varies by category, region, and season. Each opportunity is assessed individually before a commercial process begins."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMMODITY_CATEGORIES.map((category, i) => {
              const image =
                COMMODITY_CATEGORY_IMAGES[
                  category.name as keyof typeof COMMODITY_CATEGORY_IMAGES
                ];
              return (
                <FadeIn
                  key={category.name}
                  delay={i * 0.07}
                  className="overflow-hidden rounded-lg border border-charcoal-900/10 bg-paper shadow-sm shadow-navy-950/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-950/[0.08]"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-navy-950/0 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-lg font-medium text-navy-950">
                      {category.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-500">
                      {category.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {category.examples.map((example) => (
                        <li
                          key={example}
                          className="rounded-full border border-gold-500/30 bg-gold-100/40 px-3 py-1 text-xs text-navy-800"
                        >
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-10 flex gap-3 rounded-r-lg border-l-2 border-gold-400 bg-paper p-6 text-sm leading-relaxed text-charcoal-500 shadow-sm shadow-navy-950/[0.03]">
              <Info className="mt-0.5 size-4 shrink-0 text-gold-600" strokeWidth={1.75} />
              <p>
                Our trading network can support opportunities across selected
                commodity categories, subject to market availability,
                verification, and transaction requirements.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-paper py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="Our trading process"
            align="center"
            className="mx-auto"
          />
          <div className="mt-16">
            <ProcessSteps steps={TRADING_PROCESS} />
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Trade With Us"
        title="Have a commodity requirement to source or supply?"
        primaryHref="/contact?interest=Commodity+Trading"
        primaryLabel="Submit a Trade Enquiry"
      />
    </>
  );
}
