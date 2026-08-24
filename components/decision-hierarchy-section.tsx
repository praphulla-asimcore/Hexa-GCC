'use client';

import { motion } from 'framer-motion';

const cells = [
  { number: '01', title: 'Control', description: 'You select every person, direct the work, and keep the systems, the access and the IP.' },
  { number: '02', title: 'Quality', description: 'Qualified people, reviewed work, documented controls and a named owner accountable for the output.' },
  { number: '03', title: 'Productivity', description: 'More capability without proportionately more headcount, reviewed and evidenced every quarter.' },
  { number: '04', title: 'Continuity', description: 'Retention you can see, replacement at our cost, and documented cover on every role.' },
  { number: '05', title: 'Speed', description: 'Brief to live in ten days, against three to six months for a local hire.' },
  { number: '06', title: 'Cost', description: 'Materially lower than a local hire on fully loaded cost. Listed last, deliberately.' },
];

export default function DecisionHierarchySection() {
  return (
    <section className="py-28 bg-[#17171a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-4">How we expect to be judged</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-5">
            Cost should confirm the decision, not make it.
          </h2>
          <p className="text-lg text-white/65 leading-relaxed">
            There is always a cheaper country. These are the things we would rather be measured on, in
            the order they matter.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/15 border border-white/15">
          {cells.map((cell, index) => (
            <motion.div
              key={cell.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className={`p-7 ${index === cells.length - 1 ? 'bg-[#242427]' : 'bg-[#17171a]'}`}
            >
              <span className="text-xs font-semibold text-[#E6007E]">{cell.number}</span>
              <h3 className="text-xl font-semibold mt-2 mb-2.5">{cell.title}</h3>
              <p className="text-white/55 leading-relaxed text-sm">{cell.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
