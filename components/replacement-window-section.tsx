'use client';

import { motion } from 'framer-motion';

export default function ReplacementWindowSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#080818] text-white">
      <div
        className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full opacity-[0.12] blur-[120px] pointer-events-none"
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
          Replacement window
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6"
        >
          If someone leaves, a replacement is submitted within 5–7 days.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg text-white/65 leading-relaxed"
        >
          Replacement is our cost and our problem, not yours. We move fast so the role stays covered.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-6 text-white border-l-2 border-[#E6007E] pl-4"
        >
          We ensure there is no gap in the operation.
        </motion.p>
      </div>
    </section>
  );
}
