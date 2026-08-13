import type { Metadata } from "next";
import { Clock, Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/app/contact/ContactForm";
import { LinkedInIcon } from "@/components/ui/icons";
import { AREAS_OF_INTEREST, CONTACT } from "@/lib/constants";
import { PAGE_IMAGES } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Contact Us | Discuss Your Next Opportunity",
  description:
    "Get in touch with Essentially Yao Enterprise to discuss commodity sourcing, merchant services, digital payments, or business advisory.",
  alternates: { canonical: "/contact" },
};

const CONTACT_DETAILS = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phoneHref}` },
  { icon: Clock, label: "Business Hours", value: CONTACT.hours },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string; opportunity?: string }>;
}) {
  const params = await searchParams;
  const defaultAreaOfInterest = AREAS_OF_INTEREST.find(
    (area) => area === params.interest
  );
  const defaultMessage = params.opportunity
    ? `I would like more information about: ${params.opportunity}`
    : undefined;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your next opportunity."
        description="Commodity sourcing, merchant services, digital payments, or advisory: tell us what you're working on."
        image={PAGE_IMAGES.contact}
      />

      <section className="bg-paper py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FadeIn>
              <ContactForm
                defaultAreaOfInterest={defaultAreaOfInterest}
                defaultMessage={defaultMessage}
              />
            </FadeIn>
          </div>

          <div className="lg:col-span-5">
            <FadeIn delay={0.1} className="rounded-lg bg-navy-950 p-10 shadow-lg shadow-navy-950/[0.1] lg:p-12">
              <h3 className="font-display text-xl font-medium text-off-white">
                Get in touch directly
              </h3>
              <ul className="mt-8 space-y-6">
                {CONTACT_DETAILS.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <item.icon className="mt-0.5 size-5 shrink-0 text-gold-400" strokeWidth={1.5} />
                    <div>
                      <p className="text-xs font-medium tracking-wide text-off-white/50 uppercase">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="mt-1 block text-sm text-off-white hover:text-gold-300">
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm text-off-white/80">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex items-center gap-2 border-t border-off-white/10 pt-6 text-sm text-off-white/70 hover:text-gold-300"
              >
                <LinkedInIcon className="size-4" />
                Connect on LinkedIn
              </a>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
