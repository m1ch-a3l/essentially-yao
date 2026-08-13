import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { LinkedInIcon } from "@/components/ui/icons";
import Logo from "@/components/ui/Logo";
import { CONTACT, NAV_LINKS } from "@/lib/constants";

const SERVICE_LINKS = [
  { href: "/commodities", label: "Commodity Trading" },
  { href: "/services/general-merchanting", label: "General Merchant Services" },
  { href: "/services/digital-payment-solutions", label: "Digital Payment Solutions" },
  { href: "/services/business-advisory", label: "Business Advisory" },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-off-white/70">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo className="text-2xl" imageClassName="h-10" />
          <p className="mt-3 text-xs font-semibold tracking-[0.2em] text-gold-400/90 uppercase">
            Trade | Merchant Services | Payments | Advisory
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-off-white/60">
            Connecting commodity producers to markets, expanding access to
            digital payment technologies, and providing strategic guidance to
            businesses across the region.
          </p>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="EssentiallyYao on LinkedIn"
            className="mt-7 inline-flex size-10 items-center justify-center rounded-full border border-off-white/15 text-off-white/70 transition-all duration-300 hover:border-gold-400 hover:text-gold-400 hover:shadow-md hover:shadow-navy-950/30"
          >
            <LinkedInIcon className="size-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:col-span-5 lg:grid-cols-3">
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-off-white uppercase">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-off-white/60 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-off-white uppercase">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-off-white/60 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-off-white uppercase">
              Legal
            </h3>
            <ul className="mt-5 space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-off-white/60 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-semibold tracking-[0.2em] text-off-white uppercase">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-off-white/60">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold-400" strokeWidth={1.75} />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-gold-300">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold-400" strokeWidth={1.75} />
              <a href={`tel:${CONTACT.phoneHref}`} className="hover:text-gold-300">
                {CONTACT.phone}
              </a>
            </li>
          </ul>
          <p className="mt-5 text-xs text-off-white/40">{CONTACT.hours}</p>
        </div>
      </Container>

      <div className="border-t border-off-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-off-white/40 sm:flex-row">
          <p>© 2026 EssentiallyYao. All rights reserved.</p>
          <p>Accra, Ghana</p>
        </Container>
      </div>
    </footer>
  );
}
