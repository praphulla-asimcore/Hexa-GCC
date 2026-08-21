'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Landmark, Cpu, Users, BarChart3 } from 'lucide-react';

const towers = [
  {
    status: 'live',
    tag: 'Live · Anchor Tower',
    icon: Landmark,
    name: 'Hexa Finance',
    description: 'Record to report, procure to pay, order to cash, tax & statutory compliance by country, FP&A and Remote CFO.',
    href: '/finance',
  },
  {
    status: 'live',
    tag: 'Live',
    icon: Cpu,
    name: 'Hexa Technology',
    description: 'Product engineering, quality engineering, cloud & DevOps, data & automation, systems integration.',
    href: '/technology',
  },
  {
    status: 'live',
    tag: 'Live',
    icon: Users,
    name: 'Hexa People',
    description: 'Multi-country payroll, onboarding & offboarding, HRIS administration, recruitment support, employee helpdesk.',
    href: '/people',
  },
  {
    status: 'roadmap',
    tag: 'Roadmap',
    icon: BarChart3,
    name: 'Hexa Data',
    description: 'Management information, BI dashboards, master data management, reporting automation. Added once demand is proven inside existing accounts.',
    href: null,
  },
];

export default function TowersSection() {
  return (
    <section id="towers" className="py-28 bg-white border-b border-[#ece9e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="eyebrow mb-4">One centre, three towers</p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-5">
            Finance, technology, and people operations — under one roof.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Towers run in parallel, not in sequence, and share the same operating model beneath them —
            the same transition methodology, governance cadence, and accountable ownership, whichever tower you start in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#ded9d3] border border-[#ded9d3]">
          {towers.map((tower, index) => {
            const Icon = tower.icon;
            const content = (
              <>
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-11 h-11 flex items-center justify-center ${tower.status === 'live' ? 'bg-[#17171a]' : 'bg-gray-300'}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-[.12em] px-2 py-1 rounded-full ${
                      tower.status === 'live' ? 'bg-[#E6007E]/10 text-[#E6007E]' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {tower.tag}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{tower.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{tower.description}</p>
                {tower.href && (
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-3 transition-all">
                    Explore the tower <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </>
            );

            return tower.href ? (
              <motion.a
                key={tower.name}
                href={tower.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="group bg-white p-8 transition-shadow hover:shadow-[0_16px_35px_rgba(23,23,26,.08)]"
              >
                {content}
              </motion.a>
            ) : (
              <motion.div
                key={tower.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="bg-white p-8"
              >
                {content}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
