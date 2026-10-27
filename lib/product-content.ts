import type { ProductSlug } from '@/lib/site';

export type ProductPageContent = {
  metaDescription: string;
  whoFor: string[];
  whatYouGet: string[];
  ownership: { you: string; hexa: string };
  finance: { title: string; items: string[] };
  technology: { title: string; items: string[] };
  serviceLevels: string[];
  next:
    | { kind: 'move-up'; title: string; body: string; href: string; label: string }
    | { kind: 'options'; options: { title: string; body: string }[] };
};

export const productContent: Record<ProductSlug, ProductPageContent> = {
  support: {
    metaDescription:
      'Hexa Support adds capacity you direct to your finance or technology team. You keep the process, we take the workload, with quality review and a replacement guarantee.',
    whoFor: [
      'Finance teams and accounting firms with more work than hands, especially around close, year end and filing deadlines.',
      'Engineering teams with a growing backlog of bugs, tests and support tickets.',
      'Companies with a process that works and needs to be followed, not redesigned.',
    ],
    whatYouGet: [
      'Dedicated capacity working in your systems, to your procedures and your priorities.',
      'A named Hexa lead who reviews work before it reaches you.',
      'Continuity: if someone leaves, we replace them and run the handover.',
    ],
    ownership: {
      you: 'You direct the work, set priorities and own the outcome.',
      hexa: 'Hexa owns the quality of the work, the working environment and continuity of the people doing it.',
    },
    finance: {
      title: 'Finance Support',
      items: [
        'Bookkeeping and bank reconciliations in your ledger',
        'Accounts payable and receivable processing',
        'Expense coding and month-end schedules',
        'Peak-season overflow for accounting firms',
      ],
    },
    technology: {
      title: 'Technology Support',
      items: [
        'Bug fixing against your backlog and priorities',
        'Manual and automated testing in your pipelines',
        'Application support and ticket triage',
        'Release checks and documentation',
      ],
    },
    serviceLevels: [
      'Agreed working hours and response times',
      'Weekly check-in with your Hexa lead',
      'Quality review on work before it reaches you',
      'Monthly governance report on output, quality and continuity',
    ],
    next: {
      kind: 'move-up',
      title: 'Ready to hand over the outcome?',
      body: 'Move to Hexa Delivery when you want a function run to agreed service levels instead of directed task by task. The people who know your work stay with it.',
      href: '/delivery',
      label: 'See Hexa Delivery',
    },
  },
  delivery: {
    metaDescription:
      'Hexa Delivery runs a finance or technology function for you to agreed service levels, with Hexa accountable for quality. Close, compliance, QA and feature delivery.',
    whoFor: [
      'Finance leaders who want close, compliance and reporting delivered on a calendar, not chased.',
      'Product and engineering leaders who want a defined stream of work delivered to an agreed standard.',
      'Companies that would rather measure results than manage tasks.',
    ],
    whatYouGet: [
      'A defined scope, written as a service description with service levels.',
      'A Hexa delivery lead accountable for the result, with review built into the process.',
      'Documented procedures, so the function never depends on one person.',
    ],
    ownership: {
      you: 'You own the decisions, approvals and priorities.',
      hexa: 'Hexa owns delivery of the function to the agreed service levels, and is accountable for quality.',
    },
    finance: {
      title: 'Finance Delivery',
      items: [
        'Full record-to-report, from transactions to the monthly close pack',
        'Tax compliance and filing preparation',
        'Payroll and statutory compliance',
        'Management reporting on an agreed calendar',
      ],
    },
    technology: {
      title: 'Technology Delivery',
      items: [
        'Feature delivery inside your product team and roadmap',
        'QA and test automation run to your release criteria',
        'Cloud, DevOps and managed support to agreed response times',
        'Data pipelines and reporting maintained to agreed standards',
      ],
    },
    serviceLevels: [
      'Service levels written into the agreement: close calendar, filing deadlines, release criteria, response times',
      'Monthly service review against those levels',
      'Quarterly business review on scope, risk and improvement',
      'Documented escalation path to Hexa leadership',
    ],
    next: {
      kind: 'move-up',
      title: 'Running several functions with us?',
      body: 'Move to Hexa Centre when you want several functions run as one centre, with its own leadership and governance, under your brand.',
      href: '/centre',
      label: 'See Hexa Centre',
    },
  },
  centre: {
    metaDescription:
      'Hexa Centre is your own Finance, Technology or Blended shared services centre, run by Hexa with its own leadership and governance. Build-Operate-Transfer available.',
    whoFor: [
      'Groups running finance or technology across several entities or markets.',
      'Companies that want their own capability centre without setting up an entity, office and leadership team abroad.',
      'Leaders who may want to own the centre outright in the long term.',
    ],
    whatYouGet: [
      'Several functions run as one centre, with its own leadership and governance.',
      'A centre that works under your brand, to your policies, in your systems.',
      'A Build-Operate-Transfer option if you want to own it later.',
    ],
    ownership: {
      you: 'You set direction and decide priorities through a joint governance board.',
      hexa: 'Hexa builds and runs the centre and is accountable for its performance against the centre charter.',
    },
    finance: {
      title: 'Finance Centre',
      items: [
        'Record-to-report, procure-to-pay and order-to-cash run as one function',
        'Group consolidation and multi-entity reporting',
        'Audit bench and year-end support',
        'FP&A and management reporting',
      ],
    },
    technology: {
      title: 'Technology Centre',
      items: [
        'An end-to-end product stream with technical leadership',
        'Engineering, QA, DevOps and data under one roadmap',
        'Architecture and code standards aligned to yours',
        'Maintenance for the platforms you already run',
      ],
    },
    serviceLevels: [
      'Centre charter covering scope, service levels and decision rights',
      'Joint governance board with monthly reviews',
      'Quarterly business review and an annual centre plan',
      'Security, quality and continuity controls under ISO 27001 and ISO 9001',
    ],
    next: {
      kind: 'options',
      options: [
        {
          title: 'Build-Operate-Transfer',
          body: 'We build the centre, run it until it is stable, then transfer it to you with its people, processes and documentation, on terms agreed at the start.',
        },
        {
          title: 'Blended Centre',
          body: 'Finance and Technology in one centre, under one leadership and governance model. Useful when your back office and product team share systems, data and decisions.',
        },
      ],
    },
  },
};
