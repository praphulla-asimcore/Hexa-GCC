import Link from 'next/link';
import Image from 'next/image';
import { Mail, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="relative w-40 h-12 mb-6">
              <Image
                src="/logo.png"
                alt="Hexa Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Dedicated people. Managed performance. AI-improved productivity. Finance, technology and
              people capability, built and continuously improved by Hexa.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#E6007E]" />
                <a href="mailto:praphulla@hexamatics.com" className="hover:text-white transition-colors">
                  praphulla@hexamatics.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Award className="w-5 h-5 text-[#E6007E] flex-shrink-0" />
                <span>ISO 27001 · ISO 9001 certified · ACCA Approved Employer</span>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Capabilities</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/finance" className="text-gray-400 hover:text-white transition-colors">
                  Finance
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-gray-400 hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/people" className="text-gray-400 hover:text-white transition-colors">
                  People
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/hexa-academy" className="text-gray-400 hover:text-white transition-colors">
                  Hexa Academy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/trust" className="text-gray-400 hover:text-white transition-colors">
                  Trust &amp; Security
                </Link>
              </li>
              <li>
                <Link href="/hexa-intelligence" className="text-gray-400 hover:text-white transition-colors">
                  Hexa Intelligence
                </Link>
              </li>
              <li>
                <Link href="/markets" className="text-gray-400 hover:text-white transition-colors">
                  Markets
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-gray-400 hover:text-white transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/why-hexa" className="text-gray-400 hover:text-white transition-colors">
                  Why Hexa
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
              <li>
                <Link href="/workspace" className="text-gray-400 hover:text-white transition-colors">
                  Workspace
                </Link>
              </li>
              <li>
                <Link href="/social" className="text-gray-400 hover:text-white transition-colors">
                  Social
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Hexa. Established 2002.
            </p>
            <p className="text-gray-500">
              Core markets: Malaysia · Singapore · Australia · Indonesia. Other jurisdictions on request.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
