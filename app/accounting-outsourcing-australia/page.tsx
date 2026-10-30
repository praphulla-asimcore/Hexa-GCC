import AccountingLandingPage, { AccountingLandingContent } from '@/components/accounting-landing-page';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/accounting-outsourcing-australia',
  'Accounting Outsourcing for Australian Firms | Hexa',
  'Explore bookkeeping, reconciliation and close preparation support for Australian accounting firms, with agreed scope, review responsibilities and offshore delivery.');

const content: AccountingLandingContent = {
  path: '/accounting-outsourcing-australia', title: 'Accounting outsourcing for Australian firms',
  intro: 'Create capacity for recurring accounting work and deadline peaks. Discuss preparation support from Hexa’s Nepal delivery centre, working within your firm’s systems and review process.',
  audience: 'For practice partners and managers assessing how to delegate bookkeeping, reconciliations and close preparation while keeping client relationships and professional judgement with their firm. Start with a repeatable workflow that has a clear reviewer and acceptance criteria.',
  boundary: 'Scope depends on your clients, systems and review requirements. Australian tax advice, statutory sign-off and regulated services are not implied by preparation support. Confirm professional obligations and any registration requirements with your Australian advisers before assigning work.',
  scope: ['Bookkeeping preparation and ledger maintenance against your procedures', 'Bank and balance-sheet reconciliations with exceptions flagged for review', 'Accounts payable and receivable preparation and supporting schedules', 'Month-end and year-end working papers for your firm’s review', 'Audit preparation and document organisation within an agreed scope'],
  steps: [
    { title: 'Map the recurring work', body: 'Share the volume, deadlines, client mix and accounting platforms in use. Confirm which tasks can be delegated and which decisions stay with your firm. Do not transfer client data during initial scoping.' },
    { title: 'Define review and access', body: 'Agree permissions, document handling, working-hour overlap and reviewer responsibilities. Confirm platform experience and any training needed rather than assuming a particular software accreditation.' },
    { title: 'Review an initial work cycle', body: 'Set acceptance criteria for completeness, exceptions and turnaround. Review the initial output together before agreeing a wider workload or ongoing service levels.' },
  ],
  questions: [
    { question: 'Does outsourcing replace our Australian reviewer?', answer: 'Preparation support does not replace your firm’s professional responsibilities. Agree the review, approval and client communication steps explicitly, including any work that requires a locally qualified or registered professional.' },
    { question: 'Can the team work in our accounting software?', answer: 'Hexa’s delivery model works within client systems. Name the platforms and workflows during scoping so relevant experience, access requirements and training can be checked. Confirm any required software certifications and training before assigning the workload.' },
    { question: 'How should we assess cost?', answer: 'Compare a defined workload, review time, onboarding, supervision and continuity arrangements. Request a scoped proposal; a headline salary comparison alone does not establish the total cost of delivery.' },
  ],
};

export default function AustraliaAccountingPage() { return <AccountingLandingPage content={content} />; }
