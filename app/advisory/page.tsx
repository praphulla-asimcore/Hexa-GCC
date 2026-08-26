import { Metadata } from 'next';
import { Map, Scale, Cpu } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import SectionHero from '@/components/section-hero';
import TiltCard from '@/components/tilt-card';

export const metadata: Metadata = {
  title: 'Advisory | Design the Operation Before You Build It',
  description: 'Market entry and structuring, regulatory and corporate restructuring, and technology, automation and management consulting. Advisory that is designed to survive contact with the work.',
};

const cards = [
  {
    icon: Map,
    title: 'Market entry and structuring',
    description: 'Entity structuring, licensing pathway and go-to-market sequencing for a new market, worked out before the first hire or the first filing.',
  },
  {
    icon: Scale,
    title: 'Regulatory and corporate restructuring',
    description: 'Ownership, licensing and reporting lines redesigned to meet a new regulatory requirement, or to correct a structure that has outgrown its original design.',
  },
  {
    icon: Cpu,
    title: 'Technology, automation and management consulting',
    description: 'Process design, systems selection and automation roadmaps, advised and planned against your operating reality rather than sold as an off-the-shelf platform.',
  },
];

export default function AdvisoryPage() {
  return (
    <main>
      <Header />
      <SectionHero
        eyebrow="Advisory"
        title="Design the operation before you build it."
        tagline="Advisory without execution is incomplete. We design the approach and then deliver it, which means the recommendation has to survive contact with the work."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 divide-x divide-y md:divide-y-0 divide-gray-200 border border-gray-200 rounded-xl overflow-hidden bg-white">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="p-8 hover:bg-[#fffafd] transition-colors">
                  <div className="w-11 h-11 bg-[#080818] rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-4">Case study</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">A regulatory restructuring engagement</h2>
          <TiltCard className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="inline-block text-[10px] font-semibold uppercase tracking-[.12em] px-2.5 py-1 rounded bg-[#ffe9f4] text-[#8d0d51]">
                Financial services
              </span>
              <span className="inline-block text-[10px] font-semibold uppercase tracking-[.12em] px-2.5 py-1 rounded bg-gray-100 text-gray-600">
                Southeast Asia
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A multi-entity restructuring to bring group ownership, licensing and reporting lines into
              alignment with a new regulatory requirement across the client&apos;s operating markets.
              Delivered as a phased restructuring plan, executed alongside the client&apos;s own legal and
              finance teams.
            </p>
          </TiltCard>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </main>
  );
}
