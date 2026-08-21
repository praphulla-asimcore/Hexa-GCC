import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import ClientsContent from '@/components/clients-content';

export const metadata: Metadata = {
  title: 'Hexa Clients | Case Studies',
  description: 'Who Hexa works with, and the shape of the functions built for them.',
};

export default function ClientsPage() {
  return (
    <main>
      <Header />
      <ClientsContent />
      <Footer />
      <StickyCTA />
    </main>
  );
}
