import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import LocationSection from "@/components/location-section"
import ContactSection from "@/components/contact"


export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
