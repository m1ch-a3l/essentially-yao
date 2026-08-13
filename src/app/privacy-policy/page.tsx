import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How EssentiallyYao collects, uses, and protects your information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly to us, such as your name, company, email address, phone number, country, and the details of any enquiry submitted through our contact form.",
  },
  {
    title: "How We Use Your Information",
    body: "Information submitted through our website is used to respond to enquiries, assess commodity, merchant, payment, or advisory requests, and communicate with you about services relevant to your interests.",
  },
  {
    title: "Confidentiality",
    body: "Given the nature of our work, we treat enquiry information with discretion. Details relating to commercial opportunities, transactions, or counterparties are shared only as necessary to progress a request.",
  },
  {
    title: "Data Sharing",
    body: "We do not sell personal information. Information may be shared with relevant counterparties only where necessary to facilitate a transaction you have requested, and with your knowledge.",
  },
  {
    title: "Data Retention",
    body: "We retain enquiry information for as long as necessary to respond to your request and maintain appropriate business records, after which it is securely deleted.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information at any time by contacting us using the details below.",
  },
  {
    title: "Contact",
    body: `Questions about this Privacy Policy can be directed to ${CONTACT.email}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="11 August 2026">
      <p>
        This Privacy Policy explains how EssentiallyYao (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, and protects
        information submitted through this
        website. This is a template policy provided for reference and should
        be reviewed by qualified legal counsel before publication.
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
