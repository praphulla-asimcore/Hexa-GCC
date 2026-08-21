import type { Metadata } from 'next';
import Header from '@/components/header';
import PeopleTowerSection from '@/components/people-tower-section';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'Hexa People | Payroll, HR & Recruitment Operations',
  description: 'Multi-country payroll, onboarding & offboarding, HRIS administration, recruitment process support, and employee helpdesk — one tower of the Hexa operating model.',
};

export default function PeoplePage() {
  return (
    <main>
      <Header />
      <div className="h-20 bg-[#17171a]" />
      <PeopleTowerSection />
      <Footer />
      <StickyCTA />
    </main>
  );
}
