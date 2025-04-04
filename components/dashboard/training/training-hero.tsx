"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function TrainingHero() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    // In a real app, this would filter the courses
  }

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-green-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[10%] w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Training & Certification</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Upskill with confidence. Earn credentials. Grow your career.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSearch} className="bg-white p-4 rounded-xl shadow-lg flex">
            <Input
              type="text"
              placeholder="Search for courses by topic, skill, or keyword..."
              className="flex-1 border-0 focus:ring-2 focus:ring-green-500 transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="submit"
              className="ml-2 bg-[#16b401] hover:bg-[#129701] text-white transition-all duration-300 transform hover:scale-105"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

