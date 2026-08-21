'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Layers, Users, Clock, Lock, FileCheck, Eye, UserCheck } from 'lucide-react';

const trustItems = [
  {
    icon: Lock,
    title: 'Security & Confidentiality',
    points: [
      'NDA-protected engagements',
      'Least-privilege access controls',
      'Full audit trail on all transactions',
      'Encrypted data transmission'
    ]
  },
  {
    icon: Layers,
    title: 'Quality Assurance',
    points: [
      'Multi-layer review process',
      'Standardized templates & checklists',
      'Reconciliation-first approach',
      'Error tracking & resolution log'
    ]
  },
  {
    icon: UserCheck,
    title: 'Ownership Model',
    points: [
      'Named account lead assigned',
      'Clear escalation matrix',
      'Direct communication channels',
      'Cross-trained backup resources'
    ]
  },
  {
    icon: Clock,
    title: 'SLAs & Timelines',
    points: [
      'Month-end close: 5-7 business days',
      'Query response: within 24 hours',
      'Reconciliations: weekly cadence',
      'Compliance deadlines: tracked & met'
    ]
  }
];

export default function TrustSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-28 hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-paper opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-left mb-14 max-w-3xl relative"
        >
          <p className="eyebrow mb-4">Built for scrutiny</p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-5">
            Accountability is a system, not a promise.
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Your data security and operational excellence are non-negotiable. 
            Here&apos;s how we ensure both.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/15 border border-white/15 relative">
          {trustItems?.map((item, index) => {
            const IconComponent = item?.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#17171a] p-7 hover:bg-[#242427] transition-colors"
              >
                <div className="w-11 h-11 bg-[#E6007E] flex items-center justify-center mb-5">
                  {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{item?.title}</h3>
                <ul className="space-y-2">
                  {item?.points?.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-[#E6007E]">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
