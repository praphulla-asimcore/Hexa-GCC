import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import InMarketPageTemplate from '@/components/in-market-page-template';

export const metadata: Metadata = {
  title: 'Employer of Record | Hexa',
  description: 'We become the legal employer of your chosen people in-country. You direct the work. We hold the contract, run payroll, meet statutory obligations and carry the employment risk.',
};

export default function EorPage() {
  return (
    <main>
      <Header />
      <InMarketPageTemplate
        eyebrow="Employer of record"
        title="Employer of record"
        tagline="We become the legal employer of your chosen people in-country. You direct the work. We hold the contract, run payroll, meet statutory obligations and carry the employment risk."
        covered={[
          'Local employment contracts, drafted to statutory requirement',
          'Payroll processing and statutory remittances',
          'Statutory benefits administration',
          'Tax withholding and filing on the employee’s behalf',
          'Termination and offboarding handled to local law',
          'Ongoing compliance monitoring as regulation changes',
        ]}
        whoItSuits={[
          { title: 'Testing a market', description: 'Hiring one or a few people in a country before deciding whether to incorporate.' },
          { title: 'No local entity', description: 'Committed to the market but the entity is not yet formed.' },
          { title: 'Time-sensitive hire', description: 'A candidate is ready to start before incorporation could realistically complete.' },
        ]}
        whatYouKeep="You direct the work, set the role, and manage performance day to day. We hold the employment contract, the statutory relationship and the compliance risk that sits underneath it."
        steps={[
          { number: '01', week: 'Scope', title: 'Role and country confirmed', description: 'Role, country and start date checked against local employment law before anything is issued.', icon: 'clipboard-list' },
          { number: '02', week: 'Contract', title: 'Employment contract issued', description: 'Drafted to statutory requirement, in the local language where required.', icon: 'file-signature' },
          { number: '03', week: 'Onboard', title: 'Payroll and benefits set up', description: 'Statutory registrations, payroll and benefits in place before day one.', icon: 'user-plus' },
          { number: '04', week: 'Operate', title: 'Ongoing administration', description: 'Payroll, compliance and employment administration, with a named point of contact.', icon: 'refresh-cw' },
        ]}
        markets="We hold direct presence in 10 markets and serve 13 in total. Employer of record coverage is confirmed market by market against current local employment law."
      />
      <Footer />
      <StickyCTA />
    </main>
  );
}
