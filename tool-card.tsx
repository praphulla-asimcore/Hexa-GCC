'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Tool {
  id: number;
  name: string;
  description: string;
  icon: string;
  url: string;
  gradient: string;
}

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const safeTool = tool ?? {} as Tool;

  return (
    <motion.a
      href={safeTool?.url ?? '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full border border-gray-100">
        {/* Gradient accent */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${safeTool?.gradient ?? 'from-pink-500 to-purple-600'}`} />
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Icon */}
          <div className="relative flex-shrink-0">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <Image
                src={safeTool?.icon ?? '/favicon.svg'}
                alt={safeTool?.name ?? 'Tool icon'}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-300">
              {safeTool?.name ?? 'Tool Name'}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              {safeTool?.description ?? 'Tool description'}
            </p>
            
            {/* CTA Button */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${safeTool?.gradient ?? 'from-pink-500 to-purple-600'} text-white text-sm font-semibold rounded-full group-hover:shadow-lg transition-all duration-300`}>
              <span>Launch Tool</span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hover background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
      </div>
    </motion.a>
  );
}
