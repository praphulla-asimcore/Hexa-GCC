'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Landmark, Cpu, Users, Camera } from 'lucide-react';

const centres = [
  { icon: Landmark, name: 'Finance', description: 'Accounting, bookkeeping, compliance, audit support, and financial reporting.' },
  { icon: Cpu, name: 'Technology', description: 'Software engineering, DevOps, cloud, QA, data and automation, application support.' },
  { icon: Users, name: 'People', description: 'Multi-country payroll, HRIS administration, recruitment support, onboarding and offboarding.' },
];

export default function AboutContent() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div>
      {/* Intro */}
      <section className="relative overflow-hidden bg-[#080818] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[.14em] text-[#E6007E] mb-5">Established 2002</p>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">Built to be a long-term operating partner, not a vendor.</h1>
        </div>
      </section>

      {/* About Hexa */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              About <span className="gradient-text">Hexa</span>
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Founded in 2002 as a telecom consultancy firm, Hexa Business has grown into a trusted
                operating partner for companies across the Telecommunications, Technology, and Banking sectors.
              </p>
              <p>
                Over the years, we expanded beyond advisory into end-to-end HR and talent solutions —
                supporting organizations with reliable, high-quality workforce infrastructure across
                multiple industries. Our strength has always been the same: structured execution,
                disciplined delivery, and long-term partnership.
              </p>
              <p className="font-medium text-gray-900">
                As our clients scaled, so did their operational needs.
              </p>
              <div className="pl-6 border-l-4 border-[#E6007E] space-y-2 text-gray-800">
                <p>Finance became more complex.</p>
                <p>Technology delivery became a bottleneck.</p>
                <p>People operations needed dedicated ownership.</p>
              </div>
              <p className="font-semibold gradient-text text-xl">
                Hexa was established to run all three, under one accountable owner.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Led by <span className="gradient-text">Accountable People</span>
          </h2>
          <div className="flex items-center gap-5 bg-white rounded-2xl p-6 border border-gray-200 max-w-md">
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl font-bold">PS</span>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">Praphulla Subedi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three centres */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Three <span className="gradient-text">Centres of Excellence</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {centres.map((centre) => {
              const Icon = centre.icon;
              return (
                <div key={centre.name} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <div className="w-11 h-11 bg-[#080818] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{centre.name}</h3>
                  <p className="text-gray-600 text-sm">{centre.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facility placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-dashed border-gray-300 rounded-2xl p-10 text-center bg-white">
            <Camera className="w-8 h-8 text-gray-300 mx-auto mb-3" />
            <p className="text-sm text-gray-500">Facility and team photographs pending.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
