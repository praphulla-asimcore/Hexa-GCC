import { Metadata } from 'next';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import PainPointsSection from '@/components/pain-points-section';
import LeadForm from '@/components/lead-form';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'About Us | Hexa GCC - Finance & Accounting Global Capability Center',
  description: 'Learn about Hexa GCC - Nepal-based Finance & Accounting Global Capability Center serving 8 countries with country-specific compliance expertise.',
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <PainPointsSection />
      <LeadForm />
      <Footer />
      <StickyCTA />
    </main>
  );
}
