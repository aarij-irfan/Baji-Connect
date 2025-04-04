import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactHero from "@/components/contact-hero"
import ContactSection from "@/components/contact-section"

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <ContactHero />
      <ContactSection />
      <div className="flex-grow"></div>
      <Footer />
    </main>
  )
}

