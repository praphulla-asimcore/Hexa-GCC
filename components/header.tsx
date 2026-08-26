'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/9779851338099';

// Capability-centre nav: unchanged from before R4. Shown on /capability-centres
// and every route that isn't explicitly part of the group layer below.
const capabilities = [
  { label: 'Finance', href: '/finance' },
  { label: 'Technology', href: '/technology' },
  { label: 'People', href: '/people' },
];

const navItems = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Markets', href: '/markets' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Trust', href: '/trust' },
  { label: 'Hexa Intelligence', href: '/hexa-intelligence' },
  { label: 'Hexa Academy', href: '/hexa-academy' },
  { label: 'About', href: '/about' },
];

// Group nav: only on /, /in-market* and /advisory* (R4 Task 5).
const groupNavItems = [
  { label: 'In your market', href: '/in-market' },
  { label: 'Capability centres', href: '/capability-centres' },
  { label: 'Advisory', href: '/advisory' },
  { label: 'Clients', href: '/clients' },
  { label: 'About', href: '/about' },
];

function isGroupRoute(pathname: string) {
  return pathname === '/' || pathname.startsWith('/in-market') || pathname.startsWith('/advisory');
}

export default function Header() {
  const pathname = usePathname();
  const isGroup = isGroupRoute(pathname ?? '/');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = `text-[13px] font-medium transition-colors hover:text-[#E6007E] ${isScrolled ? 'text-[#17171a]/70' : 'text-white/75'}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#f6f3ef]/95 text-[#17171a] shadow-sm backdrop-blur-md' : 'bg-[#17171a]/80 text-white backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-40 h-12">
              <Image
                src="/logo.png"
                alt="Hexa Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {!isGroup && (
              <div
                className="relative"
                onMouseEnter={() => setIsCapabilitiesOpen(true)}
                onMouseLeave={() => setIsCapabilitiesOpen(false)}
              >
                <button className={`flex items-center gap-1 ${linkClass}`}>
                  Capabilities
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <AnimatePresence>
                  {isCapabilitiesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-3"
                    >
                      <div className="bg-white rounded-xl shadow-lg border border-gray-200 py-2 min-w-[160px]">
                        {capabilities.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#E6007E] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
            {(isGroup ? groupNavItems : navItems).map((item) => (
              <Link key={item.label} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg px-5 py-2.5 text-sm font-semibold text-white rounded-full hover:bg-[#b80065] transition-colors"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Talk to Hexa
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-[#17171a]' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#f6f3ef] border-t shadow-lg text-[#17171a]"
          >
            <div className="px-4 py-6 space-y-4">
              {!isGroup && (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Capabilities</p>
                  {capabilities.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-700 font-medium hover:text-[#E6007E] pl-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                </>
              )}
              <div className={isGroup ? 'space-y-4' : 'border-t border-gray-200 pt-4 space-y-4'}>
                {(isGroup ? groupNavItems : navItems).map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-700 font-medium hover:text-[#E6007E]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="pt-4 space-y-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full text-center gradient-bg px-4 py-2.5 text-white rounded-lg font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  Talk to Hexa
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
