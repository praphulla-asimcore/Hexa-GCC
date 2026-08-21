'use client';

import { motion } from 'framer-motion';
import { BookOpenCheck, BrainCircuit, ShieldCheck, UsersRound } from 'lucide-react';

const layers = [
  { number: '01', icon: UsersRound, label: 'Specialized people', title: 'A finance capability built around your operation', description: 'Dedicated professionals, named ownership, and cross-trained coverage working as an extension of your business.' },
  { number: '02', icon: BookOpenCheck, label: 'Country playbooks', title: 'Local detail without fragmented control', description: 'Country-aware workflows, statutory calendars, and compliance knowledge embedded into the operating model.' },
  { number: '03', icon: BrainCircuit, label: 'Finance Intelligence', title: 'Human decisions, strengthened by intelligence', description: 'Internal tools that review, flag, organize, and surface what needs attention while your people stay accountable.' },
  { number: '04', icon: ShieldCheck, label: 'Governance', title: 'A system that holds up under scrutiny', description: 'Review layers, documentation, escalation paths, and measurable delivery cadence built into every engagement.' },
];

export default function FinancePlatformSection() {
  return (
    <section id="finance-platform" className="py-28 bg-white border-b border-[#ece9e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="eyebrow mb-4">The Hexa Finance Platform</p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-5">Finance infrastructure, not freelance execution.</h2>
          <p className="text-lg text-gray-600 leading-relaxed">Hexa combines specialized finance professionals, country playbooks, internal intelligence, and governance into one operating capability for companies growing across markets.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-[#ded9d3] border border-[#ded9d3]">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <motion.article key={layer.number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .35, delay: index * .06 }} whileHover={{ y: -4 }} className="bg-white p-8 transition-shadow hover:shadow-[0_16px_35px_rgba(23,23,26,.08)]">
                <div className="flex items-start justify-between mb-10"><div className="w-11 h-11 bg-[#17171a] flex items-center justify-center"><Icon className="w-5 h-5 text-white" /></div><span className="text-xs font-semibold tracking-[.16em] text-gray-400">{layer.number}</span></div>
                <p className="eyebrow mb-3">{layer.label}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{layer.title}</h3>
                <p className="text-gray-600 leading-relaxed">{layer.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
