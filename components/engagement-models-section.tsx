'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Users, Building2, CheckCircle } from 'lucide-react';

const BOOKING_URL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1RonhRpn6mMNI3Yq8PocQXHx-mZNFj7nIAFh0qndnlOMlGiUtO_DAP3D9P7J5BkXSmpK5Qx0vI';

const models = [
  {
    icon: Briefcase,
    name: 'Managed Service',
    suits: 'Best for finance close, AP, payroll — a defined output, not headcount.',
    controls: 'Hexa owns the process and the output, priced per scope or transaction volume.',
    points: ['You define the outcome and SLA', 'Hexa manages resourcing and delivery', 'Priced per scope or volume'],
  },
  {
    icon: Users,
    name: 'Dedicated Pod',
    suits: 'The workhorse model — named people working only for you.',
    controls: 'Hexa manages the team; you direct the work, day to day.',
    points: ['Named people, exclusively on your account', 'You direct priorities and workflow', 'Priced per FTE per month'],
  },
  {
    icon: Building2,
    name: 'Build-Operate-Transfer',
    suits: 'For companies that eventually want the centre in-house.',
    controls: 'Hexa builds and runs the centre for an agreed term, with a contractual option to transfer entity and staff to you.',
    points: ['2-4 year build-and-run term', 'Contractual transfer option', 'Premium pricing, full transparency'],
  },
];

export default function EngagementModelsSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#17171a] text-white py-28 lg:py-32">
        <div className="absolute inset-0 grid-paper opacity-70" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-7">How to buy</p>
          <h1 className="text-5xl sm:text-6xl leading-[.98] tracking-[-.04em] font-semibold mb-6">Three ways to engage Hexa.</h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            Increasing commitment, from a defined scope of work to a centre you can eventually own outright.
          </p>
        </div>
      </section>

      <section className="py-28 bg-[#f6f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {models.map((model, index) => {
              const Icon = model.icon;
              return (
                <motion.div
                  key={model.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
                >
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{model.name}</h3>
                  <p className="text-gray-600 text-sm mb-5">{model.suits}</p>
                  <ul className="space-y-2">
                    {model.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#E6007E] flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="eyebrow mb-4">Where to price</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
              Priced during consultation, not guesswork.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hexa typically runs 40-60% cheaper than a local hire, on FTE or transaction pricing. Exact bands
              depend on role, country, and volume — we&apos;ll scope it with you directly rather than publish a
              generic number that doesn&apos;t match your situation.
            </p>
          </div>
          <div className="bg-[#f6f3ef] border border-[#ded9d3] rounded-2xl p-8 grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-semibold text-gray-900">15 days</p>
              <p className="text-sm text-gray-500 mt-1">From signing to live</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-900">40-60%</p>
              <p className="text-sm text-gray-500 mt-1">Cheaper than a local hire</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-900">1-5 FTE</p>
              <p className="text-sm text-gray-500 mt-1">Typical starting pod size</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 gradient-bg px-7 py-4 text-white font-semibold rounded-full hover:bg-[#b80065] transition-colors">
              Book a 20-min consultation <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
