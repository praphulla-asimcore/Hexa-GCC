import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import InMarketPageTemplate from '@/components/in-market-page-template';

export const metadata: Metadata = {
  title: 'RPO | Hexa',
  description: 'Sourcing, screening, interview coordination and offer administration, run as a process rather than as a series of one-off searches.',
};

export default function RpoPage() {
  return (
    <main>
      <Header />
      <InMarketPageTemplate
        eyebrow="RPO"
        title="RPO"
        tagline="Sourcing, screening, interview coordination and offer administration, run as a process rather than as a series of one-off searches."
        covered={[
          'Role scoping and candidate profile definition',
          'Sourcing across local and regional channels',
          'Screening and shortlisting against your criteria',
          'Interview coordination and scheduling',
          'Reference checks',
          'Offer administration and negotiation support',
        ]}
        whoItSuits={[
          { title: 'Repeated hiring', description: 'Filling the same class of role often enough that a repeatable process outperforms one-off searches.' },
          { title: 'No local recruiter', description: 'Hiring in a market where you have no in-house recruitment capability.' },
          { title: 'Volume hiring', description: 'Building out a team or function and need candidates moving through a pipeline, not a queue.' },
        ]}
        whatYouKeep="You make every hiring decision. Shortlists, interview outcomes and offer terms are yours to approve at each stage — we run the process, you run the decision."
        steps={[
          { number: '01', week: 'Scope', title: 'Role and criteria defined', description: 'Profile, must-haves and process steps agreed and documented.', icon: 'clipboard-list' },
          { number: '02', week: 'Source', title: 'Sourcing and screening', description: 'Candidates sourced and screened against the agreed profile.', icon: 'search' },
          { number: '03', week: 'Interview', title: 'Interviews coordinated', description: 'Scheduling, logistics and reference checks handled end to end.', icon: 'calendar-check' },
          { number: '04', week: 'Offer', title: 'Offer administered', description: 'Offer prepared, issued and tracked through to acceptance.', icon: 'file-signature' },
        ]}
        markets="We hold direct presence in 10 markets and serve 13 in total. RPO draws on local and regional sourcing channels in each."
      />
      <Footer />
      <StickyCTA />
    </main>
  );
}
