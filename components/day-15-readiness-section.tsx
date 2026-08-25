'use client';

import { motion } from 'framer-motion';
import { Laptop, Network, GraduationCap, ClipboardList, UserCheck, CheckCircle2 } from 'lucide-react';
import TiltCard from '@/components/tilt-card';

const readinessItems = [
  { icon: Laptop, label: 'At office, with a laptop issued' },
  { icon: Network, label: 'Strong dual network connectivity' },
  { icon: GraduationCap, label: 'HR orientation done' },
  { icon: ClipboardList, label: 'Scope briefing done' },
  { icon: UserCheck, label: 'Introduced to the immediate supervisor on your side' },
  { icon: CheckCircle2, label: 'Ready to start the engagement' },
];

export default function Day15ReadinessSection() {
  return (
    <section className="py-24 bg-[#f7f7fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-4">Day 15 readiness</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
            Not just hired. Ready to work.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            By the time your engagement goes live, everything underneath the work is already in place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {readinessItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
              >
                <TiltCard className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-4 h-full hover:border-[#E6007E]/40 transition-colors">
                  <Icon className="w-5 h-5 text-[#E6007E] flex-shrink-0" />
                  <span className="text-gray-800 text-sm font-medium">{item.label}</span>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
