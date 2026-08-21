'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Landmark, Clock } from 'lucide-react';
import { servicesData } from '@/lib/services-data';

const BOOKING_URL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1RonhRpn6mMNI3Yq8PocQXHx-mZNFj7nIAFh0qndnlOMlGiUtO_DAP3D9P7J5BkXSmpK5Qx0vI';

const slaChips = ['Close in 5-7 business days', '24-hour query response', 'Live in 15 days from signing'];
const tools = ['QuickBooks', 'Xero', 'NetSuite', 'SAP', 'Excel / Sheets'];

export default function FinanceTowerSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#17171a] text-white py-28 lg:py-36">
        <div className="absolute inset-0 grid-paper opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-7">Hexa Finance · Live · Anchor Tower</p>
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] leading-[.95] tracking-[-.04em] font-semibold mb-8">
              Record to report, procure to pay, order to cash.
            </h1>
            <p className="text-lg sm:text-xl text-white/65 max-w-2xl leading-relaxed mb-10">
              Full-cycle finance operations run by CA, ACCA, and CPA-qualified professionals — bookkeeping,
              tax & statutory compliance, FP&amp;A, and Remote CFO, delivered with named ownership and documented controls.
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 gradient-bg px-7 py-4 rounded-full font-semibold hover:bg-[#b80065] transition-colors">
              Book a 20-min consultation <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-px bg-white/15 border border-white/15 mt-20 max-w-4xl">
            {slaChips.map((item) => (
              <div key={item} className="bg-[#242427] p-5 text-sm text-white/75">
                <Clock className="w-4 h-4 text-[#E6007E] mb-7" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#f6f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow mb-4">What we deliver</p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-5">
              Finance capacity that operates like part of your business.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every engagement is staffed as a dedicated pod, not a shared queue — with a named lead, documented
              processes, and a review layer built into how work moves from record to report and procure to pay.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.whatYouGet.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#E6007E] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow mb-4">Tools we work in</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-6">Your stack, not a migration.</h2>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="bg-gray-50 px-4 py-2 rounded-lg text-gray-700 font-medium border border-gray-200">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-[#f6f3ef] border border-[#ded9d3] p-8 rounded-2xl">
            <Landmark className="w-8 h-8 text-[#E6007E] mb-5" />
            <p className="eyebrow mb-3">Who we work with</p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">SBC Kudos</h3>
            <p className="text-gray-600 text-sm mb-6">Finance &amp; Payroll — an active Hexa Finance engagement.</p>
            <a href="/#towers" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#E6007E] transition-colors">
              See who else we work with <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="finance-contact" className="py-24 bg-[#17171a] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-5">Ready to move your finance function?</h2>
          <p className="text-white/60 text-lg mb-8">
            Pricing is scoped per engagement — typically 40-60% cheaper than a local hire — and discussed on a
            consultation call once we understand your countries and volume.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 gradient-bg px-7 py-4 rounded-full font-semibold hover:bg-[#b80065] transition-colors">
            Book a 20-min consultation <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
