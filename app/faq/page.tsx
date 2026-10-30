import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CtaBand, PageHero } from '@/components/blocks';
import { FaqAccordion, FaqCategoryBar } from '@/components/faq';
import { faqCategories, faqText } from '@/lib/faq';

export const metadata: Metadata = pageMetadata('/faq', 'Frequently Asked Questions | Hexa', 'Answers on how Hexa works: products, finance and technology services, teams, security, pricing and why Nepal.');

// Unconfirmed answers are reviewable on local and preview builds only.
const isProduction = process.env.VERCEL_ENV === 'production';

const categories = faqCategories
  .map((c) => ({ ...c, items: c.items.filter((item) => !isProduction || !item.confirm) }))
  .filter((c) => c.items.length > 0);

if (isProduction && categories.some((c) => c.items.some((item) => faqText(item).includes('[CONFIRM')))) {
  throw new Error('An FAQ answer still contains [CONFIRM] but is not marked `confirm`. Fix lib/faq.ts before a production deploy.');
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap((c) =>
    c.items
      .filter((item) => !item.confirm)
      .map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: faqText(item) },
      }))
  ),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        eyebrow="FAQ"
        title="Questions we get asked. Answered plainly."
        subline="If yours isn’t here, ask us on a 20-minute call."
        primary={{ label: 'Book a call', href: '/call' }}
      />

      <FaqCategoryBar categories={categories.map(({ id, label }) => ({ id, label }))} />

      <div className="section">
        <div className="container-hexa max-w-4xl space-y-16">
          {categories.map((c) => (
            <section key={c.id} id={c.id} aria-labelledby={`${c.id}-title`} className="scroll-mt-16">
              <h2 id={`${c.id}-title`} className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                {c.title}
              </h2>
              <FaqAccordion id={c.id} items={c.items} />
              {c.more && (
                <Link href={c.more.href} className="mt-6 inline-flex items-center gap-2 font-bold text-hexa-magenta">
                  {c.more.label} <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
              )}
            </section>
          ))}
        </div>
      </div>

      <CtaBand
        title="Still have a question? Ask someone who runs delivery."
        body=""
        primary={{ label: 'Book a call', href: '/call' }}
        secondary={null}
      />
    </>
  );
}
