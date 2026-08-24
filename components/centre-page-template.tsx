'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, FileText } from 'lucide-react';

const BOOKING_URL = 'https://www.hnpl.business/call';

export interface CentrePageProps {
  eyebrow: string;
  title: string;
  tagline: string;
  covered: string[];
  rolesByTier: { tier: string; role: string; description: string }[];
  qualifications: string;
  systems: string[];
  exampleTitle: string;
  exampleDescription: string;
}

export default function CentrePageTemplate({
  eyebrow,
  title,
  tagline,
  covered,
  rolesByTier,
  qualifications,
  systems,
  exampleTitle,
  exampleDescription,
}: CentrePageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#080818] text-white py-24 lg:py-32">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-6">{eyebrow}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-semibold mb-6">{title}</h1>
          <p className="text-lg text-white/65 max-w-2xl leading-relaxed mb-10">{tagline}</p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 gradient-bg px-7 py-4 rounded-full font-semibold hover:bg-[#b80065] transition-colors">
            Book a 20-minute consultation <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* What the centre covers */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">What the centre covers</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {covered.map((item) => (
              <div key={item} className="flex items-start gap-2 text-gray-700 bg-gray-50 rounded-lg p-4">
                <CheckCircle className="w-4 h-4 text-[#E6007E] flex-shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles by tier */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">Roles by tier</h2>
          <div className="space-y-3">
            {rolesByTier.map((row, index) => (
              <motion.div
                key={row.tier}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="bg-white border border-gray-200 rounded-xl p-5"
              >
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#E6007E]">{row.tier}</span>
                  <span className="font-semibold text-gray-900">{row.role}</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">{row.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications + systems */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Qualifications</h2>
            <p className="text-gray-700 leading-relaxed">{qualifications}</p>
            <p className="text-gray-600 text-sm mt-4 border-l-2 border-[#E6007E] pl-3">
              ACCA Approved Employer status, ref 2000003846, valid to December 2029.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Systems</h2>
            <div className="flex flex-wrap gap-2">
              {systems.map((system) => (
                <span key={system} className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-700">
                  {system}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Worked example */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">{exampleTitle}</h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl">{exampleDescription}</p>
        </div>
      </section>

      {/* Case study placeholder + price link */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="border border-dashed border-gray-300 rounded-2xl p-8 text-center">
            <FileText className="w-6 h-6 text-gray-300 mx-auto mb-3" />
            <p className="text-sm text-gray-500">Case study for this centre — pending.</p>
          </div>
          <div className="bg-[#080818] rounded-2xl p-8 text-white flex flex-col justify-center">
            <p className="text-white/60 text-sm mb-3">Pricing is tier-based, not per centre.</p>
            <a href="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-[#E6007E]">
              See pricing tiers <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
