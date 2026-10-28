import type { ProductSlug } from '@/lib/site';

export type ServicePageContent = {
  metaTitle: string;
  metaDescription: string;
  subline: string;
  fit: { product: ProductSlug; need: string; example: string }[];
  controls: { title: string; items: string[] }[];
  caseId: string;
};

export const serviceContent: Record<'finance' | 'technology', ServicePageContent> = {
  finance: {
    metaTitle: 'Finance and Accounting Shared Services',
    metaDescription:
      'Record-to-report, procure-to-pay, order-to-cash, payroll, tax, audit support and FP&A, run as Hexa Support, Hexa Delivery or a Finance Centre.',
    subline:
      'Bookkeeping to group reporting, run inside your systems with review built in. For CFOs, finance directors and accounting firm partners.',
    fit: [
      {
        product: 'support',
        need: 'You have a working process and need more capacity.',
        example: 'A UK accounting firm sends bookkeeping overflow during peak season.',
      },
      {
        product: 'delivery',
        need: 'You want close, tax and payroll delivered on a calendar.',
        example: 'A growing company hands over record-to-report and its monthly close pack.',
      },
      {
        product: 'centre',
        need: 'You run finance across several entities or markets.',
        example: 'A Singapore group moves R2R, P2P and O2C into one centre with its own leadership.',
      },
    ],
    controls: [
      {
        title: 'Tools',
        items: [
          'Your accounting platform, ERP and document stores. We work in your systems, not ours.',
          'Hexa Intelligence apps for multi-entity reporting and compliance tracking, built in-house to your needs.',
        ],
      },
      {
        title: 'Standards',
        items: [
          'IFRS and local GAAP reporting',
          'Statutory requirements per entity and country',
          'Documented procedures and checklists for every process',
        ],
      },
      {
        title: 'Controls',
        items: [
          'Maker-checker review on reconciliations and close',
          'Access through your controls, with session logging',
          'ISO 27001 and ISO 9001 certified operations',
          'ACCA Approved Employer',
        ],
      },
    ],
    caseId: 'malaysia-accounting',
  },
  technology: {
    metaTitle: 'Technology Shared Services: Engineering, QA, Cloud and Data',
    metaDescription:
      'Product engineering, QA and test automation, cloud and DevOps, data and AI automation, and application support, run as Hexa Support, Hexa Delivery or a Technology Centre.',
    subline:
      'Engineering, QA, cloud and data work delivered inside your product team. For CTOs, VPs of Engineering and heads of product.',
    fit: [
      {
        product: 'support',
        need: 'Your team needs more capacity on bugs, tests and tickets.',
        example: 'A product team clears its bug and test backlog without pausing roadmap work.',
      },
      {
        product: 'delivery',
        need: 'You want a stream of work run to agreed service levels.',
        example: 'An Australian SaaS company has its QA and releases run to SLA.',
      },
      {
        product: 'centre',
        need: 'You want an end-to-end product stream with its own technical leadership.',
        example: 'A software company has a full delivery centre built and run under its brand.',
      },
    ],
    controls: [
      {
        title: 'Tools',
        items: [
          'Your repositories, ticketing, CI/CD and cloud accounts',
          'Your communication channels and working rhythms',
        ],
      },
      {
        title: 'Standards',
        items: [
          'Your coding standards and definition of done',
          'Code review on every change',
          'Automated tests in the pipeline where the stack allows',
        ],
      },
      {
        title: 'Controls',
        items: [
          'Least-privilege access through your identity provider',
          'Client code and data stay in your environments',
          'ISO 27001 and ISO 9001 certified operations',
        ],
      },
    ],
    caseId: 'australian-software',
  },
};
