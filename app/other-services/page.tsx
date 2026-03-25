import Header from '@/components/header';
import OtherServicesSection from '@/components/other-services-section';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';

export const metadata = {
  title: 'Other Services | Hexa GCC',
  description: 'Additional finance services including outsourced accounting, dedicated accountants, tax compliance, remote CFO, staff augmentation, and financial analysis.',
};

export default function OtherServicesPage() {
  return (
    <main>
      <Header />
      {/* Spacer for fixed header */}
      <div className="h-20" />
      <OtherServicesSection />
      <Footer />
      <StickyCTA />
    </main>
  );
}
