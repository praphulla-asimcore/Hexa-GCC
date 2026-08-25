'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight, GraduationCap } from 'lucide-react';
import AcademyExplorer from '@/components/academy-explorer';

const BOOKING_URL = 'https://www.hnpl.business/call';

export default function HexaAcademyContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#080818] text-white py-24 lg:py-28">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.14] blur-[130px] pointer-events-none"
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
              <GraduationCap className="w-7 h-7 text-[#E6007E]" />
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-6"
          >
            Hexa Academy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl leading-[1.05] font-semibold mb-6"
          >
            Gaps get trained, not tolerated.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed"
          >
            No shortlist is ever a perfect fit. When a review identifies a gap between what your work
            needs and what the team currently holds, we close it through structured training rather than
            asking you to live with it or start the search again.
          </motion.p>
        </div>
      </section>

      <AcademyExplorer />

      {/* CTA */}
      <section className="py-20 bg-[#f7f7fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Certified before interview. Trained to your requirement after selection. Immersed at your
            office before steady state.
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-6">
            See how a gap gets closed on a live engagement.
          </h2>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg inline-flex items-center gap-2 px-7 py-4 text-white font-semibold rounded-full hover:bg-[#b80065] transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Book a 20-minute consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
