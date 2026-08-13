import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms governing use of the EssentiallyYao website and services.",
  alternates: { canonical: "/terms-conditions" },
  robots: { index: false, follow: true },
};

const SECTIONS = [
  {
    title: "Use of This Website",
    body: "This website is provided for informational purposes to introduce EssentiallyYao's commodity trading, general merchant services, digital payment solutions, and business advisory services. By using this website, you agree to use it lawfully and not to misrepresent your identity or intentions in any enquiry submitted.",
  },
  {
    title: "No Binding Offer",
    body: "Content on this website does not constitute a binding offer, solicitation, or guarantee of any transaction, supply arrangement, or business outcome.",
  },
  {
    title: "Engagement of Services",
    body: "Formal engagement of EssentiallyYao's services is subject to a separate agreement between the client and EssentiallyYao, outlining the specific scope, terms, and fees applicable to that engagement.",
  },
  {
    title: "Intellectual Property",
    body: "All content on this website, including text, graphics, and branding, is the property of EssentiallyYao unless otherwise stated, and may not be reproduced without permission.",
  },
  {
    title: "Limitation of Liability",
    body: "EssentiallyYao makes reasonable efforts to ensure information on this website is accurate but does not guarantee its completeness or accuracy, and accepts no liability for decisions made solely on the basis of website content.",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of the Republic of Ghana.",
  },
  {
    title: "Contact",
    body: `Questions about these Terms & Conditions can be directed to ${CONTACT.email}.`,
  },
];

export default function TermsConditionsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms & Conditions" updated="11 August 2026">
      <p>
        These Terms & Conditions govern your use of the EssentiallyYao
        website. This is a template document provided for reference and
        should be reviewed by qualified legal counsel before publication.
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
