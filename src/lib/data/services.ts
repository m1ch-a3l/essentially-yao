export type Service = {
  slug: string;
  href: string;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
};

export const SERVICES: Service[] = [
  {
    slug: "commodity-trading",
    href: "/commodities",
    name: "Commodity Trading",
    tagline: "Reliable supply, from source to delivery.",
    description:
      "We source, aggregate, grade, store, and distribute agricultural produce, raw materials, and other physical commodities through dependable supplier and buyer networks.",
    bullets: [
      "Sourcing & aggregation",
      "Grading & storage",
      "Quality assurance",
      "Risk management",
      "Supplier & buyer networks",
      "Distribution & logistics",
    ],
    ctaLabel: "Explore Commodity Trading",
  },
  {
    slug: "general-merchanting",
    href: "/services/general-merchanting",
    name: "General Merchant Services",
    tagline: "Efficient sourcing, dependable delivery.",
    description:
      "We procure, supply, import, export, and distribute bulk commercial goods, industrial supplies, and retail-ready merchandise for businesses and trading partners.",
    bullets: [
      "Procurement",
      "Import & export",
      "Bulk commercial goods",
      "Industrial supplies",
      "Retail-ready merchandise",
      "Supply chain distribution",
    ],
    ctaLabel: "Explore General Merchant Services",
  },
  {
    slug: "digital-payment-solutions",
    href: "/services/digital-payment-solutions",
    name: "Digital Payment Solutions",
    tagline: "Secure, modern payment infrastructure.",
    description:
      "We support merchants, traders, and enterprises with point-of-sale systems, mobile money solutions, online payment links, payment processing, and settlement support.",
    bullets: [
      "POS systems",
      "Mobile money",
      "Online payment links",
      "Payment processing",
      "Settlement support",
      "Cash-flow visibility",
    ],
    ctaLabel: "Explore Digital Payment Solutions",
  },
  {
    slug: "business-advisory",
    href: "/services/business-advisory",
    name: "Business Advisory & Support",
    tagline: "Practical guidance for growing businesses.",
    description:
      "We provide practical advisory support in trade and market access, business registration, financial planning, process optimization, and compliance readiness.",
    bullets: [
      "Trade & market access",
      "Business registration",
      "Financial planning",
      "Process optimization",
      "Compliance readiness",
      "Growth strategy",
    ],
    ctaLabel: "Explore Business Advisory",
  },
];
