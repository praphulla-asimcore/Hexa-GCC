'use client';

import { motion } from 'framer-motion';
import TiltCard from '@/components/tilt-card';

const rungs = [
  { name: 'Senior', description: 'Judgement, exceptions, escalation, direction', width: '56%' },
  { name: 'Mid', description: 'Review, control, reporting, supervision', width: '76%' },
  { name: 'Junior', description: 'Daily execution, volume, first-line delivery', width: '100%' },
];

export default function LadderSection() {
  return (
    <section className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-4">The shape, not the headcount</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
            A growing company needs a function. It cannot afford to hire one.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A junior alone is affordable and insufficient. A senior alone is sufficient and unaffordable.
            Most companies hire the junior, promote them past their depth, and carry the risk quietly.
            We assemble the function instead: execution at the base, review in the middle, judgement above
            it, each level a named person who knows your business.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {rungs.map((rung, index) => (
            <motion.div
              key={rung.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{ width: rung.width }}
            >
              <TiltCard style={{ width: '100%' }} className="border border-gray-200 rounded-xl px-6 py-5 hover:border-[#E6007E]/40 hover:bg-[#fffafd] transition-colors">
                <div className="flex items-baseline gap-5 flex-wrap">
                  <span className="font-serif text-2xl text-gray-900 min-w-[88px]">{rung.name}</span>
                  <span className="text-gray-600">{rung.description}</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-gray-700 border-l-2 border-[#E6007E] pl-4 max-w-2xl">
          Assembled to your requirement, not to a template. You tell us where the volume sits and where
          the judgement is needed. We build to that and adjust it as the function grows.
        </p>
      </div>
    </section>
  );
}
