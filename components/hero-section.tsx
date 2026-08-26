'use client';

import { motion } from 'framer-motion';
import { Calendar, Download, ArrowRight, CheckCircle } from 'lucide-react';

const BOOKING_URL = 'https://www.hnpl.business/call';

const defaultChips = ['5,000+ professionals placed', 'ISO 27001 · ISO 9001 certified', 'ACCA Approved Employer'];

const icons = { calendar: Calendar, download: Download, arrow: ArrowRight } as const;

export interface HeroCta {
  label: string;
  href: string;
  external?: boolean;
  icon: keyof typeof icons;
}

export interface HeroSectionProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  strapline?: string;
  chips?: string[];
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
}

export default function HeroSection({
  eyebrow = 'Established 2002',
  heading = 'Your dedicated capability centre. Built, operated and continuously improved.',
  subheading = 'You choose the people. You control the work and own the IP. We handle talent, employment, infrastructure, security and retention, and continuously improve productivity through process expertise and automation.',
  strapline = 'Dedicated people. Managed performance. AI-improved productivity.',
  chips = defaultChips,
  primaryCta = { label: 'Book a 20-minute consultation', href: BOOKING_URL, external: true, icon: 'calendar' },
  secondaryCta = { label: 'Download the operating model', href: '/resources', icon: 'download' },
}: HeroSectionProps) {
  const PrimaryIcon = icons[primaryCta.icon];
  const SecondaryIcon = secondaryCta ? icons[secondaryCta.icon] : null;

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
            {eyebrow}
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold text-white mb-6 leading-[1.1] tracking-[-.03em] max-w-2xl"
          >
            {heading}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/65 max-w-xl leading-relaxed"
          >
            {subheading}
          </motion.p>

          {/* Strapline */}
          {strapline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-xl text-white mt-6 mb-10 border-l-2 border-[#E6007E] pl-4 max-w-xl"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              {strapline}
            </motion.p>
          )}

          {/* Credibility chips */}
          {chips && chips.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`flex flex-wrap gap-x-6 gap-y-3 ${strapline ? 'mb-12' : 'mt-6 mb-12'}`}
            >
              {chips.map((chip) => (
                <div key={chip} className="flex items-center gap-2 text-white/75 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#E6007E]" />
                  <span>{chip}</span>
                </div>
              ))}
            </motion.div>
          )}

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`flex flex-col sm:flex-row items-start gap-4${!strapline && (!chips || chips.length === 0) ? ' mt-10' : ''}`}
          >
            <a
              href={primaryCta.href}
              target={primaryCta.external ? '_blank' : undefined}
              rel={primaryCta.external ? 'noopener noreferrer' : undefined}
              className="gradient-bg px-7 py-4 text-white font-semibold rounded-full hover:bg-[#b80065] transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <PrimaryIcon className="w-5 h-5" />
              {primaryCta.label}
            </a>
            {secondaryCta && SecondaryIcon && (
              <a
                href={secondaryCta.href}
                target={secondaryCta.external ? '_blank' : undefined}
                rel={secondaryCta.external ? 'noopener noreferrer' : undefined}
                className="px-7 py-4 text-white font-semibold rounded-full border border-white/25 hover:bg-white/10 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <SecondaryIcon className="w-5 h-5" />
                {secondaryCta.label}
              </a>
            )}
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
