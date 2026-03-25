'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CheckCircle, FileText, Target, Users, Shield, 
  AlertTriangle, TrendingUp, Sparkles,
  Calendar, Receipt, Building
} from 'lucide-react';
import { countryData, type CountryData } from '@/lib/country-data';

const countries = ['SG', 'MY', 'ID', 'PH', 'UK', 'US', 'AU', 'CA'];

export default function SidebarCountrySelector() {
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

        {/* Two Column Layout: Sidebar + Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Country List */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden sticky top-24">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900 text-sm">Select Country</h3>
              </div>
              <div className="p-2">
                {countries?.map((code) => {
                  const country = countryData?.[code];
                  const isSelected = selectedCountry === code;
                  
                  return (
                    <button
                      key={code}
                      onClick={() => setSelectedCountry(code)}
                      onMouseEnter={() => setSelectedCountry(code)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                        isSelected
                          ? 'gradient-bg text-white shadow-md'
                          : 'text-gray-700 hover:bg-[#E6007E]/10 hover:text-[#E6007E]'
                      }`}
                    >
                      <span className="text-2xl">{country?.flag}</span>
                      <div className="text-left">
                        <span className="block text-sm font-semibold">{country?.name}</span>
                        <span className={`text-xs ${isSelected ? 'text-white/70' : 'text-gray-500'}`}>
                          {code}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Content - Country Details */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {currentCountry && (
                <motion.div
                  key={selectedCountry}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
                >
                  {/* Header */}
                  <div className="gradient-bg px-6 py-5">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{currentCountry?.flag}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{currentCountry?.name}</h3>
                        <p className="text-white/80">{currentCountry?.standards}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-8">
                    {/* Monthly Statutory Checklist */}
                    {currentCountry?.monthlyChecklist && (
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Calendar className="w-5 h-5 text-[#E6007E]" />
                          <h4 className="font-bold text-gray-900">Monthly Statutory Checklist</h4>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                          {/* Payroll */}
                          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                            <div className="flex items-center gap-2 mb-3">
                              <Users className="w-4 h-4 text-blue-600" />
                              <span className="font-semibold text-blue-900 text-sm">Payroll</span>
                            </div>
                            <ul className="space-y-1.5">
                              {currentCountry?.monthlyChecklist?.payroll?.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
                                  <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Indirect Tax */}
                          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                            <div className="flex items-center gap-2 mb-3">
                              <Receipt className="w-4 h-4 text-amber-600" />
                              <span className="font-semibold text-amber-900 text-sm">Indirect Tax</span>
                            </div>
                            <ul className="space-y-1.5">
                              {currentCountry?.monthlyChecklist?.indirect?.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-amber-800">
                                  <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Corporate Tax */}
                          <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                            <div className="flex items-center gap-2 mb-3">
                              <Building className="w-4 h-4 text-purple-600" />
                              <span className="font-semibold text-purple-900 text-sm">Corporate Tax</span>
                            </div>
                            <ul className="space-y-1.5">
                              {currentCountry?.monthlyChecklist?.corporate?.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-purple-800">
                                  <CheckCircle className="w-3.5 h-3.5 text-purple-500 flex-shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Two Column Layout */}
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div className="space-y-6">
                        {/* What We Handle */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Target className="w-5 h-5 text-[#E6007E]" />
                            <h4 className="font-bold text-gray-900">What We Handle</h4>
                          </div>
                          <ul className="space-y-2">
                            {currentCountry?.scope?.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-700">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Templates & Deliverables */}
                        {currentCountry?.templates && (
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <FileText className="w-5 h-5 text-[#E6007E]" />
                              <h4 className="font-bold text-gray-900">Templates & Deliverables</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {currentCountry?.templates?.map((template, i) => (
                                <span key={i} className="text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                                  {template}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        {/* Common Mistakes Prevented */}
                        {currentCountry?.mistakesPrevented && (
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <AlertTriangle className="w-5 h-5 text-amber-500" />
                              <h4 className="font-bold text-gray-900">Common Mistakes We Prevent</h4>
                            </div>
                            <ul className="space-y-2">
                              {currentCountry?.mistakesPrevented?.map((mistake, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                  <Shield className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                                  <span>{mistake}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Confidence Indicators */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="w-5 h-5 text-[#E6007E]" />
                            <h4 className="font-bold text-gray-900">Your Confidence</h4>
                          </div>
                          <ul className="space-y-2">
                            {currentCountry?.confidence?.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-700">
                                <CheckCircle className="w-4 h-4 text-[#E6007E] flex-shrink-0 mt-1" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Mini Case Study */}
                    {currentCountry?.miniCase && (
                      <div className="bg-gradient-to-r from-[#E6007E]/5 to-purple-500/5 rounded-xl p-5 border border-[#E6007E]/10">
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="w-5 h-5 text-[#E6007E]" />
                          <h4 className="font-bold text-gray-900">Sample Result</h4>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">Challenge</p>
                            <p className="text-gray-700 text-sm">{currentCountry?.miniCase?.challenge}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-1">Result</p>
                            <p className="text-gray-700 text-sm">{currentCountry?.miniCase?.result}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
