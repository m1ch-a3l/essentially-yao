import type { Metadata } from "next";
import {
  Compass,
  FileText,
  PiggyBank,
  Settings2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/sections/CtaBand";
import FadeIn from "@/components/ui/FadeIn";
import SidePhoto from "@/components/ui/SidePhoto";
import { PAGE_IMAGES } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Business Advisory | Trade Compliance, Registration & Growth",
  description:
    "Practical advisory support in trade and market access, business registration, financial planning, and growth strategy for emerging and scaling businesses in Ghana and Africa.",
  alternates: { canonical: "/services/business-advisory" },
};

const ADVISORY_SERVICES = [
  { icon: Compass, title: "Trade & Market Access", description: "Guidance on entering new markets and trade corridors." },
  { icon: FileText, title: "Business Registration", description: "Support formalizing and registering your operations." },
  { icon: PiggyBank, title: "Financial Planning", description: "Practical planning for cash flow and growth capital." },
  { icon: Settings2, title: "Process Optimization", description: "Tightening operations so they scale cleanly." },
  { icon: ShieldCheck, title: "Compliance Readiness", description: "Getting trade and regulatory documentation in order." },
  { icon: TrendingUp, title: "Growth Strategy", description: "A practical plan for the business's next stage." },
];

const VALUE_STEPS = [
  { step: "01", title: "Understand", description: "We start with your business, your objectives, and the decision at hand." },
  { step: "02", title: "Analyse", description: "We look at the market, the numbers, and the risk." },
  { step: "03", title: "Strategise", description: "We shape a path forward that holds up commercially." },
  { step: "04", title: "Execute", description: "We stay involved through implementation and next steps." },
];

export default function BusinessAdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Advisory & Support"
        title="Clarity for better business decisions."
        description="Practical guidance on trade compliance, market access, and growth for emerging and scaling businesses."
        image={PAGE_IMAGES.advisory}
      />

      <section className="bg-paper py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What We Advise On"
            title="Structured guidance across the business lifecycle"
            description="From registration and compliance through to financial planning and growth."
          />
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-charcoal-900/10 shadow-sm shadow-navy-950/[0.04] sm:grid-cols-2 lg:grid-cols-3">
            {ADVISORY_SERVICES.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.06} className="bg-paper p-8">
                <service.icon className="size-6 text-gold-600" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-base font-medium text-navy-950">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-charcoal-500">
                  {service.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-24 sm:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <SidePhoto image={PAGE_IMAGES.analytics} />
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Our Approach" title="How we create value" tone="light" />
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {VALUE_STEPS.map((item, i) => (
                <FadeIn key={item.step} delay={i * 0.1}>
                  <span className="font-display text-3xl text-gold-400/60">{item.step}</span>
                  <h3 className="mt-3 font-display text-lg font-medium text-off-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-off-white/60">
                    {item.description}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Advisory"
        title="Facing a decision that needs an outside view?"
        primaryHref="/contact?interest=Business+Advisory"
        primaryLabel="Speak With an Advisor"
      />
    </>
  );
}
