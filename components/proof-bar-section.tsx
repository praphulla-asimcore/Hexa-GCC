'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const stats = [
  { to: 5000, suffix: '+', label: 'Professionals placed since 2002' },
  { to: 3, suffix: '', label: 'Centres of excellence' },
  { to: 200, suffix: '+', label: 'Seats in delivery' },
  { to: 11, suffix: '', label: 'Markets served' },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setValue(to);
      return;
    }

    const duration = 1100;
    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(to * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ProofBarSection() {
  return (
    <section className="bg-[#12122a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[#12122a] p-8 group hover:bg-[#181834] transition-colors">
            <p className="text-3xl sm:text-4xl font-semibold text-white">
              <Counter to={stat.to} suffix={stat.suffix} />
            </p>
            <p className="text-sm text-white/50 mt-3">{stat.label}</p>
            <div className="h-0.5 w-0 bg-[#E6007E] mt-4 group-hover:w-full transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
