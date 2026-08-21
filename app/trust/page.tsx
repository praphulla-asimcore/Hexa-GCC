import type { Metadata } from 'next';
import Header from '@/components/header';
import TrustPageContent from '@/components/trust-page-content';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'Hexa Trust & Security | ISO 27001, ISO 9001, Co-Employment Position',
  description: 'Certification, data residency, ownership model, published SLAs, professional indemnity cover, and the co-employment position for Hexa\'s embedded-team model.',
};

export default function TrustPage() {
  return (
    <main>
      <Header />
      <div className="h-20 bg-[#080818]" />
      <TrustPageContent />
      <Footer />
      <StickyCTA />
    </main>
  );
}
