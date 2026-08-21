import type { Metadata } from 'next';
import Header from '@/components/header';
import EngagementModelsSection from '@/components/engagement-models-section';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'Hexa Engagement Models | Managed Service, Dedicated Pod, BOT',
  description: 'Three ways to engage Hexa: managed service, dedicated pod, or build-operate-transfer — increasing commitment, from a defined scope to a centre you can eventually own.',
};

export default function EngagementModelsPage() {
  return (
    <main>
      <Header />
      <div className="h-20 bg-[#17171a]" />
      <EngagementModelsSection />
      <Footer />
      <StickyCTA />
    </main>
  );
}
