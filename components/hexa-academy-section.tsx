'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TiltCard from '@/components/tilt-card';
import { academies } from '@/lib/academy-data';

export default function HexaAcademySection() {
  return (
    <section id="hexa-academy" className="py-24 bg-[#f7f7fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-4">Hexa Academy</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
            Gaps get trained, not tolerated.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            No shortlist is ever a perfect fit. When a review identifies a gap between what your work
            needs and what the team currently holds, we close it through structured training rather than
            asking you to live with it or start the search again.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {academies.map((academy, index) => (
            <motion.div
              key={academy.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <TiltCard className="h-full bg-white border border-gray-200 rounded-xl p-6 hover:border-[#E6007E]/40 transition-colors">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#080818] text-white text-xs font-bold tracking-wide mb-4">
                  {academy.number}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2.5">{academy.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{academy.tagline}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between border-l-2 border-[#E6007E] pl-4">
          <p className="text-gray-700 max-w-2xl">
            Certified before interview. Trained to your requirement after selection. Immersed at your
            office before steady state.
          </p>
          <a
            href="/hexa-academy"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E6007E] hover:gap-2.5 transition-all whitespace-nowrap"
          >
            See the full curriculum
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
