import type { Metadata } from 'next';
import { CheckList, CtaBand, PageHero, SectionHeader } from '@/components/blocks';
import { RETENTION } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Why Nepal: A Talent Decision, Not a Cost Decision',
  description:
    'Why Hexa runs its primary delivery centre in Kathmandu: accountancy and engineering talent, working-day overlap with Asia, Australia and the UK, retention, and controls.',
  alternates: { canonical: '/why-nepal' },
};

// Verify any ICAN or graduate figures against the current annual report before adding numbers here.
const talent = [
  {
    title: 'A regulated accountancy profession',
    body: 'Nepal’s accountancy profession is regulated by ICAN, with a strong ACCA pipeline alongside it. Our finance people train to recognised standards.',
  },
  {
    title: 'An engineering graduate base',
    body: 'A steady supply of computer science and engineering graduates, many already working with international product teams.',
  },
  {
    title: 'English-first written work',
    body: 'Business, accounting and engineering are studied and practised in English, so documentation, tickets and reports read the way you expect.',
  },
];

const overlap = [
  { market: 'Asia', fit: 'Strong overlap across the full working day.' },
  { market: 'Australia', fit: 'Strong overlap, with Kathmandu mornings meeting the Australian afternoon.' },
  { market: 'United Kingdom', fit: 'Morning overlap with the UK, so handover happens at the start of your day.' },
  { market: 'United States', fit: 'A defined handover model: work is briefed at your day’s end and returned by your next morning.' },
];

const controls = [
  'ISO 27001 certified information security',
  'Dual-network failover and backup power at the delivery centre',
  'Work happens inside your systems, under your access controls',
  'A continuity record through periods of disruption across several markets',
];

export default function WhyNepalPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Nepal"
        title="A talent decision, not a cost decision."
        subline="Kathmandu is our primary delivery centre. Here is why we chose it, and how it is run."
        primary={{ label: 'Book a call', href: '/call' }}
        secondary={{ label: 'Visit the centre', href: '/call#proposal' }}
      />

      <section className="section">
        <div className="container-hexa">
          <SectionHeader eyebrow="Talent depth" title="People trained for the work you need done." />
          <ul className="grid gap-5 md:grid-cols-3">
            {talent.map((t) => (
              <li key={t.title} className="card p-7">
                <h3 className="text-lg font-bold">{t.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{t.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-hexa-soft">
        <div className="container-hexa">
          <SectionHeader
            eyebrow="Working-day overlap"
            title="Time zones that work for your week."
            intro="Kathmandu is on UTC+5:45."
          />
          <dl className="grid gap-4 sm:grid-cols-2">
            {overlap.map((o) => (
              <div key={o.market} className="card p-6">
                <dt className="font-bold text-lg">{o.market}</dt>
                <dd className="mt-2 text-muted leading-relaxed">{o.fit}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container-hexa grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Retention"
              title={`${RETENTION} team retention.`}
              intro="Saturated offshore markets lose people to the next offer. In Kathmandu, people build long careers with us, so knowledge of your work stays with your work."
            />
          </div>
          <div>
            <SectionHeader eyebrow="Controls and continuity" title="Run to the same controls as anywhere else." />
            <CheckList items={controls} />
          </div>
        </div>
      </section>

      <section className="section bg-hexa-soft">
        <div className="container-hexa grid gap-12 lg:grid-cols-2">
          <SectionHeader
            eyebrow="Group backing"
            title="Inside Hexamatics group governance."
            intro="Delivery in Nepal runs under the same group governance, policies and oversight as Hexamatics operations across Malaysia, Singapore, Indonesia and the Philippines."
          />
          <div className="lg:pt-10">
            <p className="eyebrow mb-3">Cost</p>
            <p className="text-2xl font-bold leading-snug">Delivered at a cost base that lets you invest the difference.</p>
          </div>
        </div>
      </section>

      <CtaBand
        title="See the centre for yourself."
        body="Visit our delivery centre in Kathmandu, or start with a call."
        primary={{ label: 'Book a call', href: '/call' }}
        secondary={{ label: 'Plan a visit', href: '/call#proposal' }}
      />
    </>
  );
}
