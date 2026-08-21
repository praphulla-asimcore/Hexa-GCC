import type { Metadata } from 'next';
import Header from '@/components/header';
import WhyNepalContent from '@/components/why-nepal-content';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'Why Nepal | Hexa Delivery Centre',
  description: 'Timezone overlap, honest cost positioning, infrastructure specifics, and the talent case for Hexa\'s Kathmandu delivery centre.',
};

export default function WhyNepalPage() {
  return (
    <main>
      <Header />
      <div className="h-20 bg-[#17171a]" />
      <WhyNepalContent />
      <Footer />
      <StickyCTA />
    </main>
  );
}
