'use client';

import { motion } from 'framer-motion';
import { FileText, Building2, Handshake } from 'lucide-react';
import TiltCard from '@/components/tilt-card';

const currentClients = ['Guardware Australia', 'Seven Sunday Films', 'SBC Kudos', 'Time Energy Solar Emit'];

export default function ClientsContent() {
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
              <Handshake className="w-7 h-7 text-[#E6007E]" />
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-6"
          >
            Case studies
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl leading-[1.05] font-semibold mb-6"
          >
            Who we work with.
          </motion.h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">Current engagements</p>
          <div className="flex flex-wrap justify-center gap-3">
            {currentClients.map((client, index) => (
              <motion.span
                key={client}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:border-[#E6007E]/40 hover:text-[#8d0d51] transition-colors"
              >
                <Building2 className="w-3.5 h-3.5 text-[#E6007E]" />
                {client}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-dashed border-gray-300 rounded-2xl p-8 text-center bg-white">
                <FileText className="w-6 h-6 text-gray-300 mx-auto mb-4" />
                <p className="text-sm text-gray-500">Case study {i} — pending.</p>
                <p className="text-xs text-gray-400 mt-2">Shape needed, ladder built, retention to date, what it replaced.</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-10">
            Two named references willing to take calls are worth more than the rest of this page combined —
            ask us directly during a consultation.
          </p>
        </div>
      </section>
    </>
  );
}
