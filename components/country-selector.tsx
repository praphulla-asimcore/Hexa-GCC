'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CheckCircle, FileText, Target, Users, Shield, 
  ClipboardList, AlertTriangle, TrendingUp, Briefcase,
  DollarSign, Building2, Sparkles
} from 'lucide-react';
import { countryData, type CountryData } from '@/lib/country-data';

const countries = ['SG', 'MY', 'ID', 'PH', 'UK', 'US', 'AU', 'CA'];

export default function CountrySelector() {
  const [selectedCountry, setSelectedCountry] = useState<string>('SG');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const currentCountry: CountryData | undefined = countryData?.[selectedCountry];

  return (
    <section id="countries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Country-Specific <span className="gradient-text">Compliance Expertise</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every country has unique statutory requirements. Select a country to see 
            how we handle local compliance with precision.
          </p>
        </motion.div>

        {/* Country Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {countries?.map((code) => {
            const country = countryData?.[code];
            return (
              <button
                key={code}
                onClick={() => setSelectedCountry(code)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                  selectedCountry === code
                    ? 'gradient-bg text-white shadow-lg shadow-[#E6007E]/20'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span className="text-xl">{country?.flag}</span>
                <span className="hidden sm:inline">{country?.name}</span>
                <span className="sm:hidden">{code}</span>
              </button>
            );
          })}
        </div>

        {/* Country Content */}
        <AnimatePresence mode="wait">
          {currentCountry && (
            <motion.div
              key={selectedCountry}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Header Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="gradient-bg px-8 py-6">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{currentCountry?.flag}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{currentCountry?.name}</h3>
                      <p className="text-white/80">{currentCountry?.standards}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-8">
                      {/* Scope */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Target className="w-5 h-5 text-[#E6007E]" />
                          <h4 className="font-bold text-gray-900">What We Handle</h4>
                        </div>
                        <ul className="space-y-2">
                          {currentCountry?.scope?.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Compliance */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Shield className="w-5 h-5 text-[#E6007E]" />
                          <h4 className="font-bold text-gray-900">Compliance & Statutory Scope</h4>
                        </div>
                        <ul className="space-y-2">
                          {currentCountry?.compliance?.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600">
                              <span className="text-[#E6007E] font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      {/* Personas */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Users className="w-5 h-5 text-[#E6007E]" />
                          <h4 className="font-bold text-gray-900">Who We Typically Support</h4>
                        </div>
                        <ul className="space-y-2">
                          {currentCountry?.personas?.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600">
                              <span className="text-purple-500 font-bold">→</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Confidence */}
                      <div className="bg-gradient-to-br from-[#E6007E]/5 to-purple-500/5 rounded-xl p-6 border border-[#E6007E]/10">
                        <h4 className="font-bold text-gray-900 mb-4">What Confidence Looks Like</h4>
                        <ul className="space-y-2">
                          {currentCountry?.confidence?.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-700">
                              <CheckCircle className="w-4 h-4 text-[#E6007E]" />
                              <span className="font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monthly Statutory Checklist */}
              {currentCountry?.monthlyChecklist && (
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <ClipboardList className="w-6 h-6 text-[#E6007E]" />
                    <h4 className="text-xl font-bold text-gray-900">Monthly Statutory Checklist</h4>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Payroll */}
                    <div className="bg-blue-50 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <DollarSign className="w-5 h-5 text-blue-600" />
                        <h5 className="font-semibold text-blue-900">Payroll</h5>
                      </div>
                      <ul className="space-y-2">
                        {currentCountry.monthlyChecklist.payroll?.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-blue-800 text-sm">
                            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Indirect Tax */}
                    <div className="bg-amber-50 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-5 h-5 text-amber-600" />
                        <h5 className="font-semibold text-amber-900">Indirect Tax</h5>
                      </div>
                      <ul className="space-y-2">
                        {currentCountry.monthlyChecklist.indirect?.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-amber-800 text-sm">
                            <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Corporate */}
                    <div className="bg-purple-50 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <Building2 className="w-5 h-5 text-purple-600" />
                        <h5 className="font-semibold text-purple-900">Corporate</h5>
                      </div>
                      <ul className="space-y-2">
                        {currentCountry.monthlyChecklist.corporate?.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-purple-800 text-sm">
                            <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Templates & Mistakes Prevented Row */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Templates/Workpapers */}
                {currentCountry?.templates && (
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <FileText className="w-6 h-6 text-[#E6007E]" />
                      <h4 className="text-xl font-bold text-gray-900">Templates & Workpapers</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentCountry.templates?.map((item, i) => (
                        <span 
                          key={i} 
                          className="text-sm bg-gradient-to-r from-[#E6007E]/10 to-purple-500/10 text-gray-700 px-4 py-2 rounded-lg border border-[#E6007E]/20 font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mistakes Prevented */}
                {currentCountry?.mistakesPrevented && (
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <AlertTriangle className="w-6 h-6 text-amber-500" />
                      <h4 className="text-xl font-bold text-gray-900">Mistakes We Prevent</h4>
                    </div>
                    <ul className="space-y-3">
                      {currentCountry.mistakesPrevented?.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-red-500 text-xs font-bold">✕</span>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Mini Case Study */}
              {currentCountry?.miniCase && (
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 text-white">
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-6 h-6 text-[#E6007E]" />
                    <h4 className="text-xl font-bold">Sample Outcome: {currentCountry.miniCase.title}</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                      <div className="flex items-center gap-2 mb-3">
                        <Briefcase className="w-5 h-5 text-red-400" />
                        <h5 className="font-semibold text-red-400">Challenge</h5>
                      </div>
                      <p className="text-gray-300">{currentCountry.miniCase.challenge}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-5 border border-green-500/30">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <h5 className="font-semibold text-green-400">Result</h5>
                      </div>
                      <p className="text-gray-300">{currentCountry.miniCase.result}</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
