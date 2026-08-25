import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import HexaAcademyContent from '@/components/hexa-academy-content';

export const metadata: Metadata = {
  title: 'Hexa Academy | Structured Training for Shortlist Gaps',
  description: 'When a review identifies a gap between what your work needs and what the team holds, Hexa Academy closes it through structured training across market/standard, systems, applied AI and leadership.',
};

export default function HexaAcademyPage() {
  return (
    <main>
      <Header />
      <HexaAcademyContent />
      <Footer />
      <StickyCTA />
    </main>
  );
}
