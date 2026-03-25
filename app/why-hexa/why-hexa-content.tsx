'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Globe, CheckCircle, MapPin, Clock, DollarSign, GraduationCap, Building2, Target, Shield, TrendingUp } from 'lucide-react';

const whyHexaDifferentiators = [
  {
    number: '1',
    title: 'Dedicated Team, Not Shared Resources',
    description: 'Your team works exclusively for your business. No pooled accountants. No rotating staff. Clear ownership at every level.',
  },
  {
    number: '2',
    title: 'Built for Scale from Day One',
    description: 'Layered team structure (execution + review). Capacity can expand without restructuring your entire function.',
  },
  {
    number: '3',
    title: 'Infrastructure Included',
    description: 'We provide the office, HR, payroll, supervision, governance, and performance tracking — so you don\'t carry operational overhead.',
  },
  {
    number: '4',
    title: 'Cost Structure Designed, Not Accidental',
    description: 'A tiered team model reduces dependency on high-cost generalists and creates predictable, controlled overhead.',
  },
  {
    number: '5',
    title: 'Reduced Key-Person Risk',
    description: 'Responsibilities are documented, layered, and review-based. Knowledge does not sit with one individual.',
  },
  {
    number: '6',
    title: 'Governance Embedded into the Model',
    description: 'Defined SLAs. Escalation framework. KPI tracking. Documented workflows.',
  },
  {
    number: '7',
    title: 'Flexible Tool & System Alignment',
    description: 'We integrate into your existing stack — not force migration. Your systems. Your reporting standards. Your controls.',
  },
];

const whyNepalReasons = [
  {
    icon: GraduationCap,
    title: 'Skilled Talent Pool',
    description: 'Access to CA, ACCA, and CPA qualified professionals with international accounting standards experience.',
    color: 'text-[#E6007E]',
    bgColor: 'bg-[#E6007E]/10',
  },
  {
    icon: Clock,
    title: 'Time Zone Advantage',
    description: 'NPT (UTC+5:45) provides overlap with APAC morning hours and European afternoon hours, enabling responsive service.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: DollarSign,
    title: 'Cost Efficiency',
    description: '40-60% cost savings compared to in-house hires, without compromising on quality or accountability.',
    color: 'text-green-600',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Globe,
    title: 'English Proficiency',
    description: 'High English proficiency across the workforce ensures seamless communication with global teams.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Building2,
    title: 'Growing GCC Hub',
    description: 'Nepal is emerging as a preferred destination for global capability centers in finance and accounting.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-500/10',
  },
];

const values = [
  {
    icon: Target,
    title: 'Accountability First',
    description: 'Every deliverable has clear ownership, documentation, and review. No handoffs without audit trails.'
  },
  {
    icon: Shield,
    title: 'Compliance Confidence',
    description: 'Country-specific statutory expertise ensures you meet every deadline with proper documentation.'
  },
  {
    icon: Users,
    title: 'Dedicated Teams',
    description: 'Named account leads, not rotating staff. Your team knows your business and grows with you.'
  },
  {
    icon: TrendingUp,
    title: 'Measurable Impact',
    description: 'KPIs on close days, error rates, and response times. We track what matters and improve continuously.'
  }
];

const stats = [
  { value: '8', label: 'Countries Served' },
  { value: '50+', label: 'Finance Professionals' },
  { value: '5-7', label: 'Day Month-End Close' },
  { value: '24hr', label: 'Response SLA' },
];

export default function WhyHexaContent() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div>
      {/* About Hexa Section */}
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
                operating partner for companies across the BPO, Telecommunications, Technology, and Banking sectors.
              </p>
              <p>
                Over the years, we expanded beyond advisory into end-to-end HR and talent solutions — 
                supporting organizations with reliable, high-quality workforce infrastructure across 
                multiple industries and geographies. Our strength has always been the same: structured 
                execution, disciplined delivery, and long-term partnership.
              </p>
              <p className="font-medium text-gray-900">
                As our clients scaled, so did their operational needs.
              </p>
              <div className="pl-6 border-l-4 border-[#E6007E] space-y-2 text-gray-800">
                <p>Finance became more complex.</p>
                <p>Compliance became more demanding.</p>
                <p>Cross-border execution required tighter governance.</p>
              </div>
              <p className="font-semibold gradient-text text-xl">
                Hexa GCC was established to address this evolution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Hexa GCC Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref4}
            initial={{ opacity: 0, y: 20 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              About <span className="gradient-text">Hexa GCC</span>
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Hexa GCC exists to provide growing companies with world-class finance operations — 
                without the complexity and cost of building in-house teams across jurisdictions.
              </p>
              <p className="font-medium text-gray-900 text-xl">
                We believe remote finance should not mean reduced control.
              </p>
              <p>
                Every engagement is built as a structured team model — with documented processes, 
                named ownership, measurable SLAs, and governance frameworks designed for scale.
              </p>
              <p>
                From CPF computations in Singapore to PPh21 in Indonesia, from HMRC VAT in the UK 
                to CRA GST/HST in Canada — we embed country-level compliance capability directly 
                into your dedicated remote finance team.
              </p>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 mt-8">
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  This is not outsourced accounting.
                </p>
                <p className="text-lg text-gray-700">
                  It is <span className="gradient-text font-bold">finance infrastructure</span> — 
                  built remotely, operated professionally, and integrated into your business.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {stats?.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center border border-gray-200">
                <div className="text-3xl font-bold gradient-text mb-2">{stat?.value}</div>
                <div className="text-gray-600 text-sm">{stat?.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These principles guide how we work with every client, every day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values?.map((value, index) => {
              const IconComponent = value?.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
                    {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value?.title}</h3>
                  <p className="text-gray-600 text-sm">{value?.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Hexa Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">Hexa GCC?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Beyond location — this is a better way to build your finance function.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {whyHexaDifferentiators?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{item?.number}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">{item?.title}</h4>
                    <p className="text-gray-600">{item?.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center bg-gradient-to-r from-[#E6007E]/5 to-purple-500/5 rounded-2xl p-8 border border-[#E6007E]/10"
          >
            <p className="text-xl font-semibold text-gray-900">
              Remote teams succeed because they are <span className="gradient-text">structured</span> — not because they are remote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Nepal Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 20 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#E6007E]/10 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4 text-[#E6007E]" />
              <span className="text-[#E6007E] text-sm font-medium">Our Location Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why <span className="gradient-text">Nepal?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Nepal offers a unique combination of talent, timezone, and cost advantages 
              for global finance operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyNepalReasons?.map((reason, index) => {
              const IconComponent = reason?.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className={`w-14 h-14 ${reason?.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                    {IconComponent && <IconComponent className={`w-7 h-7 ${reason?.color}`} />}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{reason?.title}</h3>
                  <p className="text-gray-600">{reason?.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
