import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import HexaIntelligenceContent from '@/components/hexa-intelligence-content';

export const metadata: Metadata = {
  title: 'Hexa Intelligence | Our In-House Business Intelligence & Automation Platform',
  description: 'APEX, HexaInsights, HexaComply, Hexa SmartLedger and HexaCoPilot — five systems built in-house and running in production across every Hexa centre, at 99.9% uptime.',
};

export default function HexaIntelligencePage() {
  return (
    <main>
      <Header />
      <HexaIntelligenceContent />
      <Footer />
      <StickyCTA />
    </main>
  );
}
