import Link from 'next/link';
import { ArrowRight, Landmark, Code2 } from 'lucide-react';
import { CheckList, CtaBand, IncludedGrid, PageHero, SectionHeader } from '@/components/blocks';
import { productContent } from '@/lib/product-content';
import { ProductSlug, products } from '@/lib/site';
import SeoBreadcrumbs from '@/components/seo-breadcrumbs';

export default function ProductPage({ slug }: { slug: ProductSlug }) {
  const product = products.find((p) => p.slug === slug)!;
  const content = productContent[slug];
  const columns = [
    { icon: Landmark, ...content.finance, href: '/finance' },
    { icon: Code2, ...content.technology, href: '/technology' },
  ];

  return (
    <>
      <PageHero
        eyebrow={product.name}
        title={slug === 'centre' ? 'Global capability centre as a service.' : product.promise}
        subline={product.definition}
        primary={{ label: 'Request a proposal', href: '/call#proposal' }}
      />

      <SeoBreadcrumbs items={[{ name: product.name, path: product.href }]} />

      {slug === 'centre' && <section className="section bg-hexa-soft"><div className="container-hexa">
        <SectionHeader eyebrow="Managed GCC" title="Build the capability without starting with your own overseas operation."
          intro="A global capability centre brings workstreams, people and leadership into one operating model. Hexa Centre is the managed option: Hexa builds and runs the operation, while you retain strategic direction through agreed governance." />
        <div className="grid gap-5 md:grid-cols-3">
          <div className="card p-7"><h3 className="text-xl font-bold">Define the charter</h3><p className="text-muted mt-3">Agree functions, location requirements, systems, decision rights and success measures. Identify the leaders and approvals that remain with your organisation.</p></div>
          <div className="card p-7"><h3 className="text-xl font-bold">Build and transition</h3><p className="text-muted mt-3">Plan roles, process documentation, approved access and handover checkpoints. Agree readiness criteria for each workstream before moving it into steady-state delivery.</p></div>
          <div className="card p-7"><h3 className="text-xl font-bold">Choose the ownership path</h3><p className="text-muted mt-3">A captive centre is operated through your own organisation. A managed centre is run by Hexa under the agreed charter. Build–Operate–Transfer adds a potential transfer path on terms agreed at the start.</p></div>
        </div>
        <p className="mt-7 text-muted">Entity structure, employment, tax and transfer terms depend on the engagement and jurisdiction. Confirm these with the relevant professional advisers during scoping.</p>
      </div></section>}

      <section className="section">
        <div className="container-hexa grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Who it is for" title={`Is ${product.name} right for you?`} />
            <CheckList items={content.whoFor} />
          </div>
          <div>
            <SectionHeader eyebrow="What you get" title="What you get, and who owns the outcome." />
            <CheckList items={content.whatYouGet} />
            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="card p-5">
                <dt className="text-sm font-bold uppercase tracking-[0.1em] text-muted">You own</dt>
                <dd className="mt-2 leading-relaxed">{content.ownership.you}</dd>
              </div>
              <div className="card p-5 border-hexa-magenta/40">
                <dt className="text-sm font-bold uppercase tracking-[0.1em] text-hexa-magenta">Hexa owns</dt>
                <dd className="mt-2 leading-relaxed">{content.ownership.hexa}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section bg-hexa-soft">
        <div className="container-hexa">
          <SectionHeader eyebrow="How it works" title="The same product, in Finance and in Technology." />
          <div className="grid gap-5 md:grid-cols-2">
            {columns.map(({ icon: Icon, title, items, href }) => (
              <div key={title} className="card p-7 flex flex-col">
                <Icon className="w-6 h-6 text-hexa-magenta mb-5" aria-hidden />
                <h3 className="text-xl font-bold mb-5">{title}</h3>
                <CheckList items={items} />
                <Link href={href} className="mt-auto pt-6 inline-flex items-center gap-2 font-bold text-hexa-magenta">
                  {title.split(' ')[0]} services <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-hexa grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader
            eyebrow="Service levels and governance"
            title="Measured, reported and reviewed."
            intro="Governance is agreed before work starts and reported every month, so you always know where things stand."
          />
          <div className="lg:pt-10">
            <CheckList items={content.serviceLevels} />
          </div>
        </div>
      </section>

      <section className="section bg-hexa-soft">
        <div className="container-hexa">
          <SectionHeader eyebrow="Included" title="Included in every product." />
          <IncludedGrid />
        </div>
      </section>

      <section className="section">
        <div className="container-hexa">
          {content.next.kind === 'move-up' ? (
            <div className="card p-8 md:p-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div className="max-w-2xl">
                <p className="eyebrow mb-3">How to move up</p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{content.next.title}</h2>
                <p className="mt-3 text-muted text-lg leading-relaxed">{content.next.body}</p>
              </div>
              <Link href={content.next.href} className="btn btn-ghost-light self-start md:self-center">
                {content.next.label} <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
          ) : (
            <>
              <SectionHeader
                eyebrow="Options"
                title="Finance, Technology or Blended. Yours to keep, if you want it."
              />
              <div className="grid gap-5 md:grid-cols-2">
                {content.next.options.map((o) => (
                  <div key={o.title} className="card p-7">
                    <h3 className="text-xl font-bold">{o.title}</h3>
                    <p className="mt-3 text-muted leading-relaxed">{o.body}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <CtaBand
        title={`Talk to us about ${product.name}.`}
        body="Tell us what you need run. We will come back with a scoped proposal."
        primary={{ label: 'Request a proposal', href: '/call#proposal' }}
        secondary={{ label: 'Book a call', href: '/call' }}
      />
    </>
  );
}
