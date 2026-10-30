import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CtaBand, PageHero } from '@/components/blocks';
import SeoBreadcrumbs from '@/components/seo-breadcrumbs';
import { insights } from '@/lib/insights';
import { pageMetadata } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';

export const dynamicParams = false;
export function generateStaticParams() { return insights.map(article => ({ slug: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insights.find(item => item.slug === slug);
  if (!article) notFound();
  const metadata = pageMetadata(`/insights/${slug}`, `${article.title} | Hexa`, article.description);
  return { ...metadata, openGraph: { ...metadata.openGraph, type: 'article', publishedTime: article.published } };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insights.find(item => item.slug === slug);
  if (!article) notFound();
  const path = `/insights/${article.slug}`;
  return <>
    <PageHero eyebrow="Finance & Accounting · Guide" title={article.title} subline={article.description} />
    <SeoBreadcrumbs items={[{ name: 'Insights', path: '/insights' }, { name: article.title, path }]} />
    <article className="section"><div className="container-hexa max-w-4xl">
      <p className="text-sm text-muted mb-8">By Hexa · Published <time dateTime={article.published}>30 October 2026</time></p>
      <nav aria-label="In this guide" className="card p-6 mb-12"><h2 className="font-bold text-xl">In this guide</h2>
        <ol className="list-decimal pl-5 mt-4 space-y-2">{article.sections.map((section, index) =>
          <li key={section.heading}><a href={`#section-${index + 1}`} className="text-hexa-magenta underline">{section.heading}</a></li>)}</ol>
      </nav>
      <div className="space-y-12">{article.sections.map((section, index) => <section key={section.heading} id={`section-${index + 1}`} className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-bold mb-5">{section.heading}</h2>
        {section.paragraphs.map(paragraph => <p key={paragraph} className="text-muted leading-relaxed mt-4">{paragraph}</p>)}
        {section.checklist && <ul className="list-disc pl-6 mt-5 space-y-3 text-muted">{section.checklist.map(item => <li key={item}>{item}</li>)}</ul>}
      </section>)}</div>
      <aside className="card p-7 mt-12"><h2 className="text-2xl font-bold">Explore the relevant services</h2>
        <ul className="mt-5 space-y-3">{article.related.map(link => <li key={link.href}><Link href={link.href} className="text-hexa-magenta font-bold underline">{link.label}</Link></li>)}</ul>
        <Link href="/insights" className="inline-block mt-6 underline">All finance outsourcing guides</Link>
      </aside>
    </div></article>
    <CtaBand title="Turn the questions into a scoped conversation." body="Tell us about the work, systems and responsibilities you need covered. We will discuss which operating model fits." />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Article', headline: article.title,
      description: article.description, datePublished: article.published,
      mainEntityOfPage: `${SITE_URL}${path}`, image: `${SITE_URL}/og-image.png`,
      author: { '@type': 'Organization', name: 'Hexa', url: SITE_URL },
      publisher: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'Hexa', url: SITE_URL },
    }).replace(/</g, '\u003c') }} />
  </>;
}
