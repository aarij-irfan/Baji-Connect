"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import JobCard from "./job-card"
import type { Job } from "@/lib/data"

interface JobCarouselProps {
  jobs: Job[]
}

export default function JobCarousel({ jobs }: JobCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const jobsPerSlide = 4
  const totalSlides = Math.ceil(jobs.length / jobsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {jobs.slice(slideIndex * jobsPerSlide, (slideIndex + 1) * jobsPerSlide).map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-md border-0 rounded-full h-10 w-10 transition-all duration-300 transform hover:scale-110 hover:bg-green-50"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-md border-0 rounded-full h-10 w-10 transition-all duration-300 transform hover:scale-110 hover:bg-green-50"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-6 bg-green-500" : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

