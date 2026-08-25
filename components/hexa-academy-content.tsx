'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Globe2, Laptop, Bot, MessagesSquare, GraduationCap } from 'lucide-react';
import TiltCard from '@/components/tilt-card';

const BOOKING_URL = 'https://www.hnpl.business/call';

const tracks = [
  { icon: Globe2, title: 'Market and standard', description: 'Country-specific accounting, statutory calendars and reporting standards for the markets your entities sit in.' },
  { icon: Laptop, title: 'Systems', description: 'Training on the platforms your team will actually work in, before they work in them.' },
  { icon: Bot, title: 'Applied AI and automation', description: 'Practical automation skills so improvement is something the team does, not something done to it.' },
  { icon: MessagesSquare, title: 'Communication and leadership', description: 'Client communication, review discipline and the supervision skills a senior needs to lead the tier below.' },
];

export default function HexaAcademyContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#080818] text-white py-24 lg:py-28">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.14] blur-[130px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #E6007E, transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative w-16 h-16 mx-auto mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full border border-[#E6007E]/40"
            />
            <div className="relative w-16 h-16 rounded-full bg-white/5 border border-white/15 flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-[#E6007E]" />
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#E6007E] text-xs font-semibold uppercase tracking-[.16em] mb-6"
          >
            Hexa Academy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl leading-[1.05] font-semibold mb-6"
          >
            Gaps get trained, not tolerated.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed"
          >
            No shortlist is ever a perfect fit. When a review identifies a gap between what your work
            needs and what the team currently holds, we close it through structured training rather than
            asking you to live with it or start the search again.
          </motion.p>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Four tracks</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
              What gets trained.
            </h2>
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
                  <TiltCard className="h-full bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-[#E6007E]/40 transition-colors">
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

      {/* CTA */}
      <section className="py-20 bg-[#f7f7fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-6">
            See how a gap gets closed on a live engagement.
          </h2>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-bg inline-flex items-center gap-2 px-7 py-4 text-white font-semibold rounded-full hover:bg-[#b80065] transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Book a 20-minute consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
