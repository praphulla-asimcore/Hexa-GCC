import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import BriefToLiveSection from '@/components/brief-to-live-section';
import Day15ReadinessSection from '@/components/day-15-readiness-section';
import ReplacementWindowSection from '@/components/replacement-window-section';
import ProcessSection from '@/components/process-section';
import RetentionGuaranteeSection from '@/components/retention-guarantee-section';

export const metadata: Metadata = {
  title: 'How It Works | Hexa',
  description: 'Brief to live in 15 days, Day 15 readiness, a 5-7 day replacement window, and — for larger transitions — seven stages from discovery to steady-state governance.',
};

export default function HowItWorksPage() {
  return (
    <main>
      <Header />
      <div className="h-20 bg-white" />
      <BriefToLiveSection />
      <Day15ReadinessSection />
      <ReplacementWindowSection />
      <ProcessSection />
      <RetentionGuaranteeSection />
      <Footer />
      <StickyCTA />
    </main>
  );
}
