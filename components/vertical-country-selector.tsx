'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CheckCircle, FileText, Target, Users, Shield, 
  ClipboardList, AlertTriangle, TrendingUp, Briefcase,
  DollarSign, Building2, Sparkles, ChevronDown, ChevronUp,
  Calendar, Receipt, Building, Landmark
} from 'lucide-react';
import { countryData, type CountryData } from '@/lib/country-data';

const countries = ['SG', 'MY', 'ID', 'PH', 'UK', 'US', 'AU', 'CA'];

export default function VerticalCountrySelector() {
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const toggleCountry = (code: string) => {
    setExpandedCountry(expandedCountry === code ? null : code);
  };

  return (
    <section id="countries" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Every country has unique statutory requirements. Click on a country to see 
            how we handle local compliance with precision.
          </p>
        </motion.div>

        {/* Vertical Country List */}
        <div className="space-y-4">
          {countries?.map((code, index) => {
            const country = countryData?.[code];
            const isExpanded = expandedCountry === code;
            
            return (
              <motion.div
                key={code}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {/* Country Header Button */}
                <button
                  onClick={() => toggleCountry(code)}
                  className={`w-full flex items-center justify-between p-5 rounded-xl font-medium transition-all ${
                    isExpanded
                      ? 'gradient-bg text-white shadow-lg shadow-[#E6007E]/20'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{country?.flag}</span>
                    <div className="text-left">
                      <span className="text-lg font-bold block">{country?.name}</span>
                      <span className={`text-sm ${isExpanded ? 'text-white/80' : 'text-gray-500'}`}>
                        {country?.standards}
                      </span>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && country && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-white rounded-b-xl border border-t-0 border-gray-200 shadow-sm">
                        <div className="p-6 space-y-8">
                          {/* Monthly Statutory Checklist */}
                          {country?.monthlyChecklist && (
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
                                    {country?.monthlyChecklist?.payroll?.map((item, i) => (
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
                                    {country?.monthlyChecklist?.indirect?.map((item: string, i: number) => (
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
                                    {country?.monthlyChecklist?.corporate?.map((item: string, i: number) => (
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
                                  {country?.scope?.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Templates & Deliverables */}
                              {country?.templates && (
                                <div>
                                  <div className="flex items-center gap-2 mb-3">
                                    <FileText className="w-5 h-5 text-[#E6007E]" />
                                    <h4 className="font-bold text-gray-900">Templates & Deliverables</h4>
                                  </div>
                                  <div className="flex flex-wrap gap-2">
                                    {country?.templates?.map((template, i) => (
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
                              {country?.mistakesPrevented && (
                                <div>
                                  <div className="flex items-center gap-2 mb-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                                    <h4 className="font-bold text-gray-900">Common Mistakes We Prevent</h4>
                                  </div>
                                  <ul className="space-y-2">
                                    {country?.mistakesPrevented?.map((mistake, i) => (
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
                                  {country?.confidence?.map((item, i) => (
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
                          {country?.miniCase && (
                            <div className="bg-gradient-to-r from-[#E6007E]/5 to-purple-500/5 rounded-xl p-5 border border-[#E6007E]/10">
                              <div className="flex items-center gap-2 mb-3">
                                <TrendingUp className="w-5 h-5 text-[#E6007E]" />
                                <h4 className="font-bold text-gray-900">Sample Result</h4>
                              </div>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">Challenge</p>
                                  <p className="text-gray-700 text-sm">{country?.miniCase?.challenge}</p>
                                </div>
                                <div>
                                  <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-1">Result</p>
                                  <p className="text-gray-700 text-sm">{country?.miniCase?.result}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
