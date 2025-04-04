"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TrainingHero() {
  const [keyword, setKeyword] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", keyword)
    // In a real app, this would filter the courses
  }

  return (
    <section className="relative min-h-[600px] h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Training & Certification</h1>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Advance your skills and knowledge with our curated video courses—gain confidence, earn credentials, and
            empower your healthcare journey.
          </p>

          {/* Search Form */}
          <Card className="shadow-lg border-0 transform hover:shadow-xl transition-all duration-300 w-full max-w-3xl mx-auto mb-16">
            <CardContent className="p-4 sm:p-6">
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Search for courses by keyword..."
                    className="pl-10 h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="h-12 px-8 bg-[#16b401] hover:bg-[#129701] transition-all duration-300 transform hover:scale-105"
                >
                  Search Courses
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
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
    </section>
  )
}

