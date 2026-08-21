'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';

const BOOKING_URL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1RonhRpn6mMNI3Yq8PocQXHx-mZNFj7nIAFh0qndnlOMlGiUtO_DAP3D9P7J5BkXSmpK5Qx0vI';

const rungs = [
  { tier: 'Junior', role: 'Daily execution — volume, first-line delivery' },
  { tier: 'Mid', role: 'Review, control, and reporting' },
  { tier: 'Senior', role: 'Judgement, exceptions, and escalation' },
  { tier: 'Executive', role: 'Direction and board-facing work' },
];

const weSupply = ['Recruitment', 'Legal employment', 'Payroll', 'Statutory compliance', 'Workspace', 'IT', 'Welfare', 'Retention', 'Replacement'];
const youKeep = ['Direction', 'Systems', 'Outputs', 'IP', 'Priorities'];

export default function EmbeddedTeamContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#080818] text-white py-24 lg:py-32">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-semibold mb-6">A function, assembled.</h1>
          <p className="text-lg text-white/65 max-w-2xl leading-relaxed mb-10">
            You tell us the shape you need. We find the people, employ them, house them, and keep them there.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 gradient-bg px-7 py-4 rounded-full font-semibold hover:bg-[#b80065] transition-colors">
            Book a 20-minute consultation <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* The problem */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-5">The problem, as you're living it</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A growing company's function outgrows its junior hire. Seniority is unaffordable to hire locally
            at the fraction of time you actually need it. So the risk is carried quietly — the junior is
            promoted past their depth, and nobody notices until something breaks.
          </p>
        </div>
      </section>

      {/* The ladder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">The ladder</h2>
          <div className="space-y-3">
            {rungs.map((rung, index) => (
              <motion.div
                key={rung.tier}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="bg-white border border-gray-200 rounded-xl px-6 py-4 flex items-baseline gap-5 flex-wrap"
              >
                <span className="font-serif text-xl text-gray-900 min-w-[88px]">{rung.tier}</span>
                <span className="text-gray-600">{rung.role}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-gray-700">
            Fixed blocks, not a pool, not a queue, not a marketplace. Allocation is set to your requirement
            and adjusted as the function grows.
          </p>
        </div>
      </section>

      {/* Dedicated and fractional */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-5">Dedicated and fractional</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dedicated means one client at full time. Fractional means a named individual allocated in fixed
            blocks to more than one client.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <p className="text-gray-900 font-semibold">Never more than five clients per fractional professional.</p>
            <p className="text-gray-600 text-sm mt-2">Stated publicly. It's a quality commitment, not a limitation.</p>
          </div>
        </div>
      </section>

      {/* What we supply / what you keep */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-5">What Hexa supplies</h3>
            <ul className="space-y-2">
              {weSupply.map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#E6007E] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-5">What the client keeps</h3>
            <ul className="space-y-2">
              {youKeep.map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <XCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Immersion month */}
      <section className="py-20 bg-[#080818] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-5">The immersion month</h2>
          <p className="text-white/65 leading-relaxed">
            Every important hire spends their first month at your office. Flights, visa, accommodation and
            allowance are arranged and covered once. If they do not stay twelve months, that cost is
            refunded pro rata.
          </p>
        </div>
      </section>

      {/* Worked example */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-5">A worked example</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A 75-person company's finance function typically needs: a junior at full-time execution, a
            manager reviewing at half their time, a senior specialist handling exceptions at a fifth of
            their time, and an executive advising at a tenth of their time.
          </p>
          <p className="text-gray-600 text-sm border-l-2 border-[#E6007E] pl-4">
            For the senior tiers, the comparison isn't cost saving — you cannot buy a fraction of a local
            finance manager at any price. Exact figures are scoped on a consultation call.
          </p>
        </div>
      </section>

      {/* Qualification */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-5">Who this is for</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Built for companies between fifty and five hundred people. Below fifty, there's usually no
            defined corporate function to distribute, and limited capacity to direct remote staff — we
            screen for this at the sale. Above a thousand, companies typically build their own centre.
          </p>
          <div className="mt-8">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 gradient-bg px-7 py-4 text-white font-semibold rounded-full hover:bg-[#b80065] transition-colors">
              Book a 20-minute consultation <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
