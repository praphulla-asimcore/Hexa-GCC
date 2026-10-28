// Single source for site facts, navigation and page content.
// Every figure here must be verified against a source before it goes live
// (website plan v1.1, section 6).

export const SITE_URL = 'https://gcc.hexabusiness.com';
export const BOOKING_URL = 'https://calendar.app.google/eq4mJvdvNWXjK5du8';
export const CONTACT_EMAIL = 'praphulla@hexamatics.com';
export const WHATSAPP_URL = 'https://wa.me/9779851338099';

export const GROUP_MARKET_COUNT = 10;
export const RETENTION = '89.2%';
export const ACCA_REF = '2000003846';

export type NavLink = { label: string; href: string; description?: string };

export type ProductSlug = 'support' | 'delivery' | 'centre';

export type Product = {
  slug: ProductSlug;
  name: string;
  href: string;
  promise: string;
  definition: string;
  navLine: string;
  financeExample: string;
  technologyExample: string;
};

export const products: Product[] = [
  {
    slug: 'support',
    name: 'Hexa Support',
    href: '/support',
    promise: 'Extra capacity, working your way.',
    definition: 'Extra capacity you direct. You keep the process, we take the workload.',
    navLine: 'Extra capacity you direct',
    financeExample: 'Bookkeeping, reconciliations, AP and AR',
    technologyExample: 'Bug fixing, QA and application support',
  },
  {
    slug: 'delivery',
    name: 'Hexa Delivery',
    href: '/delivery',
    promise: 'A function run for you, to agreed service levels.',
    definition: 'A function we run to agreed service levels, with Hexa accountable for quality.',
    navLine: 'A function run to agreed service levels',
    financeExample: 'Full record-to-report, close, tax and payroll compliance',
    technologyExample: 'Feature delivery inside your product team',
  },
  {
    slug: 'centre',
    name: 'Hexa Centre',
    href: '/centre',
    promise: 'Your own shared services centre, without building one.',
    definition:
      'Your own shared services centre, run by Hexa: several functions, own leadership, governance, your brand.',
    navLine: 'Your own shared services centre, run by Hexa',
    financeExample: 'R2R, P2P and O2C, consolidation and an audit bench',
    technologyExample: 'An end-to-end product stream with technical leadership',
  },
];

export type ProcessArea = { name: string; description: string };

export type Tower = {
  slug: 'finance' | 'technology';
  name: string;
  href: string;
  navLine: string;
  promise: string;
  areas: ProcessArea[];
};

export const finance: Tower = {
  slug: 'finance',
  name: 'Finance & Accounting',
  href: '/finance',
  navLine: 'Record-to-report, payables, receivables, payroll and tax',
  promise: 'Finance operations that close on time and stand up to review.',
  areas: [
    { name: 'Record-to-Report', description: 'Bookkeeping, reconciliations, month-end close and financial reporting.' },
    { name: 'Procure-to-Pay', description: 'Supplier invoices, expense claims, vendor records and payment runs.' },
    { name: 'Order-to-Cash', description: 'Billing, accounts receivable, cash application and collections follow-up.' },
    { name: 'Payroll and Statutory Compliance', description: 'Payroll processing, statutory deductions, filings and payroll journals.' },
    { name: 'Tax Compliance', description: 'Indirect and corporate tax workings, filing preparation and supporting schedules.' },
    { name: 'Audit Support', description: 'Working papers, schedules and audit preparation for accounting firms and their clients.' },
    { name: 'FP&A and Management Reporting', description: 'Management packs, budget against actual, forecasts and board reporting.' },
  ],
};

export const technology: Tower = {
  slug: 'technology',
  name: 'Technology',
  href: '/technology',
  navLine: 'Engineering, QA, cloud, data and application support',
  promise: 'Engineering capacity that ships inside your product, to your standards.',
  areas: [
    { name: 'Product Engineering', description: 'Web, mobile and platform features built in your codebase, against your roadmap.' },
    { name: 'QA and Test Automation', description: 'Test planning, manual testing and automation suites wired into your pipelines.' },
    { name: 'Cloud, DevOps and Managed Support', description: 'Infrastructure, CI/CD, monitoring and support to agreed response times.' },
    { name: 'Data, Analytics and AI Automation', description: 'Data pipelines, dashboards and automation of repeat operational work.' },
    { name: 'Application Maintenance and Support', description: 'Bug fixing, minor enhancements and support for the applications you run.' },
  ],
};

export const towers = [finance, technology];

export const included = [
  { name: 'Secure workspace', description: 'A controlled delivery centre with dual-network failover and backup power.' },
  { name: 'ISO 27001 controls', description: 'Information security controls certified to ISO 27001, applied to every engagement.' },
  { name: 'Hexa Intelligence apps', description: 'In-house apps built by our engineers around your process, from month 3.' },
  { name: 'Quality review', description: 'Work is reviewed inside Hexa before it reaches you.' },
  { name: 'Replacement guarantee', description: 'If someone leaves, we replace them and run the handover.' },
  { name: 'Monthly governance report', description: 'Output, quality, risks and continuity, reported every month.' },
];

