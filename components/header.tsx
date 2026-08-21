'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/9779851338099';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Finance Operations', href: '/#finance-platform' },
    { label: 'Finance Intelligence', href: '/finance-intelligence' },
    { label: 'Countries', href: '/countries#countries' },
    { label: 'Why Hexa', href: '/why-hexa' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#f6f3ef]/95 text-[#17171a] shadow-sm backdrop-blur-md' : 'bg-[#17171a]/80 text-white backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-40 h-12">
              <Image
                src="/logo.png"
                alt="Hexa GCC Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems?.map((item) => (
              <Link
                key={item?.label}
                href={item?.href ?? '#'}
                className={`text-[13px] font-medium transition-colors hover:text-[#E6007E] ${isScrolled ? 'text-[#17171a]/70' : 'text-white/75'}`}
              >
                {item?.label}
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
              {navItems?.map((item) => (
                <Link
                  key={item?.label}
                  href={item?.href ?? '#'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 font-medium hover:text-[#E6007E]"
                >
                  {item?.label}
                </Link>
              ))}
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
