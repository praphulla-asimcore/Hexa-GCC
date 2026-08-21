import type { Metadata } from 'next';
import Header from '@/components/header';
import TechnologyDeliverySection from '@/components/technology-delivery-section';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'Technology Delivery | Hexa',
  description: 'Structured technology delivery pods for product engineering, quality engineering, cloud, DevOps, data, and automation.',
};

export default function TechnologyDeliveryPage() {
  return (
    <main>
      <Header />
      <div className="h-20 bg-[#17171a]" />
      <TechnologyDeliverySection />
      <Footer />
      <StickyCTA />
    </main>
  );
}
