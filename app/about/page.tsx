import type { Metadata } from 'next';
import { Award, BadgeCheck, ShieldCheck } from 'lucide-react';
import { CheckList, CtaBand, PageHero, SectionHeader } from '@/components/blocks';
import { ACCA_REF } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Hexa: Part of the Hexamatics Group Since 2002',
  description:
    'Hexa is part of the Hexamatics Group, operating since 2002. Our delivery network, credentials, security and data controls, quality and training, and continuity record.',
  alternates: { canonical: '/about' },
};

const network = [
  { place: 'Kathmandu, Nepal', role: 'Primary delivery centre for Finance and Technology shared services.' },
  { place: 'Malaysia', role: 'Hexamatics group operations.' },
  { place: 'Singapore', role: 'Hexamatics group operations.' },
  { place: 'Indonesia', role: 'Hexamatics group operations.' },
  { place: 'The Philippines', role: 'Hexamatics group operations.' },
];

const credentials = [
  { icon: ShieldCheck, name: 'ISO 27001', body: 'Information security management, certified.' },
  { icon: BadgeCheck, name: 'ISO 9001', body: 'Quality management, certified.' },
  { icon: Award, name: 'ACCA Approved Employer', body: `Reference ${ACCA_REF}, valid to December 2029.` },
];

const security = [
  'Client data stays in your own systems and cloud region.',
  'Our people access your systems through your access controls, as your own staff would.',
  'Session logging on all access.',
  'Delivery centre with 24/7 security, CCTV, dual-network failover and backup power.',
  'Information security controls certified to ISO 27001.',
];

const training = [
  { name: 'Core', body: 'Orientation, professional conduct, data privacy and a quality mindset. Completed by everyone.' },
  { name: 'Professional skills', body: 'Written and spoken communication, analytical thinking and business etiquette.' },
  { name: 'Finance and Accounting', body: 'Payables and receivables, reporting and analysis, audit, control and governance, tax and compliance.' },
  { name: 'Technology', body: 'Cybersecurity awareness and effective, safe use of AI tools.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Hexa"
        title="A long-term operating partner, not a vendor."
        subline="Hexa builds and runs Finance and Technology shared services. We are part of the Hexamatics Group, which has operated since 2002."
      />

      <section className="section">
        <div className="container-hexa grid gap-12 lg:grid-cols-2">
          <SectionHeader eyebrow="Our story" title="From telecom consultancy to shared services." />
          <div className="space-y-5 text-lg leading-relaxed lg:pt-10">
            <p>
              The Hexamatics Group was founded in 2002 as a telecom consultancy. Over two decades it grew into an
              operating partner for companies in telecommunications, technology and banking, running workforce,
              payroll and compliance operations across several markets.
            </p>
            <p className="text-muted">
              As clients grew, they asked the group to take on more: finance that had become complex, technology
              delivery that had become a bottleneck. Hexa was set up to run those functions as managed shared
              services, under one accountable owner and the group’s governance.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-hexa-soft">
        <div className="container-hexa">
          <SectionHeader
            eyebrow="Delivery network"
            title="A global delivery model."
            intro="Kathmandu is our primary delivery centre, backed by Hexamatics group operations across Asia."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {network.map((n, i) => (
              <li key={n.place} className={`card p-6 ${i === 0 ? 'border-hexa-magenta/40' : ''}`}>
                <h3 className="font-bold">{n.place}</h3>
                <p className="mt-2 text-muted text-[15px] leading-relaxed">{n.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="credentials" className="section">
        <div className="container-hexa">
          <SectionHeader eyebrow="Credentials" title="Certified, and independently checked." />
          <ul className="grid gap-5 md:grid-cols-3">
            {credentials.map(({ icon: Icon, name, body }) => (
              <li key={name} className="card p-7">
                <Icon className="w-7 h-7 text-hexa-magenta mb-5" aria-hidden />
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="mt-2 text-muted leading-relaxed">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="security" className="section bg-hexa-soft scroll-mt-20">
        <div className="container-hexa grid gap-12 lg:grid-cols-2">
          <SectionHeader
            eyebrow="Security and data controls"
            title="Your data stays where it already is."
            intro="We work inside your systems, under your access controls. There is no separate copy of your data to manage."
          />
          <div className="lg:pt-10">
            <CheckList items={security} />
          </div>
        </div>
      </section>

      <section id="quality" className="section scroll-mt-20">
        <div className="container-hexa">
          <SectionHeader
            eyebrow="Quality and training"
            title="Gaps get trained, not tolerated."
            intro="Every person completes a structured curriculum before working on client engagements, and training continues against what your work needs."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {training.map((t) => (
              <li key={t.name} className="card p-6">
                <h3 className="font-bold">{t.name}</h3>
                <p className="mt-2 text-muted text-[15px] leading-relaxed">{t.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="continuity" className="section bg-hexa-soft">
        <div className="container-hexa max-w-3xl">
          <p className="eyebrow mb-4">Continuity record</p>
          <h2 className="text-3xl sm:text-[2.5rem] leading-[1.12] font-bold tracking-tight">
            The years that test a partner are the ones nobody plans for.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Pandemics and periods of disruption across several markets. Through each, payroll continued, statutory
            obligations were met, people were moved where they needed to be, and clients were advised rather than left
            to work it out. Continuity is not a clause in our contracts. It is a record.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
