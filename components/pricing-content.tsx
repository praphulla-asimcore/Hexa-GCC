'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Tags } from 'lucide-react';
import TiltCard from '@/components/tilt-card';

const BOOKING_URL = 'https://www.hnpl.business/call';

const tiers = [
  { tier: 'Junior', description: 'Full-time execution. Priced as a fixed monthly fee per person.' },
  { tier: 'Mid', description: 'Review, control, and reporting, allocated in a fixed block of time.' },
  { tier: 'Senior', description: 'Judgement and escalation, allocated in a smaller fixed block.' },
  { tier: 'Executive', description: 'Direction and board-facing input, allocated occasionally.' },
];

const notes = [
  'The fee is fixed per person, not a percentage of salary. Your cost does not rise when local wages do.',
  'The senior tiers are not a cost-saving argument. They are access to seniority you cannot buy in fractions locally.',
  'Minimum term, notice period, and replacement terms are agreed up front and stated plainly in the contract.',
];

export default function PricingContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#080818] text-white py-24 lg:py-28">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full opacity-[0.13] blur-[130px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #E6007E, transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative w-16 h-16 mx-auto mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full border border-[#E6007E]/40"
            />
            <div className="relative w-16 h-16 rounded-full bg-white/5 border border-white/15 flex items-center justify-center">
              <Tags className="w-7 h-7 text-[#E6007E]" />
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-6"
          >
            How pricing works
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl leading-[1.05] font-semibold mb-6"
          >
            Priced by tier, scoped on a call.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed"
          >
            Each tier carries a fixed monthly fee per person. Exact figures depend on role, market, and
            allocation — we scope those with you directly rather than publish a generic number that doesn't
            match your situation.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-4 mb-14">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.07 }}
              >
                <TiltCard className="border border-gray-200 rounded-2xl p-6 h-full hover:border-[#E6007E]/40 transition-colors">
                  <span className="font-serif text-2xl text-gray-900">{tier.tier}</span>
                  <p className="text-gray-600 mt-2">{tier.description}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-14">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Embedding fee</h2>
            <p className="text-gray-700">
              A one-off cost per hire, covering the immersion month. Refunded pro rata if retention falls
              short of twelve months.
            </p>
          </div>

          <div className="mb-14">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">A worked example</h2>
            <p className="text-gray-700 leading-relaxed">
              A finance function for a 75-person company typically combines a full-time junior, a mid-level
              professional at half their time, a senior specialist at a fifth of their time, and an
              executive advising occasionally. The blended monthly cost is scoped once we understand your
              countries and volume.
            </p>
          </div>

          <div className="space-y-3">
            {notes.map((note) => (
              <div key={note} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#E6007E] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-sm">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 gradient-bg px-7 py-4 text-white font-semibold rounded-full hover:bg-[#b80065] transition-colors">
              Get your pricing <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
