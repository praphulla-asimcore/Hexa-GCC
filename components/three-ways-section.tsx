'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Building2, Boxes, Compass } from 'lucide-react';
import TiltCard from '@/components/tilt-card';

const ways = [
  {
    number: '01',
    label: 'In your market',
    icon: Building2,
    title: 'Employ, operate and comply where you already are.',
    body: 'You have an operation in-country, or you are about to. We employ your people lawfully, run payroll and compliance, and handle the legal, secretarial, procurement, logistics and workspace layer underneath.',
    href: '/in-market',
  },
  {
    number: '02',
    label: 'In our centres',
    icon: Boxes,
    title: 'Build a function you cannot hire locally.',
    body: 'Junior, mid and senior professionals assembled to the shape your requirement needs, working from our own centres of excellence in finance, technology and people. Employed by us, directed by you.',
    href: '/capability-centres',
  },
  {
    number: '03',
    label: 'Before you commit',
    icon: Compass,
    title: 'Design the operation before you build it.',
    body: 'Market entry, corporate structuring, regulatory restructuring and automation advisory. Strategy without execution creates plans. Execution without strategy creates noise.',
    href: '/advisory',
  },
];

export default function ThreeWaysSection() {
  return (
    <section id="three-ways" className="py-24 bg-[#f7f7fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-4">Three ways to work with Hexa</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
            Pick the shape your requirement needs.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 border border-gray-200 rounded-xl overflow-hidden bg-white">
          {ways.map((way, index) => {
            const Icon = way.icon;
            return (
              <motion.a
                key={way.number}
                href={way.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="block"
              >
                <TiltCard className="group h-full p-8 border-r border-gray-200 last:border-r-0 hover:bg-[#fffafd] transition-colors">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-bold tracking-[.1em] text-gray-400">{way.number}</span>
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-[.12em] px-2.5 py-1 rounded bg-[#ffe9f4] text-[#8d0d51]">
                      {way.label}
                    </span>
                  </div>
                  <div className="w-11 h-11 bg-[#080818] rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug min-h-[56px]">{way.title}</h3>
                  <p className="text-sm text-gray-600 mb-6 min-h-[130px]">{way.body}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E6007E]">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </TiltCard>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
