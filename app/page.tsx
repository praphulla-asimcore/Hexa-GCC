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
import LeadForm from '@/components/lead-form';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'Hexa | Expand Across Asia With One Trusted Partner',
  description: 'Our integrated Asia operating platform brings together local compliance, finance, technology, talent and operations giving you one accountable system for launching, managing and scaling across markets. Established 2002.',
};

export default function GroupHomePage() {
  return (
    <main>
      <Header />
      <HeroSection
        eyebrow="One partner. Every market. Established 2002."
        heading="Expand across Asia with one trusted partner."
        subheading="Our integrated Asia operating platform brings together local compliance, finance, technology, talent and operations giving you one accountable system for launching, managing and scaling across markets."
        strapline="Local intelligence. AI-orchestrated execution. Regional scale."
        chips={undefined}
        primaryCta={{ label: 'Book a 20-minute consultation', href: 'https://www.hnpl.business/call', external: true, icon: 'calendar' }}
        secondaryCta={{ label: 'See how we work', href: '#three-ways', icon: 'arrow' }}
      />
      <ProofBarSection
        stats={[
          { to: 24, suffix: '', label: 'Years operating, established 2002' },
          { to: 1000, suffix: '+', label: 'Customers served' },
          { to: 10, suffix: '', label: 'Markets with direct presence' },
          { to: 12000, suffix: '+', label: 'Professionals deployed since 2002' },
        ]}
      />
      <ThreeWaysSection />
      <TrustSection />
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
      <LeadForm />
      <Footer />
      <StickyCTA />
    </main>
  );
}
