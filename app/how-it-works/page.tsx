import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import ProcessSection from '@/components/process-section';
import RetentionGuaranteeSection from '@/components/retention-guarantee-section';

export const metadata: Metadata = {
  title: 'How It Works | Hexa',
  description: 'Seven stages from discovery to steady-state governance — selection, immersion, employment, and retention, with a published timeline and a named owner at each stage.',
};

export default function HowItWorksPage() {
  return (
    <main>
      <Header />
      <div className="h-20 bg-white" />
      <ProcessSection />
      <RetentionGuaranteeSection />
      <Footer />
      <StickyCTA />
    </main>
  );
}
