'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, BarChart3, CheckCircle, Code2, Layers3, ShieldCheck, Users } from 'lucide-react';

const capabilities = {
  finance: {
    label: 'Finance Operations',
    eyebrow: 'Run the finance layer',
    title: 'Country-aware finance operations for companies growing across borders.',
    description: 'Dedicated professionals, local compliance playbooks, and accountable controls working together as one finance capability.',
    href: '/countries',
    icon: BarChart3,
    accent: 'bg-[#E6007E]',
    outcomes: ['Close and reconciliation cadence', 'Country-specific compliance support', 'Reporting and decision visibility'],
    metric: '08 markets supported',
  },
  technology: {
    label: 'Technology Delivery',
    eyebrow: 'Build the digital layer',
    title: 'Product and engineering capacity without the hiring bottleneck.',
    description: 'Structured technology pods that build, improve, assure, and operate the systems your business depends on.',
    href: '/technology-delivery',
    icon: Code2,
    accent: 'bg-[#3b82f6]',
    outcomes: ['Product and application engineering', 'QA, automation, and release confidence', 'Cloud, DevOps, and ongoing support'],
    metric: '01 accountable delivery pod',
  },
};

type CapabilityKey = keyof typeof capabilities;

export default function CapabilitiesSection() {
  const [active, setActive] = useState<CapabilityKey>('finance');
  const capability = capabilities[active];
  const Icon = capability.icon;

  return (
    <section id="capabilities" className="py-28 bg-white border-b border-[#ded9d3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-14 items-start">
          <div>
            <p className="eyebrow mb-4">The Hexa capability platform</p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-5">
              The teams and systems behind your next stage of growth.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Hexa builds specialized capability centers that combine people, process, technology, and governance around the work that matters.
            </p>
            <div className="flex flex-wrap gap-3 mt-8 text-xs font-semibold uppercase tracking-wider text-gray-500">
              <span className="inline-flex items-center gap-2"><Users className="w-4 h-4 text-[#E6007E]" /> People</span>
              <span className="inline-flex items-center gap-2"><Layers3 className="w-4 h-4 text-[#E6007E]" /> Process</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#E6007E]" /> Governance</span>
            </div>
          </div>

          <div className="border border-[#ded9d3] bg-[#f6f3ef]">
            <div className="grid grid-cols-2 border-b border-[#ded9d3]">
              {(Object.keys(capabilities) as CapabilityKey[]).map((key) => {
                const item = capabilities[key];
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActive(key)}
                    className={`px-5 py-4 text-left text-sm font-semibold transition-colors ${active === key ? 'bg-[#17171a] text-white' : 'text-gray-500 hover:text-gray-900'}`}
                  >
                    <span className="block text-[10px] uppercase tracking-[.16em] opacity-60 mb-1">0{key === 'finance' ? '1' : '2'}</span>
                    {item.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="p-7 sm:p-9"
              >
                <div className="flex items-start justify-between gap-4 mb-7">
                  <div>
                    <p className="eyebrow mb-3">{capability.eyebrow}</p>
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 max-w-2xl">{capability.title}</h3>
                  </div>
                  <div className={`w-11 h-11 ${capability.accent} flex items-center justify-center shrink-0`}><Icon className="w-5 h-5 text-white" /></div>
                </div>
                <p className="text-gray-600 leading-relaxed max-w-2xl mb-7">{capability.description}</p>
                <div className="grid sm:grid-cols-3 gap-px bg-[#ded9d3] border border-[#ded9d3] mb-7">
                  {capability.outcomes.map((outcome) => <div key={outcome} className="bg-[#f6f3ef] p-4 text-sm text-gray-700"><CheckCircle className="w-4 h-4 text-[#E6007E] mb-5" />{outcome}</div>)}
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-wider text-gray-500">{capability.metric}</span>
                  <Link href={capability.href} className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#E6007E] transition-colors">Explore capability <ArrowUpRight className="w-4 h-4" /></Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
