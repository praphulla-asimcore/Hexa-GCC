import type { Metadata } from 'next';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ProofBarSection from '@/components/proof-bar-section';
import IntentForkSection from '@/components/intent-fork-section';
import LadderSection from '@/components/ladder-section';
import CentresSection from '@/components/centres-section';
import RetentionGuaranteeSection from '@/components/retention-guarantee-section';
import OutcomesSection from '@/components/outcomes-section';
import ProcessSection from '@/components/process-section';
import IntelligenceLayerSection from '@/components/intelligence-layer-section';
import MarketsExplorer from '@/components/markets-explorer';
import TrustSection from '@/components/trust-section';
import LeadForm from '@/components/lead-form';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'Hexa | Shared Services Partner for Finance, Technology and People Operations',
  description: 'One shared services partner delivering finance, technology and people operations under one governance model. ISO 27001 and ISO 9001 certified. ACCA Approved Employer. Established 2002.',
};

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProofBarSection />
      <IntentForkSection />
      <LadderSection />
      <CentresSection />
      <RetentionGuaranteeSection />
      <OutcomesSection />
      <ProcessSection />
      <IntelligenceLayerSection />
      <MarketsExplorer />
      <TrustSection />
      <LeadForm />
      <Footer />
      <StickyCTA />
    </main>
  );
}
