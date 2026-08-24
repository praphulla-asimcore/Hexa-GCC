import type { Metadata } from 'next';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ProofBarSection from '@/components/proof-bar-section';
import IntentForkSection from '@/components/intent-fork-section';
import LadderSection from '@/components/ladder-section';
import CentresSection from '@/components/centres-section';
import BuildRunImproveTransferSection from '@/components/build-run-improve-transfer-section';
import HexaAcademySection from '@/components/hexa-academy-section';
import RetentionGuaranteeSection from '@/components/retention-guarantee-section';
import DecisionHierarchySection from '@/components/decision-hierarchy-section';
import ProcessSection from '@/components/process-section';
import ImprovementLayerSection from '@/components/improvement-layer-section';
import MarketsExplorer from '@/components/markets-explorer';
import WhyHereSection from '@/components/why-here-section';
import TrustSection from '@/components/trust-section';
import LeadForm from '@/components/lead-form';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'Hexa | Dedicated Capability Centres for Finance, Technology and People',
  description: 'Your dedicated capability centre. You choose the people and own the IP. We handle talent, employment, infrastructure, security and retention, and continuously improve productivity through process expertise and automation. ISO 27001 and ISO 9001 certified. ACCA Approved Employer. Established 2002.',
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
      <BuildRunImproveTransferSection />
      <HexaAcademySection />
      <RetentionGuaranteeSection />
      <DecisionHierarchySection />
      <ProcessSection />
      <ImprovementLayerSection />
      <MarketsExplorer />
      <WhyHereSection />
      <TrustSection />
      <LeadForm />
      <Footer />
      <StickyCTA />
    </main>
  );
}
