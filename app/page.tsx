import type { Metadata } from 'next';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import PainPointsSection from '@/components/pain-points-section';
import ServicesSection from '@/components/services-section';
import VerticalCountrySelector from '@/components/vertical-country-selector';
import ProcessSection from '@/components/process-section';
import TrustSection from '@/components/trust-section';
import ComparisonSection from '@/components/comparison-section';
import CaseStudiesSection from '@/components/case-studies-section';
import LeadForm from '@/components/lead-form';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'Hexa GCC | From Execution to Accountability',
  description: 'Nepal-based Finance & Accounting GCC delivering country-specific finance operations with compliance confidence across Singapore, Malaysia, Indonesia, Philippines, UK, USA, Australia, and Canada.',
};

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <PainPointsSection />
      <ServicesSection />
      <VerticalCountrySelector />
      <ProcessSection />
      <TrustSection />
      <ComparisonSection />
      <CaseStudiesSection />
      <LeadForm />
      <Footer />
      <StickyCTA />
    </main>
  );
}
