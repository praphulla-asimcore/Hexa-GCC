'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
    <section id="capabilities" className="relative overflow-hidden py-28 bg-[#e9e5df] border-b border-[#ded9d3]">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(23,23,26,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(23,23,26,.06)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid lg:grid-cols-[.8fr_1.2fr] gap-14 items-start">
          <div className="lg:sticky lg:top-32">
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

          <div>
            <div className="grid md:grid-cols-2 gap-5" style={{ perspective: '1400px' }}>
              {(Object.keys(capabilities) as CapabilityKey[]).map((key) => {
                const item = capabilities[key];
                const ItemIcon = item.icon;
                const isActive = active === key;
                const isTechnology = key === 'technology';
                return (
                  <motion.button
                    key={key}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActive(key)}
                    whileHover={{ y: -8, rotateX: 3, rotateY: isTechnology ? -2 : 2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className={`group relative min-h-[290px] overflow-hidden rounded-[2px] border p-6 sm:p-7 text-left backdrop-blur-xl transition-all duration-300 ${isActive ? 'border-white/30 bg-[#17171a]/90 text-white shadow-[16px_18px_0_rgba(230,0,126,.82)]' : 'border-white/75 bg-white/35 text-gray-900 shadow-[8px_10px_0_rgba(23,23,26,.08)] hover:border-white'}`}
                  >
                    <div className={`absolute inset-3 translate-x-2 translate-y-2 border ${isActive ? 'border-[#E6007E]/35' : 'border-white/55'} pointer-events-none`} style={{ transform: 'translateZ(-18px)' }} />
                    <div className={`absolute -right-12 -top-12 h-40 w-40 rotate-45 border ${isActive ? 'border-[#E6007E]/35' : 'border-gray-900/10'} pointer-events-none`} style={{ transform: 'translateZ(12px) rotate(45deg)' }} />
                    <div className="relative flex items-start justify-between mb-12" style={{ transform: 'translateZ(28px)' }}>
                      <span className={`text-xs font-semibold tracking-[.16em] ${isActive ? 'text-white/45' : 'text-gray-400'}`}>0{key === 'finance' ? '1' : '2'}</span>
                      <span className={`flex h-12 w-12 items-center justify-center ${isActive ? item.accent : 'bg-[#17171a]'} shadow-[4px_4px_0_rgba(23,23,26,.16)]`}><ItemIcon className="h-5 w-5 text-white" /></span>
                    </div>
                    <div className="relative" style={{ transform: 'translateZ(22px)' }}>
                      <p className={`mb-2 text-xs font-semibold uppercase tracking-[.14em] ${isActive ? 'text-[#ff8ac5]' : 'text-[#E6007E]'}`}>{item.eyebrow}</p>
                      <h3 className="text-2xl font-semibold tracking-tight">{item.label}</h3>
                      <p className={`mt-3 max-w-xs text-sm leading-relaxed ${isActive ? 'text-white/60' : 'text-gray-500'}`}>{item.outcomes[0]}</p>
                    </div>
                    <span className={`absolute bottom-6 right-6 text-xs font-semibold uppercase tracking-wider ${isActive ? 'text-white/70' : 'text-gray-500'}`} style={{ transform: 'translateZ(30px)' }}>{isActive ? 'Selected' : 'Select'} <span className="ml-1 text-base">↗</span></span>
                  </motion.button>
                );
              })}
            </div>

            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-5 border border-white/75 bg-white/45 p-7 sm:p-9 shadow-[8px_10px_0_rgba(23,23,26,.06)] backdrop-blur-xl"
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
          </div>
        </div>
      </div>
    </section>
  );
}
