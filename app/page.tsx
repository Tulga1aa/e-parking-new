import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import LocationSection from "@/components/location-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="shadow-lg fixed top-0 left-0 right-0 z-50 bg-white">
        <Header />
      </div>
      <div className="pt-10"></div>
      <HeroSection />
      <FeaturesSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
