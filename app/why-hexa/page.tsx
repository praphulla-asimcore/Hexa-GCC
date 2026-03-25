import { Metadata } from 'next';
import Header from '@/components/header';
import TrustSection from '@/components/trust-section';
import ComparisonSection from '@/components/comparison-section';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import WhyHexaContent from './why-hexa-content';

export const metadata: Metadata = {
  title: 'Why Hexa | Hexa GCC - Finance & Accounting Global Capability Center',
  description: 'Discover why Hexa GCC is the right choice for your finance operations. Learn about our Nepal advantage, differentiators, and trust guarantees.',
};

export default function WhyHexaPage() {
  return (
    <main>
      <Header />
      {/* Spacer for fixed header */}
      <div className="h-20" />
      <WhyHexaContent />
      <TrustSection />
      <ComparisonSection />
      <Footer />
      <StickyCTA />
    </main>
  );
}
