'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const cards = [
  {
    k: '01',
    tag: 'Capability centre',
    title: 'A whole function, not a headcount.',
    body: 'Junior, mid and senior professionals assembled to the shape your requirement actually needs. Not one hire you promote past their depth, but a working function with execution at the base and judgement above it, employed by us and directed by you.',
    chips: ['Finance', 'Technology', 'People'],
    cta: 'See how a function is built',
    href: '/embedded-team#capability-centre',
  },
  {
    k: '02',
    tag: 'Pod engagement',
    title: 'A desk, a floor, and everything holding it up.',
    body: 'Your people, our building. Dedicated seats on a secured floor with managed IT, network failover, backup power, and cover when someone is out. You direct the work. Everything underneath the work is ours.',
    chips: ['Dedicated seats', 'Managed IT', 'Continuity cover'],
    cta: 'See what a seat includes',
    href: '/embedded-team#pod-engagement',
  },
];

export default function IntentForkSection() {
  return (
    <section className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <motion.a
            key={card.k}
            href={card.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="group border border-gray-200 rounded-2xl p-9 hover:border-[#E6007E]/40 hover:bg-[#fffafd] transition-colors"
          >
            <span className="text-xs font-semibold uppercase tracking-[.1em] text-gray-400">{card.tag}</span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-3 mb-4 max-w-sm">{card.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6 min-h-[110px]">{card.body}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {card.chips.map((chip) => (
                <span key={chip} className="text-xs border border-gray-200 rounded px-2.5 py-1 text-gray-500 group-hover:border-[#E6007E]/30 group-hover:text-[#8d0d51] transition-colors">
                  {chip}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E6007E]">
              {card.cta} <ArrowRight className="w-4 h-4" />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
