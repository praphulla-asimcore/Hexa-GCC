'use client';

import { motion } from 'framer-motion';
import { Award, Lock, Server, Building2, ShieldCheck, CheckCircle } from 'lucide-react';

const certifications = [
  { label: 'ISO 27001', caption: 'Information security management' },
  { label: 'ISO 9001', caption: 'Quality management systems' },
  { label: 'ACCA Approved Employer', caption: 'Recognized training & development standard' },
];

const securityPoints = [
  'Work performed directly on client systems and platforms — data never leaves your environment',
  'NDA-protected engagements across every account',
  'Least-privilege access controls, granted per role',
  'Full audit trail on all transactions',
  'Encrypted data transmission for all remote access channels',
];

const facilityPoints = [
  '120-person delivery centre in Kathmandu, Nepal',
  '24-hour security guard and CCTV surveillance',
  'Dual network connectivity for uptime redundancy',
  'Backup power supply',
  '24-hour operational office building',
];

const slaPoints = [
  { label: 'Go-live', value: '15 days from contract signing' },
  { label: 'Month-end close', value: '5-7 business days' },
  { label: 'Query response', value: 'Within 24 hours' },
  { label: 'Reconciliations', value: 'Weekly cadence' },
];

export default function TrustPageContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#17171a] text-white py-28 lg:py-32">
        <div className="absolute inset-0 grid-paper opacity-70" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-7">Security &amp; Compliance</p>
          <h1 className="text-5xl sm:text-6xl leading-[.98] tracking-[-.04em] font-semibold mb-6">Accountability is a system, not a promise.</h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            Everything a security review asks for, in one place — certifications, data handling, access controls,
            SLAs, and facility continuity.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Award className="w-6 h-6 text-[#E6007E]" />
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Certifications</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
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

      {/* Data handling */}
      <section className="py-24 bg-[#f6f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-6 h-6 text-[#E6007E]" />
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Where your data lives</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Client data never rests on Hexa infrastructure.</strong> Our team works directly inside
              your own systems and platforms — your ERP, your accounting software, your HRIS. There is no
              separate Hexa database holding a copy of your records.
            </p>
            <p className="text-gray-600 leading-relaxed">
              That removes an entire category of data-residency risk: there is nothing to transfer, replicate,
              or secure outside the environment you already control and audit.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <ul className="space-y-4">
              {securityPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-700">
                  <Lock className="w-4 h-4 text-[#E6007E] flex-shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SLA framework */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <ShieldCheck className="w-6 h-6 text-[#E6007E]" />
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">SLA &amp; KPI framework</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#ded9d3] border border-[#ded9d3]">
            {slaPoints.map((item) => (
              <div key={item.label} className="bg-white p-6">
                <p className="text-xs font-semibold text-[#E6007E] uppercase tracking-wider mb-2">{item.label}</p>
                <p className="text-lg font-semibold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility & continuity */}
      <section className="py-24 bg-[#f6f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Building2 className="w-6 h-6 text-[#E6007E]" />
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Facility &amp; continuity</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
            {facilityPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4">
                <CheckCircle className="w-4 h-4 text-[#E6007E] flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
