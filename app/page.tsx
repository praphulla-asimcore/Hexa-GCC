import type { Metadata } from 'next';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import VerticalCountrySelector from '@/components/vertical-country-selector';
import ProcessSection from '@/components/process-section';
import TrustSection from '@/components/trust-section';
import LeadForm from '@/components/lead-form';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import OutcomesSection from '@/components/outcomes-section';
import IntelligenceTeaserSection from '@/components/intelligence-teaser-section';
import CaseStudiesSection from '@/components/case-studies-section';
import ProofIntentSection from '@/components/proof-intent-section';
import TowersSection from '@/components/towers-section';
import OperatingModelChassis from '@/components/operating-model-chassis';

export const metadata: Metadata = {
  title: 'Hexa | Finance, Technology & People Operations',
  description: 'Hexa runs finance, technology, and people operations for companies operating across borders — under one governance model, with one accountable owner.',
};

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProofIntentSection />
      <TowersSection />
      <section className="py-28 bg-[#f6f3ef] border-b border-[#ece9e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow mb-4">The Hexa Operating Model</p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-5">
              The machinery every tower shares.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Anyone can list services. What makes Hexa a shared services centre rather than a labour supplier
              is the operating model underneath — the same transition process, governance, and controls, whichever tower you start in.
            </p>
          </div>
          <OperatingModelChassis compact />
        </div>
      </section>
      <OutcomesSection />
      <CaseStudiesSection />
      <IntelligenceTeaserSection />
      <VerticalCountrySelector />
      <ProcessSection />
      <TrustSection />
      <LeadForm />
      <Footer />
      <StickyCTA />
    </main>
  );
}
