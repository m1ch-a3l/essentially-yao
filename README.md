# EssentiallyYao

Corporate website for EssentiallyYao — Commodity Trading, Business Advisory, and Business Brokering.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — routes (one folder per page, following the site map: `/about`, `/services`, `/services/business-advisory`, `/services/business-brokering`, `/commodities`, `/opportunities`, `/insights`, `/insights/[slug]`, `/contact`, plus legal pages)
- `src/components/layout` — Header, Footer
- `src/components/sections` — page-level sections (Hero, CTA band, opportunity/insights boards, etc.)
- `src/components/ui` — shared primitives (Button, Container, cards, form pieces)
- `src/lib/data` — placeholder content for services, commodities, opportunities, and insights articles. Replace with real content or wire to a CMS/CRM as it becomes available.
- `src/lib/constants.ts` — site-wide config (nav, contact details, area-of-interest options)

## Notes

- The contact form (`src/app/contact/actions.ts`) validates and logs enquiries server-side. Wire it to an email/CRM provider (e.g. Resend, HubSpot) before going live.
- Legal pages (`privacy-policy`, `terms-conditions`, `disclaimer`) contain template copy and should be reviewed by legal counsel before publishing.
- `sitemap.ts` / `robots.ts` are generated from the same route list — update both if pages are added or removed.

## Production build

```bash
npm run build
npm start
```
