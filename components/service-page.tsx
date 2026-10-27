import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CaseCard, CheckList, CtaBand, PageHero, SectionHeader } from '@/components/blocks';
import { serviceContent } from '@/lib/service-content';
import { caseStudies, finance, products, technology } from '@/lib/site';

export default function ServicePage({ slug }: { slug: 'finance' | 'technology' }) {
  const tower = slug === 'finance' ? finance : technology;
  const content = serviceContent[slug];
  const study = caseStudies.find((c) => c.id === content.caseId)!;

  return (
    <>
      <PageHero
        eyebrow={`Services · ${tower.name}`}
        title={tower.promise}
        subline={content.subline}
        primary={{ label: 'Book a 20-minute call', href: '/call' }}
        secondary={{ label: 'See which product fits', href: '#fit' }}
      />

      <section className="section">
        <div className="container-hexa">
          <SectionHeader eyebrow="Process areas" title={`What we run in ${tower.name}.`} />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tower.areas.map((area, i) => (
              <li key={area.name} className="card p-6">
                <span className="gradient-text text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-bold text-lg">{area.name}</h3>
                <p className="mt-2 text-muted text-[15px] leading-relaxed">{area.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="fit" className="section bg-hexa-soft">
        <div className="container-hexa">
          <SectionHeader
            eyebrow="Which product fits"
            title="Pick how much of it we own."
            intro="The same services, delivered three ways. Most clients start with one and move up."
          />
          <div className="grid gap-4">
            {content.fit.map((row) => {
              const product = products.find((p) => p.slug === row.product)!;
              return (
                <Link
                  key={row.product}
                  href={product.href}
                  className="card card-link grid gap-3 p-6 md:grid-cols-[200px_1fr_1fr_auto] md:items-center md:gap-8"
                >
                  <span className="font-bold text-lg">{product.name}</span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.1em] text-muted mb-1">When it fits</span>
                    {row.need}
                  </span>
                  <span className="text-muted">
                    <span className="block text-xs font-bold uppercase tracking-[0.1em] mb-1">For example</span>
                    {row.example}
                  </span>
                  <ArrowRight className="hidden md:block w-5 h-5 text-hexa-magenta" aria-hidden />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-hexa">
          <SectionHeader eyebrow="How we work" title="Tools, standards and controls." />
          <div className="grid gap-5 md:grid-cols-3">
            {content.controls.map((group) => (
              <div key={group.title} className="card p-7">
                <h3 className="text-lg font-bold mb-5">{group.title}</h3>
                <CheckList items={group.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-hexa-soft">
        <div className="container-hexa grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="Case study"
            title="Work we have built and run."
            intro={
              <Link href="/case-studies" className="inline-flex items-center gap-2 font-bold text-hexa-magenta">
                All case studies <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            }
          />
          <CaseCard study={study} />
        </div>
      </section>

      <CtaBand
        title={`Tell us what you need run in ${tower.name}.`}
        body="We will recommend where to start and come back with a scoped proposal."
      />
    </>
  );
}
