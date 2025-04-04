import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import JobCarousel from "@/components/job-carousel"
import Footer from "@/components/footer"
import { jobData } from "@/lib/data"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Opportunities</h2>
        <JobCarousel jobs={jobData} />
      </section>
      <section className="container mx-auto px-4 py-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg my-12 mx-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Join Baji Connect?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Baji Connect empowers community health workers with meaningful opportunities, professional development, and
            a supportive network. Join our community today!
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl mb-2 text-green-600">Find Opportunities</h3>
              <p className="text-gray-600">Access hundreds of job listings tailored for community health workers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl mb-2 text-blue-600">Grow Your Skills</h3>
              <p className="text-gray-600">Access training and certification programs to advance your career.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl mb-2 text-green-600">Join Our Community</h3>
              <p className="text-gray-600">Connect with other Sitara Bajis and healthcare professionals.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex-grow"></div>
      <Footer />
    </main>
  )
}

