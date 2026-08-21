'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, UserPlus, DollarSign, ClipboardList, Search, Headphones, Users } from 'lucide-react';

const BOOKING_URL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1RonhRpn6mMNI3Yq8PocQXHx-mZNFj7nIAFh0qndnlOMlGiUtO_DAP3D9P7J5BkXSmpK5Qx0vI';

const capabilities = [
  { icon: DollarSign, title: 'Payroll Operations', description: 'Multi-country payroll processing, statutory deductions, and payslip administration, run against your calendar.' },
  { icon: UserPlus, title: 'Onboarding & Offboarding', description: 'Structured joiner and leaver workflows, documentation, and compliance sign-off at every step.' },
  { icon: ClipboardList, title: 'HRIS Administration', description: 'System of record upkeep, employee data accuracy, and reporting support across your HR platforms.' },
  { icon: Search, title: 'Recruitment Process Support', description: 'Sourcing, screening coordination, and hiring pipeline management for roles you need filled.' },
  { icon: Headphones, title: 'Employee Helpdesk & Case Management', description: 'A single point of contact for employee queries, tracked and resolved with an audit trail.' },
  { icon: Users, title: 'Records & Documentation', description: 'Personnel files, statutory records, and audit-ready documentation maintained on an ongoing basis.' },
];

const clients = ['Guardware Australia', 'SBC Kudos', 'Time Energy Solar Emit'];

export default function PeopleTowerSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#17171a] text-white py-28 lg:py-36">
        <div className="absolute inset-0 grid-paper opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-[#83b8a3] text-xs font-semibold uppercase tracking-[.16em] mb-7">Hexa People · Live</p>
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] leading-[.95] tracking-[-.04em] font-semibold mb-8">
              Payroll and people operations, run end to end.
            </h1>
            <p className="text-lg sm:text-xl text-white/65 max-w-2xl leading-relaxed mb-10">
              Multi-country payroll, onboarding through offboarding, HRIS administration, recruitment support,
              and an employee helpdesk — delivered by a dedicated pod with named ownership.
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 gradient-bg px-7 py-4 rounded-full font-semibold hover:bg-[#b80065] transition-colors">
              Discuss a people-ops requirement <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#f6f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow mb-4">What we deliver</p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-5">
              People operations that scale without a new hire.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-[#d9d4ce] border border-[#d9d4ce]">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="bg-[#f6f3ef] p-8 hover:bg-white transition-colors"
                >
                  <div className="w-11 h-11 bg-[#17171a] flex items-center justify-center mb-8">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-4">Who we work with</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
            Payroll and people-ops clients today
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {clients.map((c) => (
              <span key={c} className="bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                <CheckCircle className="w-3.5 h-3.5 text-[#E6007E] inline-block mr-2 -mt-0.5" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#17171a] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-5">Have a payroll or people-ops gap to close?</h2>
          <p className="text-white/60 text-lg mb-8">Bring us the countries and headcount. We&apos;ll shape the right pod and go live in 15 days.</p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 gradient-bg px-7 py-4 rounded-full font-semibold hover:bg-[#b80065] transition-colors">
            Book a 20-min consultation <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
