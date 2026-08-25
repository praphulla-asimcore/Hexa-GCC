'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, CheckCircle2 } from 'lucide-react';
import { academies } from '@/lib/academy-data';
import TiltCard from '@/components/tilt-card';

export default function AcademyExplorer() {
  const [activeCode, setActiveCode] = useState(academies[0].code);
  const active = academies.find((a) => a.code === activeCode) ?? academies[0];
  const activeIndex = academies.findIndex((a) => a.code === active.code);

  return (
    <section className="relative overflow-hidden bg-[#0c0c14] text-white py-24 lg:py-28">
      <div
        className="absolute -top-40 left-0 w-[560px] h-[560px] rounded-full opacity-[0.12] blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E6007E, transparent 70%)' }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">The curriculum</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-5">
            Four academies, built for what the work actually needs.
          </h2>
          <p className="text-lg text-white/65 leading-relaxed">
            Select any academy to see what it covers. Every hire runs through Core; the other three
            layer on depending on role and the gaps a review surfaces.
          </p>
        </div>

        <div className="grid lg:grid-cols-[360px_1fr] gap-6">
          {/* Academy list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 lg:pr-2">
            {academies.map((academy) => {
              const isActive = academy.code === activeCode;
              return (
                <button
                  key={academy.code}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCode(academy.code)}
                  className="group relative flex items-center gap-3 rounded-xl px-4 py-3.5 text-left"
                >
                  {isActive && (
                    <motion.div
                      layoutId="academy-highlight"
                      className="absolute inset-0 rounded-xl bg-white/10 border border-[#E6007E]/60"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span
                    className={`absolute inset-0 rounded-xl border transition-colors ${
                      isActive ? 'border-transparent' : 'border-white/10 group-hover:border-white/20 group-hover:bg-white/[0.04]'
                    }`}
                  />
                  <span
                    className={`relative flex items-center justify-center w-9 h-9 shrink-0 rounded-lg text-[11px] font-bold tracking-wide transition-colors ${
                      isActive
                        ? 'bg-[#E6007E]/15 border border-[#E6007E]/50 text-white'
                        : 'bg-white/5 border border-white/10 text-white/60'
                    }`}
                  >
                    {academy.number}
                  </span>
                  <span className={`relative text-sm font-medium ${isActive ? 'text-white' : 'text-white/75'}`}>
                    {academy.name}
                  </span>
                  <span
                    className={`relative ml-auto text-[11px] font-semibold tabular-nums ${
                      isActive ? 'text-[#E6007E]' : 'text-white/25'
                    }`}
                  >
                    {academy.modules.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.code}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <TiltCard glareColor="rgba(230,0,126,0.18)" className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#E6007E]/10 border border-[#E6007E]/30 text-lg font-bold tracking-wide text-white">
                      {active.number}
                    </span>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{active.name}</h3>
                      <p className="text-xs font-semibold text-[#E6007E] tracking-wide uppercase mt-1">
                        Academy {activeIndex + 1} of {academies.length}
                      </p>
                    </div>
                  </div>

                  <p className="text-white/70 leading-relaxed mb-8 max-w-xl">{active.tagline}</p>

                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-[#E6007E]" />
                    <p className="text-sm font-semibold text-white/90">
                      Modules ({active.modules.length})
                    </p>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {active.modules.map((module) => (
                      <li
                        key={module}
                        className="flex items-start gap-2.5 text-sm text-white/75 bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#E6007E] shrink-0 mt-0.5" />
                        {module}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex gap-1.5">
                    {academies.map((a) => (
                      <button
                        key={a.code}
                        type="button"
                        aria-label={`Show ${a.name}`}
                        onClick={() => setActiveCode(a.code)}
                        className={`h-1 rounded-full transition-all ${
                          a.code === active.code ? 'w-6 bg-[#E6007E]' : 'w-3 bg-white/15 hover:bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
