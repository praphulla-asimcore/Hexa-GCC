export interface ServiceData {
  id: string;
  title: string;
  icon: string;
  whatYouGet: string[];
  outputs: string[];
  impact: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: 'bookkeeping',
    title: 'Outsourced Accounting & Bookkeeping',
    icon: 'BookOpen',
    whatYouGet: [
      'Full-cycle bookkeeping with daily/weekly/monthly cadence',
      'Bank & credit card reconciliations',
      'AP/AR management with aging controls',
      'Intercompany transaction tracking',
      'Multi-currency & multi-entity support'
    ],
    outputs: [
      'Monthly close pack with trial balance',
      'Bank reconciliation statements',
      'AR/AP aging reports',
      'Journal entry schedules with documentation',
      'Intercompany reconciliation packs'
    ],
    impact: [
      'Month-end close reduced from 15 to 5-7 days',
      'Zero reconciliation backlogs',
      '100% audit-ready documentation',
      'Real-time visibility into cash position'
    ]
  },
  {
    id: 'remote-accountants',
    title: 'Dedicated Accountants + Audit Support',
    icon: 'Users',
    whatYouGet: [
      'Dedicated accountant assigned to your account',
      'Direct communication via Slack/Teams/Email',
      'Overlap hours with your timezone',
      'Cross-trained backup resources',
      'Scalable team during peak periods'
    ],
    outputs: [
      'Daily transaction processing',
      'Weekly reconciliation updates',
      'Monthly reporting packages',
      'Ad-hoc analysis on demand',
      'Audit support documentation'
    ],
    impact: [
      '40-60% cost savings vs local hires',
      'No recruitment or training overhead',
      'Continuity with backup resources',
      'Scale up/down based on workload'
    ]
  },
  {
    id: 'tax-compliance',
    title: 'Tax & Compliance',
    icon: 'Shield',
    whatYouGet: [
      'Country-specific tax preparation support',
      'Statutory filing documentation (GST, VAT, BAS, etc.)',
      'Payroll tax computations & schedules',
      'Withholding tax documentation',
      'Compliance calendar management'
    ],
    outputs: [
      'Tax provision schedules',
      'VAT/GST/SST return support workings',
      'Payroll tax computation sheets',
      'Withholding tax schedules (PPh 23, etc.)',
      'Compliance tracker with deadlines'
    ],
    impact: [
      'Zero missed filing deadlines',
      'Audit queries reduced by 50%+',
      'Tax authority penalty avoidance',
      'Clean compliance record maintained'
    ]
  },
  {
    id: 'remote-cfo',
    title: 'Remote CFO',
    icon: 'TrendingUp',
    whatYouGet: [
      'Strategic financial planning & analysis',
      'Cash flow forecasting & management',
      'Board/investor reporting packages',
      'KPI dashboards & variance analysis',
      'Financial strategy advisory'
    ],
    outputs: [
      'CFO dashboard with key metrics',
      '13-week cash flow forecasts',
      'Board presentation decks',
      'Budget vs actual variance reports',
      'Scenario planning models'
    ],
    impact: [
      'CFO-level insights at fraction of cost',
      'Data-driven decision making enabled',
      'Investor confidence improved',
      'Strategic visibility enhanced'
    ]
  },
  {
    id: 'staff-augmentation',
    title: 'Staff Augmentation',
    icon: 'UserPlus',
    whatYouGet: [
      'Skilled finance professionals on demand',
      'Flexible engagement models (FTE, part-time)',
      'Pre-vetted accountants & analysts',
      'Your tools, your processes',
      'Seamless integration with your team'
    ],
    outputs: [
      'Extended team capacity',
      'Project-based deliverables',
      'Peak period support',
      'Knowledge transfer documentation',
      'Process improvement recommendations'
    ],
    impact: [
      'Rapid scaling without HR overhead',
      'Cost-effective talent access',
      'Reduced burnout for core team',
      'Business continuity assured'
    ]
  },
  {
    id: 'financial-analysis',
    title: 'Financial Analysis & Modelling',
    icon: 'PieChart',
    whatYouGet: [
      'Financial model development',
      'Budgeting & forecasting support',
      'Unit economics analysis',
      'Investment analysis & due diligence support',
      'Custom reporting & dashboards'
    ],
    outputs: [
      '3-statement financial models',
      'Annual budget models',
      'Rolling forecasts',
      'Unit economics dashboards',
      'Investment memo support'
    ],
    impact: [
      'Fundraising readiness improved',
      'Strategic decisions backed by data',
      'Scenario planning enabled',
      'Stakeholder confidence increased'
    ]
  }
];
