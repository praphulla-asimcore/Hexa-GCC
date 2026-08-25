'use client';

import { motion } from 'framer-motion';
import { FileSignature, Users, MessagesSquare, Rocket } from 'lucide-react';
import TiltCard from '@/components/tilt-card';

const steps = [
  { icon: FileSignature, day: 'Day 1', title: 'Brief agreed', description: 'We confirm scope, seniority and the shape of the role with you.' },
  { icon: Users, day: 'Day 1–5', title: 'Shortlisted resources submitted', description: 'You receive a shortlist of vetted candidates matched to the brief.' },
  { icon: MessagesSquare, day: 'Day 6–10', title: 'You interview', description: 'You interview and select. Nobody joins without your decision.' },
  { icon: Rocket, day: 'Day 10–15', title: 'Offer issued and go live', description: 'Offer issued, accepted, and the engagement goes live.' },
];

export default function BriefToLiveSection() {
  return (
    <section className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">How we recruit</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
            Brief to live in 15 days.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Four stages, each with a defined window. You interview and decide at every step — nobody is
            placed without your approval.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <TiltCard className="h-full border border-gray-200 rounded-xl p-6 hover:border-[#E6007E]/40 transition-colors">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 bg-[#080818] rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-[#E6007E] uppercase tracking-wider">{step.day}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
