import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import { Cpu } from 'lucide-react';
import { CheckList, CtaBand, PageHero, SectionHeader } from '@/components/blocks';
import { liveTools } from '@/lib/site';

export const metadata: Metadata = pageMetadata('/hexa-intelligence', 'Hexa Intelligence: In-House Apps Built for Your Operation | Hexa', 'Hexa Intelligence is our in-house app platform. From month 3 of an engagement, our own engineers build apps to your needs for operational efficiency and excellence: automation, checks and reporting.');

const layer = [
  'Repeat work is automated, so people spend their time on review and judgement.',
  'Checks run before work reaches you, not after.',
  'Every step leaves an audit trail you can inspect.',
  'Reporting you would otherwise build by hand arrives ready to read.',
];

const timeline = [
  {
    when: 'Months 1 and 2',
    title: 'Stabilise',
    body: 'We take over the work, run it to your process and map where time goes and where errors creep in.',
  },
  {
    when: 'Month 3',
    title: 'Build',
    body: 'Our engineers build the apps your operation needs, on what we have learned: automation, checks and reporting, shaped around your process.',
  },
  {
    when: 'From then on',
    title: 'Improve',
    body: 'Apps run inside the engagement and are maintained by the team that built them, and they change as your needs change.',
  },
];

export default function HexaIntelligencePage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title={
          <>
            <span className="gradient-text">Hexa Intelligence</span>: in-house apps, built for your operation.
          </>
        }
        subline="Our own engineers build apps for operational efficiency and excellence, to your needs, from month 3 of an engagement."
        primary={{ label: 'Talk to us about your operation', href: '/call' }}
      />

      <section className="section">
        <div className="container-hexa grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeader
            eyebrow="What the apps do"
            title="Built in-house, around your process."
            intro="Hexa Intelligence is available in every product: Support, Delivery and Centre. The apps are built by the same engineers who deliver technology work for our clients."
          />
          <div className="lg:pt-10">
            <CheckList items={layer} />
          </div>
        </div>
      </section>

      <section className="section bg-hexa-soft">
        <div className="container-hexa">
          <SectionHeader eyebrow="How it works" title="Apps for your operation by month 3." />
          <ol className="grid gap-5 md:grid-cols-3">
            {timeline.map((step) => (
              <li key={step.title} className="card p-7">
                <p className="eyebrow">{step.when}</p>
                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-hexa">
          <SectionHeader
            eyebrow="Live in operation"
            title="Apps in live operation today."
            intro="We only list apps running in live operations now, for clients and across Hexamatics group companies."
          />
          <ul className="grid gap-5 md:grid-cols-2">
            {liveTools.map((tool) => (
              <li key={tool.name} className="card p-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-11 h-11 rounded-xl bg-hexa-ink flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-white" aria-hidden />
                  </span>
                  <span className="tag">{tool.area}</span>
                </div>
                <h3 className="text-xl font-bold">{tool.name}</h3>
                <p className="mt-3 text-muted leading-relaxed">{tool.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="See what we would build for your operation."
        body="We will walk you through Hexa Intelligence against your own process."
      />
    </>
  );
}
