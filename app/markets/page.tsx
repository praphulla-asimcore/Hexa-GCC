import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import MarketsContent from '@/components/markets-content';

export const metadata: Metadata = {
  title: 'Hexa Markets | Malaysia, Singapore, Australia, Indonesia',
  description: 'Four markets in depth — Malaysia, Singapore, Australia, and Indonesia — with statutory calendars, filings, and reporting standards. Other jurisdictions supported on request.',
};

export default function MarketsPage() {
  return (
    <main>
      <Header />
      <MarketsContent />
      <Footer />
      <StickyCTA />
    </main>
  );
}
