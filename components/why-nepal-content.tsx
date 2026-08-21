'use client';

import { motion } from 'framer-motion';
import { Clock, DollarSign, Building2, Users, ArrowRight, ShieldCheck } from 'lucide-react';

const BOOKING_URL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1RonhRpn6mMNI3Yq8PocQXHx-mZNFj7nIAFh0qndnlOMlGiUtO_DAP3D9P7J5BkXSmpK5Qx0vI';

const timezoneOverlap = ['Singapore', 'Malaysia', 'Australia', 'United Kingdom'];

const infrastructure = [
  '120-person delivery centre',
  '24-hour security guard and CCTV surveillance',
  'Dual network connectivity',
  'Backup power supply',
  '24-hour operational office building',
];

export default function WhyNepalContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#17171a] text-white py-28 lg:py-32">
        <div className="absolute inset-0 grid-paper opacity-70" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-7">Why Nepal</p>
          <h1 className="text-5xl sm:text-6xl leading-[.98] tracking-[-.04em] font-semibold mb-6">A smaller market, a bigger advantage.</h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            Kathmandu isn&apos;t the default answer on the shared-services map — here&apos;s the honest case for it.
          </p>
        </div>
      </section>

      {/* Timezone */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-[#E6007E]" />
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Timezone advantage</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Nepal&apos;s working day overlaps with APAC morning hours and stretches into European afternoons —
              genuine real-time coverage for teams across Singapore, Malaysia, Australia, and the UK, not an
              overnight handoff.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {timezoneOverlap.map((tz) => (
              <span key={tz} className="bg-gray-50 border border-gray-200 rounded-full px-5 py-3 text-sm font-medium text-gray-700">
                {tz}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="py-24 bg-[#f6f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1 bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <p className="text-4xl font-semibold text-gray-900">40-60%</p>
            <p className="text-gray-500 mt-2">cheaper than a local hire</p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-6 h-6 text-[#E6007E]" />
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Cost position, stated honestly</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We don&apos;t compete on being cheaper than India or the Philippines — we compete on integrated,
              governed delivery. The cost advantage is real, but it&apos;s the third reason to work with us, not the first.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Building2 className="w-6 h-6 text-[#E6007E]" />
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Infrastructure, with specifics</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {infrastructure.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-gray-700 text-sm"
              >
                {point}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent & culture */}
      <section className="py-24 bg-[#f6f3ef]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-[#E6007E]" />
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Why we win talent locally</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Manila or Bengaluru, we&apos;d be the four-hundredth option. In Kathmandu, we can be the leading
            employer — an ACCA Approved Employer, with ISO 27001 and ISO 9001 in place, operating out of a
            120-person centre with real amenities, not a call-centre floor.
          </p>
          <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-3 text-gray-700 text-sm">
            <ShieldCheck className="w-4 h-4 text-[#E6007E] flex-shrink-0" />
            ACCA Approved Employer status — recognized training and development standard
          </div>
        </div>
      </section>

      {/* CTA for the rest of the diligence pack */}
      <section className="py-24 bg-[#17171a] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-5">Need the full diligence pack?</h2>
          <p className="text-white/60 text-lg mb-8">
            Attrition data, talent pipeline numbers, and business continuity specifics are available on request —
            we&apos;ll walk you through them directly.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 gradient-bg px-7 py-4 rounded-full font-semibold hover:bg-[#b80065] transition-colors">
            Talk to us <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
