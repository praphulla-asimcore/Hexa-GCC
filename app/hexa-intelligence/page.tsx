import type { Metadata } from 'next';
import { Cpu } from 'lucide-react';
import { CheckList, CtaBand, PageHero, SectionHeader } from '@/components/blocks';
import { liveTools } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Hexa Intelligence: The Platform Layer Behind Every Engagement',
  description:
    'Hexa Intelligence is the tooling layer that runs every Hexa engagement: automation, review and audit trails, built by our own engineers and in use with clients today.',
  alternates: { canonical: '/hexa-intelligence' },
};

const layer = [
  'Repeat work is automated, so people spend their time on review and judgement.',
  'Every step leaves an audit trail you can inspect.',
  'Checks run before work reaches you, not after.',
  'Tools are introduced once your core workflow is stable, where they fit your work.',
];

export default function HexaIntelligencePage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title={
          <>
            <span className="gradient-text">Hexa Intelligence</span> runs underneath every engagement.
          </>
        }
        subline="Our own automation and review tooling, built by the same engineers who deliver for clients and used by our finance teams every day."
        primary={{ label: 'See it in a working engagement', href: '/call' }}
      />

      <section className="section">
        <div className="container-hexa grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeader
            eyebrow="The layer"
            title="What it changes in your engagement."
            intro="Hexa Intelligence is part of every product: Support, Delivery and Centre."
          />
          <div className="lg:pt-10">
            <CheckList items={layer} />
          </div>
        </div>
      </section>

      <section className="section bg-hexa-soft">
        <div className="container-hexa">
          <SectionHeader
            eyebrow="Live with clients"
            title="Tools in client use today."
            intro="We only list tools that are running in client engagements now."
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
        title="See Hexa Intelligence in a working engagement."
        body="We will walk you through the tools against your own process."
      />
    </>
  );
}
