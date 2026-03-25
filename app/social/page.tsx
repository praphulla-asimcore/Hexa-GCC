import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Hexa Social | Life at Hexa GCC',
  description: 'Discover the culture, team, and global presence of Hexa GCC. See our offices, team events, and celebrations across Philippines, Malaysia, and Nepal.',
};

export default function HexaSocialPage() {
  return (
    <main>
      <Header />
      {/* Spacer for fixed header */}
      <div className="h-20" />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#E6007E]/10 text-[#E6007E] text-sm font-medium px-4 py-2 rounded-full mb-4">
              Life at Hexa
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              The People Behind <span className="gradient-text">Your Numbers</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the teams across multiple countries who bring accountability, precision, 
              and care to your finance operations every single day.
            </p>
          </div>
        </div>
      </section>

      {/* Our Headquarters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our <span className="gradient-text">Headquarters</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Located in Kathmandu, Nepal, our state-of-the-art facility serves as the operational 
                hub for finance teams across 8 countries. Built for collaboration, security, and 
                round-the-clock delivery.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">50+</div>
                  <div className="text-gray-600 text-sm">Finance Professionals</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">24/7</div>
                  <div className="text-gray-600 text-sm">Operational Capability</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">8</div>
                  <div className="text-gray-600 text-sm">Countries Served</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">ISO</div>
                  <div className="text-gray-600 text-sm">Security Standards</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hexa-office.jpg"
                alt="Hexa GCC Headquarters in Kathmandu, Nepal"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Inside <span className="gradient-text">Hexa</span>
            </h2>
            <p className="text-gray-600 text-lg">
              A glimpse into our daily operations and team culture.
            </p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-gray-900">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/team-photo.jpg"
            >
              <source src="/hexa-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Team Photos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Dedicated professionals committed to delivering excellence in finance operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Leadership/Client Meeting */}
            <div className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/team-meeting.jpg"
                  alt="Hexa GCC Leadership and Client Meeting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900 text-lg">Client Engagement</h3>
                <p className="text-gray-600 text-sm">Building lasting partnerships with our global clients</p>
              </div>
            </div>
            
            {/* Nepal Office Team */}
            <div className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/team-photo.jpg"
                  alt="Hexa GCC Nepal Team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900 text-lg">Nepal Operations Team</h3>
                <p className="text-gray-600 text-sm">The core team driving daily finance operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Year End Celebrations */}
      <section className="py-16 hero-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Celebrating <span className="gradient-text">Together</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our teams across the Philippines, Malaysia, and Nepal came together to 
              celebrate another successful year of delivering excellence.
            </p>
          </div>
          
          <div className="relative aspect-[3/4] md:aspect-[4/5] max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/year-end-dinner.jpg"
              alt="Hexa GCC Year End Dinner - Teams across Philippines, Malaysia, and Nepal"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 text-center">
              <span className="text-2xl">🇵🇭</span>
              <span className="text-white ml-2 font-medium">Philippines</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 text-center">
              <span className="text-2xl">🇲🇾</span>
              <span className="text-white ml-2 font-medium">Malaysia</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 text-center">
              <span className="text-2xl">🇳🇵</span>
              <span className="text-white ml-2 font-medium">Nepal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Be <span className="gradient-text">Part of the Team</span>?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Whether you&apos;re looking to outsource your finance operations or join 
            our growing team, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1RonhRpn6mMNI3Yq8PocQXHx-mZNFj7nIAFh0qndnlOMlGiUtO_DAP3D9P7J5BkXSmpK5Qx0vI"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg px-8 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Book a Consultation
            </a>
            <a
              href="mailto:praphulla@hexamatics.com?subject=Careers at Hexa GCC"
              className="border-2 border-[#E6007E] text-[#E6007E] px-8 py-4 font-semibold rounded-lg hover:bg-[#E6007E]/5 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </main>
  );
}
