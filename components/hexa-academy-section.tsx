'use client';

import { motion } from 'framer-motion';
import { Globe2, Laptop, Bot, MessagesSquare } from 'lucide-react';
import TiltCard from '@/components/tilt-card';

const tracks = [
  { icon: Globe2, title: 'Market and standard', description: 'Country-specific accounting, statutory calendars and reporting standards for the markets your entities sit in.' },
  { icon: Laptop, title: 'Systems', description: 'Training on the platforms your team will actually work in, before they work in them.' },
  { icon: Bot, title: 'Applied AI and automation', description: 'Practical automation skills so improvement is something the team does, not something done to it.' },
  { icon: MessagesSquare, title: 'Communication and leadership', description: 'Client communication, review discipline and the supervision skills a senior needs to lead the tier below.' },
];

export default function HexaAcademySection() {
  return (
    <section id="hexa-academy" className="py-24 bg-[#f7f7fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-4">Hexa Academy</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
            Gaps get trained, not tolerated.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            No shortlist is ever a perfect fit. When a review identifies a gap between what your work
            needs and what the team currently holds, we close it through structured training rather than
            asking you to live with it or start the search again.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <TiltCard className="h-full bg-white border border-gray-200 rounded-xl p-6 hover:border-[#E6007E]/40 transition-colors">
                  <Icon className="w-5 h-5 text-[#E6007E] mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2.5">{track.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{track.description}</p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
        <p className="text-gray-700 border-l-2 border-[#E6007E] pl-4 max-w-2xl">
          Certified before interview. Trained to your requirement after selection. Immersed at your
          office before steady state.
        </p>
      </div>
    </section>
  );
}
