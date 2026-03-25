'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CheckCircle, ArrowRight, Calculator, Shield, BarChart3, 
  Briefcase, Scale, Plus
} from 'lucide-react';

const financeTeams = [
  {
    id: 'core-accounting',
    title: 'Core Accounting Operations Team',
    icon: Calculator,
    whatHandles: [
      'Full-cycle accounting (AP, AR, GL)',
      'Reconciliations & ledger management',
      'Month-end close execution',
      'Documentation & control maintenance'
    ],
    impact: [
      'Predictable close cycles.',
      'Reduced key-person risk.',
      'Layered execution and review.'
    ]
  },
  {
    id: 'compliance-regulatory',
    title: 'Compliance & Regulatory Team',
    icon: Shield,
    whatHandles: [
      'Corporate tax support',
      'Indirect tax (GST/VAT) preparation',
      'Payroll compliance & statutory filings',
      'Compliance calendar monitoring'
    ],
    impact: [
      'Reduced filing risk.',
      'Proactive compliance oversight.',
      'Audit-ready schedules.'
    ]
  },
  {
    id: 'reporting-analysis',
    title: 'Reporting & Analysis Team',
    icon: BarChart3,
    whatHandles: [
      'Management reporting',
      'Financial dashboards',
      'Cash flow tracking',
      'Variance analysis'
    ],
    impact: [
      'Clear leadership visibility.',
      'Data-backed decision making.'
    ]
  },
  {
    id: 'strategic-finance',
    title: 'Strategic Finance Layer',
    badge: 'Optional Add-On',
    icon: Briefcase,
    whatHandles: [
      'CFO-level advisory',
      'Forecasting & scenario modeling',
      'Budget planning',
      'Board reporting packs'
    ],
    impact: [
      'Finance aligned to strategy.'
    ]
  },
  {
    id: 'scalable-support',
    title: 'Scalable Support Layer',
    icon: Scale,
    whatEnables: [
      'Additional execution capacity during growth',
      'Project-based finance initiatives',
      'Flexible headcount scaling'
    ],
    impact: [
      'No recruitment bottlenecks.',
      'Capacity expands with operations.'
    ]
  }
];

export default function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Your Dedicated Finance Team — <span className="gradient-text">Built by Function</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We don't just assign tasks. We build structured finance teams—each layer designed for a specific function, 
            working together to deliver predictable, scalable, and accountable outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {financeTeams?.map((team, index) => {
            const IconComponent = team.icon;
            const isScalable = team.id === 'scalable-support';
            return (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gray-50 rounded-2xl p-6 card-hover border border-gray-100 group ${
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
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 pr-16">{team.title}</h3>
                </div>

                {/* What Team Handles/Enables */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-[#E6007E] uppercase tracking-wider mb-3">
                    {isScalable ? 'What This Enables' : 'What This Team Handles'}
                  </p>
                  <ul className="space-y-2">
                    {(isScalable ? team.whatEnables : team.whatHandles)?.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
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
