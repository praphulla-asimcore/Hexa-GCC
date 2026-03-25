'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, TrendingDown, Clock, FileCheck, Building2 } from 'lucide-react';

const caseStudies = [
  {
    flag: '🇸🇬',
    country: 'Singapore',
    title: 'Tech Startup Scaling from 1 to 4 Entities',
    challenge: 'Fast-growing SaaS company opened 3 new subsidiaries in 6 months. Existing team couldn\'t handle CPF computations, intercompany reconciliations, and consolidated reporting.',
    solution: 'Deployed dedicated accountant + QA lead. Built standardized chart of accounts across entities, automated intercompany eliminations, and established monthly close calendar.',
    results: [
      { metric: 'Close time', before: '18 days', after: '6 days' },
      { metric: 'Audit prep time', before: '3 weeks', after: '3 days' },
      { metric: 'Reconciliation errors', before: '15+/month', after: '0' },
    ]
  },
  {
    flag: '🇲🇾',
    country: 'Malaysia',
    title: 'Regional HQ Fixing SST & Month-End Delays',
    challenge: 'Manufacturing company with complex inventory and SST obligations. Month-end close took 20+ days, SST submissions were last-minute scrambles, and audit queries piled up.',
    solution: 'Implemented weekly reconciliation cadence, SST workings template with automated checks, and standardized inventory valuation process.',
    results: [
      { metric: 'Month-end close', before: '20 days', after: '8 days' },
      { metric: 'SST queries', before: '10+/filing', after: '1-2' },
      { metric: 'LHDN audit findings', before: '5 items', after: '0 items' },
    ]
  },
  {
    flag: '🇮🇩',
    country: 'Indonesia',
    title: 'PPh21 + BPJS + Payroll Journal Accuracy',
    challenge: 'Trading company with 200+ employees struggled with PPh 21 computations, BPJS reconciliations were never balanced, and payroll journals didn\'t tie to bank statements.',
    solution: 'Built PPh 21 calculation workbook with audit trail, BPJS reconciliation template, and payroll journal automation with bank statement matching.',
    results: [
      { metric: 'PPh 21 accuracy', before: '85%', after: '100%' },
      { metric: 'BPJS reconciliation time', before: '4 days', after: '4 hours' },
      { metric: 'Audit queries', before: '12', after: '2' },
    ]
  },
  {
    flag: '🇬🇧',
    country: 'United Kingdom',
    title: 'Services Firm Needing VAT + Management Accounts',
    challenge: 'Professional services firm with complex billing and multi-currency revenue. VAT returns were error-prone, and board lacked timely financial visibility.',
    solution: 'Implemented MTD-compliant VAT workings, standardized management accounts pack, and built real-time revenue dashboard by client and currency.',
    results: [
      { metric: 'VAT errors', before: '5+/quarter', after: '0' },
      { metric: 'Board pack delivery', before: 'Day 25', after: 'Day 7' },
      { metric: 'Cash forecasting accuracy', before: '60%', after: '95%' },
    ]
  },
];

export default function CaseStudiesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#E6007E]/10 text-[#E6007E] rounded-full text-sm font-medium mb-4">
            Sample Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Real <span className="gradient-text">Results</span>, Real Impact
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            These fictional but realistic scenarios illustrate the measurable outcomes 
            our clients typically achieve.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies?.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              {/* Header */}
              <div className="gradient-bg px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{study?.flag}</span>
                  <div>
                    <p className="text-white/80 text-sm">{study?.country}</p>
                    <h3 className="text-white font-bold">{study?.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Challenge */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-red-700 font-semibold text-sm mb-2">
                    <Building2 className="w-4 h-4" />
                    Challenge
                  </div>
                  <p className="text-gray-700 text-sm">{study?.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-[#C4006A] font-semibold text-sm mb-2">
                    <ArrowRight className="w-4 h-4" />
                    What Hexa Did
                  </div>
                  <p className="text-gray-700 text-sm">{study?.solution}</p>
                </div>

                {/* Results */}
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-green-700 font-semibold text-sm mb-3">
                    <FileCheck className="w-4 h-4" />
                    Results
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {study?.results?.map((result, i) => (
                      <div key={i} className="text-center">
                        <p className="text-xs text-gray-600 mb-1">{result?.metric}</p>
                        <div className="flex flex-col items-center">
                          <span className="text-red-500 text-sm line-through">{result?.before}</span>
                          <span className="text-green-700 font-bold">{result?.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
