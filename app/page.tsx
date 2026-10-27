import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, Repeat, ShieldCheck, Building2 } from 'lucide-react';
import {
  CaseCard,
  ClientLogos,
  CtaBand,
  PageHero,
  ProductLadder,
  ProofBar,
  SectionHeader,
  ServiceTiles,
} from '@/components/blocks';
import { ACCA_REF, RETENTION, caseStudies, featuredCaseIds, towers } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'Hexa | Finance and Technology Operations, Built and Run for You' },
  description:
    'Managed shared services and dedicated capability centres for growing companies in Australia, the UK, the US and Asia. Finance and Technology, from added capacity to a full centre.',
  alternates: { canonical: '/' },
};

const whyHexa = [
  {
    icon: Repeat,
    title: `${RETENTION} team retention`,
    body: 'People stay, so knowledge of your work stays. When someone does leave, the replacement guarantee and documented procedures cover the handover.',
  },
  {
    icon: ShieldCheck,
    title: 'Work happens inside your systems',
    body: 'Your data stays in your systems and cloud region. Our people access it through your controls, with session logging, under ISO 27001.',
  },
  {
    icon: Building2,
    title: 'A continuity record, not a clause',
    body: 'Through pandemics and periods of disruption across several markets, payroll continued, filings were met and clients were kept informed.',
  },
  {
    icon: Award,
    title: 'Group backing since 2002',
    body: `Hexa is part of the Hexamatics Group, operating since 2002. ISO 27001 and ISO 9001 certified, and an ACCA Approved Employer (ref ${ACCA_REF}).`,
  },
];

export default function HomePage() {
  const featured = featuredCaseIds.map((id) => caseStudies.find((c) => c.id === id)!);

  return (
    <>
      <PageHero
        eyebrow="Finance and Technology shared services"
        title={
          <>
            Finance and technology operations, <span className="gradient-text">built and run for you.</span>
          </>
        }
        subline="Managed shared services and dedicated capability centres for growing companies in Australia, the UK, the US and Asia."
        primary={{ label: 'Book a 20-minute call', href: '/call' }}
        secondary={{ label: 'See our products', href: '#products' }}
        video={{ src: '/hexa-hero.mp4', poster: '/hexa-hero-poster.jpg' }}
      >
        <ProofBar />
      </PageHero>

      <ProductLadder id="products" />

      <section className="section">
        <div className="container-hexa">
          <SectionHeader
            eyebrow="Services"
            title="Two service areas. One way of working."
            intro="Pick what we take on. Then pick how much of it we own."
          />
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
            {towers.map((tower) => (
              <div key={tower.slug}>
                <div className="flex items-end justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-2xl font-bold">{tower.name}</h3>
                    <p className="text-muted mt-1">{tower.promise}</p>
                  </div>
                </div>
                <ServiceTiles tower={tower} limit={4} />
                <Link href={tower.href} className="mt-5 inline-flex items-center gap-2 font-bold text-hexa-magenta">
                  All {tower.name} services <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-hexa-soft">
        <div className="container-hexa py-14 md:py-16 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Platform</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Hexa Intelligence runs underneath every engagement.</h2>
            <p className="mt-3 text-muted text-lg leading-relaxed">
              Our own automation and review tools, built by our engineers and used by our finance teams, so work is
              checked, traceable and faster to close.
            </p>
          </div>
          <Link href="/hexa-intelligence" className="btn btn-ghost-light self-start md:self-center">
            See the platform <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container-hexa">
          <SectionHeader eyebrow="Proof" title="Work we have built and run." />
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((study) => (
              <CaseCard key={study.id} study={study} />
            ))}
          </div>
          <div className="mt-14">
            <ClientLogos />
          </div>
          <Link href="/case-studies" className="mt-8 inline-flex items-center gap-2 font-bold text-hexa-magenta">
            All case studies <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </section>

      <section className="section bg-hexa-soft">
        <div className="container-hexa">
          <SectionHeader eyebrow="Why Hexa" title="What you can hold us to." />
          <ul className="grid gap-5 sm:grid-cols-2">
            {whyHexa.map(({ icon: Icon, title, body }) => (
              <li key={title} className="card p-7">
                <Icon className="w-6 h-6 text-hexa-magenta mb-5" aria-hidden />
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
