'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Building2, Users, Zap, Search, UserCheck, Wallet } from 'lucide-react';

const teamBenefits = [
  'Access to Specialized Talent - Without Geography Limits',
  'Optimized Cost Structure',
  'Scalability Without Rebuilding',
  'Process-Driven, Not Personality-Driven',
  'Reduced Key-Person Risk',
  'Objective Performance Metrics',
];

const operatingAdvantages = [
  'Access to Experienced Talent',
  'Controlled Overhead Cost',
  'Seamless Scalability',
  'Dedicated Focus',
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery + Scope Mapping',
    description: 'Deep dive into your current state, country requirements, pain points, and desired outcomes. We map statutory deadlines and define success metrics.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Team Sourcing, Interview and Onboarding',
    description: 'Right finance professionals, fully onboarded before day one after you interview and select.',
    icon: UserCheck,
  },
  {
    number: '03',
    title: 'Payroll Management',
    description: 'Hexa manages the payroll of the team on monthly basis with transparent cost structure.',
    icon: Wallet,
  },
];

export default function PainPointsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* Effective Teams Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Most Effective Finance Teams Aren&apos;t Built by{' '}
              <span className="gradient-text">Geography.</span>
            </h2>
            <p className="text-xl text-gray-700 font-medium">
              They&apos;re built by design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10"
          >
            <p className="text-gray-700 text-lg mb-6 text-center">
              Companies that structure dedicated remote finance teams gain:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {teamBenefits?.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <CheckCircle className="w-5 h-5 text-[#E6007E] flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-gray-700 text-lg">
              Effectiveness isn&apos;t about proximity.
            </p>
            <p className="text-xl font-semibold gradient-text mt-2">
              It&apos;s about structure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do & Who We Are Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What We Do */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What We <span className="gradient-text">Do</span>
              </h2>
              <p className="text-gray-700 text-lg">
                We build and operate structured remote teams working exclusively for your business 
                based on your requirement. You retain control. We build and manage the structure.
              </p>
            </motion.div>

            {/* Who We Are */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Who We <span className="gradient-text">Are</span>
              </h2>
              <p className="text-gray-700 text-lg">
                We specialize in building remote finance infrastructure for global firms. From our 
                hub in Nepal, we recruit, house, and manage elite finance talent tailored to your 
                specific requirements. We provide the physical office, the talent architecture, 
                and the delivery model; you get a professional finance team that is built for 
                scale and fully integrated into your business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Operating Advantage Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 20 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#E6007E]/10 rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4 text-[#E6007E]" />
              <span className="text-[#E6007E] text-sm font-medium">Competitive Edge</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Operating <span className="gradient-text">Advantage</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              A dedicated Nepal-based finance team transforms remote work into a competitive edge. 
              By decoupling your talent search from your local geography, you gain:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4 mb-10"
          >
            {operatingAdvantages?.map((advantage, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <CheckCircle className="w-6 h-6 text-[#E6007E] flex-shrink-0" />
                <span className="text-gray-800 font-semibold text-lg">{advantage}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center bg-gradient-to-r from-[#E6007E]/5 to-purple-500/5 rounded-2xl p-8 border border-[#E6007E]/10"
          >
            <p className="text-xl font-semibold text-gray-900">
              Remote team setup becomes an <span className="gradient-text">operating advantage.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Work Together Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref4}
            initial={{ opacity: 0, y: 20 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How We <span className="gradient-text">Work Together</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A structured operating model with defined ownership at every stage. 
              No execution without documentation. No deliverables without review.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps?.map((step, index) => {
              const IconComponent = step?.icon;
              return (
                <motion.div
                  key={step?.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView4 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                      {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                    </div>
                    <span className="text-sm font-bold text-[#E6007E]">Step {step?.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step?.title}</h3>
                  <p className="text-gray-600">{step?.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
