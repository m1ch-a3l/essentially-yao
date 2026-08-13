import { Compass, Network, ShieldCheck, Sprout } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import SidePhoto from "@/components/ui/SidePhoto";
import { PAGE_IMAGES } from "@/lib/data/images";

const INDICATORS = [
  { icon: Network, title: "Integrated Network", description: "Commodity markets, trade logistics, and digital payments, together." },
  { icon: Sprout, title: "Reliable Sourcing", description: "Direct relationships with farming networks and suppliers." },
  { icon: ShieldCheck, title: "Secure Systems", description: "Fast settlement and fraud protection built into every transaction." },
  { icon: Compass, title: "Strategic Guidance", description: "Advice grounded in real market dynamics." },
];

export default function TrustSection() {
  return (
    <section className="bg-paper py-24 sm:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        <SidePhoto image={PAGE_IMAGES.whoWeAre} />

        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Who We Are"
            title="Built around relationships. Driven by opportunity."
            description="We work across trade, commodity markets, financial technology, and strategic consulting, so clients get practical, end-to-end support."
          />
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-charcoal-900/10 shadow-sm shadow-navy-950/[0.04] sm:grid-cols-2">
            {INDICATORS.map((item, i) => (
              <FadeIn
                key={item.title}
                delay={i * 0.08}
                className="bg-paper p-6 transition-colors duration-300 hover:bg-off-white-dim"
              >
                <item.icon className="size-5 text-gold-600" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-base font-medium text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                  {item.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
