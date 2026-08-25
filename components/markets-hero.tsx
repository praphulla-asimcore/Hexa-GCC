'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function MarketsHero() {
  return (
    <section className="relative overflow-hidden bg-[#080818] text-white py-24 lg:py-28">
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
            <Globe className="w-7 h-7 text-[#E6007E]" />
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-6"
        >
          13 markets, one governance model
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl leading-[1.05] font-semibold mb-6"
        >
          Markets we operate in, in depth.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed"
        >
          We handle the regulators, the statutory calendar, and the reporting standard in each market below.
          Other jurisdictions are scoped on request.
        </motion.p>
      </div>
    </section>
  );
}
