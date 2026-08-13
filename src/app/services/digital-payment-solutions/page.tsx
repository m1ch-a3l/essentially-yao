import type { Metadata } from "next";
import { CreditCard, LineChart, Link2, RefreshCw, Smartphone, Wallet } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/sections/CtaBand";
import FadeIn from "@/components/ui/FadeIn";
import SidePhoto from "@/components/ui/SidePhoto";
import { PAGE_IMAGES } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Digital Payment Solutions | POS, Mobile Money & Settlement",
  description:
    "Essentially Yao Enterprise supports merchants, traders, and enterprises with point-of-sale systems, mobile money, online payment links, and settlement support.",
  alternates: { canonical: "/services/digital-payment-solutions" },
};

const PAYMENT_SERVICES = [
  { icon: CreditCard, title: "POS Systems", description: "Point-of-sale hardware and software for merchants." },
  { icon: Smartphone, title: "Mobile Money", description: "Accept and manage mobile money transactions." },
  { icon: Link2, title: "Online Payment Links", description: "Get paid online without building your own checkout." },
  { icon: RefreshCw, title: "Payment Processing", description: "Secure processing built for reliability." },
  { icon: Wallet, title: "Settlement Support", description: "Predictable settlement into your account." },
  { icon: LineChart, title: "Cash-Flow Visibility", description: "See transactions and balances as they happen." },
];

const PROCESS = [
  { step: "01", title: "Assess", description: "We review how you currently take payments and where the friction is." },
  { step: "02", title: "Set Up", description: "We configure POS, mobile money, or online payment tools for your business." },
  { step: "03", title: "Integrate", description: "Systems are connected to your existing operations and accounts." },
  { step: "04", title: "Support", description: "Ongoing settlement support and monitoring once you're live." },
];

export default function DigitalPaymentSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital Payment Solutions"
        title="Secure, modern payment infrastructure."
        description="We support merchants, traders, and enterprises with point-of-sale systems, mobile money, online payment links, and settlement support."
        image={PAGE_IMAGES.payments}
      />

      <section className="bg-paper py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What We Offer"
            title="Payment infrastructure for growing businesses"
            description="Process transactions securely and offer customers more convenient ways to pay."
          />
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-charcoal-900/10 shadow-sm shadow-navy-950/[0.04] sm:grid-cols-2 lg:grid-cols-3">
            {PAYMENT_SERVICES.map((service, i) => (
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
          <SidePhoto image={PAGE_IMAGES.paymentsDetail} />
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="How It Works" title="From setup to settlement" tone="light" />
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
        eyebrow="Digital Payments"
        title="Ready to upgrade how you get paid?"
        primaryHref="/contact?interest=Digital+Payment+Solutions"
        primaryLabel="Talk to Our Team"
      />
    </>
  );
}
