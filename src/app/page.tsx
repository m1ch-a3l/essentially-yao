import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustSection from "@/components/sections/TrustSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ImageBanner from "@/components/sections/ImageBanner";
import CtaBand from "@/components/sections/CtaBand";
import { PAGE_IMAGES } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Commodity Trading, Merchant Services & Digital Payments in Ghana",
  description:
    "Essentially Yao Enterprise connects commodity producers to markets, expands access to digital payment technologies, and provides strategic guidance to businesses across Ghana and international markets.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <ImageBanner
        eyebrow="Digital Payment Solutions"
        title="Modern payment infrastructure for merchants and traders."
        description="POS systems, mobile money, online payment links, and settlement support, built for secure, reliable transactions."
        image={PAGE_IMAGES.payments}
        primaryHref="/services/digital-payment-solutions"
        primaryLabel="Explore Digital Payments"
      />
      <CtaBand
        title="Ready to discuss your next opportunity?"
        secondaryHref="/services"
        secondaryLabel="Explore Our Services"
      />
    </>
  );
}
