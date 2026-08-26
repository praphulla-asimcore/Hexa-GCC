import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import InMarketPageTemplate from '@/components/in-market-page-template';

export const metadata: Metadata = {
  title: 'Immigration and Mobility | Hexa',
  description: 'Visas, work permits and relocation, end to end. The capability that makes cross-border teams possible rather than theoretical.',
};

export default function MobilityPage() {
  return (
    <main>
      <Header />
      <InMarketPageTemplate
        eyebrow="Immigration and mobility"
        title="Immigration and mobility"
        tagline="Visas, work permits and relocation, end to end. The capability that makes cross-border teams possible rather than theoretical."
        covered={[
          'Work visa and permit applications',
          'Sponsorship and employer registration where required',
          'Relocation logistics and settling-in support',
          'Dependent visa coordination',
          'Renewal and status tracking',
          'Exit and repatriation formalities',
        ]}
        whoItSuits={[
          { title: 'Cross-border transfer', description: 'Moving an existing employee from one entity or country to another.' },
          { title: 'Specialist hire abroad', description: 'The right candidate is not based in the country where the role sits.' },
          { title: 'Multi-country team', description: 'Building a team whose members hold different nationalities and work locations.' },
        ]}
        whatYouKeep="You decide who moves and when. We manage the application, the sponsorship administration and the relocation logistics required to get them there compliantly."
        steps={[
          { number: '01', week: 'Assess', title: 'Eligibility checked', description: 'Route, requirements and timeline confirmed against current immigration rules.', icon: 'clipboard-list' },
          { number: '02', week: 'Apply', title: 'Application prepared and filed', description: 'Documentation prepared, sponsorship arranged where required, and the application filed.', icon: 'file-signature' },
          { number: '03', week: 'Relocate', title: 'Relocation coordinated', description: 'Travel, accommodation and settling-in support arranged around the approved status.', icon: 'plane' },
          { number: '04', week: 'Maintain', title: 'Status maintained', description: 'Renewals, reporting and compliance tracked for the duration of the assignment.', icon: 'refresh-cw' },
        ]}
        markets="We hold direct presence in 8 markets and serve 13 in total. Immigration and mobility support is confirmed route by route against current rules in the markets involved."
      />
      <Footer />
      <StickyCTA />
    </main>
  );
}
