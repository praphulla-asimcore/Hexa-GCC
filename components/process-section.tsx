'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wrench } from 'lucide-react';
import TiltCard from '@/components/tilt-card';
import { iconMap, IconKey } from '@/lib/icon-map';

export interface ProcessStep {
  number: string;
  week: string;
  title: string;
  description: string;
  icon: IconKey;
}

const defaultSteps: ProcessStep[] = [
  {
    number: '01',
    week: 'Week 1-2',
    title: 'Discovery and scope definition',
    description: 'Current state, systems, entities, volumes, statutory calendar, constraints and success measures. Output is a signed scope document.',
    icon: 'search',
  },
  {
    number: '02',
    week: 'Week 2-4',
    title: 'Process mapping and SOP capture',
    description: 'Every in-scope process documented to task level, with controls, approvals and exceptions. Output is a process manual you own.',
    icon: 'file-search',
  },
  {
    number: '03',
    week: 'Week 3-6',
    title: 'Pod design and recruitment',
    description: 'Roles, qualifications, lead and review model defined. You interview and select. Nobody joins the pod without your approval.',
    icon: 'puzzle',
  },
  {
    number: '04',
    week: 'Week 5-8',
    title: 'Shadow',
    description: 'Your team executes, our team observes and documents variance against the SOP.',
    icon: 'eye',
  },
  {
    number: '05',
    week: 'Week 7-10',
    title: 'Reverse shadow',
    description: 'Our team executes, your team reviews. Errors are caught here, not in production.',
    icon: 'refresh-ccw',
  },
  {
    number: '06',
    week: 'Week 9-12',
    title: 'Go-live and hypercare',
    description: 'Full handover with daily checkpoint calls through the first close cycle, then weekly.',
    icon: 'play-circle',
  },
  {
    number: '07',
    week: 'Ongoing',
    title: 'Steady state and governance',
    description: 'Weekly operations call, monthly service review, quarterly business review against a documented improvement target.',
    icon: 'refresh-cw',
  },
];

const defaultTools = [
  'QuickBooks', 'Xero', 'NetSuite', 'SAP', 'React', 'Node.js', 'AWS', 'Excel/Sheets'
];

export interface ProcessSectionProps {
  heading?: string;
  subheading?: string;
  steps?: ProcessStep[];
  tools?: string[] | null;
}

export default function ProcessSection({
  heading = 'How a Hexa capability becomes operational',
  subheading = 'Seven stages, a published timeline, and a named owner at each one. A ten-person finance transition runs eight to twelve weeks.',
  steps = defaultSteps,
  tools = defaultTools,
}: ProcessSectionProps) {
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
            {heading}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {subheading}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E6007E] to-purple-500" />
          <div className="space-y-12">
            {steps?.map((step, index) => {
              const IconComponent = step?.icon ? iconMap[step.icon] : null;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step?.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`lg:flex items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <TiltCard className={`bg-white border border-gray-200 rounded-2xl p-6 inline-block w-full max-w-md hover:border-[#E6007E]/40 transition-colors ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                      <div className={`flex items-center gap-4 mb-1 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                        <span className="text-3xl font-bold gradient-text">{step?.number}</span>
                        <h3 className="text-lg font-bold text-gray-900">{step?.title}</h3>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">{step?.week}</p>
                      <p className="text-gray-800">{step?.description}</p>
                    </TiltCard>
                  </div>
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
        {tools && tools.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8 inline-block">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-[#E6007E]" />
              <h4 className="font-bold text-gray-900">We Align With Your Stack</h4>
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
        )}
      </div>
    </section>
  );
}
