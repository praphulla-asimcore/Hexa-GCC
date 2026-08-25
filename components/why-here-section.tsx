'use client';

import { motion } from 'framer-motion';
import TiltCard from '@/components/tilt-card';

const points = [
  { title: 'A less saturated talent market', description: 'Fewer operators bidding for the same shortlist, so we recruit against depth rather than against each other.' },
  { title: 'Smaller, dedicated operations', description: 'Your team is a named group in our building, not a line item in a floor of thousands.' },
  { title: 'Access to senior people', description: 'Seniority is reachable here at a level that volume markets have priced out of reach.' },
  { title: 'High-touch service', description: 'You deal with the people accountable for delivery, not a tier of account management above them.' },
  { title: 'A strong accounting education pipeline', description: 'A professional qualification pipeline we hire into directly, and an ACCA Approved Employer obligation to develop it.' },
  { title: 'A growing technology ecosystem', description: 'An engineering base expanding fast enough to staff product work, not only support work.' },
];

export default function WhyHereSection() {
  return (
    <section className="py-24 bg-[#080818] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-[.14em] text-[#E6007E] mb-5">Why here</p>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-5">
            We deliver from an emerging market, and that is the argument, not the apology.
          </h2>
          <p className="text-white/65 text-lg leading-relaxed">
            The established offshore destinations are contested, expensive at the senior end, and
            organised around volume. We are not competing for the four-hundredth position on a
            saturated shortlist.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <TiltCard glareColor="rgba(230,0,126,0.2)" className="h-full border border-white/15 rounded-xl p-6 bg-white/[0.03] hover:border-[#E6007E]/30 transition-colors">
                <h4 className="font-semibold mb-2.5">{point.title}</h4>
                <p className="text-sm text-white/55 leading-relaxed">{point.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
