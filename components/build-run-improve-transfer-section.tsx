'use client';

import { motion } from 'framer-motion';
import TiltCard from '@/components/tilt-card';

const stages = [
  { name: 'Start with 3', description: 'A named team, interviewed and selected by you, running one defined workstream.' },
  { name: 'Scale to 10', description: 'Add seniority and adjacent processes under the same contract and governance.' },
  { name: 'Then 30 or above', description: 'A full function across disciplines, with its own leadership and reporting line.' },
  { name: 'Transfer, optionally', description: 'After an agreed period, the team and the capability can become yours.' },
];

export default function BuildRunImproveTransferSection() {
  return (
    <section className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[.12em] px-2.5 py-1 rounded bg-[#ffe9f4] text-[#8d0d51] mb-4">Capability Centre</span>
          <p className="eyebrow mb-4">Build · Run · Improve · Transfer</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
            A capability centre for companies that do not need a hundred people.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The full capability centre model has always been priced for enterprises building at scale.
            This is the same structure, sized for a company that needs three people now and thirty later,
            with an optional path to make the team your own.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-gray-200 rounded-xl overflow-hidden">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <TiltCard
                className={`h-full p-7 border-r border-gray-200 last:border-r-0 border-t sm:border-t-0 first:border-t-0 ${
                  index === stages.length - 1 ? 'bg-[#fff4fa]' : 'bg-white'
                }`}
              >
                <span className="block font-semibold text-xl text-gray-900 mb-2.5">{stage.name}</span>
                <p className="text-sm text-gray-600 leading-relaxed">{stage.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-gray-700 border-l-2 border-[#E6007E] pl-4 max-w-2xl">
          You are never buying a relationship you cannot end. The transfer option exists so that
          committing early does not mean committing forever.
        </p>
      </div>
    </section>
  );
}
