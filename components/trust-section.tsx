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
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trust & <span className="gradient-text">Risk Reduction</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Your data security and operational excellence are non-negotiable. 
            Here&apos;s how we ensure both.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems?.map((item, index) => {
            const IconComponent = item?.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
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
