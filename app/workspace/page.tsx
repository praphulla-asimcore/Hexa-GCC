import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nomad Business Centre | Hexa',
  description: 'A reliable desk for independent professionals, sold by the day or week. Guests are responsible for their own immigration and tax position.',
};

const includes = ['A dedicated desk', 'Managed IT and network', 'Meeting room access', 'Reliable power and connectivity'];

export default function WorkspacePage() {
  return (
    <main>
      <Header />
      <div className="h-20 bg-white" />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#E6007E] mb-4">Nomad Business Centre</p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">A reliable desk, for independent professionals.</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Day and week rates for individuals who need a dependable place to work — not a co-working
            marketing pitch, just reliability. Rates are provided on request.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">What's included</h2>
          <ul className="space-y-2 mb-10">
            {includes.map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-[#E6007E] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Important:</strong> Guests are responsible for their own immigration and tax position.
              Hexa does not advise on visa status, and use of this workspace does not constitute or imply
              work authorization of any kind.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="mailto:praphulla@hexamatics.com?subject=Nomad%20Business%20Centre%20enquiry"
              className="inline-flex items-center gap-2 gradient-bg px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Ask about rates and availability
            </a>
          </div>
        </div>
      </section>
      <Footer />
      <StickyCTA />
    </main>
  );
}
