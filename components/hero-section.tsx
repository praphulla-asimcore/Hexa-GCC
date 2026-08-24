'use client';

import { motion } from 'framer-motion';
import { Calendar, Download, CheckCircle } from 'lucide-react';

const BOOKING_URL = 'https://www.hnpl.business/call';

const chips = ['5,000+ professionals placed', 'ISO 27001 · ISO 9001 certified', 'ACCA Approved Employer'];

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="pt-16">
          <div className="text-left max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-[.16em] mb-8"
          >
            Established 2002
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold text-white mb-6 leading-[1.1] tracking-[-.03em] max-w-2xl"
          >
            Your dedicated capability centre. Built, operated and continuously improved.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/65 max-w-xl leading-relaxed"
          >
            You choose the people. You control the work and own the IP. We handle talent, employment,
            infrastructure, security and retention, and continuously improve productivity through process
            expertise and automation.
          </motion.p>

          {/* Strapline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-xl text-white mt-6 mb-10 border-l-2 border-[#E6007E] pl-4 max-w-xl"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Dedicated people. Managed performance. AI-improved productivity.
          </motion.p>

          {/* Credibility chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-x-6 gap-y-3 mb-12"
          >
            {chips.map((chip) => (
              <div key={chip} className="flex items-center gap-2 text-white/75 text-sm">
                <CheckCircle className="w-4 h-4 text-[#E6007E]" />
                <span>{chip}</span>
              </div>
            ))}
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
              Book a 20-minute consultation
            </a>
            <a
              href="/resources"
              className="px-7 py-4 text-white font-semibold rounded-full border border-white/25 hover:bg-white/10 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5" />
              Download the operating model
            </a>
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
