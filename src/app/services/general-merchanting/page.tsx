import type { Metadata } from "next";
import { Boxes, Factory, Package, Plane, ShoppingBag, Truck } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/sections/CtaBand";
import FadeIn from "@/components/ui/FadeIn";
import SidePhoto from "@/components/ui/SidePhoto";
import { PAGE_IMAGES } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "General Merchant Services | Procurement, Import & Distribution",
  description:
    "Essentially Yao Enterprise procures, supplies, imports, exports, and distributes bulk commercial goods, industrial supplies, and retail-ready merchandise.",
  alternates: { canonical: "/services/general-merchanting" },
};

const MERCHANT_SERVICES = [
  { icon: Package, title: "Procurement", description: "Organized sourcing and purchasing of commercial goods." },
  { icon: Plane, title: "Import & Export", description: "We handle cross-border logistics and documentation." },
  { icon: Boxes, title: "Bulk Commercial Goods", description: "Consistent supply for high-demand goods, at scale." },
  { icon: Factory, title: "Industrial Supplies", description: "Sourcing for manufacturing and industrial clients." },
  { icon: ShoppingBag, title: "Retail-Ready Merchandise", description: "Goods delivered ready for shelf or resale." },
  { icon: Truck, title: "Distribution", description: "Dependable delivery across supply chains." },
];

const PROCESS = [
  { step: "01", title: "Requirement", description: "We confirm what you need: goods, volumes, and specification." },
  { step: "02", title: "Sourcing", description: "We identify suppliers who can deliver at the right quality and price." },
  { step: "03", title: "Procurement", description: "We manage purchasing, import / export documentation, and logistics." },
  { step: "04", title: "Delivery", description: "Goods are distributed on schedule, with quality checked along the way." },
];

export default function GeneralMerchantingPage() {
  return (
    <>
      <PageHero
        eyebrow="General Merchant Services"
        title="Efficient sourcing, dependable delivery."
        description="We procure, supply, import, export, and distribute bulk commercial goods, industrial supplies, and retail-ready merchandise."
        image={PAGE_IMAGES.merchanting}
      />

      <section className="bg-paper py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What We Handle"
            title="Sourcing and supply chain support"
            description="Organized procurement and dependable delivery, for businesses and trading partners."
          />
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-charcoal-900/10 shadow-sm shadow-navy-950/[0.04] sm:grid-cols-2 lg:grid-cols-3">
            {MERCHANT_SERVICES.map((service, i) => (
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
          <SidePhoto image={PAGE_IMAGES.home} />
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="How It Works" title="From requirement to delivery" tone="light" />
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {PROCESS.map((item, i) => (
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
        eyebrow="Merchant Services"
        title="Need to source or supply commercial goods?"
        primaryHref="/contact?interest=General+Merchant+Services"
        primaryLabel="Submit a Trade Enquiry"
      />
    </>
  );
}
