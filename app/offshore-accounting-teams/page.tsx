import AccountingLandingPage, { AccountingLandingContent } from '@/components/accounting-landing-page';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/offshore-accounting-teams',
  'Dedicated Offshore Accounting Teams | Hexa',
  'Explore a dedicated offshore accounting team for bookkeeping, reconciliations and reporting support. Compare client-directed capacity with a managed finance service.');

const content: AccountingLandingContent = {
  path: '/offshore-accounting-teams', title: 'Dedicated offshore accounting teams',
  intro: 'Add accounting capacity that follows your priorities, procedures and review standards. Hexa Support provides dedicated capacity from Nepal; you retain direction of the work.',
  audience: 'For finance leaders and accounting practices with an established workflow and more recurring work than the current team can absorb. Dedicated capacity fits when you can assign priorities, provide process context and review the output. A managed service may fit better when you want a provider to own an entire function.',
  boundary: 'Agree roles and experience against the actual workload. A dedicated team is not a substitute for your statutory decision-makers, authorised payment approvers or required professional sign-off. If your process needs redesign or several functions need their own leadership, discuss Delivery or Centre instead.',
  scope: ['Bookkeeping and general ledger support', 'Reconciliation preparation and exception tracking', 'Accounts payable and receivable workload support', 'Month-end schedules and management reporting preparation', 'Working-paper organisation and audit preparation'],
  steps: [
    { title: 'Design the roles', body: 'Separate recurring preparation from review and decision-making. Agree the skills, workload, supervision and working-hour overlap needed for each role.' },
    { title: 'Document the handover', body: 'Set up approved access, procedures, examples and a named reviewer. Define how queries and exceptions are escalated without sharing access beyond the agreed role.' },
    { title: 'Run a regular review', body: 'Review output, quality, backlog and continuity together. Adjust priorities through your team lead and agree changes to scope before adding new responsibilities.' },
  ],
  questions: [
    { question: 'Who manages a dedicated accounting team?', answer: 'With Hexa Support, you retain the process and direct priorities. Hexa provides capacity and internal quality review. Responsibilities, communication and escalation should be agreed before work begins.' },
    { question: 'How is this different from finance outsourcing?', answer: 'A dedicated team supplies capacity within your operating process. A managed finance service takes accountability for an agreed function and service levels. Compare Hexa Support with Hexa Delivery against the outcome you need.' },
    { question: 'What should we agree before onboarding?', answer: 'Define role scope, access, documented procedures, reviewers, deadlines and continuity arrangements. Confirm how work is handed over and how permissions are removed when a role changes or an engagement ends.' },
  ],
};

export default function OffshoreAccountingPage() { return <AccountingLandingPage content={content} />; }
