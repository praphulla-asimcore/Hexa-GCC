import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import ResourcesContent from '@/components/resources-content';

export const metadata: Metadata = {
  title: 'Hexa Resources | Operating Model, Compliance Calendars, Cost Model',
  description: 'The operating model, market compliance calendars, and a cost comparison model — email address only.',
};

export default function ResourcesPage() {
  return (
    <main>
      <Header />
      <ResourcesContent />
      <Footer />
      <StickyCTA />
    </main>
  );
}
