import type { Metadata } from 'next';
import Header from '@/components/header';
import TechnologyDeliverySection from '@/components/technology-delivery-section';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'Hexa Technology | Product, Quality & Cloud Engineering Pods',
  description: 'Structured technology delivery pods for product engineering, quality engineering, cloud, DevOps, data, and automation — one tower of the Hexa operating model.',
};

export default function TechnologyPage() {
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
