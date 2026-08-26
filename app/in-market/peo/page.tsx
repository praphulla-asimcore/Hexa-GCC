import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import InMarketPageTemplate from '@/components/in-market-page-template';

export const metadata: Metadata = {
  title: 'Professional Employer Organisation | Hexa',
  description: 'Your own employees, our HR infrastructure. Payroll, benefits administration, statutory filings and employment compliance, run as a managed function alongside your team.',
};

export default function PeoPage() {
  return (
    <main>
      <Header />
      <InMarketPageTemplate
        eyebrow="Professional employer organisation"
        title="Professional employer organisation"
        tagline="Your own employees, our HR infrastructure. Payroll, benefits administration, statutory filings and employment compliance, run as a managed function alongside your team."
        covered={[
          'Payroll processing on your existing entity',
          'Benefits administration and enrolment',
          'Statutory filings and remittances',
          'Employment compliance monitoring',
          'HR policy and documentation support',
          'Employee record-keeping and reporting',
        ]}
        whoItSuits={[
          { title: 'Own entity, no HR team', description: 'You are incorporated locally but have not built out payroll or HR infrastructure yet.' },
          { title: 'Scaling headcount', description: 'Hiring is outpacing what a small internal HR function can administer accurately.' },
          { title: 'Compliance exposure', description: 'Statutory obligations are being tracked manually and the risk of a missed filing is rising.' },
        ]}
        whatYouKeep="The employment relationship stays with your entity. You keep the employer of record status, the direct relationship with your people, and full control of role, pay and performance decisions."
        steps={[
          { number: '01', week: 'Assess', title: 'Current state reviewed', description: 'Existing payroll, benefits and filings reviewed against statutory requirement.', icon: 'clipboard-list' },
          { number: '02', week: 'Configure', title: 'Infrastructure configured', description: 'Payroll, benefits and filing calendars set up on your entity.', icon: 'users' },
          { number: '03', week: 'Run', title: 'Payroll goes live', description: 'Payroll, filings and remittances run to a published statutory calendar.', icon: 'calculator' },
          { number: '04', week: 'Govern', title: 'Ongoing compliance', description: 'Continuous monitoring as regulation and rates change.', icon: 'shield-check' },
        ]}
        markets="We hold direct presence in 8 markets and serve 13 in total. Professional employer organisation coverage is confirmed market by market against current local employment law."
      />
      <Footer />
      <StickyCTA />
    </main>
  );
}
