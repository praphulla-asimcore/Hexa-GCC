import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import InMarketPageTemplate from '@/components/in-market-page-template';

export const metadata: Metadata = {
  title: 'Business Support | Hexa',
  description: 'Legal support, corporate secretarial, local procurement, logistics, receivables management, workspaces and admin. The operational backbone that turns a workforce into a business.',
};

export default function BusinessSupportPage() {
  return (
    <main>
      <Header />
      <InMarketPageTemplate
        eyebrow="Business support"
        title="Business support"
        tagline="Legal support, corporate secretarial, local procurement, logistics, receivables management, workspaces and admin. The operational backbone that turns a workforce into a business."
        covered={[
          'Legal support and contract administration',
          'Corporate secretarial filings',
          'Local procurement',
          'Logistics coordination',
          'Receivables management',
          'Workspace sourcing and administration',
        ]}
        whoItSuits={[
          { title: 'Lean local footprint', description: 'A small local team without the administrative functions a full operation would normally carry.' },
          { title: 'Entity upkeep', description: 'A local entity exists but its ongoing secretarial and compliance filings need a reliable owner.' },
          { title: 'Operational overflow', description: 'Procurement, logistics or receivables work that has outgrown what the local team can absorb.' },
        ]}
        whatYouKeep="You keep the business decisions — what to buy, who to bill, where to work from. We keep the filings current, the vendors managed and the paperwork moving."
        steps={[
          { number: '01', week: 'Scope', title: 'Functions identified', description: 'Which functions to hand over, and to what standard, agreed up front.', icon: 'clipboard-list' },
          { number: '02', week: 'Set up', title: 'Vendors and filings taken on', description: 'Corporate secretarial filings, vendor relationships and workspace arrangements transferred or established.', icon: 'building' },
          { number: '03', week: 'Run', title: 'Operations handled', description: 'Procurement, logistics and receivables run to an agreed cadence.', icon: 'truck' },
          { number: '04', week: 'Review', title: 'Ongoing review', description: 'Regular review of scope and service as the local operation changes.', icon: 'refresh-cw' },
        ]}
        markets="We hold direct presence in 10 markets and serve 13 in total. Business support is scoped market by market against local requirements."
      />
      <Footer />
      <StickyCTA />
    </main>
  );
}
