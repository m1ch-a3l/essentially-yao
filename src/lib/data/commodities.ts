export type CommodityCategory = {
  name: string;
  description: string;
  examples: string[];
};

export const COMMODITY_CATEGORIES: CommodityCategory[] = [
  {
    name: "Agricultural Commodities",
    description:
      "Sourcing and supply connections across staple and cash crops, subject to seasonal availability and buyer specification.",
    examples: ["Cocoa & cocoa derivatives", "Grains & cereals", "Cashew & shea", "Fresh & processed produce"],
  },
  {
    name: "Minerals & Metals",
    description:
      "Sourcing and trade support across selected minerals and metals, backed by supplier verification.",
    examples: ["Gold & precious metals", "Industrial minerals", "Base metals", "Ores & concentrates"],
  },
  {
    name: "Energy & Industrial Commodities",
    description:
      "Connections across energy and industrial supply chains for verified counterparties.",
    examples: ["Petroleum products", "Industrial fuels", "Bulk chemicals", "Construction inputs"],
  },
  {
    name: "Raw Materials",
    description:
      "Support for buyers and suppliers of raw and semi-processed materials across regional and global supply chains.",
    examples: ["Timber & wood products", "Textile inputs", "Packaging materials", "Semi-processed goods"],
  },
  {
    name: "Other Strategic Commodities",
    description:
      "Additional commodity categories considered on a case-by-case basis, in line with market conditions and client requirements.",
    examples: ["Specialty commodities", "Emerging trade categories", "Client-specified requirements"],
  },
];

export const TRADING_PROCESS = [
  {
    step: "01",
    title: "Requirement Identification",
    description:
      "We begin by understanding the commodity, volume, quality, and commercial requirements of the buyer or supplier.",
  },
  {
    step: "02",
    title: "Supplier / Buyer Sourcing",
    description:
      "We tap our network to find counterparties who match the requirement.",
  },
  {
    step: "03",
    title: "Verification & Due Diligence",
    description:
      "We screen counterparties for credibility, capacity, and documentation before making any introduction.",
  },
  {
    step: "04",
    title: "Commercial Negotiation",
    description:
      "We support both parties through terms, pricing, and structure discussions toward a workable agreement.",
  },
  {
    step: "05",
    title: "Transaction Facilitation",
    description:
      "We help coordinate the practical steps of the transaction, from documentation to delivery milestones.",
  },
];
