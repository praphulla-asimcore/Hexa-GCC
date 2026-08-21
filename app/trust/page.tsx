import type { Metadata } from 'next';
import Header from '@/components/header';
import TrustPageContent from '@/components/trust-page-content';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'Hexa Trust & Security | ISO 27001, ISO 9001, Data Handling',
  description: 'ISO 27001, ISO 9001, and ACCA Approved Employer status, data residency architecture, access controls, SLAs, and facility continuity.',
};

export default function TrustPage() {
  return (
    <main>
      <Header />
      <div className="h-20 bg-[#17171a]" />
      <TrustPageContent />
      <Footer />
      <StickyCTA />
    </main>
  );
}
