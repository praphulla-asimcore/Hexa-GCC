// Finance service line, phase 1. Researched 25 Aug 2026 — see the cost-per-hire
// research memo for full methodology, sources and the two models tested.
//
// Hexa's price per tier is the actual all-in monthly rate charged for Nepal-delivered
// accounting resources (Junior/Mid/Senior internally), inclusive of office space,
// management fee and salary: RM 2,730 / RM 4,155 / RM 5,880, converted to USD at
// 25 Aug 2026 rates. This is quoted pricing, not a formula-derived estimate.
//
// Only country/tier combinations where that fixed Hexa price is actually cheaper
// than a fully-loaded local hire (local salary + statutory employer on-costs +
// 15% office/HR/recruitment overhead) are listed below. Sri Lanka and Myanmar are
// excluded entirely — Hexa's price does not beat local hiring in any tier there.
// Indonesia (Semi), Philippines (Semi), Nepal (Semi + Mid) and Bangladesh (Semi + Mid)
// are excluded for the same reason within otherwise-valid markets.

export type TierKey = 'semi' | 'mid' | 'senior';

export const HEXA_PRICE_USD: Record<TierKey, number> = {
  semi: 675,
  mid: 1028,
  senior: 1455,
};

export interface TierOption {
  key: TierKey;
  label: string;
  localSalary: number;
  fullyLoadedLocalUsd: number;
}

export interface Market {
  code: string;
  name: string;
  currency: string;
  source: string;
  tiers: TierOption[];
}

export const TIER_LABELS: Record<TierKey, string> = {
  semi: 'Semi-Qualified Accountant',
  mid: 'Qualified Accountant — Mid',
  senior: 'Qualified Accountant — Senior',
};

export const markets: Market[] = [
  {
    code: 'MY', name: 'Malaysia', currency: 'MYR', source: 'MVC Resources Salary Guide 2025',
    tiers: [
      { key: 'semi', label: TIER_LABELS.semi, localSalary: 4250, fullyLoadedLocalUsd: 1356 },
      { key: 'mid', label: TIER_LABELS.mid, localSalary: 9000, fullyLoadedLocalUsd: 2872 },
      { key: 'senior', label: TIER_LABELS.senior, localSalary: 15000, fullyLoadedLocalUsd: 4787 },
    ],
  },
  {
    code: 'SG', name: 'Singapore', currency: 'SGD', source: 'Robert Half Singapore Salary Guide 2026',
    tiers: [
      { key: 'semi', label: TIER_LABELS.semi, localSalary: 5833, fullyLoadedLocalUsd: 6061 },
      { key: 'mid', label: TIER_LABELS.mid, localSalary: 7500, fullyLoadedLocalUsd: 7793 },
      { key: 'senior', label: TIER_LABELS.senior, localSalary: 10000, fullyLoadedLocalUsd: 10391 },
    ],
  },
  {
    code: 'ID', name: 'Indonesia', currency: 'IDR', source: 'JobStreet ID / Indeed / PayScale aggregate 2026',
    tiers: [
      { key: 'senior', label: TIER_LABELS.senior, localSalary: 25000000, fullyLoadedLocalUsd: 1765 },
    ],
  },
  {
    code: 'PH', name: 'Philippines', currency: 'PHP', source: 'CPA Review PH / Bossjob / SchoolFinderPH 2026',
    tiers: [
      { key: 'mid', label: TIER_LABELS.mid, localSalary: 57500, fullyLoadedLocalUsd: 1192 },
      { key: 'senior', label: TIER_LABELS.senior, localSalary: 115000, fullyLoadedLocalUsd: 2384 },
    ],
  },
  {
    code: 'AU', name: 'Australia', currency: 'AUD', source: 'Robert Half Australia Salary Guide 2026',
    tiers: [
      { key: 'semi', label: TIER_LABELS.semi, localSalary: 7083, fullyLoadedLocalUsd: 6436 },
      { key: 'mid', label: TIER_LABELS.mid, localSalary: 9167, fullyLoadedLocalUsd: 8330 },
      { key: 'senior', label: TIER_LABELS.senior, localSalary: 10833, fullyLoadedLocalUsd: 9844 },
    ],
  },
  {
    code: 'UK', name: 'United Kingdom', currency: 'GBP', source: 'Hays / Reed UK Salary Guide 2026',
    tiers: [
      { key: 'semi', label: TIER_LABELS.semi, localSalary: 2917, fullyLoadedLocalUsd: 5170 },
      { key: 'mid', label: TIER_LABELS.mid, localSalary: 3917, fullyLoadedLocalUsd: 6942 },
      { key: 'senior', label: TIER_LABELS.senior, localSalary: 6875, fullyLoadedLocalUsd: 12185 },
    ],
  },
  {
    code: 'US', name: 'USA', currency: 'USD', source: 'Robert Half US Salary Guide 2026',
    tiers: [
      { key: 'semi', label: TIER_LABELS.semi, localSalary: 5167, fullyLoadedLocalUsd: 6337 },
      { key: 'mid', label: TIER_LABELS.mid, localSalary: 7896, fullyLoadedLocalUsd: 9684 },
      { key: 'senior', label: TIER_LABELS.senior, localSalary: 9417, fullyLoadedLocalUsd: 11550 },
    ],
  },
  {
    code: 'CA', name: 'Canada', currency: 'CAD', source: 'Robert Half Canada Salary Guide 2026',
    tiers: [
      { key: 'semi', label: TIER_LABELS.semi, localSalary: 4646, fullyLoadedLocalUsd: 4130 },
      { key: 'mid', label: TIER_LABELS.mid, localSalary: 7542, fullyLoadedLocalUsd: 6704 },
      { key: 'senior', label: TIER_LABELS.senior, localSalary: 9083, fullyLoadedLocalUsd: 8074 },
    ],
  },
  {
    code: 'NP', name: 'Nepal', currency: 'NPR', source: 'KumariJob / NecoJobs Nepal 2026',
    tiers: [
      { key: 'senior', label: TIER_LABELS.senior, localSalary: 215000, fullyLoadedLocalUsd: 1894 },
    ],
  },
  {
    code: 'TW', name: 'Taiwan', currency: 'TWD', source: 'ERI SalaryExpert Taiwan 2025-26',
    tiers: [
      { key: 'semi', label: TIER_LABELS.semi, localSalary: 85077, fullyLoadedLocalUsd: 3549 },
      { key: 'mid', label: TIER_LABELS.mid, localSalary: 109990, fullyLoadedLocalUsd: 4588 },
      { key: 'senior', label: TIER_LABELS.senior, localSalary: 134903, fullyLoadedLocalUsd: 5628 },
    ],
  },
  {
    code: 'BD', name: 'Bangladesh', currency: 'BDT', source: 'RakibHassan.eu / WorldSalaries aggregate 2026 (lower confidence)',
    tiers: [
      { key: 'senior', label: TIER_LABELS.senior, localSalary: 300000, fullyLoadedLocalUsd: 3001 },
    ],
  },
];
