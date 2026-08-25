'use client';

import { motion } from 'framer-motion';
import { Award, Lock, Server, Users, ShieldCheck, Scale, Trophy } from 'lucide-react';
import TiltCard from '@/components/tilt-card';

const certifications = [
  { label: 'ISO 27001', caption: 'Certified · certificate reference pending' },
  { label: 'ISO 9001', caption: 'Certified · certificate reference pending' },
  { label: 'ACCA Approved Employer', caption: 'Ref 2000003846 · valid to December 2029' },
  { label: 'Professional indemnity', caption: 'Cover in place' },
];

const awards = [
  { label: 'Top 10 CFO in Nepal', year: '2024', body: 'CEO Insights Asia' },
  { label: 'Excellence in Operational Accounting & Control', year: '2022', body: 'Operational Excellence Award' },
  { label: 'Excellence in Diversity & Inclusion', year: '2020', body: 'Human Resource Excellence Award' },
];

const dataPoints = [
  'Client data stays in your own systems and cloud region',
  'Employees access it as your employee would — through your access controls, not ours',
  'No separate Hexa-side copy of your data',
  'Full session logging on all access',
];

const ownershipPoints = [
  { label: 'Named tower lead and engagement manager' },
  { label: 'Documented escalation matrix' },
  { label: 'Weekly ops call, monthly service review, quarterly business review' },
  { label: 'Cross-trained cover on every role' },
];

const slaPoints = [
  { label: 'Query response', value: 'Within 24 hours' },
  { label: 'Reconciliations', value: 'Weekly cadence' },
  { label: 'Reporting', value: 'Performance reported, not requested' },
];

export default function TrustPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#080818] text-white py-24 lg:py-28">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full opacity-[0.14] blur-[130px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #E6007E, transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative w-16 h-16 mx-auto mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full border border-[#E6007E]/40"
            />
            <div className="relative w-16 h-16 rounded-full bg-white/5 border border-white/15 flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 text-[#E6007E]" />
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-6"
          >
            Built for scrutiny
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl leading-[1.05] font-semibold"
          >
            Accountability is a system, not a promise.
          </motion.h1>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Award className="w-6 h-6 text-[#E6007E]" />
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Certification</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <TiltCard className="bg-gray-50 border border-gray-200 rounded-2xl p-6 h-full hover:border-[#E6007E]/40 hover:shadow-xl hover:shadow-[#E6007E]/5 transition-[border-color,box-shadow]">
                  <Award className="w-6 h-6 text-[#E6007E] mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900">{cert.label}</h3>
                  <p className="text-gray-600 text-sm mt-1">{cert.caption}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Trophy className="w-6 h-6 text-[#E6007E]" />
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Awards & recognition</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <TiltCard className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:border-[#E6007E]/40 hover:shadow-xl hover:shadow-[#E6007E]/5 transition-[border-color,box-shadow]">
                  <div className="flex items-center justify-between mb-4">
                    <Trophy className="w-6 h-6 text-[#E6007E]" />
                    <span className="text-xs font-semibold text-gray-400 tracking-wide">{award.year}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">{award.label}</h3>
                  <p className="text-gray-600 text-sm mt-2">{award.body}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data residency */}
      <section className="py-20 bg-[#f7f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-6 h-6 text-[#E6007E]" />
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Data residency</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Under an employment model, your data sits where it already sits — in your own systems. Your
              embedded team member accesses it as any of your employees would. There is no separate transfer,
              no Hexa-side copy, and no additional jurisdiction to underwrite.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <TiltCard className="bg-white border border-gray-200 rounded-2xl p-8">
              <ul className="space-y-4">
                {dataPoints.map((point, index) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.06 }}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <Lock className="w-4 h-4 text-[#E6007E] flex-shrink-0 mt-1" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* Ownership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Users className="w-6 h-6 text-[#E6007E]" />
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Ownership</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
            {ownershipPoints.map((point, index) => (
              <motion.div
                key={point.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.07 }}
              >
                <TiltCard className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4 h-full hover:border-[#E6007E]/40 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-[#E6007E] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm">{point.label}</span>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLAs */}
      <section className="py-20 bg-[#f7f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-10">SLAs, published monthly</h2>
          <div className="grid sm:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
            {slaPoints.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                whileHover={{ backgroundColor: '#fffafd' }}
                className="bg-white p-6"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6007E] opacity-60" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E6007E]" />
                  </span>
                  <p className="text-xs font-semibold text-[#E6007E] uppercase tracking-wider">{item.label}</p>
                </div>
                <p className="text-lg font-semibold text-gray-900">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-employment */}
      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-6 h-6 text-[#E6007E]" />
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Co-employment and permanent establishment</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is the first thing a competent buyer's counsel will ask about an embedded-team model. Our
            position is being formalized with a written legal opinion.
          </p>
          <div className="border border-dashed border-gray-300 rounded-xl p-6 bg-gray-50">
            <p className="text-sm text-gray-500">Legal opinion reference — pending. Available on request during diligence.</p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