export const navigation: { label: string; href?: string; items?: NavLink[] }[] = [
  {
    label: 'Products',
    items: products.map((p) => ({ label: p.name, href: p.href, description: p.navLine })),
  },
  {
    label: 'Services',
    items: towers.map((t) => ({ label: t.name, href: t.href, description: t.navLine })),
  },
  { label: 'Platform', href: '/hexa-intelligence' },
  { label: 'Case Studies', href: '/case-studies' },
  {
    label: 'About',
    items: [
      { label: 'About Hexa', href: '/about', description: 'Group story, credentials and controls' },
      { label: 'Why Nepal', href: '/why-nepal', description: 'Our primary delivery centre in Kathmandu' },
    ],
  },
];

export type CaseStudy = {
  id: string;
  tower: 'Finance' | 'Technology' | 'Workforce';
  market: string;
  clientType: string;
  title: string;
  problem: string;
  built: string;
  result: string;
  duration: string;
};

// Starting set from the plan (section 4.5). Anonymised, no size references.
export const caseStudies: CaseStudy[] = [
  {
    id: 'australian-software',
    tower: 'Technology',
    market: 'Australia',
    clientType: 'Software company, Sydney',
    title: 'Technology delivery centre built and run for an Australian software company',
    problem:
      'A lean product company needed more build capacity across engineering, data and QA without slowing its roadmap or expanding its local overheads.',
    built:
      'A dedicated technology delivery capability working full time in the client’s stack: product engineering, test automation, data and supporting finance back-office work, all backed by a replacement guarantee.',
    result: 'Capacity has grown in step with the roadmap, with the client adding new workstreams over time.',
    duration: 'Two years, ongoing',
  },
  {
    id: 'global-technology',
    tower: 'Technology',
    market: 'Global',
    clientType: 'Global technology company',
    title: 'Technology delivery centre built and operated for a global technology client',
    problem: 'The client wanted a dedicated delivery centre of its own without setting one up from scratch.',
    built:
      'Hexa designed, built and ran a customised delivery centre, including corporate structures, workspace and workforce.',
    result: 'A centre operated continuously to the client’s requirements for five years.',
    duration: 'Five years',
  },
  {
    id: 'cybersecurity',
    tower: 'Technology',
    market: 'International',
    clientType: 'Cybersecurity company',
    title: 'Cybersecurity engineering capability stood up within twelve months',
    problem: 'The client needed an engineering capability in a new location, quickly, without creating a standalone legal entity.',
    built: 'A development team and a working engineering facility, operated under Hexa’s entity and governance.',
    result: 'Engineering capability live within twelve months, with no standalone legal entity required.',
    duration: 'Twelve months to stand up',
  },
  {
    id: 'malaysia-accounting',
    tower: 'Finance',
    market: 'Malaysia',
    clientType: 'Accounting and audit firms',
    title: 'Audit support for accounting firms in Malaysia',
    problem:
      'Malaysian accounting firms facing audit workloads that peak around statutory deadlines, with engagement teams stretched across clients.',
    built:
      'Audit support delivered from our Kathmandu delivery centre: working papers, lead schedules, reconciliations and audit preparation, completed inside each firm’s own systems and signed off through its own review process.',
    result: 'Firms take on peak-season audit work on schedule, with preparation handled before their engagement teams start fieldwork.',
    duration: 'Ongoing',
  },
  {
    id: 'public-sector',
    tower: 'Workforce',
    market: 'Public sector',
    clientType: 'National public sector programme',
    title: 'Workforce platform for a national public sector programme',
    problem: 'A mission-critical public programme needed a workforce operation run under strict payroll governance and statutory compliance.',
    built: 'A managed workforce platform covering payroll, statutory compliance and governance reporting.',
    result: 'Continuous operation of a mission-critical programme for almost five years.',
    duration: 'Almost five years',
  },
];

export const featuredCaseIds = ['australian-software', 'global-technology', 'malaysia-accounting'];

// Client logos from Uploads/. Written permission confirmed for each (plan, section 4.5).
export const clientLogos = [
  { name: 'GuardWare', src: '/clients/guardware.png', width: 480, height: 122 },
  { name: 'Kudos', src: '/clients/kudos.png', width: 448, height: 240 },
  { name: 'Emit Solar', src: '/clients/emit-solar.png', width: 361, height: 183 },
  { name: 'Seven Sunday Films', src: '/clients/seven-sunday-films.png', width: 436, height: 121 },
  { name: 'Datacrats', src: '/clients/datacrats.png', width: 402, height: 126 },
];

// Only apps in client use today (plan, section 4.4). Add or remove entries here.
export const liveTools = [
  {
    name: 'HexaInsights',
    area: 'Multi-entity reporting',
    description:
      'Multi-entity profit and loss, balance sheet, cash flow and receivables ageing, with CFO-level executive summaries. IAS 21 compliant for multi-currency groups.',
  },
  {
    name: 'HexaComply',
    area: 'Compliance tracking',
    description:
      'Compliance tracking across group entities: deadlines monitored, documents held in one place and audit-ready reporting on what has been filed and what is due.',
  },
];
