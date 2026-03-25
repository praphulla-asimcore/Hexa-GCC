'use client';

import { motion } from 'framer-motion';
import { Calendar, FileText, CheckCircle, Clock, Shield, Globe, MessageCircle } from 'lucide-react';

const BOOKING_URL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1RonhRpn6mMNI3Yq8PocQXHx-mZNFj7nIAFh0qndnlOMlGiUtO_DAP3D9P7J5BkXSmpK5Qx0vI';

const credibilityChips = [
  { icon: CheckCircle, text: 'Dedicated Finance Team Under Your Brand' },
  { icon: Clock, text: 'Structured Governance & Reporting Framework' },
  { icon: Globe, text: 'Cost-Efficient GCC Delivery Model' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/85 to-purple-900/80" />
      </div>

      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#E6007E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-8"
          >
            <Shield className="w-4 h-4 text-[#E6007E]" />
            Nepal-Based Global Capability Center
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            We Build Your Remote{' '}
            <span className="gradient-text">Accounting & Finance Team</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Structured, Cost-effective, and Accountable.
          </motion.p>

          {/* Credibility Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {credibilityChips?.map((chip, index) => {
              const IconComponent = chip?.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                >
                  {IconComponent && <IconComponent className="w-4 h-4 text-[#E6007E]" />}
                  <span className="text-white/90 text-sm font-medium">{chip?.text}</span>
                </div>
              );
            })}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://wa.me/9779851338099"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-xl shadow-[#E6007E]/20 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Start a WhatsApp Consultation
            </a>
            <a
              href="#contact"
              className="px-8 py-4 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/10 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
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
            <p className="text-gray-400 text-sm mb-4">Serving companies in</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Singapore', 'Malaysia', 'Indonesia', 'Philippines', 'United Kingdom', 'United States', 'Australia', 'Canada', 'Nepal'].map((country) => (
                <div
                  key={country}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                >
                  <span className="text-white/90 text-sm font-medium">{country}</span>
                </div>
              ))}
            </div>
          </motion.div>
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
