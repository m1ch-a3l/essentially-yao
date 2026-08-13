import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/business-advisory",
    "/services/general-merchanting",
    "/services/digital-payment-solutions",
    "/commodities",
    "/contact",
    "/privacy-policy",
    "/terms-conditions",
    "/disclaimer",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  return staticRoutes;
}
