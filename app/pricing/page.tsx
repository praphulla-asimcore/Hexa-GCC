import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import PricingContent from '@/components/pricing-content';
import CostCalculatorSection from '@/components/cost-calculator-section';

export const metadata: Metadata = {
  title: 'Hexa Pricing | Tier-Based, Scoped on a Call',
  description: 'Fixed monthly fee per person, by tier. No percentage of salary, no generic bands — priced on a consultation call once we understand your countries and volume.',
};

export default function PricingPage() {
  return (
    <main>
      <Header />
      <PricingContent />
      <CostCalculatorSection />
      <Footer />
      <StickyCTA />
    </main>
  );
}
