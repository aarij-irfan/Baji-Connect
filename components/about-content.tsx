import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutContent() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Baji Connect is a digital platform designed to connect Sitara Bajis (community health workers) with job
              opportunities in the healthcare and research sectors.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in empowering women through technology, professional training, and accessible employment. Our
              platform serves as a bridge between skilled caregivers and organizations seeking their expertise.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 2023, Baji Connect emerged from a recognition that community health workers often face barriers
              to stable employment despite their crucial role in healthcare delivery. We're committed to changing that
              narrative by creating pathways to meaningful work.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our team combines expertise in healthcare, technology, and community development to build a platform that
              truly serves the needs of Sitara Bajis and the communities they support.
            </p>

            <div className="pt-4">
              <Button
                asChild
                className="bg-[#16b401] hover:bg-[#129701] text-white transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg"
              >
                <Link href="/jobs">Explore Opportunities</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-500">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/placeholder.svg?height=800&width=600')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

