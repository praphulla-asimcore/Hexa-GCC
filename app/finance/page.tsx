import { Metadata } from 'next';
import Header from '@/components/header';
import FinanceTowerSection from '@/components/finance-tower-section';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'Hexa Finance | Record to Report, Procure to Pay, Order to Cash',
  description: 'Full-cycle finance operations run by CA, ACCA, and CPA-qualified professionals — bookkeeping, tax & statutory compliance, FP&A, and Remote CFO.',
};

export default function FinancePage() {
  return (
    <main>
      <Header />
      <FinanceTowerSection />
      <Footer />
      <StickyCTA />
    </main>
  );
}
