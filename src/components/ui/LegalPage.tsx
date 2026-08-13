import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import type { ReactNode } from "react";

export default function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <section className="bg-paper py-20 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-sm text-charcoal-300">Last updated: {updated}</p>
          <div className="prose-legal mt-8 space-y-8 text-base leading-relaxed text-charcoal-700">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
