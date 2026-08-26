'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TiltCard from '@/components/tilt-card';
import { iconMap, IconKey } from '@/lib/icon-map';

export interface CapabilityCardProps {
  icon: IconKey;
  badgeLabel: string;
  name: string;
  description: string;
  href: string;
  linkLabel?: string;
  index?: number;
}

// Same card pattern as the three-centres grid (components/centres-section.tsx),
// generalised for grids that aren't exactly three items. Icon is a string key
// (see lib/icon-map) rather than a component reference, since this is a Client
// Component and the calling page.tsx files are Server Components — a function
// reference can't cross that boundary as a prop.
export default function CapabilityCard({
  icon,
  badgeLabel,
  name,
  description,
  href,
  linkLabel = 'Explore',
  index = 0,
}: CapabilityCardProps) {
  const Icon = iconMap[icon];
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="block"
    >
      <TiltCard className="group h-full p-8 hover:bg-[#fffafd] transition-colors">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-[.12em] px-2.5 py-1 rounded bg-[#ffe9f4] text-[#8d0d51]">
          {badgeLabel}
        </span>
        <div className="w-11 h-11 bg-[#080818] rounded-xl flex items-center justify-center my-5">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{name}</h3>
        <p className="text-sm text-gray-600 mb-6">{description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#E6007E]">
          {linkLabel} <ArrowRight className="w-4 h-4" />
        </span>
      </TiltCard>
    </motion.a>
  );
}
