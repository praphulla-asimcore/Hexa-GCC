'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Users, ShieldCheck } from 'lucide-react';

const BOOKING_URL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1RonhRpn6mMNI3Yq8PocQXHx-mZNFj7nIAFh0qndnlOMlGiUtO_DAP3D9P7J5BkXSmpK5Qx0vI';

const proofStats = [
  { value: 'Since 2002', label: 'Operating as Hexa Business' },
  { value: '120', label: 'Delivery professionals' },
  { value: '8', label: 'Countries served in depth' },
  { value: '3', label: 'Delivery towers, one governance model' },
];

const clients = ['Guardware Australia', 'Seven Sunday Films', 'SBC Kudos', 'Time Energy Solar Emit'];

export default function ProofIntentSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 bg-[#f6f3ef] border-b border-[#ece9e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#ded9d3] border border-[#ded9d3] mb-3"
        >
          {proofStats.map((stat) => (
            <div key={stat.label} className="bg-[#f6f3ef] p-6 text-center">
              <p className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-2 leading-snug">{stat.label}</p>
            </div>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-sm text-gray-500 mb-14"
        >
          Trusted by teams at{' '}
          {clients.map((c, i) => (
            <span key={c} className="text-gray-700 font-medium">
              {c}{i < clients.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </motion.p>

        {/* Intent fork */}
        <div className="grid md:grid-cols-2 gap-4">
          <motion.a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group bg-[#17171a] text-white p-8 rounded-2xl hover:bg-[#242427] transition-colors"
          >
            <Users className="w-6 h-6 text-[#E6007E] mb-5" />
            <h3 className="text-xl font-semibold mb-2">I need a team</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Start with one tower — finance, technology, or people ops. Fast to scope, priced per FTE, live in 15 days.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E6007E] group-hover:gap-3 transition-all">
              Book a 20-min consultation <ArrowRight className="w-4 h-4" />
            </span>
          </motion.a>
          <motion.a
            href="/operating-model"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group bg-white border border-gray-200 p-8 rounded-2xl hover:border-[#17171a]/30 transition-colors"
          >
            <ShieldCheck className="w-6 h-6 text-[#E6007E] mb-5" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">I&apos;m evaluating a shared services partner</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              See how we run transitions, governance, security, and certifications before you bring us into an RFP.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-3 transition-all">
              See how we run it <ArrowRight className="w-4 h-4" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
