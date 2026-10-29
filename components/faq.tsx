'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import type { Faq } from '@/lib/faq';

// Questions are buttons, answers are regions. Panels stay in the DOM when closed
// (hidden), so the text is still there for search engines. Arrow keys, Home and End
// move between questions within a category.
export function FaqAccordion({ id, items }: { id: string; items: Faq[] }) {
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = items.length - 1;
    const target = { ArrowDown: i === last ? 0 : i + 1, ArrowUp: i === 0 ? last : i - 1, Home: 0, End: last }[e.key];
    if (target === undefined) return;
    e.preventDefault();
    document.getElementById(`${id}-q${target}`)?.focus();
  };

  return (
    <ul className="card divide-y">
      {items.map((item, i) => {
        const isOpen = open.has(i);
        return (
          <li key={item.question}>
            <h3>
              <button
                type="button"
                id={`${id}-q${i}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-a${i}`}
                onClick={() => toggle(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className="w-full flex items-start justify-between gap-6 px-6 py-5 text-left text-[17px] font-bold leading-snug hover:text-hexa-magenta transition-colors"
              >
                {item.question}
                <ChevronDown
                  aria-hidden
                  className={`w-5 h-5 flex-none mt-0.5 text-hexa-magenta transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </h3>
            <div
              id={`${id}-a${i}`}
              role="region"
              aria-labelledby={`${id}-q${i}`}
              hidden={!isOpen}
              className="px-6 pb-6 -mt-1 max-w-3xl text-muted leading-relaxed"
            >
              <p>{item.answer}</p>
              {item.points && (
                <ul className="mt-3 space-y-2">
                  {item.points.map((p) => (
                    <li key={p.term}>
                      <span className="font-bold text-hexa-ink">{p.term}:</span> {p.text}
                    </li>
                  ))}
                </ul>
              )}
              {item.link && (
                <Link href={item.link.href} className="mt-3 inline-flex items-center gap-2 font-bold text-hexa-magenta">
                  {item.link.label} <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
              )}
              {item.confirm && (
                <p className="mt-4 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                  <span className="font-bold">[CONFIRM before launch]</span> {item.confirm} Hidden on the live site until
                  resolved.
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

// Sticky category pills under the navbar. The pill for the category in view is
// marked as current.
export function FaqCategoryBar({ categories }: { categories: { id: string; label: string }[] }) {
  const [active, setActive] = useState(categories[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: '-160px 0px -60% 0px' }
    );
    categories.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [categories]);

  return (
    <nav
      aria-label="FAQ categories"
      className="sticky top-16 md:top-[72px] z-40 bg-white/90 backdrop-blur border-b"
    >
      <ul className="container-hexa flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-3">
        {categories.map((c) => (
          <li key={c.id} className="flex-none">
            <a
              href={`#${c.id}`}
              aria-current={active === c.id ? 'true' : undefined}
              className={`inline-flex items-center h-9 px-4 rounded-full text-sm font-semibold border transition-colors ${
                active === c.id
                  ? 'border-transparent text-white bg-hexa-ink'
                  : 'border-black/10 text-hexa-ink/80 hover:border-hexa-magenta hover:text-hexa-ink'
              }`}
            >
              {c.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
