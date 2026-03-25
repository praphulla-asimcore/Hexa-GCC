import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Hexa GCC',
  description: 'Terms of Service for Hexa GCC - Finance & Accounting Global Capability Center.',
};

export default function TermsPage() {
  return (
    <main>
      <Header />
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-gray-500 mb-8">Last updated: January 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using the Hexa GCC website and services, you accept and agree to be bound 
                by these Terms of Service. If you do not agree to these terms, please do not use our 
                website or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-600 mb-4">
                Hexa GCC provides finance and accounting services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Outsourced accounting and bookkeeping</li>
                <li>Remote accountant and auditor services</li>
                <li>Tax preparation and compliance support</li>
                <li>Remote CFO services</li>
                <li>Staff augmentation</li>
                <li>Financial analysis and modelling</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Specific services, deliverables, and terms will be detailed in individual service 
                agreements with clients.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Website</h2>
              <p className="text-gray-600 mb-4">You agree to use our website only for lawful purposes and in a manner that:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Does not infringe on the rights of others</li>
                <li>Does not restrict or inhibit anyone else&apos;s use of the website</li>
                <li>Complies with all applicable laws and regulations</li>
                <li>Does not transmit harmful or malicious content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content on this website, including text, graphics, logos, images, and software, is 
                the property of Hexa GCC or its content suppliers and is protected by intellectual 
                property laws. You may not reproduce, distribute, modify, or create derivative works 
                without our express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Confidentiality</h2>
              <p className="text-gray-600 mb-4">
                We understand the sensitive nature of financial information. All client data and 
                information shared with Hexa GCC is treated as confidential and is protected by:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Non-disclosure agreements (NDAs)</li>
                <li>Secure data handling procedures</li>
                <li>Access controls and encryption</li>
                <li>Employee confidentiality training</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the fullest extent permitted by law, Hexa GCC shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages arising from your use of our 
                website or services. Our liability for any direct damages shall not exceed the fees 
                paid for the specific services giving rise to the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer</h2>
              <p className="text-gray-600 mb-4">
                The information on this website is provided for general informational purposes only 
                and does not constitute professional advice. While we strive to provide accurate and 
                up-to-date information, we make no representations or warranties about the completeness, 
                accuracy, or reliability of the content.
              </p>
              <p className="text-gray-600 mb-4">
                Specific regulatory and compliance requirements vary by jurisdiction. Clients should 
                consult with qualified local professionals for advice specific to their situation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Level Agreements</h2>
              <p className="text-gray-600 mb-4">
                Specific service level agreements (SLAs) including response times, deliverable timelines, 
                and quality standards will be defined in individual client engagement agreements. The 
                general SLAs mentioned on this website are indicative and may be customized based on 
                specific client requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to terminate or suspend access to our website and services at our 
                discretion, without notice, for conduct that we believe violates these Terms of Service 
                or is harmful to other users, us, or third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These Terms of Service shall be governed by and construed in accordance with the laws 
                of Nepal. Any disputes arising from these terms or your use of our services shall be 
                subject to the exclusive jurisdiction of the courts in Kathmandu, Nepal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms of Service at any time. Changes will be 
                effective immediately upon posting to the website. Your continued use of the website 
                after any changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For any questions regarding these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700"><strong>Hexa GCC</strong></p>
                <p className="text-gray-600">Email: praphulla@hexamatics.com</p>
                <p className="text-gray-600">Location: Kathmandu, Nepal</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
