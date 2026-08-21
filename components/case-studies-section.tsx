'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2 } from 'lucide-react';

const clients = [
  { name: 'Guardware Australia', scope: 'IT Development & Payroll' },
  { name: 'Seven Sunday Films', scope: 'Financial Advisory' },
  { name: 'SBC Kudos', scope: 'Finance & Payroll' },
  { name: 'Time Energy Solar Emit', scope: 'Payroll' },
];

export default function CaseStudiesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1 bg-[#E6007E]/10 text-[#E6007E] rounded-full text-sm font-medium mb-4">
            Who We Work With
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by teams <span className="gradient-text">across industries</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            A cross-section of the finance, technology, and payroll work we run for clients today.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients?.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-11 h-11 gradient-bg rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{client.name}</h3>
              <p className="text-gray-600 text-sm">{client.scope}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
