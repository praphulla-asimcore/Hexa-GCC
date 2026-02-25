import HeroSection from '@/components/hero-section';
import ToolsSection from '@/components/tools-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ToolsSection />
      <Footer />
    </main>
  );
}
