'use client';

import { ArrowRight, CheckCircle } from 'lucide-react';

const BOOKING_URL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1RonhRpn6mMNI3Yq8PocQXHx-mZNFj7nIAFh0qndnlOMlGiUtO_DAP3D9P7J5BkXSmpK5Qx0vI';

const tiers = [
  { tier: 'Junior', description: 'Full-time execution. Priced as a fixed monthly fee per person.' },
  { tier: 'Mid', description: 'Review, control, and reporting, allocated in a fixed block of time.' },
  { tier: 'Senior', description: 'Judgement and escalation, allocated in a smaller fixed block.' },
  { tier: 'Executive', description: 'Direction and board-facing input, allocated occasionally.' },
];

const notes = [
  'The fee is fixed per person, not a percentage of salary. Your cost does not rise when local wages do.',
  'The senior tiers are not a cost-saving argument. They are access to seniority you cannot buy in fractions locally.',
  'Minimum term, notice period, and replacement terms are agreed up front and stated plainly in the contract.',
];

export default function PricingContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#080818] text-white py-24 lg:py-28">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-6">How pricing works</p>
          <h1 className="text-4xl sm:text-5xl leading-[1.05] font-semibold mb-6">Priced by tier, scoped on a call.</h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            Each tier carries a fixed monthly fee per person. Exact figures depend on role, market, and
            allocation — we scope those with you directly rather than publish a generic number that doesn't
            match your situation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-4 mb-14">
            {tiers.map((tier) => (
              <div key={tier.tier} className="border border-gray-200 rounded-2xl p-6">
                <span className="font-serif text-2xl text-gray-900">{tier.tier}</span>
                <p className="text-gray-600 mt-2">{tier.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-14">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Embedding fee</h2>
            <p className="text-gray-700">
              A one-off cost per hire, covering the immersion month. Refunded pro rata if retention falls
              short of twelve months.
            </p>
          </div>

          <div className="mb-14">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">A worked example</h2>
            <p className="text-gray-700 leading-relaxed">
              A finance function for a 75-person company typically combines a full-time junior, a mid-level
              professional at half their time, a senior specialist at a fifth of their time, and an
              executive advising occasionally. The blended monthly cost is scoped once we understand your
              countries and volume.
            </p>
          </div>

          <div className="space-y-3">
            {notes.map((note) => (
              <div key={note} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#E6007E] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-sm">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 gradient-bg px-7 py-4 text-white font-semibold rounded-full hover:bg-[#b80065] transition-colors">
              Get your pricing <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
