'use client';

import { motion } from 'framer-motion';
import { Calendar, FileText, CheckCircle, ShieldCheck } from 'lucide-react';

const BOOKING_URL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1RonhRpn6mMNI3Yq8PocQXHx-mZNFj7nIAFh0qndnlOMlGiUtO_DAP3D9P7J5BkXSmpK5Qx0vI';

const operatingSignals = [
  { label: 'Intelligence layer', value: 'Built in-house', tone: 'bg-[#e6007e]' },
  { label: 'Human oversight', value: 'Always in control', tone: 'bg-[#f1c453]' },
  { label: 'Country playbooks', value: '08 markets', tone: 'bg-[#83b8a3]' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#17171a] text-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hexa-team-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay with gradient for readability */}
        <div className="absolute inset-0 bg-[#17171a]/80" />
      </div>

      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 z-[1] grid-paper opacity-70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="pt-16">
          <div className="text-left max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-[.16em] mb-8"
          >
            <ShieldCheck className="w-4 h-4 text-[#E6007E]" />
            Country-aware finance infrastructure from Nepal
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-[5.4rem] font-semibold text-white mb-7 leading-[.98] tracking-[-.04em] max-w-3xl"
          >
            The finance operating layer behind{' '}
            <span className="text-[#E6007E]">international growth.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/65 max-w-xl mb-10 leading-relaxed"
          >
            Hexa combines specialized finance professionals, local compliance playbooks, internal intelligence, and accountable governance for companies growing across markets.
          </motion.p>

          {/* Credibility signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-x-6 gap-y-3 mb-12"
          >
            {operatingSignals.map((signal) => {
              return (
                <div key={signal.label} className="flex items-center gap-2 text-white/75 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#E6007E]" />
                  <span>{signal.label}: {signal.value}</span>
                </div>
              );
            })}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg px-7 py-4 text-white font-semibold rounded-full hover:bg-[#b80065] transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Calendar className="w-5 h-5" />
              Book a 20-min Consultation
            </a>
            <a
              href="#contact"
              className="px-7 py-4 text-white font-semibold rounded-full border border-white/25 hover:bg-white/10 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <FileText className="w-5 h-5" />
              Get a Country-Specific Plan
            </a>
          </motion.div>

          {/* Countries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16"
          >
            <p className="text-white/40 text-xs uppercase tracking-[.14em] mb-4">Finance operations from Nepal · delivered globally</p>
            <div className="flex flex-wrap gap-2">
              {['Singapore', 'Malaysia', 'Indonesia', 'Philippines', 'United Kingdom', 'United States', 'Australia', 'Canada', 'Nepal'].map((country) => (
                <div
                  key={country}
                  className="px-3 py-1.5 bg-white/5 rounded-full border border-white/10"
                >
                  <span className="text-white/90 text-sm font-medium">{country}</span>
                </div>
              ))}
            </div>
          </motion.div>
          </div>
      </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
