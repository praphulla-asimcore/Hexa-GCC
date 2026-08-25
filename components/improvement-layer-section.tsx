'use client';

import { motion } from 'framer-motion';
import { Users, ClipboardCheck, Sparkles } from 'lucide-react';
import TiltCard from '@/components/tilt-card';

const columns = [
  { icon: Users, title: 'Skilled people', description: 'Selected by you, employed by us, qualified for the discipline and the market they work in.' },
  { icon: ClipboardCheck, title: 'A better way of working', description: 'Documented playbooks, controls, reconciliation standards and QA for every process the team takes on.' },
  { icon: Sparkles, title: 'An automation plan', description: 'We set the team, let it run, then map what should not stay manual and advise you on the sequence.' },
];

const cycleItems = [
  'Baseline the work',
  'Identify automation',
  'Implement improvements',
  'Measure time saved',
  'Redeploy capacity to higher-value work',
];

export default function ImprovementLayerSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#080818] text-white">
      <div
        className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full opacity-[0.12] blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E6007E, transparent 70%)' }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-[.14em] text-[#E6007E] mb-5"
        >
          The improvement layer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-2xl mb-5"
        >
          We do not just build the team. We improve how the function operates.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-white/65 text-lg max-w-3xl leading-relaxed"
        >
          Anyone can supply people. What changes your numbers is the way the work is done. Every team
          arrives with playbooks, controls and checklists for the processes it runs, and an automation
          plan written against your actual volumes rather than a generic template.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {columns.map((column, index) => {
            const Icon = column.icon;
            return (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <TiltCard glareColor="rgba(230,0,126,0.2)" className="h-full border border-white/15 rounded-xl p-6 hover:border-[#E6007E]/40 transition-colors">
                  <Icon className="w-5 h-5 text-[#E6007E] mb-4" />
                  <h4 className="font-semibold mb-2">{column.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{column.description}</p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-white/65 border-l-2 border-[#E6007E] pl-4 max-w-2xl">
          Every Hexa finance team includes an automation and intelligence layer. The technology centre
          builds it for the finance and people centres, so automation reaches the client rather than
          sitting in a separate service line.
        </p>

        <div className="mt-10 pt-7 border-t border-white/15">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6007E] opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E6007E]" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#E6007E]">Every quarter</span>
          </div>
          <div className="flex flex-wrap gap-2.5 mt-4">
            {cycleItems.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="text-sm text-white/80 border border-white/15 rounded px-3.5 py-2 hover:border-[#E6007E]/40 hover:bg-white/5 transition-colors"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>

        <p className="mt-6 text-white border-l-2 border-[#E6007E] pl-4 max-w-3xl">
          A traditional provider earns more when you need more people. We would rather your team absorbed
          more work without growing.
        </p>
      </div>
    </section>
  );
}
