'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ImageOff } from 'lucide-react';

const sectors = [
  { key: 'telecom', label: 'Telecommunications', slots: 3 },
  { key: 'tech', label: 'Technology', slots: 4 },
  { key: 'banking', label: 'Banking and financial', slots: 3 },
  { key: 'pharma', label: 'Pharma and healthcare', slots: 2 },
  { key: 'industrial', label: 'Industrial and other', slots: 3 },
] as const;

export default function ClientLogosSection() {
  const [active, setActive] = useState<(typeof sectors)[number]['key']>('telecom');
  const current = sectors.find((s) => s.key === active) ?? sectors[0];

  return (
    <section className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="eyebrow mb-4">Who we work with</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
            Enterprise and government, across sectors.
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {sectors.map((s) => (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                active === s.key
                  ? 'bg-[#080818] text-white border-[#080818]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <motion.div
          key={current.key}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {Array.from({ length: current.slots }).map((_, i) => (
            <div
              key={i}
              className="h-24 rounded-xl border border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center gap-2 grayscale hover:grayscale-0 transition-all"
            >
              <ImageOff className="w-5 h-5 text-gray-300" />
              <span className="text-[11px] text-gray-400">Logo pending permission</span>
            </div>
          ))}
        </motion.div>
        <p className="mt-6 text-sm text-gray-500 max-w-2xl">
          Logo files and naming permission are confirmed client by client. Placeholders above will be
          replaced with the client&apos;s mark once both are in hand — never before.
        </p>
      </div>
    </section>
  );
}
