'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, ArrowRight, Calculator, Shield, BarChart3, Briefcase, Scale, Plus } from 'lucide-react';

const financeTeams = [
  {
    id: 'core-accounting',
    title: 'Outsourced Accounting & Bookkeeping',
    icon: Calculator,
    whatHandles: [
      'Full-cycle accounting (AP, AR, GL)',
      'Reconciliations and ledger management',
      'Month-end close execution',
      'Documented controls and review checklists'
    ],
    impact: [
      'Monthly close pack and reconciliations.',
      'Predictable close cycles.',
      'Fewer errors and audit queries.'
    ]
  },
  {
    id: 'compliance-regulatory',
    title: 'Remote Accountants / Auditors',
    icon: Shield,
    whatHandles: [
      'Dedicated accountants and audit support',
      'Schedules, evidence packs, and PBC tracking',
      'Review-ready reconciliations',
      'Named ownership and escalation'
    ],
    impact: [
      'Audit schedules ready faster.',
      'Clear ownership without key-person risk.',
      'Continuity through cross-trained cover.'
    ]
  },
  {
    id: 'reporting-analysis',
    title: 'Tax & Compliance',
    icon: BarChart3,
    whatHandles: [
      'Country-specific tax support and trackers',
      'Payroll journals and statutory workings',
      'GST/VAT, withholding, and indirect tax support',
      'Preparation and documentation packs'
    ],
    impact: [
      'On-time compliance readiness.',
      'Audit-ready documentation.',
      'Fewer last-minute filing surprises.'
    ]
  },
  {
    id: 'strategic-finance',
    title: 'Remote CFO',
    badge: 'Optional Add-On',
    icon: Briefcase,
    whatHandles: [
      'Cash flow dashboards and forecasting',
      'Budgeting and scenario modelling',
      'Management and board reporting packs',
      'Decision support for finance leaders'
    ],
    impact: [
      'Leadership visibility without a full-time hire.',
      'Faster, more confident decisions.'
    ]
  },
  {
    id: 'scalable-support',
    title: 'Staff Augmentation',
    icon: Scale,
    whatEnables: [
      'Additional execution capacity during growth',
      'Project-based finance initiatives',
      'Flexible headcount scaling',
      'Coverage for leave and hiring gaps'
    ],
    impact: [
      'No recruitment bottlenecks.',
      'Capacity expands with operations.',
      'Faster delivery on priority work.'
    ]
  },
  {
    id: 'financial-modelling',
    title: 'Financial Analysis & Modelling',
    icon: BarChart3,
    whatHandles: [
      'Variance analysis and KPI reporting',
      'Cash flow and runway modelling',
      'Scenario planning and sensitivity analysis',
      'Decision-ready dashboards'
    ],
    impact: [
      'Clear visibility into performance.',
      'Better planning under uncertainty.',
      'Reports built for action.'
    ]
  }
];

export default function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-28 bg-[#f6f3ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-left mb-14 max-w-3xl"
        >
          <p className="eyebrow mb-4">What we operate</p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-5">
            Finance Operations, built by function.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            A managed finance capability with the specialists, controls, and operating cadence needed to deliver predictable, scalable outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#d9d4ce] border border-[#d9d4ce]">
          {financeTeams?.map((team, index) => {
            const IconComponent = team.icon;
            const isScalable = team.id === 'scalable-support';
            return (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#f6f3ef] p-7 card-hover group ${
                  team.id === 'strategic-finance' ? 'relative overflow-hidden' : ''
                }`}
              >
                {team.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                      <Plus className="w-3 h-3" />
                      {team.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-11 h-11 bg-[#17171a] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E6007E] transition-colors">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 pr-16 leading-snug">{team.title}</h3>
                </div>

                {/* What Team Handles/Enables */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-[#E6007E] uppercase tracking-wider mb-3">
                    {isScalable ? 'What This Enables' : 'What This Team Handles'}
                  </p>
                  <ul className="space-y-2">
                    {(isScalable ? team.whatEnables : team.whatHandles)?.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#E6007E] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-3">Impact</p>
                  <ul className="space-y-1.5">
                    {team.impact?.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-800 font-medium">
                        <ArrowRight className="w-3 h-3 text-[#E6007E]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
