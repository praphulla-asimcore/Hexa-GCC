import { Metadata } from 'next';
import Header from '@/components/header';
import AboutContent from './about-content';
import LeadForm from '@/components/lead-form';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'About Hexa | Established 2002',
  description: 'Hexa has operated since 2002. Three centres of excellence — finance, technology, and people — under one accountable owner.',
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div className="h-20 bg-[#080818]" />
      <AboutContent />
      <LeadForm />
      <Footer />
      <StickyCTA />
    </main>
  );
}
