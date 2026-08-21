'use client';

import { motion } from 'framer-motion';
import { Eye, Gauge, Layers3, ShieldCheck } from 'lucide-react';

const outcomes = [
  { icon: Gauge, number: '01', title: 'Close with control', description: 'A dependable operating cadence for reconciliations, reviews, reporting, and month-end close.' },
  { icon: ShieldCheck, number: '02', title: 'Stay ready across markets', description: 'Country-aware workflows and deadline tracking built into the way work gets delivered.' },
  { icon: Eye, number: '03', title: 'See what needs a decision', description: 'Clear reporting, variance signals, and operating visibility for finance and business leaders.' },
  { icon: Layers3, number: '04', title: 'Scale without rebuilding', description: 'Add capability through structured pods instead of repeating the local hiring cycle in every market.' },
];

export default function OutcomesSection() {
  return (
    <section className="py-28 bg-[#17171a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-14 items-start">
          <div><p className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-4">What capability changes</p><h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">The result is not more people. It is more operating confidence.</h2></div>
          <div className="grid sm:grid-cols-2 gap-px bg-white/15 border border-white/15">
            {outcomes.map((outcome) => { const Icon = outcome.icon; return <motion.div key={outcome.number} whileHover={{ backgroundColor: '#242427' }} className="bg-[#17171a] p-7 transition-colors"><div className="flex items-center justify-between mb-10"><Icon className="w-5 h-5 text-[#E6007E]" /><span className="text-xs text-white/35">{outcome.number}</span></div><h3 className="text-xl font-semibold mb-3">{outcome.title}</h3><p className="text-white/55 leading-relaxed">{outcome.description}</p></motion.div>; })}
          </div>
        </div>
      </div>
    </section>
  );
}
