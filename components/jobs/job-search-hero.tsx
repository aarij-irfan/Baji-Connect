"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, MapPin, Briefcase } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function JobSearchHero() {
  const [keywords, setKeywords] = useState("")
  const [location, setLocation] = useState("")
  const [jobType, setJobType] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", { keywords, location, jobType })
    // In a real app, this would filter the jobs or navigate to filtered results
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Find a Job That Fits You</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Browse and apply to jobs that match your skills, city, and training.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSearch} className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Job title or keywords"
                  className="pl-10 h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="City or location"
                  className="pl-10 h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="relative">
                <Select value={jobType} onValueChange={setJobType}>
                  <SelectTrigger className="h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300">
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 text-gray-400 mr-2" />
                      <SelectValue placeholder="Job Type" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="temporary">Temporary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <Button
                type="submit"
                className="w-full md:w-auto px-8 py-6 bg-[#16b401] hover:bg-[#129701] text-white transition-all duration-300 transform hover:scale-105"
              >
                Search Jobs
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

