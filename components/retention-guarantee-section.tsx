'use client';

import { motion } from 'framer-motion';

export default function RetentionGuaranteeSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#080818] text-white">
      <div
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full opacity-[0.13] blur-[130px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E6007E, transparent 70%)' }}
      />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-[.14em] text-[#E6007E] mb-5"
        >
          Retention, guaranteed
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6"
        >
          Every important hire spends their first month at your office.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg text-white/65 leading-relaxed"
        >
          Flights, visa, accommodation and allowance, arranged and covered once. They meet the team, learn
          the systems in the room, and go home knowing exactly who they work for. If they do not stay
          twelve months, that cost is refunded pro rata.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-6 text-white border-l-2 border-[#E6007E] pl-4"
        >
          A retention promise with terms attached, not a claim about culture.
        </motion.p>
      </div>
    </section>
  );
}
