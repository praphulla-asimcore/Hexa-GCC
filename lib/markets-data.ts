export interface MarketCapability {
  code: string;
  name: string;
  regulators: string[];
  taxation: string[];
  financePayroll: string[];
  standard: string;
}

export const markets: MarketCapability[] = [
  {
    code: 'MY',
    name: 'Malaysia',
      regulators: ['LHDN (Inland Revenue Board)', 'SSM (Companies Commission)', 'EPF · SOCSO · EIS · HRDF'],
    taxation: ['SST (Sales & Service Tax)', 'Corporate income tax with CP204 estimates', 'Withholding tax', 'Form E and Form EA annual filings'],
    financePayroll: ['Monthly EPF, SOCSO and EIS contributions', 'Statutory payroll runs and payslips', 'Bonus and increment processing'],
    standard: 'MFRS (IFRS-equivalent) for larger entities, MPERS for private companies',
  },
  {
    code: 'SG',
    name: 'Singapore',
      regulators: ['ACRA (Accounting & Corporate Regulatory Authority)', 'IRAS (Inland Revenue Authority)'],
    taxation: ['GST filings', 'Corporate tax Form C-S / C', 'Withholding tax on cross-border payments'],
    financePayroll: ['CPF contributions', 'IR8A annual employee earnings statements', 'XBRL financial statement filing'],
    standard: 'SFRS — Singapore Financial Reporting Standards, IFRS-converged',
  },
  {
    code: 'ID',
    name: 'Indonesia',
      regulators: ['DJP (Directorate General of Taxes)', 'BPJS Ketenagakerjaan & Kesehatan'],
    taxation: ['PPh 21 employee income tax', 'PPh 23 / 25 withholding and installments', 'PPN (VAT) and e-Faktur filing'],
    financePayroll: ['BPJS social security and health contributions', 'Monthly payroll and THR processing'],
    standard: 'PSAK — Indonesian Financial Accounting Standards, IFRS-converged',
  },
  {
    code: 'PH',
    name: 'Philippines',
      regulators: ['BIR (Bureau of Internal Revenue)', 'SEC', 'SSS · PhilHealth · Pag-IBIG'],
    taxation: ['VAT filings', 'Withholding tax', 'Quarterly and annual income tax returns'],
    financePayroll: ['SSS, PhilHealth and Pag-IBIG contributions', '13th month pay processing', 'Payroll register and BIR alphalist'],
    standard: 'PFRS — Philippine Financial Reporting Standards, IFRS-aligned',
  },
  {
    code: 'AU',
    name: 'Australia',
      regulators: ['ATO (Australian Taxation Office)', 'ASIC (Securities & Investments Commission)'],
    taxation: ['BAS (Business Activity Statement)', 'IAS and PAYG withholding', 'GST reporting'],
    financePayroll: ['Superannuation guarantee contributions', 'Single Touch Payroll (STP) reporting'],
    standard: 'AASB — Australian Accounting Standards, IFRS-equivalent',
  },
  {
    code: 'UK',
    name: 'United Kingdom',
      regulators: ['HMRC (HM Revenue & Customs)', 'Companies House'],
    taxation: ['VAT under Making Tax Digital', 'Corporation tax', 'PAYE'],
    financePayroll: ['PAYE and National Insurance', 'Pension auto-enrolment', 'P60 and P11D filings'],
    standard: 'UK GAAP (FRS 102), with IFRS reporting for larger entities',
  },
  {
    code: 'US',
    name: 'USA',
      regulators: ['IRS (Internal Revenue Service)', 'State Departments of Revenue', 'SEC where applicable'],
    taxation: ['Federal and state income tax', 'State-by-state sales tax', 'Payroll tax — FICA, FUTA and SUTA'],
    financePayroll: ['W-2 and 1099 filings', 'Multi-state payroll compliance'],
    standard: 'US GAAP (ASC codification)',
  },
  {
    code: 'CA',
    name: 'Canada',
      regulators: ['CRA (Canada Revenue Agency)'],
    taxation: ['GST/HST', 'Provincial sales tax', 'Corporate T2 filings'],
    financePayroll: ['CPP and EI statutory deductions', 'T4 slip preparation'],
    standard: 'IFRS for public entities, ASPE for private enterprises',
  },
  {
    code: 'NP',
    name: 'Nepal',
      regulators: ['IRD (Inland Revenue Department)', 'OCR (Office of Company Registrar)', 'Social Security Fund'],
    taxation: ['VAT filings', 'Income tax with advance installments', 'TDS (tax deducted at source)'],
    financePayroll: ['Social Security Fund contributions', 'Provident fund and gratuity management'],
    standard: 'NFRS — Nepal Financial Reporting Standards, IFRS-aligned',
  },
  {
    code: 'TW',
    name: 'Taiwan',
      regulators: ['National Taxation Bureau, Ministry of Finance', 'Bureau of Labor Insurance'],
    taxation: ['Business tax (VAT-equivalent)', 'Profit-seeking enterprise income tax', 'Withholding tax'],
    financePayroll: ['Labor and National Health Insurance contributions', 'Labor pension contributions'],
    standard: 'T-IFRS — Taiwan-IFRS, fully converged with IFRS',
  },
  {
    code: 'LK',
    name: 'Sri Lanka',
      regulators: ['IRD (Inland Revenue Department)', 'EPF / ETF Department'],
    taxation: ['VAT', 'Income tax', 'Withholding tax and SSCL (Social Security Contribution Levy)'],
    financePayroll: ['EPF (Employees’ Provident Fund) contributions', 'ETF (Employees’ Trust Fund) contributions'],
    standard: 'SLFRS — Sri Lanka Financial Reporting Standards, IFRS-converged',
  },
  {
    code: 'MM',
    name: 'Myanmar',
      regulators: ['Internal Revenue Department', 'DICA (Directorate of Investment and Company Administration)'],
    taxation: ['Commercial tax', 'Corporate income tax', 'Withholding tax'],
    financePayroll: ['Social Security Board contributions', 'Statutory payroll processing'],
    standard: 'MFRS — Myanmar Financial Reporting Standards, IFRS-aligned',
  },
  {
    code: 'BD',
    name: 'Bangladesh',
      regulators: ['NBR (National Board of Revenue)', 'RJSC (Registrar of Joint Stock Companies)'],
    taxation: ['VAT', 'Corporate income tax', 'Withholding tax (tax deducted at source)'],
    financePayroll: ['Provident fund administration', 'Workers’ Profit Participation Fund'],
    standard: 'BFRS — Bangladesh Financial Reporting Standards, IFRS-adopted',
  },
];
