import Header from '@/components/header';
import { FinanceIntelligenceSection } from '@/components/finance-intelligence-section';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';

export const metadata = {
  title: 'Hexa Finance Intelligence™ | Hexa GCC',
  description: 'AI-powered finance tools developed by Hexa. AI Accounting Copilot, Compliance Intelligence Engine, Risk Radar, and Audit Defense Assistant.',
};

export default function FinanceIntelligencePage() {
  return (
    <main>
      <Header />
      {/* Spacer for fixed header */}
      <div className="h-20" />
      <FinanceIntelligenceSection />
      <Footer />
      <StickyCTA />
    </main>
  );
}
