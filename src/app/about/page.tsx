import type { Metadata } from "next";
import {
  Compass,
  Lightbulb,
  Network,
  ShieldCheck,
  Sprout,
  Target,
} from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import CtaBand from "@/components/sections/CtaBand";
import SidePhoto from "@/components/ui/SidePhoto";
import { PAGE_IMAGES } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "About Us | Our Mission & Values",
  description:
    "Essentially Yao Enterprise drives sustainable economic growth by connecting commodity producers to markets, expanding access to digital payment technologies, and providing strategic guidance to businesses across the region.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Transparent pricing, honest grading, and clear contractual agreements in every transaction.",
  },
  {
    icon: Target,
    title: "Reliability",
    description: "Delivering quality commodities, physical goods, and software uptime when you need them most.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously evolving our trading channels and payment technologies to keep pace with global markets.",
  },
];

const PILLARS = [
  { icon: Network, title: "Integrated Trade & Tech Ecosystem", description: "We bring commodity markets, trade logistics, digital payments, and strategic planning together." },
  { icon: Sprout, title: "Reliable Commodity Sourcing", description: "Direct relationships with farming networks and suppliers, so quality commodities arrive on schedule." },
  { icon: ShieldCheck, title: "Secure Financial Systems", description: "Fast settlement, high uptime, and fraud protection built into every transaction." },
  { icon: Compass, title: "Targeted Advisory", description: "Strategy built around real market dynamics and cross-border regulations." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Essentially Yao Enterprise"
        title="Building connections across markets."
        description="A multi-sector enterprise driving business growth, agricultural and physical trade, and digital financial innovation."
        image={PAGE_IMAGES.about}
      />

      <section className="bg-paper py-24 sm:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-3xl rounded-lg border border-charcoal-900/10 bg-off-white p-10 text-center shadow-sm shadow-navy-950/[0.04] sm:p-14">
            <span className="text-xs font-semibold tracking-[0.2em] text-gold-600 uppercase">
              Our Mission
            </span>
            <p className="mt-5 font-display text-2xl leading-snug font-medium text-navy-950 sm:text-3xl">
              To drive sustainable economic growth by connecting commodity
              producers to markets, expanding access to digital payment
              technologies, and guiding businesses across the region.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-off-white py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Core Values"
            title="What guides every engagement"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {VALUES.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.08} className="text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-gold-500/30 bg-paper shadow-sm shadow-navy-950/[0.04] transition-shadow duration-300 hover:shadow-md">
                  <value.icon className="size-5 text-gold-600" strokeWidth={1.5} />
                </div>
                <p className="mt-4 font-display text-lg font-medium text-navy-900">{value.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-500">{value.description}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24 sm:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <SidePhoto image={PAGE_IMAGES.merchanting} />
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Why Partner With Us?" title="Four pillars behind our approach" />
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {PILLARS.map((pillar, i) => (
                <FadeIn key={pillar.title} delay={i * 0.08}>
                  <pillar.icon className="size-6 text-gold-600" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-lg font-medium text-navy-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                    {pillar.description}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand title="Want to know more about how we work?" />
    </>
  );
}
