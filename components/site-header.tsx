'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navigation } from '@/lib/site';

export default function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on navigation.
  useEffect(() => {
    setOpenMenu(null);
    setIsSheetOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        setIsSheetOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSheetOpen ? 'hidden' : '';
  }, [isSheetOpen]);

  const isActive = (href?: string) => !!href && pathname === href;
  const groupActive = (items?: { href: string }[]) => !!items?.some((i) => pathname === i.href);

  return (
    <>
    <header className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container-hexa h-full flex items-center justify-between gap-6">
        <Link href="/" className="relative block w-[104px] h-[24px] shrink-0" aria-label="Hexa home">
          <Image src="/logo.png" alt="Hexa" fill sizes="104px" className="object-contain object-left" priority />
        </Link>

        <nav ref={navRef} aria-label="Main" className="hidden lg:flex items-center gap-1">
          {navigation.map((item) =>
            item.items ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenMenu(null);
                }}
              >
                <button
                  type="button"
                  aria-expanded={openMenu === item.label}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                  className={`flex items-center gap-1 px-3 py-2 text-[14px] font-semibold rounded-full transition-colors ${
                    groupActive(item.items) ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden
                    className={`w-4 h-4 transition-transform ${openMenu === item.label ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 ${openMenu === item.label ? 'block' : 'hidden'}`}
                >
                  <ul className="nav-panel w-[320px] p-2">
                    {item.items.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className={`block rounded-xl px-4 py-3 transition-colors hover:bg-white/10 ${
                            isActive(sub.href) ? 'bg-white/10' : ''
                          }`}
                        >
                          <span className="block text-[14px] font-bold text-white">{sub.label}</span>
                          {sub.description && (
                            <span className="block text-[13px] text-white/70 mt-0.5 leading-snug">{sub.description}</span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`px-3 py-2 text-[14px] font-semibold rounded-full transition-colors ${
                  isActive(item.href) ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/call" className="btn-cta hidden sm:inline-flex items-center px-5 h-10 text-[14px] font-bold">
            Book a call
          </Link>
          <button
            type="button"
            onClick={() => setIsSheetOpen(true)}
            className="lg:hidden p-2 -mr-2 text-white"
            aria-label="Open menu"
            aria-expanded={isSheetOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>

      {/* Mobile: full-height glass sheet. Rendered outside the header because its
          backdrop-filter would otherwise trap position: fixed inside the bar. */}
      {isSheetOpen && (
        <div className="nav-sheet fixed inset-0 z-[110] flex flex-col lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="container-hexa h-16 flex items-center justify-between border-b border-white/10 shrink-0">
            <Link href="/" className="relative block w-[96px] h-[22px]" aria-label="Hexa home">
              <Image src="/logo.png" alt="Hexa" fill sizes="96px" className="object-contain object-left" />
            </Link>
            <button type="button" onClick={() => setIsSheetOpen(false)} className="p-2 -mr-2 text-white" aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto container-hexa py-4">
            <ul className="divide-y divide-white/10">
              {navigation.map((item) =>
                item.items ? (
                  <li key={item.label}>
                    <button
                      type="button"
                      aria-expanded={openAccordion === item.label}
                      onClick={() => setOpenAccordion(openAccordion === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between py-4 text-lg font-bold text-white"
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden
                        className={`w-5 h-5 transition-transform ${openAccordion === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openAccordion === item.label && (
                      <ul className="pb-4 space-y-1">
                        {item.items.map((sub) => (
                          <li key={sub.href}>
                            <Link href={sub.href} className="block rounded-xl px-3 py-2.5 hover:bg-white/10">
                              <span className="block font-semibold text-white">{sub.label}</span>
                              {sub.description && <span className="block text-sm text-white/70">{sub.description}</span>}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link href={item.href!} className="block py-4 text-lg font-bold text-white">
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
          <div className="container-hexa py-4 border-t border-white/10 shrink-0">
            <Link href="/call" className="btn btn-primary w-full">
              Book a call
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
