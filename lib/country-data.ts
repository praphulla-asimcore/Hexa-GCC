export interface MonthlyChecklist {
  payroll: string[];
  indirect: string[];
  corporate: string[];
}

export interface MiniCase {
  title: string;
  challenge: string;
  result: string;
}

export interface CountryData {
  code: string;
  name: string;
  flag: string;
  scope: string[];
  compliance: string[];
  standards: string;
  deliverables: string[];
  personas: string[];
  confidence: string[];
  monthlyChecklist: MonthlyChecklist;
  templates: string[];
  mistakesPrevented: string[];
  miniCase: MiniCase;
}

export const countryData: Record<string, CountryData> = {
  SG: {
    code: 'SG',
    name: 'Singapore',
    flag: '🇸🇬',
    scope: [
      'Full-cycle bookkeeping & month-end close',
      'CPF computations & support documentation',
      'IRAS-aligned tax preparation workflows',
      'GST compliance support & reconciliations',
      'Corporate tax support preparation',
      'Multi-entity consolidation'
    ],
    compliance: [
      'CPF (Central Provident Fund) payroll computations',
      'IRAS corporate tax support & preparation',
      'GST/VAT-style compliance documentation',
      'ACRA regulatory readiness support',
      'Transfer pricing documentation support'
    ],
    standards: 'IFRS/FRS-aligned reporting packs with Singapore Financial Reporting Standards compliance',
    deliverables: [
      'Monthly close pack with full reconciliations',
      'CPF computation schedules & working files',
      'GST return support workings',
      'Corporate tax provision schedules',
      'Audit-ready workpapers & schedules',
      'Management reporting dashboards',
      'Intercompany reconciliation packs',
      'AR/AP aging analysis'
    ],
    personas: [
      'Singapore startups scaling from 1 to multiple entities',
      'Regional HQs needing consolidated reporting',
      'Tech companies with complex revenue recognition',
      'SMEs requiring audit-ready financials'
    ],
    confidence: [
      'Audit-ready documentation every month',
      'On-time CPF & GST submissions support',
      'Clean reconciliations with zero open items',
      'Full visibility into financial position'
    ],
    monthlyChecklist: {
      payroll: [
        'CPF contribution calculation & reconciliation',
        'SDL (Skills Development Levy) computation',
        'Payroll journal entries posted',
        'Leave accrual reconciliation',
        'Director fee accruals (if applicable)'
      ],
      indirect: [
        'GST F5/F7 return preparation support',
        'Input tax claim verification',
        'GST reconciliation to GL',
        'Bad debt relief tracking',
        'Reverse charge assessment'
      ],
      corporate: [
        'Estimated Chargeable Income (ECI) tracking',
        'Tax provision computation',
        'Withholding tax schedules',
        'Transfer pricing documentation updates',
        'ACRA filing readiness check'
      ]
    },
    templates: [
      'CPF Computation Template (OW/AW caps)',
      'GST Return Workpaper (F5)',
      'Monthly Close Checklist',
      'Bank Reconciliation Template',
      'Intercompany Reconciliation Pack',
      'Tax Provision Schedule',
      'Audit Schedule Templates (PBC list ready)'
    ],
    mistakesPrevented: [
      'CPF cap breaches on Additional Wages',
      'GST input claims on blocked expenses',
      'Missing director fee CPF contributions',
      'Incorrect foreign worker levy treatment',
      'Late ECI filing penalties',
      'Unreconciled intercompany balances at year-end'
    ],
    miniCase: {
      title: 'SaaS Startup Scaling to 3 Entities',
      challenge: 'Month-end taking 18 days, GST errors flagged by IRAS, no visibility on consolidated cash position',
      result: 'Close reduced to 6 days, zero GST findings in 2 years, real-time consolidated dashboard'
    }
  },
  MY: {
    code: 'MY',
    name: 'Malaysia',
    flag: '🇲🇾',
    scope: [
      'Full bookkeeping & monthly close',
      'SST compliance support (where applicable)',
      'EPF, SOCSO, EIS support documentation',
      'LHDN-aligned tax preparation',
      'E-invoicing readiness support',
      'Multi-branch consolidation'
    ],
    compliance: [
      'SST (Sales & Service Tax) support workings',
      'EPF (Employees Provident Fund) computations',
      'SOCSO & EIS statutory documentation',
      'LHDN corporate tax preparation support',
      'E-invoicing compliance readiness'
    ],
    standards: 'MFRS/MPERS-aligned reporting with Malaysian Financial Reporting Standards',
    deliverables: [
      'Monthly close pack with reconciliations',
      'SST return support calculations',
      'EPF/SOCSO/EIS payroll schedules',
      'Tax computation schedules (LHDN-aligned)',
      'E-invoicing readiness documentation',
      'Management accounts & dashboards',
      'Intercompany transaction tracking',
      'Cash flow forecasting models'
    ],
    personas: [
      'Regional HQs fixing SST & month-end delays',
      'Manufacturing companies with complex inventory',
      'Shared services centers',
      'E-commerce businesses with SST obligations'
    ],
    confidence: [
      'SST-ready workings every submission period',
      'Statutory payroll documentation complete',
      'E-invoicing transition support ready',
      'LHDN audit-ready schedules'
    ],
    monthlyChecklist: {
      payroll: [
        'EPF contribution calculation (employer + employee)',
        'SOCSO contribution computation',
        'EIS (Employment Insurance) deductions',
        'PCB (Monthly Tax Deduction) calculation',
        'Payroll journal entries & reconciliation'
      ],
      indirect: [
        'SST-02 return preparation support',
        'SST exemption documentation',
        'E-invoicing validation & mapping',
        'Import duty tracking',
        'Service tax scope review'
      ],
      corporate: [
        'CP204 estimated tax tracking',
        'Tax provision computation',
        'Withholding tax (Section 109) schedules',
        'Transfer pricing compliance check',
        'LHDN query response readiness'
      ]
    },
    templates: [
      'EPF Borang A Workpaper',
      'SOCSO/EIS Computation Template',
      'SST Return Reconciliation Pack',
      'PCB Calculation Schedule',
      'E-Invoice Mapping Template',
      'Monthly Close Checklist (MY)',
      'Tax Provision Schedule'
    ],
    mistakesPrevented: [
      'EPF contribution rate errors (age-based)',
      'SST on exempt services charged incorrectly',
      'PCB underpayment penalties',
      'Missing withholding tax on foreign payments',
      'E-invoice validation failures',
      'SOCSO/EIS rate misapplication'
    ],
    miniCase: {
      title: 'Regional HQ with SST Chaos',
      challenge: 'SST returns consistently late, EPF discrepancies flagged, month-end taking 20+ days',
      result: 'SST filed on D+5, zero EPF variances, close reduced to 8 days with documented SOPs'
    }
  },
  ID: {
    code: 'ID',
    name: 'Indonesia',
    flag: '🇮🇩',
    scope: [
      'Full-cycle bookkeeping in IDR',
      'PPh 21 payroll tax computations',
      'PPh 23/PPh 4(2) withholding support',
      'PPN (VAT) reconciliation & support',
      'BPJS statutory documentation',
      'Multi-entity local reporting'
    ],
    compliance: [
      'PPh 21 (employee income tax) computations',
      'PPh 23 (withholding tax) documentation',
      'PPh 4(2) (final tax) support',
      'PPN (VAT) reconciliation to sales',
      'BPJS Kesehatan & Ketenagakerjaan support'
    ],
    standards: 'PSAK-aligned reporting with Indonesian Financial Accounting Standards',
    deliverables: [
      'Monthly close pack with full recons',
      'PPh 21 calculation sheets & working files',
      'PPh 23/4(2) withholding schedules',
      'PPN reconciliation to sales register',
      'BPJS computation documentation',
      'e-Faktur support preparation',
      'Tax provision schedules',
      'Management reporting in IDR & USD'
    ],
    personas: [
      'Entities needing PPh21 + BPJS + payroll journals',
      'Manufacturing with complex withholding',
      'Tech startups with employee stock options',
      'Trading companies with PPN complexity'
    ],
    confidence: [
      'Documented calculation sheets with review layer',
      'On-time statutory filing support',
      'Clean reconciliation between tax & books',
      'DJP audit-ready documentation'
    ],
    monthlyChecklist: {
      payroll: [
        'PPh 21 calculation (TER method applied)',
        'PTKP status verification',
        'BPJS Kesehatan contribution computation',
        'BPJS Ketenagakerjaan (JKK, JKM, JHT, JP)',
        'Payroll journal posting & reconciliation'
      ],
      indirect: [
        'PPN reconciliation to sales register',
        'e-Faktur upload & validation',
        'Input PPN claim verification',
        'PPN wapu documentation',
        'Import PPN tracking'
      ],
      corporate: [
        'PPh 25 installment tracking',
        'PPh 23/26 withholding schedules',
        'PPh 4(2) final tax computation',
        'Tax provision reconciliation',
        'DJP query response documentation'
      ]
    },
    templates: [
      'PPh 21 Monthly Calculation Template',
      'PTKP Status Tracker',
      'BPJS Contribution Workpaper',
      'e-Faktur Reconciliation Pack',
      'PPh 23/4(2) Withholding Schedule',
      'Monthly Close Checklist (ID)',
      'Tax Equalization Template'
    ],
    mistakesPrevented: [
      'PTKP status changes missed mid-year',
      'PPh 21 TER vs non-TER method errors',
      'BPJS ceiling calculation mistakes',
      'e-Faktur rejection due to NPWP issues',
      'PPh 23 under-withholding on services',
      'PPN input claims on non-creditable items'
    ],
    miniCase: {
      title: 'Manufacturing Entity with Withholding Complexity',
      challenge: 'PPh 21 errors every month, BPJS penalties, e-Faktur rejections causing DJP queries',
      result: 'Zero PPh 21 corrections, BPJS reconciled monthly, e-Faktur 100% accepted rate'
    }
  },
  PH: {
    code: 'PH',
    name: 'Philippines',
    flag: '🇵🇭',
    scope: [
      'Full bookkeeping & month-end close',
      'BIR compliance support preparation',
      'Withholding tax documentation',
      'VAT support & reconciliations',
      'SSS, PhilHealth, Pag-IBIG support',
      'SEC reporting support'
    ],
    compliance: [
      'BIR (Bureau of Internal Revenue) compliance support',
      'Withholding tax (expanded & compensation)',
      'VAT compliance documentation',
      'SSS (Social Security System) computations',
      'PhilHealth & Pag-IBIG statutory support'
    ],
    standards: 'PFRS-aligned reporting with Philippine Financial Reporting Standards',
    deliverables: [
      'Monthly close pack with reconciliations',
      'BIR form preparation support (2307, 2316)',
      'VAT reconciliation schedules',
      'SSS/PhilHealth/Pag-IBIG computation sheets',
      'Monthly compliance tracker',
      'Audit-ready schedules & workpapers',
      'Management accounts & variance analysis',
      'Cash position reporting'
    ],
    personas: [
      'BPO companies with large payroll',
      'Shared services centers',
      'E-commerce with VAT complexity',
      'Real estate with withholding requirements'
    ],
    confidence: [
      'Reconciliation packs ready for review',
      'Monthly compliance tracker maintained',
      'Audit-ready schedules always current',
      'Full statutory documentation on file'
    ],
    monthlyChecklist: {
      payroll: [
        'Withholding tax on compensation calculation',
        'SSS contribution computation (employee + employer)',
        'PhilHealth premium computation',
        'Pag-IBIG (HDMF) contribution calculation',
        '13th month pay accrual tracking'
      ],
      indirect: [
        'VAT output/input reconciliation',
        'BIR 2550M/2550Q preparation support',
        'Percentage tax tracking (if applicable)',
        'Expanded withholding tax schedules',
        'Final withholding tax documentation'
      ],
      corporate: [
        'MCIT vs regular corporate tax comparison',
        'Quarterly ITR preparation support',
        'BIR 1702Q workpapers',
        'Tax credit monitoring',
        'SEC GISMIS readiness check'
      ]
    },
    templates: [
      'SSS/PhilHealth/Pag-IBIG Computation Template',
      'BIR 2307 Summary Schedule',
      'VAT Relief Reconciliation Pack',
      'Expanded Withholding Tax Register',
      'Monthly Compliance Tracker',
      'Alphalist Preparation Template',
      'Annual ITR Support Workpapers'
    ],
    mistakesPrevented: [
      'SSS contribution ceiling errors',
      'PhilHealth rate changes missed',
      'BIR 2307 issuance delays',
      'VAT input claims on capital goods timing',
      'MCIT vs regular tax wrong application',
      'Alphalist discrepancies at year-end'
    ],
    miniCase: {
      title: 'BPO Company with 500+ Employees',
      challenge: 'Statutory contributions inconsistent, BIR forms filed late, audit finding on withholding taxes',
      result: 'Zero statutory variances, BIR filings 5 days before deadline, clean BIR audit'
    }
  },
  UK: {
    code: 'UK',
    name: 'United Kingdom',
    flag: '🇬🇧',
    scope: [
      'Full bookkeeping & management accounts',
      'HMRC VAT support & returns preparation',
      'PAYE payroll support documentation',
      'Companies House filing support',
      'Corporation tax preparation',
      'Multi-entity consolidation'
    ],
    compliance: [
      'HMRC VAT compliance support & MTD ready',
      'PAYE (Pay As You Earn) documentation',
      'Companies House filing pack preparation',
      'Corporation tax computation support',
      'Auto-enrolment pension documentation'
    ],
    standards: 'UK GAAP/FRS 102 or IFRS-aligned reporting packs',
    deliverables: [
      'Monthly management accounts pack',
      'VAT return support workings (MTD-ready)',
      'PAYE payroll schedules & documentation',
      'Companies House filing support pack',
      'Corporation tax provision schedules',
      'Audit-ready workpapers',
      'Cash flow forecasts & dashboards',
      'Board reporting packs'
    ],
    personas: [
      'Services firms needing VAT + management accounts',
      'Tech startups with R&D tax credit potential',
      'E-commerce with cross-border VAT',
      'Professional services with complex billing'
    ],
    confidence: [
      'MTD-compliant VAT workings',
      'HMRC-ready documentation',
      'On-time Companies House support',
      'Clean audit trail maintained'
    ],
    monthlyChecklist: {
      payroll: [
        'PAYE income tax calculation',
        'National Insurance (NI) computation',
        'Student loan deductions tracking',
        'Auto-enrolment pension contributions',
        'RTI submission preparation support'
      ],
      indirect: [
        'VAT return reconciliation (MTD-ready)',
        'EC Sales List preparation (if applicable)',
        'Reverse charge mechanism tracking',
        'Partial exemption calculations',
        'Bad debt relief claims'
      ],
      corporate: [
        'Corporation tax provision computation',
        'R&D tax credit documentation',
        'Capital allowances tracking',
        'CT600 preparation support',
        'iXBRL tagging readiness'
      ]
    },
    templates: [
      'PAYE/NI Calculation Workpaper',
      'VAT Return Reconciliation (MTD)',
      'Corporation Tax Provision Schedule',
      'R&D Expenditure Tracker',
      'Monthly Management Accounts Pack',
      'Companies House Filing Checklist',
      'Audit-Ready Trial Balance Template'
    ],
    mistakesPrevented: [
      'VAT flat rate scheme errors',
      'Pension auto-enrolment staging missed',
      'NI category code misapplication',
      'Reverse charge VAT not applied correctly',
      'CT600 discrepancies vs accounts',
      'Companies House confirmation statement delays'
    ],
    miniCase: {
      title: 'Professional Services Firm Scaling',
      challenge: 'VAT returns inconsistent, management accounts 3 weeks late, no visibility for partners',
      result: 'VAT filed on D+7, management accounts by D+10, partner dashboard with real-time metrics'
    }
  },
  US: {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    scope: [
      'GAAP-ready bookkeeping support',
      'Multi-state payroll tax documentation',
      'Sales tax nexus tracking',
      'AR/AP management & controls',
      'Cash flow dashboards',
      'Year-end 1099/W-2 support preparation'
    ],
    compliance: [
      'Federal payroll tax documentation support',
      'Multi-state payroll tax compliance (CA, NY, TX, etc.)',
      'Sales tax nexus tracking & support',
      '1099/W-2 year-end support preparation',
      'Quarterly estimated tax tracking'
    ],
    standards: 'US GAAP-aligned reporting with ASC compliance documentation',
    deliverables: [
      'Monthly close pack (GAAP-ready)',
      'Federal/state payroll tax schedules',
      'Sales tax reconciliation by state',
      'AR/AP aging & control reports',
      'Cash flow dashboards & forecasts',
      '1099/W-2 support preparation pack',
      'Bank reconciliations & flux analysis',
      'Budget vs actual variance reports'
    ],
    personas: [
      'SaaS companies with multi-state presence',
      'E-commerce with sales tax complexity',
      'Professional services scaling operations',
      'Startups needing investor-ready financials'
    ],
    confidence: [
      'GAAP-compliant books always current',
      'Multi-state payroll documented',
      'Sales tax nexus tracked & managed',
      'Year-end readiness maintained'
    ],
    monthlyChecklist: {
      payroll: [
        'Federal payroll tax (941) reconciliation',
        'State payroll tax by jurisdiction',
        'State unemployment (SUI) tracking',
        '401(k) contribution reconciliation',
        'Workers compensation accrual'
      ],
      indirect: [
        'Sales tax nexus monitoring',
        'Sales tax return support by state',
        'Economic nexus threshold tracking',
        'Marketplace facilitator exemptions',
        'Use tax accrual & documentation'
      ],
      corporate: [
        'Quarterly estimated tax tracking',
        'ASC 606 revenue recognition review',
        'ASC 842 lease accounting compliance',
        'Tax provision (ASC 740) computation',
        'State apportionment tracking'
      ]
    },
    templates: [
      'Multi-State Payroll Tax Tracker',
      'Sales Tax Nexus Study Template',
      'Form 941 Reconciliation Workpaper',
      '1099/W-2 Preparation Checklist',
      'ASC 606 Revenue Recognition Schedule',
      'Monthly Close Checklist (US GAAP)',
      'Cash Flow Dashboard Template'
    ],
    mistakesPrevented: [
      'Sales tax nexus thresholds breached unknowingly',
      'State payroll registration missed',
      '1099 contractor misclassification',
      'ASC 606 revenue timing errors',
      'Form 941 vs GL payroll discrepancies',
      'Multi-state income apportionment errors'
    ],
    miniCase: {
      title: 'SaaS Company with Multi-State Sales Tax',
      challenge: 'Sales tax nexus unclear, 1099s filed late, state-by-state payroll chaos',
      result: 'Nexus study completed, 1099s filed on time, consolidated payroll dashboard across 12 states'
    }
  },
  AU: {
    code: 'AU',
    name: 'Australia',
    flag: '🇦🇺',
    scope: [
      'Full bookkeeping & month-end close',
      'ATO BAS/GST support preparation',
      'PAYG withholding documentation',
      'STP (Single Touch Payroll) support',
      'Superannuation compliance documentation',
      'ASIC reporting support'
    ],
    compliance: [
      'ATO BAS (Business Activity Statement) support',
      'GST compliance & reconciliation',
      'PAYG withholding documentation',
      'STP reporting support documentation',
      'Superannuation guarantee compliance'
    ],
    standards: 'AASB/IFRS-aligned reporting with Australian Accounting Standards',
    deliverables: [
      'Monthly close pack with reconciliations',
      'BAS/GST return support workings',
      'PAYG withholding schedules',
      'STP support documentation',
      'Superannuation computation sheets',
      'Audit-ready workpapers',
      'Management accounts & KPI dashboards',
      'Cash flow forecasting models'
    ],
    personas: [
      'Tech companies with STP requirements',
      'E-commerce with GST obligations',
      'Professional services firms',
      'Startups needing ATO compliance support'
    ],
    confidence: [
      'BAS-ready workings every quarter',
      'STP documentation maintained',
      'Superannuation always reconciled',
      'ATO audit-ready at all times'
    ],
    monthlyChecklist: {
      payroll: [
        'PAYG withholding calculation',
        'Superannuation Guarantee computation (11.5%)',
        'STP event preparation support',
        'Leave accrual reconciliation',
        'Salary sacrifice tracking'
      ],
      indirect: [
        'BAS reconciliation (GST portion)',
        'PAYG withholding reconciliation',
        'PAYG installment tracking',
        'Input tax credit verification',
        'GST on imports/acquisitions'
      ],
      corporate: [
        'Company tax installment (PAYG-I) tracking',
        'R&D tax incentive documentation',
        'Franking account reconciliation',
        'Division 7A loan tracking',
        'Tax provision computation'
      ]
    },
    templates: [
      'BAS Reconciliation Workpaper',
      'Superannuation Calculation Template',
      'STP Event Documentation Pack',
      'PAYG Summary Schedule',
      'Division 7A Loan Tracker',
      'Monthly Close Checklist (AU)',
      'R&D Expenditure Tracker'
    ],
    mistakesPrevented: [
      'Superannuation guarantee charge (SGC) exposure',
      'BAS GST vs GL discrepancies',
      'STP finalization errors',
      'PAYG-I installment miscalculations',
      'Division 7A deemed dividend issues',
      'Fringe Benefits Tax oversights'
    ],
    miniCase: {
      title: 'E-Commerce Business Scaling Nationally',
      challenge: 'BAS consistently lodged late, superannuation penalties, STP finalization errors',
      result: 'BAS lodged by D+21, zero SGC charges, STP finalized accurately every quarter'
    }
  },
  CA: {
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦',
    scope: [
      'Full bookkeeping & month-end close',
      'CRA GST/HST support preparation',
      'Provincial PST/QST support (where applicable)',
      'Payroll compliance documentation',
      'T4 year-end support preparation',
      'Multi-province consolidation'
    ],
    compliance: [
      'CRA GST/HST compliance support',
      'Provincial sales tax (PST/QST) documentation',
      'Federal & provincial payroll tax support',
      'T4/T4A year-end support preparation',
      'ROE (Record of Employment) support'
    ],
    standards: 'IFRS/ASPE-aligned reporting with Canadian standards compliance',
    deliverables: [
      'Monthly close pack with reconciliations',
      'GST/HST return support workings',
      'PST/QST schedules (where applicable)',
      'Payroll tax computation schedules',
      'T4/T4A support preparation pack',
      'Audit-ready workpapers',
      'Management reporting dashboards',
      'Cash flow forecasts'
    ],
    personas: [
      'Multi-province operations needing consolidated view',
      'Tech companies with CRA compliance needs',
      'E-commerce with cross-provincial sales',
      'Professional services scaling across provinces'
    ],
    confidence: [
      'CRA-ready documentation maintained',
      'Multi-province tax tracking complete',
      'Year-end T4 preparation ready',
      'Provincial compliance always current'
    ],
    monthlyChecklist: {
      payroll: [
        'CPP/QPP contribution calculation',
        'EI premium computation',
        'Federal & provincial tax withholding',
        'RRSP matching reconciliation',
        'Vacation pay accrual tracking'
      ],
      indirect: [
        'GST/HST return reconciliation',
        'PST/QST by province tracking',
        'Input tax credit verification',
        'Place of supply determination',
        'Zero-rated vs exempt classification'
      ],
      corporate: [
        'Corporate tax installment tracking',
        'SR&ED (R&D) expenditure tracking',
        'Provincial tax allocation',
        'Associated corporation tracking',
        'Small business deduction eligibility'
      ]
    },
    templates: [
      'GST/HST Return Workpaper',
      'Provincial Sales Tax Tracker',
      'CPP/EI Computation Template',
      'T4/T4A Preparation Checklist',
      'SR&ED Expenditure Tracker',
      'Monthly Close Checklist (CA)',
      'Multi-Province Consolidation Pack'
    ],
    mistakesPrevented: [
      'CPP/QPP maximum pensionable earnings breach',
      'GST/HST place of supply errors',
      'Provincial payroll tax rate misapplication',
      'T4 slip discrepancies at year-end',
      'SR&ED eligible expenditure omissions',
      'Associated corporation income splitting errors'
    ],
    miniCase: {
      title: 'Tech Company Operating Across 4 Provinces',
      challenge: 'GST/HST/PST confusion, T4s filed late with corrections, no visibility on provincial exposure',
      result: 'Sales tax fully mapped by province, T4s filed accurately by deadline, provincial dashboard live'
    }
  }
};
