import type { Metadata } from 'next';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ProofBarSection from '@/components/proof-bar-section';
import TrustSection from '@/components/trust-section';
import ThreeWaysSection from '@/components/three-ways-section';
import ClientLogosSection from '@/components/client-logos-section';
import CaseStudyStripSection from '@/components/case-study-strip-section';
import HexaAcademySection from '@/components/hexa-academy-section';
import RetentionGuaranteeSection from '@/components/retention-guarantee-section';
import MarketsExplorer from '@/components/markets-explorer';
import LeadForm from '@/components/lead-form';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'Hexa | One Partner, Every Market',
  description: 'Companies do not fail in Asia because Asia is hard. They fail because no single partner covers it. Hexa is the one partner who covers your market, our centres of excellence, and the strategy that comes before either. Established 2002.',
};

export default function GroupHomePage() {
  return (
    <main>
      <Header />
      <HeroSection
        eyebrow="One partner. Every market. Established 2002."
        heading="Companies do not fail in Asia because Asia is hard. They fail because no single partner covers it."
        subheading="Every market has its own lawyers, accountants, employment rules and vendors. We are the one partner who covers all of it, whether the work happens in your country, in ours, or has to be designed before it can happen at all."
        strapline={undefined}
        chips={undefined}
        primaryCta={{ label: 'Book a 20-minute consultation', href: 'https://www.hnpl.business/call', external: true, icon: 'calendar' }}
        secondaryCta={{ label: 'See how we work', href: '#three-ways', icon: 'arrow' }}
      />
      <ProofBarSection
        stats={[
          { to: 24, suffix: '', label: 'Years operating, established 2002' },
          { to: 50, suffix: '+', label: 'Enterprise and government clients' },
          { to: 8, suffix: '', label: 'Markets with direct presence' },
          { to: 13, suffix: '', label: 'Markets served' },
        ]}
      />
      <TrustSection />
      <ThreeWaysSection />
      <ClientLogosSection />
      <CaseStudyStripSection />
      <HexaAcademySection />
      <RetentionGuaranteeSection
        badge={undefined}
        eyebrow="Proven across disruption"
        heading="The years that test an operating partner are the ones nobody plans for."
        body="Pandemics, civil unrest and political instability across multiple markets. Through each, payroll continued, statutory obligations were met, personnel were moved where they needed to move, and clients were advised rather than left to work it out. Continuity is not a clause in our contracts. It is a record."
        footnote={undefined}
      />
      <MarketsExplorer />
      <LeadForm />
      <Footer />
      <StickyCTA />
    </main>
  );
}
