'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Landmark, Cpu, Users } from 'lucide-react';
import TiltCard from '@/components/tilt-card';

export const centres = [
  {
    icon: Landmark,
    name: 'Finance',
    href: '/finance',
    roles: ['Accounting and bookkeeping', 'Compliance', 'Auditors', 'Analysts', 'Financial reporting'],
  },
  {
    icon: Cpu,
    name: 'Technology',
    href: '/technology',
    roles: [
      'Software engineers, full-stack, backend and frontend',
      'Web and mobile engineers',
      'AI and machine learning engineers',
      'DevOps and cloud engineers',
      'QA and test engineers',
      'Data and automation engineers',
      'Application support engineers',
    ],
  },
  {
    icon: Users,
    name: 'People',
    href: '/people',
    roles: [
      'Multi-country payroll operations',
      'HRIS administration',
      'Recruitment process support',
      'Onboarding and offboarding',
      'Employee case management',
    ],
  },
];

const chassisItems = [
  'Selection and vetting',
  'Employment and compliance',
  'Workspace and infrastructure',
  'Immersion and integration',
  'Retention and replacement',
  'Governance and reporting',
];

export default function CentresSection() {
  return (
    <section id="centres" className="py-24 bg-[#f7f7fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-4">Three centres, one operating model</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
            Specialised centres, single accountability.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Three centres of excellence, each built around one discipline rather than staffed generically
            across all of them. One governance model, one named owner, one escalation path across all three.
          </p>
        </div>

        <div className="grid md:grid-cols-3 border border-gray-200 rounded-t-xl overflow-hidden bg-white">
          {centres.map((centre, index) => {
            const Icon = centre.icon;
            return (
              <motion.a
                key={centre.name}
                href={centre.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="block"
              >
                <TiltCard className="group h-full p-8 border-r border-gray-200 last:border-r-0 hover:bg-[#fffafd] transition-colors">
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-[.12em] px-2.5 py-1 rounded bg-[#ffe9f4] text-[#8d0d51]">
                    Centre of excellence
                  </span>
                  <div className="w-11 h-11 bg-[#080818] rounded-xl flex items-center justify-center my-5">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{centre.name}</h3>
                  <ul className="space-y-1.5 text-sm text-gray-600 mb-6 min-h-[130px]">
                    {centre.roles.map((role) => (
                      <li key={role} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#E6007E] mt-2 flex-shrink-0" />
                        {role}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E6007E]">
                    Explore the centre <ArrowRight className="w-4 h-4" />
                  </span>
                </TiltCard>
              </motion.a>
            );
          })}
        </div>
        <div className="bg-[#080818] rounded-b-xl px-6 py-6 flex flex-wrap items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-[.12em] text-[#E6007E]">The Hexa operating model</span>
          <div className="flex flex-wrap gap-2.5">
            {chassisItems.map((item) => (
              <span key={item} className="text-sm text-white/80 border border-white/15 rounded px-3 py-1.5">
                {item}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-6 text-sm text-gray-500 max-w-2xl">
          This is the Capability Centre model — Hexa runs selection, employment and retention throughout.
          In a Pod Engagement, you keep the employment relationship; Hexa supplies the seat, the
          infrastructure and the cover around it.
        </p>
      </div>
    </section>
  );
}
