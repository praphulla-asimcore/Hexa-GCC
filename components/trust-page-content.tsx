'use client';

import { motion } from 'framer-motion';
import { Award, Lock, Server, Users, ShieldCheck, Scale } from 'lucide-react';

const certifications = [
  { label: 'ISO 27001', caption: 'Certified · certificate reference pending' },
  { label: 'ISO 9001', caption: 'Certified · certificate reference pending' },
  { label: 'ACCA Approved Employer', caption: 'Ref 2000003846 · valid to December 2029' },
  { label: 'Professional indemnity', caption: 'Cover in place' },
];

const dataPoints = [
  'Client data stays in your own systems and cloud region',
  'Employees access it as your employee would — through your access controls, not ours',
  'No separate Hexa-side copy of your data',
  'Full session logging on all access',
];

const ownershipPoints = [
  { label: 'Named tower lead and engagement manager', },
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
      <section className="relative overflow-hidden bg-[#080818] text-white py-24 lg:py-28">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-6">Built for scrutiny</p>
          <h1 className="text-4xl sm:text-5xl leading-[1.05] font-semibold mb-6">Accountability is a system, not a promise.</h1>
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
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6"
              >
                <Award className="w-6 h-6 text-[#E6007E] mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">{cert.label}</h3>
                <p className="text-gray-600 text-sm mt-1">{cert.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data residency */}
      <section className="py-20 bg-[#f7f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-6 h-6 text-[#E6007E]" />
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Data residency</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Under an employment model, your data sits where it already sits — in your own systems. Your
              embedded team member accesses it as any of your employees would. There is no separate transfer,
              no Hexa-side copy, and no additional jurisdiction to underwrite.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <ul className="space-y-4">
              {dataPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-700">
                  <Lock className="w-4 h-4 text-[#E6007E] flex-shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
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
            {ownershipPoints.map((point) => (
              <div key={point.label} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
                <ShieldCheck className="w-4 h-4 text-[#E6007E] flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-sm">{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLAs */}
      <section className="py-20 bg-[#f7f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-10">SLAs, published monthly</h2>
          <div className="grid sm:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {slaPoints.map((item) => (
              <div key={item.label} className="bg-white p-6">
                <p className="text-xs font-semibold text-[#E6007E] uppercase tracking-wider mb-2">{item.label}</p>
                <p className="text-lg font-semibold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-employment */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>
    </>
  );
}
