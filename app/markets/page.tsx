import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import MarketsHero from '@/components/markets-hero';
import MarketsExplorer from '@/components/markets-explorer';

export const metadata: Metadata = {
  title: 'Hexa Markets | 13 Countries — Malaysia, Singapore, Australia, UK, US and More',
  description: 'Thirteen markets covered — Malaysia, Singapore, Indonesia, Philippines, Australia, UK, USA, Canada, Nepal, Taiwan, Sri Lanka, Myanmar and Bangladesh — with statutory calendars, filings, and reporting standards for each.',
};

export default function MarketsPage() {
  return (
    <main>
      <Header />
      <MarketsHero />
      <MarketsExplorer />
      <Footer />
      <StickyCTA />
    </main>
  );
}
