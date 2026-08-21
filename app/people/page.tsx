import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import CentrePageTemplate from '@/components/centre-page-template';

export const metadata: Metadata = {
  title: 'Hexa People | Payroll, HRIS and Recruitment Support',
  description: 'A people-operations function assembled to your requirement — multi-country payroll, HRIS administration, recruitment support, and employee case management, employed by Hexa and directed by you.',
};

export default function PeoplePage() {
  return (
    <main>
      <Header />
      <CentrePageTemplate
        eyebrow="Centre of excellence"
        title="A people-operations function, assembled to your requirement."
        tagline="Multi-country payroll, HRIS administration, recruitment support, onboarding and offboarding, and employee case management — named professionals, employed by us, directed by you."
        covered={[
          'Multi-country payroll operations',
          'HRIS administration',
          'Recruitment process support',
          'Onboarding and offboarding',
          'Employee case management',
          'Records and documentation',
        ]}
        rolesByTier={[
          { tier: 'Junior', role: 'Payroll / HR coordinator', description: 'Daily execution — payroll processing, records, first-line delivery.' },
          { tier: 'Mid', role: 'HR / payroll manager', description: 'Review, control, and reporting across the function.' },
          { tier: 'Senior', role: 'People operations lead', description: 'Judgement, exceptions, and escalation on complex cases.' },
          { tier: 'Executive', role: 'HR director', description: 'Direction and leadership-facing work.' },
        ]}
        qualifications="HR and payroll professionals qualified against each market's statutory requirements."
        systems={['Your HRIS and payroll systems', 'Applicant tracking tools you already use']}
        exampleTitle="A worked example"
        exampleDescription="A growing company typically needs a coordinator at full-time execution, a manager reviewing at a fraction of their time, a people-ops lead handling exceptions at a smaller fraction, and a director advising occasionally. We assemble that shape to your actual requirement."
      />
      <Footer />
      <StickyCTA />
    </main>
  );
}
