'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Calendar, CheckCircle, Loader2, Building2, User, Mail, Globe, Briefcase, Database, BarChart3, MessageSquare } from 'lucide-react';

const BOOKING_URL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1RonhRpn6mMNI3Yq8PocQXHx-mZNFj7nIAFh0qndnlOMlGiUtO_DAP3D9P7J5BkXSmpK5Qx0vI';

const countries = [
  { value: 'SG', label: 'Singapore' },
  { value: 'MY', label: 'Malaysia' },
  { value: 'ID', label: 'Indonesia' },
  { value: 'PH', label: 'Philippines' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'US', label: 'United States' },
  { value: 'AU', label: 'Australia' },
  { value: 'CA', label: 'Canada' },
  { value: 'OTHER', label: 'Other' },
];

const services = [
  'Outsourced Accounting & Bookkeeping',
  'Remote Accountants / Auditors',
  'Tax & Compliance',
  'Remote CFO',
  'Staff Augmentation',
  'Financial Analysis & Modelling',
];

const accountingSoftware = [
  'QuickBooks',
  'Xero',
  'Zoho Books',
  'NetSuite',
  'SAP',
  'Tally',
  'Excel/Sheets',
  'Other',
];

const transactionRanges = [
  'Less than 100/month',
  '100-500/month',
  '500-1,000/month',
  '1,000-5,000/month',
  '5,000+/month',
];

export default function LeadForm() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    servicesNeeded: [] as string[],
    accountingSoftware: '',
    transactionsRange: '',
    message: '',
  });

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      servicesNeeded: prev?.servicesNeeded?.includes(service)
        ? prev?.servicesNeeded?.filter(s => s !== service)
        : [...(prev?.servicesNeeded ?? []), service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response?.json?.() ?? {};

      if (!response?.ok) {
        throw new Error(result?.message || 'Failed to submit form');
      }

      setIsSuccess(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        country: '',
        servicesNeeded: [],
        accountingSoftware: '',
        transactionsRange: '',
        message: '',
      });
    } catch (err: any) {
      setError(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-12 shadow-xl"
          >
            <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-8">
              We&apos;ve received your request and will respond within 24 business hours 
              with a country-specific service plan tailored to your needs.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-bg px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Calendar className="w-5 h-5" />
              Or Book a Call Now
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Your <span className="gradient-text">Country-Specific Plan</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tell us about your requirements and we&apos;ll prepare a tailored proposal 
            with scope, timelines, and pricing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData?.name ?? ''}
                      onChange={(e) => setFormData({ ...formData, name: e?.target?.value ?? '' })}
                      className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E6007E]/20 focus:border-[#E6007E] transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData?.company ?? ''}
                      onChange={(e) => setFormData({ ...formData, company: e?.target?.value ?? '' })}
                      className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E6007E]/20 focus:border-[#E6007E] transition-all"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData?.email ?? ''}
                      onChange={(e) => setFormData({ ...formData, email: e?.target?.value ?? '' })}
                      className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E6007E]/20 focus:border-[#E6007E] transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      required
                      value={formData?.country ?? ''}
                      onChange={(e) => setFormData({ ...formData, country: e?.target?.value ?? '' })}
                      className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E6007E]/20 focus:border-[#E6007E] transition-all appearance-none bg-white"
                    >
                      <option value="">Select country</option>
                      {countries?.map((c) => (
                        <option key={c?.value} value={c?.value}>{c?.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Accounting Software */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Accounting Software</label>
                  <div className="relative">
                    <Database className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={formData?.accountingSoftware ?? ''}
                      onChange={(e) => setFormData({ ...formData, accountingSoftware: e?.target?.value ?? '' })}
                      className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E6007E]/20 focus:border-[#E6007E] transition-all appearance-none bg-white"
                    >
                      <option value="">Select software</option>
                      {accountingSoftware?.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Transactions Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Transactions</label>
                  <div className="relative">
                    <BarChart3 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      value={formData?.transactionsRange ?? ''}
                      onChange={(e) => setFormData({ ...formData, transactionsRange: e?.target?.value ?? '' })}
                      className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E6007E]/20 focus:border-[#E6007E] transition-all appearance-none bg-white"
                    >
                      <option value="">Select range</option>
                      {transactionRanges?.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Services Multi-select */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Services Needed (select all that apply)
                  </span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {services?.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all text-left ${
                        formData?.servicesNeeded?.includes(service)
                          ? 'gradient-bg text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Additional Details
                  </span>
                </label>
                <textarea
                  value={formData?.message ?? ''}
                  onChange={(e) => setFormData({ ...formData, message: e?.target?.value ?? '' })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E6007E]/20 focus:border-[#E6007E] transition-all"
                  placeholder="Tell us about your current challenges, timeline, or any specific requirements..."
                />
              </div>

              {/* Error */}
              {error && (
                <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Submit */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-bg px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Get a Country-Specific Plan
                    </>
                  )}
                </button>
                <p className="text-center text-gray-500 text-sm mt-3">
                  We respond within 24 business hours.
                </p>
              </div>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-[#E6007E] to-purple-600 rounded-2xl p-6 text-white">
              <MessageSquare className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Prefer to Talk?</h3>
              <p className="text-white/80 mb-6">
                Start a WhatsApp conversation with our team to discuss your requirements directly.
              </p>
              <a
                href="https://wa.me/9779851338099"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-[#E6007E] font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start WhatsApp Consultation
              </a>
            </div>

            {/* Trust Points */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4">What Happens Next?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">1</span>
                  <span className="text-gray-600">We review your requirements within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">2</span>
                  <span className="text-gray-600">Our team prepares a country-specific scope</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">3</span>
                  <span className="text-gray-600">You receive a detailed proposal with pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">4</span>
                  <span className="text-gray-600">Optional: Discovery call to discuss fit</span>
                </li>
              </ul>
            </div>

            {/* Privacy Note */}
            <p className="text-sm text-gray-600 text-center">
              Your information is secure and will only be used to prepare your proposal.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
