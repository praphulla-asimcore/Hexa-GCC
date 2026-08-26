import { Metadata } from 'next';
import { Compass, FileSignature, TrendingUp, Building2 } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import SectionHero from '@/components/section-hero';
import CapabilityCard from '@/components/capability-card';
import type { IconKey } from '@/lib/icon-map';

export const metadata: Metadata = {
  title: 'In Your Market | Employ, Operate and Comply Where You Already Are',
  description: 'You have people in-country, or you are about to. Hexa becomes the employment, compliance and operational layer underneath them: employer of record, PEO, RPO, immigration and mobility, and business support.',
};

const services: { icon: IconKey; name: string; description: string; href: string }[] = [
  {
    icon: 'file-check',
    name: 'Employer of record',
    description: 'We become the legal employer of your chosen people in-country. You direct the work. We hold the contract, run payroll, meet statutory obligations and carry the employment risk.',
    href: '/in-market/eor',
  },
  {
    icon: 'user-cog',
    name: 'Professional employer organisation',
    description: 'Your own employees, our HR infrastructure. Payroll, benefits administration, statutory filings and employment compliance, run as a managed function alongside your team.',
    href: '/in-market/peo',
  },
  {
    icon: 'users',
    name: 'RPO',
    description: 'Sourcing, screening, interview coordination and offer administration, run as a process rather than as a series of one-off searches.',
    href: '/in-market/rpo',
  },
  {
    icon: 'plane',
    name: 'Immigration and mobility',
    description: 'Visas, work permits and relocation, end to end. The capability that makes cross-border teams possible rather than theoretical.',
    href: '/in-market/mobility',
  },
  {
    icon: 'building',
    name: 'Business support',
    description: 'Legal support, corporate secretarial, local procurement, logistics, receivables management, workspaces and admin. The operational backbone that turns a workforce into a business.',
    href: '/in-market/business-support',
  },
];

const whenYouNeedThis = [
  {
    icon: Compass,
    title: 'Market exploration',
    description: 'Entering a market for the first time and needing advisory, legal and workforce infrastructure before there is an entity.',
  },
  {
    icon: FileSignature,
    title: 'Pre-incorporation',
    description: 'Business won in a country where you are not yet incorporated, and delivery cannot wait for the entity.',
  },
  {
    icon: TrendingUp,
    title: 'Growing operation',
    description: 'Established in-country and deliberately staying lean, with employment, admin and finance support handled outside.',
  },
  {
    icon: Building2,
    title: 'Established entity',
    description: 'Scaled operation looking to consolidate suppliers and reduce the cost and risk of running multiple vendors.',
  },
];

export default function InMarketLandingPage() {
  return (
    <main>
      <Header />
      <SectionHero
        eyebrow="In your market"
        title="Employ, operate and comply where you already are."
        tagline="You have people in-country, or you are about to. We become the employment, compliance and operational layer underneath them, so you can run the business rather than the paperwork."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden bg-white">
            {services.map((service, index) => (
              <CapabilityCard
                key={service.name}
                icon={service.icon}
                badgeLabel="In your market"
                name={service.name}
                description={service.description}
                href={service.href}
                linkLabel="Read more"
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f7f7fa] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">When you need this</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
              Four situations, one operational layer.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whenYouNeedThis.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="h-full bg-white border border-gray-200 rounded-xl p-6 hover:border-[#E6007E]/40 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-[#080818] flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2.5">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-800 border-l-2 border-[#E6007E] pl-4">
            Without the operational layer, the team exists but cannot execute.
          </p>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </main>
  );
}
