import type { Metadata } from 'next';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import VerticalCountrySelector from '@/components/vertical-country-selector';
import ProcessSection from '@/components/process-section';
import TrustSection from '@/components/trust-section';
import LeadForm from '@/components/lead-form';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import CapabilitiesSection from '@/components/capabilities-section';
import OutcomesSection from '@/components/outcomes-section';
import IntelligenceTeaserSection from '@/components/intelligence-teaser-section';

export const metadata: Metadata = {
  title: 'Hexa | Capability Infrastructure for Growing Companies',
  description: 'Hexa builds and operates specialized finance and technology capabilities for companies scaling across markets.',
};

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CapabilitiesSection />
      <OutcomesSection />
      <ServicesSection />
      <IntelligenceTeaserSection />
      <VerticalCountrySelector />
      <ProcessSection />
      <TrustSection />
      <LeadForm />
      <Footer />
      <StickyCTA />
    </main>
  );
}
