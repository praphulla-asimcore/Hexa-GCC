import Link from 'next/link';
import { PageHero } from '@/components/blocks';
import SeoBreadcrumbs from '@/components/seo-breadcrumbs';
import { insights } from '@/lib/insights';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insights', 'Finance Outsourcing Guides & Insights | Hexa',
  'Practical guides to finance outsourcing, dedicated accounting teams and close controls. Explore responsibilities, transition planning and engagement models.');

export default function InsightsPage() {
  return <>
    <PageHero eyebrow="Insights" title="Plan the handover as carefully as the work."
      subline="Practical guides for finance leaders and accounting practices comparing offshore capacity, managed services and the controls needed to make them work." />
    <SeoBreadcrumbs items={[{ name: 'Insights', path: '/insights' }]} />
    <section className="section"><div className="container-hexa grid gap-6 md:grid-cols-2">
      {insights.map(article => <article key={article.slug} className="card p-7">
        <p className="text-sm text-muted">Finance & Accounting · By Hexa</p>
        <h2 className="mt-3 text-2xl font-bold"><Link href={`/insights/${article.slug}`} className="hover:text-hexa-magenta">{article.title}</Link></h2>
        <p className="mt-4 text-muted leading-relaxed">{article.description}</p>
        <Link href={`/insights/${article.slug}`} className="inline-block mt-5 font-bold text-hexa-magenta underline">Read the guide</Link>
      </article>)}
    </div></section>
  </>;
}
