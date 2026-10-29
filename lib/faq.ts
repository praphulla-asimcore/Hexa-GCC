// FAQ page copy (hexa-security-faq-pages.md, page 2).
// A question with `confirm` set has a fact still waiting for sign-off. It is shown
// with a review note on local and preview builds, left out of production and of the
// FAQPage structured data. Delete `confirm` once the answer has been checked.

import { ACCA_REF, FILE_ENCRYPTION_DEPLOYED, RETENTION } from '@/lib/site';

export type Faq = {
  question: string;
  answer: string;
  points?: { term: string; text: string }[];
  link?: { label: string; href: string };
  confirm?: string;
};

export type FaqCategory = {
  id: string;
  label: string;
  title: string;
  items: Faq[];
  more?: { label: string; href: string };
};

export const faqCategories: FaqCategory[] = [
  {
    id: 'getting-started',
    label: 'Getting started',
    title: 'Getting started',
    items: [
      {
        question: 'Who is Hexa for?',
        answer:
          'Growing companies in Australia, the UK, the US and Asia that need finance or technology work done well without building a team locally.',
      },
      {
        question: 'How do we start?',
        answer:
          'Book a 20-minute call. We’ll discuss your work, recommend a product, and send a proposal. Most clients start small and grow from there.',
      },
      {
        question: 'How quickly can a team be in place?',
        answer:
          'Typically [CONFIRM: X to Y weeks] from signed proposal to the first team member working, depending on role and seniority.',
        confirm: 'Time from signed proposal to the first team member working.',
      },
      {
        question: 'Is there a pilot option?',
        answer: 'Yes. Many clients start with one or two people on a defined scope before scaling.',
      },
    ],
  },
  {
    id: 'products',
    label: 'Products',
    title: 'Products and engagement models',
    items: [
      {
        question: 'What’s the difference between Hexa Support, Delivery and Centre?',
        answer: 'Each product sets how much of the work Hexa owns.',
        points: [
          { term: 'Hexa Support', text: 'Extra capacity you direct. You keep the process; we take the workload.' },
          { term: 'Hexa Delivery', text: 'We run a function to agreed service levels, and Hexa is accountable for quality.' },
          {
            term: 'Hexa Centre',
            text: 'Your own shared services centre, run by Hexa, with several functions, its own leadership and governance, under your brand.',
          },
        ],
      },
      {
        question: 'Can we move between products?',
        answer:
          'Yes. That’s how the model is designed. Start with Support and move to Delivery or Centre as trust and scope grow, without changing partner.',
      },
      {
        question: 'Do we manage the team, or do you?',
        answer: 'In Support, you direct day-to-day work. In Delivery and Centre, Hexa manages the team and answers to you for results.',
      },
    ],
  },
  {
    id: 'finance',
    label: 'Finance',
    title: 'Finance and accounting services',
    items: [
      {
        question: 'What finance work do you take on?',
        answer:
          'Record-to-report, procure-to-pay, order-to-cash, payroll and statutory compliance, month-end close, consolidation and audit support.',
      },
      {
        question: 'Which accounting systems do your teams use?',
        answer: '[CONFIRM: list of systems]. We work in your system, not ours.',
        confirm: 'List of accounting systems, e.g. Xero, MYOB, QuickBooks, NetSuite, Zoho Books, SAP.',
      },
      {
        question: 'Do you understand our country’s accounting and tax rules?',
        answer:
          'Our teams work to the standards and rules of the markets our clients operate in. Hexamatics Group has operated across 10 markets since 2002.',
      },
      {
        question: 'Are your accountants qualified?',
        answer: `Our finance team includes qualified and part-qualified professionals, and Hexa is an ACCA Approved Employer (ref ${ACCA_REF}).`,
      },
    ],
  },
  {
    id: 'technology',
    label: 'Technology',
    title: 'Technology services',
    items: [
      {
        question: 'What technology work do you take on?',
        answer:
          'Product engineering, QA and test automation, cloud and DevOps, managed support, data pipelines, analytics and automation.',
      },
      {
        question: 'Do your engineers work in our codebase and tools?',
        answer: 'Yes. They join your repositories, pipelines and tools, and work to your standards and roadmap.',
      },
      {
        question: 'Can you provide technical leadership, not just developers?',
        answer: 'Yes, through Hexa Centre, which includes technical leadership for an end-to-end product stream.',
      },
    ],
  },
  {
    id: 'people',
    label: 'People',
    title: 'People and team',
    items: [
      {
        question: 'How do you hire for our team?',
        answer: 'We recruit for your specific roles, and you interview and approve the final candidates.',
        confirm: 'Hiring process, including whether clients interview and approve final candidates.',
      },
      {
        question: 'What’s your staff retention?',
        answer: `${RETENTION} team retention in FY26. People stay, so knowledge of your work stays.`,
      },
      {
        question: 'What happens if someone leaves?',
        answer: 'Our replacement guarantee covers it, and documented procedures keep the handover smooth.',
      },
      {
        question: 'Will our team be dedicated to us?',
        answer: 'Yes. Team members are dedicated to your work, not shared across clients.',
        confirm: 'That team members are dedicated, not shared, on Hexa Support as well as Delivery and Centre.',
      },
    ],
  },
  {
    id: 'security',
    label: 'Security',
    title: 'Security and data',
    more: { label: 'Read more about how we protect your data', href: '/security' },
    items: [
      {
        question: 'Does our data ever sit on Hexa systems?',
        answer: FILE_ENCRYPTION_DEPLOYED
          ? 'Not by default. Work happens in your systems. If a working copy is needed, it’s encrypted and covered by the same revocation and logging.'
          : 'Not by default. Work happens in your systems. If a working copy is needed, it can be protected with persistent file encryption, so you can log and revoke access to it.',
      },
      {
        question: 'Who can see our files?',
        answer: 'Only the named team members you approve. Every access to a protected file is logged.',
      },
      {
        question: 'What happens when someone leaves the team?',
        answer: 'Their system access is removed and file access can be revoked the same day.',
      },
      {
        question: 'What happens at the end of an engagement?',
        answer:
          'We return or delete your data as your contract specifies, and you can revoke every protected file from your own console.',
      },
      {
        question: 'Can we audit your controls?',
        answer: 'Yes. We share our ISO 27001 certificate and security brief, and we’ll complete your security questionnaire.',
      },
      {
        question: 'What certifications do you hold?',
        answer: 'ISO 27001 (information security) and ISO 9001 (quality).',
      },
      {
        question: 'Is file encryption included?',
        answer: '[CONFIRM: e.g. included in Hexa Delivery and Hexa Centre, optional for Hexa Support]',
        confirm: 'Which products include persistent file encryption.',
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing',
    title: 'Pricing and contracts',
    items: [
      {
        question: 'How is pricing structured?',
        answer:
          'Usually a monthly fee per team member, based on role and seniority. Delivery and Centre engagements can be priced on scope and service levels.',
        confirm: 'Pricing structure for each product.',
      },
      {
        question: 'What does the price include?',
        answer: 'Salary, benefits, statutory costs, workspace, equipment and management.',
        confirm: 'What the fee includes.',
      },
      {
        question: 'What’s the minimum commitment and notice period?',
        answer: '[CONFIRM: minimum term and notice period]',
        confirm: 'Minimum term and notice period.',
      },
      {
        question: 'What currency do you invoice in?',
        answer:
          'You are invoiced by Hexamatics Nepal and pay by international bank transfer in your choice of currency, including US dollars, Australian dollars and Malaysian ringgit.',
      },
    ],
  },
  {
    id: 'nepal',
    label: 'Nepal',
    title: 'Why Nepal and working hours',
    items: [
      {
        question: 'Why is your delivery centre in Nepal?',
        answer:
          'Kathmandu has a deep pool of accounting and technology graduates, strong English skills and lower costs than most offshore locations.',
        link: { label: 'See the Why Nepal page for details', href: '/why-nepal' },
      },
      {
        question: 'How do working hours line up with ours?',
        answer:
          'Nepal (UTC+5:45) overlaps well with Australian business afternoons and UK mornings. For the US, work is briefed at the end of your day and returned by your next morning.',
      },
      {
        question: 'What about power, internet and continuity?',
        answer:
          'The delivery centre runs on two independent networks that fail over automatically, with its own backup power. When the centre cannot be used, the team works from home, covered by our data loss prevention system, as it did in September 2025 with every deliverable met. Through pandemics and disruption across several markets, payroll continued and filings were met.',
      },
    ],
  },
  {
    id: 'platform',
    label: 'Platform',
    title: 'Hexa Intelligence platform',
    items: [
      {
        question: 'What is Hexa Intelligence?',
        answer:
          'Our in-house apps. From month 3 of an engagement, our own engineers build apps to your needs: automation, checks and reporting that make your operation faster, more controlled and easier to run.',
        link: { label: 'See the apps', href: '/hexa-intelligence' },
      },
      {
        question: 'Does it cost extra?',
        answer: 'No. Hexa Intelligence apps are included in every product, from month 3 of an engagement.',
      },
      {
        question: 'Does it access or store our data?',
        answer: '[CONFIRM: how the platform handles client data]',
        confirm: 'How Hexa Intelligence apps access and store client data. Security reviewers will ask, so it must be exact.',
      },
    ],
  },
];

// Plain text of an answer, for the FAQPage structured data.
export function faqText(item: Faq) {
  const points = item.points?.map((p) => `${p.term}: ${p.text}`) ?? [];
  return [item.answer, ...points].join(' ');
}
