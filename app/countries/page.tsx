import Header from '@/components/header';
import ServicesSection from '@/components/services-section';
import SidebarCountrySelector from '@/components/sidebar-country-selector';
import Footer from '@/components/footer';
import StickyCTA from '@/components/sticky-cta';

export const metadata = {
  title: 'Country-Level Finance Support | Hexa GCC',
  description: 'Dedicated finance teams tailored to your country\'s compliance requirements. Singapore, Malaysia, Indonesia, Philippines, UK, USA, Australia, Canada.',
};

export default function CountriesPage() {
  return (
    <main>
      <Header />
      {/* Spacer for fixed header */}
      <div className="h-20" />
      <ServicesSection />
      <SidebarCountrySelector />
      <Footer />
      <StickyCTA />
    </main>
  );
}
