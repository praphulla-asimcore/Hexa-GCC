import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import CostComparisonDocument from '@/components/cost-comparison-document';

export const metadata: Metadata = {
  title: 'Hexa Cost Comparison Model | Downloadable',
  description: 'A downloadable, market-by-market comparison of Hexa\'s all-in price against a fully-loaded local hire, by tier.',
};

export default function CostComparisonPage() {
  return (
    <main>
      <div className="print:hidden">
        <Header />
      </div>
      <CostComparisonDocument />
      <div className="print:hidden">
        <Footer />
        <StickyCTA />
      </div>
    </main>
  );
}
