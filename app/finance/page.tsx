import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import CentrePageTemplate from '@/components/centre-page-template';

export const metadata: Metadata = {
  title: 'Hexa Finance | Accounting, Compliance and Reporting',
  description: 'A finance function assembled to your requirement — bookkeeping, compliance, audit support, analysis, and reporting, employed by Hexa and directed by you.',
};

export default function FinancePage() {
  return (
    <main>
      <Header />
      <CentrePageTemplate
        eyebrow="Centre of excellence"
        title="A finance function, assembled to your requirement."
        tagline="Accounting and bookkeeping, compliance, auditors, analysts, and financial reporting — named professionals, employed by us, directed by you."
        covered={[
          'Accounting and bookkeeping',
          'Compliance and statutory support',
          'Audit support',
          'Financial analysis',
          'Financial reporting',
          'Management accounting',
        ]}
        rolesByTier={[
          { tier: 'Junior', role: 'Bookkeeper', description: 'Daily execution — transaction processing, reconciliations, first-line delivery.' },
          { tier: 'Mid', role: 'Management accountant', description: 'Review, control, and reporting across the function.' },
          { tier: 'Senior', role: 'Financial controller', description: 'Judgement, exceptions, and escalation on complex matters.' },
          { tier: 'Executive', role: 'Finance director', description: 'Direction and board-facing work.' },
        ]}
        qualifications="ICAN, ACCA, CPA, and CA qualified professionals."
        systems={['QuickBooks', 'Xero', 'NetSuite', 'SAP', 'Excel / Sheets']}
        exampleTitle="A worked example"
        exampleDescription="A growing company typically needs a junior at full-time execution, a manager reviewing at a fraction of their time, a senior specialist handling exceptions at a smaller fraction, and an executive advising occasionally. We assemble that shape to your actual requirement."
      />
      <Footer />
      <StickyCTA />
    </main>
  );
}
