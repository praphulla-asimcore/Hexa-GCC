'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="relative py-16 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/50 to-purple-100/50" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        {/* Logo */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <Image
            src="/hexa-logo.png"
            alt="HexaSuite Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Brand name */}
        <h3 className="text-2xl font-bold gradient-text mb-4">HexaSuite</h3>
        
        {/* Tagline */}
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Empowering businesses with intelligent automation and seamless workflows.
        </p>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full mb-8" />

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © 2026 HexaSuite. All rights reserved.
        </p>
        <p className="text-gray-400 text-xs mt-2">
          Powered by Hexamatics Nepal
        </p>
      </motion.div>
    </footer>
  );
}
