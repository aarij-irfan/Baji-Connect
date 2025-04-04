import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutHero from "@/components/about-hero"
import AboutContent from "@/components/about-content"
import ValuesSection from "@/components/values-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <AboutHero />
      <AboutContent />
      <ValuesSection />
      <div className="flex-grow"></div>
      <Footer />
    </main>
  )
}

