import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="relative w-40 h-12 mb-6">
              <Image
                src="/logo.png"
                alt="Hexa GCC Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Nepal-based Finance & Accounting Global Capability Center delivering 
              country-specific compliance with confidence. From execution to accountability.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#E6007E]" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#E6007E]" />
                <a href="mailto:praphulla@hexamatics.com" className="hover:text-white transition-colors">
                  praphulla@hexamatics.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Globe className="w-5 h-5 text-[#E6007E]" />
                <span>Serving 8 Countries Globally</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#countries" className="text-gray-400 hover:text-white transition-colors">
                  Countries We Serve
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Hexa GCC. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-600">Serving:</span>
              <div className="flex gap-2 text-xl">
                <span title="Singapore">🇸🇬</span>
                <span title="Malaysia">🇲🇾</span>
                <span title="Indonesia">🇮🇩</span>
                <span title="Philippines">🇵🇭</span>
                <span title="UK">🇬🇧</span>
                <span title="USA">🇺🇸</span>
                <span title="Australia">🇦🇺</span>
                <span title="Canada">🇨🇦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
