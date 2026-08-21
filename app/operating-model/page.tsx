import type { Metadata } from 'next';
import Header from '@/components/header';
import OperatingModelContent from '@/components/operating-model-content';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'Hexa Operating Model | Transition, Governance & SLAs',
  description: 'The transition methodology, governance cadence, SLA framework, and controls common to every Hexa tower — live in 15 days from signing.',
};

export default function OperatingModelPage() {
  return (
    <main>
      <Header />
      <div className="h-20 bg-[#17171a]" />
      <OperatingModelContent />
      <Footer />
      <StickyCTA />
    </main>
  );
}
