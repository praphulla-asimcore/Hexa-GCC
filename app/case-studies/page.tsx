import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import { ClientLogos, CtaBand, PageHero } from '@/components/blocks';
import { caseStudies } from '@/lib/site';

export const metadata: Metadata = pageMetadata('/case-studies', 'Case Studies: Finance and Technology Centres Built and Run | Hexa', 'Anonymised case studies of finance operations, technology delivery centres and workforce platforms built and run by Hexa and the Hexamatics Group.');

const fields = [
  { key: 'problem', label: 'Problem' },
  { key: 'built', label: 'What we built' },
  { key: 'result', label: 'Result' },
] as const;

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Work we have built and run."
        subline="Anonymised, but specific. Client names and references are shared on request during a call."
        primary={{ label: 'Book a 20-minute call', href: '/call' }}
      />

      <section className="section">
        <div className="container-hexa">
          <ClientLogos />
        </div>
      </section>

      <section className="section bg-hexa-soft">
        <div className="container-hexa space-y-6">
          {caseStudies.map((study) => (
            <article key={study.id} id={study.id} className="card p-7 md:p-10 scroll-mt-28">
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="tag">{study.tower}</span>
                <span className="tag !bg-hexa-soft !text-hexa-ink/70">{study.market}</span>
              </div>
              <h2 className="text-2xl sm:text-[1.75rem] font-bold leading-tight tracking-tight max-w-3xl">{study.title}</h2>
              <dl className="mt-8 grid gap-8 md:grid-cols-[1fr_1fr_1fr_200px]">
                {fields.map((f) => (
                  <div key={f.key}>
                    <dt className="text-xs font-bold uppercase tracking-[0.1em] text-muted mb-2">{f.label}</dt>
                    <dd className="leading-relaxed">{study[f.key]}</dd>
                  </div>
                ))}
                <div className="md:border-l md:pl-8">
                  <dt className="text-xs font-bold uppercase tracking-[0.1em] text-muted mb-2">Client</dt>
                  <dd className="leading-relaxed">{study.clientType}</dd>
                  <dt className="text-xs font-bold uppercase tracking-[0.1em] text-muted mt-5 mb-2">Duration</dt>
                  <dd className="font-bold gradient-text">{study.duration}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Want a reference call?" body="Ask when you book. We arrange reference calls where a client has agreed to take them." />
    </>
  );
}
