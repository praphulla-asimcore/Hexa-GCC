'use client';

import { motion } from 'framer-motion';

export interface RetentionGuaranteeSectionProps {
  badge?: string;
  eyebrow?: string;
  heading?: string;
  body?: string;
  footnote?: string;
}

export default function RetentionGuaranteeSection({
  badge = 'Capability Centre',
  eyebrow = 'Retention, guaranteed',
  heading = 'Every important hire spends their first month at your office.',
  body = 'Flights, visa, accommodation and allowance, arranged and covered once. They meet the team, learn the systems in the room, and go home knowing exactly who they work for. If they do not stay twelve months, that cost is refunded pro rata.',
  footnote = 'A retention promise with terms attached, not a claim about culture.',
}: RetentionGuaranteeSectionProps) {
  return (
    <section className="relative overflow-hidden py-24 bg-[#080818] text-white">
      <div
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full opacity-[0.13] blur-[130px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E6007E, transparent 70%)' }}
      />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block text-[10px] font-semibold uppercase tracking-[.12em] px-2.5 py-1 rounded bg-white/10 border border-white/15 text-[#ff8ac4] mb-4"
          >
            {badge}
          </motion.span>
        )}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.03 }}
          className="text-xs font-semibold uppercase tracking-[.14em] text-[#E6007E] mb-5"
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6"
        >
          {heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg text-white/65 leading-relaxed"
        >
          {body}
        </motion.p>
        {footnote && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-6 text-white border-l-2 border-[#E6007E] pl-4"
          >
            {footnote}
          </motion.p>
        )}
      </div>
    </section>
  );
}
