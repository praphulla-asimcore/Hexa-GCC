import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import EmbeddedTeamContent from '@/components/embedded-team-content';

export const metadata: Metadata = {
  title: 'Hexa Embedded Team | A Function, Assembled',
  description: 'You direct the work. You own the output. Hexa finds, employs, houses, and keeps the people — a seniority ladder assembled to your requirement.',
};

export default function EmbeddedTeamPage() {
  return (
    <main>
      <Header />
      <EmbeddedTeamContent />
      <Footer />
      <StickyCTA />
    </main>
  );
}
