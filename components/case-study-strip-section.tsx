'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TiltCard from '@/components/tilt-card';

const studies = [
  {
    sector: 'Technology',
    headline: 'Delivery centre built and operated for a global technology client',
    summary: 'Designed, built and ran a customised delivery centre over five years, including corporate structures, workspace and workforce.',
  },
  {
    sector: 'Cybersecurity',
    headline: 'Engineering capability stood up for a cybersecurity client',
    summary: 'A forty-person development team and a working engineering facility inside twelve months, without a standalone legal entity.',
  },
  {
    sector: 'Public sector',
    headline: 'Workforce platform for a national programme',
    summary: 'Almost five years supporting a mission-critical public sector operation under strict payroll governance and statutory compliance.',
  },
];

export default function CaseStudyStripSection() {
  return (
    <section className="py-24 bg-[#f7f7fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-4">Proof, not promises</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
            A sample of the work.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {studies.map((study, index) => (
            <motion.a
              key={study.headline}
              href="/clients"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="block"
            >
              <TiltCard className="h-full bg-white border border-gray-200 rounded-xl p-7 hover:border-[#E6007E]/40 transition-colors">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-[.12em] px-2.5 py-1 rounded bg-[#ffe9f4] text-[#8d0d51] mb-4">
                  {study.sector}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">{study.headline}</h3>
                <p className="text-sm text-gray-600 mb-6">{study.summary}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E6007E]">
                  See the clients we work with <ArrowRight className="w-4 h-4" />
                </span>
              </TiltCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
