import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { SITE_URL } from "@/lib/constants";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EssentiallyYao | Commodity Trading, Merchant Services & Payments",
    template: "%s | EssentiallyYao",
  },
  description:
    "Essentially Yao Enterprise connects commodity producers to markets, expands access to digital payment technologies, and provides strategic guidance to businesses across Ghana, Africa, and international markets.",
  keywords: [
    "commodity trading Ghana",
    "commodity trading Africa",
    "general merchant services Ghana",
    "digital payment solutions Ghana",
    "mobile money Ghana",
    "POS systems Ghana",
    "business advisory Ghana",
    "business advisory Africa",
    "African commodity trading",
    "commodity sourcing Africa",
    "strategic business advisory",
  ],
  authors: [{ name: "Essentially Yao Enterprise" }],
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: SITE_URL,
    siteName: "EssentiallyYao",
    title: "EssentiallyYao | Commodity Trading, Merchant Services & Payments",
    description:
      "Connecting commodity producers to markets, expanding access to digital payments, and guiding businesses across Ghana, Africa, and international markets.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EssentiallyYao | Commodity Trading, Merchant Services & Payments",
    description:
      "Connecting commodity producers to markets, expanding access to digital payments, and guiding businesses across Ghana, Africa, and international markets.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-off-white text-navy-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
