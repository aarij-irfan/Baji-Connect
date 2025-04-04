"use client"

import type React from "react"

import { useState } from "react"
import { Search, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HeroSection() {
  const [keyword, setKeyword] = useState("")
  const [location, setLocation] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", { keyword, location })
    // In a real app, this would navigate to search results
  }

  return (
    <section className="relative min-h-[600px] h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Darker overlay to match Find a Job page
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Connecting Community Health Workers <br className="hidden md:block" />
            <span className="text-green-400">with Meaningful Opportunities</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Baji Connect is the premier platform for Sitara Bajis to find jobs, access training, and build their
            healthcare careers.
          </p>

          {/* Search Form */}
          <Card className="shadow-lg border-0 transform hover:shadow-xl transition-all duration-300 w-full max-w-5xl mx-auto mb-16">
            <CardContent className="p-4 sm:p-6">
              <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    className="pl-10 h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="City, state, or zip code"
                    className="pl-10 h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="h-12 px-8 bg-[#16b401] hover:bg-[#129701] transition-all duration-300 transform hover:scale-105"
                >
                  Search Jobs
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Animated Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full wave-animation"
          preserveAspectRatio="none"
          style={{ height: "70px" }}
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L80,144C160,128,320,96,480,96C640,96,800,128,960,138.7C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <style jsx>{`
        .wave-animation {
          animation: wave 15s ease-in-out infinite alternate;
        }
        
        @keyframes wave {
          0% {
            transform: translateX(-30px);
          }
          50% {
            transform: translateX(10px);
          }
          100% {
            transform: translateX(-30px);
          }
        }
      `}</style>
    </section>
  )
}

