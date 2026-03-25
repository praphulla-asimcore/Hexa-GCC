'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, ArrowRightLeft, PlayCircle, CheckSquare, BarChart3, Wrench } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery + Scope Mapping',
    description: 'Deep dive into your current state, country requirements, pain points, and desired outcomes. We map statutory deadlines and define success metrics.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Team Selection & Onboarding',
    description: 'Right finance professionals, fully onboarded before day one.',
    icon: ArrowRightLeft,
  },
  {
    number: '03',
    title: 'Execution Cadence',
    description: 'Daily transaction processing, weekly reconciliations, monthly close cycles. Clear ownership with your dedicated team lead.',
    icon: PlayCircle,
  },
  {
    number: '04',
    title: 'Client Review, Approvals & Governance',
    description: 'Structured review cycles, approval workflows, and direct communication with your finance leadership — ensuring transparency, control, and no surprises.',
    icon: CheckSquare,
  },
  {
    number: '05',
    title: 'Partnership Performance & Continuous Alignment',
    description: 'Ongoing performance tracking, priority alignment, and process refinement — guided by your business needs, not a fixed outsourcing playbook.',
    icon: BarChart3,
  },
];

const tools = [
  'Zoho Books', 'Xero', 'QuickBooks', 'NetSuite', 'SAP', 'Tally', 'Excel/Sheets'
];

export default function ProcessSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How We <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A structured approach with clear ownership at every stage. 
            No handoffs without documentation, no deliverables without review.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E6007E] to-purple-500" />

          <div className="space-y-12">
            {steps?.map((step, index) => {
              const IconComponent = step?.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step?.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`lg:flex items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`bg-white border border-gray-200 rounded-2xl p-6 inline-block w-full max-w-md ${
                      isEven ? 'lg:ml-auto' : 'lg:mr-auto'
                    }`}>
                      <div className={`flex items-center gap-4 mb-3 ${
                        isEven ? 'lg:flex-row-reverse' : ''
                      }`}>
                        <span className="text-3xl font-bold gradient-text">{step?.number}</span>
                        <h3 className="text-lg font-bold text-gray-900">{step?.title}</h3>
                      </div>
                      <p className="text-gray-800">{step?.description}</p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="hidden lg:flex w-16 h-16 gradient-bg rounded-full items-center justify-center shadow-lg shadow-[#E6007E]/20 z-10">
                    {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
                  </div>

                  <div className="flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8 inline-block">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-[#E6007E]" />
              <h4 className="font-bold text-gray-900">We Work With Your Stack</h4>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {tools?.map((tool, i) => (
                <span key={i} className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium border border-gray-200">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
