'use client';

import { motion } from 'framer-motion';
import { FileText, Calendar, Calculator, BookOpen } from 'lucide-react';
import TiltCard from '@/components/tilt-card';

const resources = [
  { icon: FileText, title: 'The operating model', description: 'How a Hexa function becomes operational, stage by stage.' },
  { icon: Calendar, title: 'A market compliance calendar', description: 'Statutory filing dates for the markets we work in.' },
  { icon: Calculator, title: 'The cost comparison model', description: 'A downloadable model for comparing embedded-team cost against a local hire.' },
];

export default function ResourcesContent() {
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
              <BookOpen className="w-7 h-7 text-[#E6007E]" />
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-6"
          >
            Resources
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl leading-[1.05] font-semibold mb-6"
          >
            Not ready to talk? Start here.
          </motion.h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                >
                  <TiltCard className="h-full border border-gray-200 rounded-2xl p-6 hover:border-[#E6007E]/40 transition-colors">
                    <div className="w-11 h-11 gradient-bg rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Pending</span>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <TiltCard className="bg-gray-50 border border-gray-200 rounded-2xl p-8 max-w-lg mx-auto text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Get notified when they're ready</h2>
              <p className="text-gray-600 text-sm mb-6">Email address only — nothing else.</p>
              <a
                href="mailto:praphulla@hexamatics.com?subject=Resource%20access%20request"
                className="inline-flex items-center justify-center gap-2 w-full gradient-bg px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Email us for early access
              </a>
            </TiltCard>
          </motion.div>
        </div>
      </section>
    </>
  );
}
