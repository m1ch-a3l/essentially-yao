import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important disclaimers regarding EssentiallyYao's services and website content.",
  alternates: { canonical: "/disclaimer" },
  robots: { index: false, follow: true },
};

const SECTIONS = [
  {
    title: "No Financial or Investment Advice",
    body: "Content on this website is provided for general informational purposes only and does not constitute financial, investment, legal, or tax advice. You should seek independent professional advice before making any commercial or financial decision.",
  },
  {
    title: "Commodity Availability",
    body: "References to commodity categories on this website describe the categories our network can support and do not represent a current inventory, confirmed supply, or guaranteed availability. All commodity supply is subject to market availability, verification, and transaction requirements.",
  },
  {
    title: "Payment Services",
    body: "Digital payment solutions referenced on this website, including point-of-sale, mobile money, and online payment processing, are subject to the terms and requirements of the relevant payment partners and financial regulators.",
  },
  {
    title: "No Guarantee of Outcome",
    body: "EssentiallyYao facilitates sourcing, procurement, and payment services but does not guarantee that any enquiry will result in a completed transaction or supply arrangement.",
  },
  {
    title: "Third Parties",
    body: "EssentiallyYao is not responsible for the actions, representations, or conduct of third parties involved in a transaction, including suppliers, buyers, and payment processors.",
  },
  {
    title: "Contact",
    body: `Questions about this Disclaimer can be directed to ${CONTACT.email}.`,
  },
];

export default function DisclaimerPage() {
  return (
    <LegalPage eyebrow="Legal" title="Disclaimer" updated="11 August 2026">
      <p>
        This Disclaimer applies to all content on the EssentiallyYao website.
        This is a template document provided for reference and should be
        reviewed by qualified legal counsel before publication.
      </p>
      {SECTIONS.map((section) => (
        <div key={section.title}>
          <h2 className="font-display text-xl font-medium text-navy-950">
            {section.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-charcoal-500">
            {section.body}
          </p>
        </div>
      ))}
    </LegalPage>
  );
}
