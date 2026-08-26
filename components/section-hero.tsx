'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const BOOKING_URL = 'https://www.hnpl.business/call';

export interface SectionHeroProps {
  eyebrow: string;
  title: string;
  tagline: string;
  ctaLabel?: string | null;
}

// Same dark radial-glow hero pattern used inside components/centre-page-template.tsx,
// copied rather than shared so that file (used by the finance/technology/people
// capability-centre pages) is never touched.
export default function SectionHero({ eyebrow, title, tagline, ctaLabel = 'Book a 20-minute consultation' }: SectionHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#080818] text-white py-24 lg:py-32">
      <div
        className="absolute -top-32 right-0 w-[560px] h-[560px] rounded-full opacity-[0.13] blur-[130px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E6007E, transparent 70%)' }}
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative w-16 h-16 mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full border border-[#E6007E]/40"
          />
          <div className="relative w-16 h-16 rounded-full bg-white/5 border border-white/15 flex items-center justify-center">
            <Sparkles className="w-7 h-7 text-[#E6007E]" />
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-6"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-semibold mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-white/65 max-w-2xl leading-relaxed mb-10"
        >
          {tagline}
        </motion.p>
        {ctaLabel && (
          <motion.a
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-bg px-7 py-4 rounded-full font-semibold hover:bg-[#b80065] transition-colors"
          >
            {ctaLabel} <ArrowRight className="w-5 h-5" />
          </motion.a>
        )}
      </div>
    </section>
  );
}
