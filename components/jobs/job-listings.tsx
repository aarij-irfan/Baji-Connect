"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Building, Clock, ChevronLeft, ChevronRight, Heart } from "lucide-react"

// Dummy job data
const jobsData = [
  {
    id: "job-1",
    title: "Community Health Worker",
    company: "HealthFirst Medical Center",
    location: "Mumbai, Maharashtra",
    postedDate: "2 days ago",
    badge: { text: "Recommended", color: "bg-green-100 text-green-800" },
    isSaved: false,
  },
  {
    id: "job-2",
    title: "Maternal Health Specialist",
    company: "Mother & Child Foundation",
    location: "Bangalore, Karnataka",
    postedDate: "3 days ago",
    badge: { text: "New", color: "bg-blue-100 text-blue-800" },
    isSaved: true,
  },
  {
    id: "job-3",
    title: "Home Health Aide",
    company: "CareConnect Services",
    location: "Delhi, NCR",
    postedDate: "1 week ago",
    badge: { text: "Good Match", color: "bg-purple-100 text-purple-800" },
    isSaved: false,
  },
  {
    id: "job-4",
    title: "Community Nutrition Educator",
    company: "Healthy Living Initiative",
    location: "Hyderabad, Telangana",
    postedDate: "5 days ago",
    badge: { text: "Popular", color: "bg-amber-100 text-amber-800" },
    isSaved: false,
  },
  {
    id: "job-5",
    title: "Mental Health Support Worker",
    company: "Mind Wellness Center",
    location: "Chennai, Tamil Nadu",
    postedDate: "1 week ago",
    badge: { text: "Urgent", color: "bg-red-100 text-red-800" },
    isSaved: true,
  },
  {
    id: "job-6",
    title: "Elderly Care Specialist",
    company: "Senior Care Services",
    location: "Pune, Maharashtra",
    postedDate: "4 days ago",
    badge: { text: "Part-time", color: "bg-indigo-100 text-indigo-800" },
    isSaved: false,
  },
]

export default function JobListings() {
  const [currentPage, setCurrentPage] = useState(1)
  const [savedJobs, setSavedJobs] = useState<string[]>(jobsData.filter((job) => job.isSaved).map((job) => job.id))

  const jobsPerPage = 6
  const totalJobs = jobsData.length
  const totalPages = Math.ceil(totalJobs / jobsPerPage)

  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = jobsData.slice(indexOfFirstJob, indexOfFirstJob + jobsPerPage)

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const toggleSaveJob = (jobId: string) => {
    setSavedJobs((prev) => (prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Showing {indexOfFirstJob + 1}-{Math.min(indexOfLastJob, totalJobs)} of {totalJobs} jobs
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Sort by:</span>
          <select className="text-sm border rounded-md px-2 py-1">
            <option>Relevance</option>
            <option>Date Posted</option>
            <option>Salary</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentJobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3">
                  <Badge className={job.badge.color}>{job.badge.text}</Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`h-8 w-8 rounded-full ${savedJobs.includes(job.id) ? "text-red-500" : "text-gray-400"}`}
                    onClick={() => toggleSaveJob(job.id)}
                  >
                    <Heart className={`h-5 w-5 ${savedJobs.includes(job.id) ? "fill-current" : ""}`} />
                    <span className="sr-only">{savedJobs.includes(job.id) ? "Unsave" : "Save"} job</span>
                  </Button>
                </div>

                <h3 className="font-bold text-lg text-gray-800 mb-2">{job.title}</h3>

                <div className="space-y-2 mb-4 flex-grow">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Building className="w-4 h-4 mr-2" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Posted {job.postedDate}</span>
                  </div>
                </div>

                <div className="flex gap-2 mt-auto">
                  <Button
                    asChild
                    className="flex-1 bg-[#16b401] hover:bg-[#129701] text-white transition-all duration-300 transform hover:scale-105"
                  >
                    <Link href={`/jobs/${job.id}`}>View Details</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-[#16b401] text-[#16b401] hover:bg-[#16b401] hover:text-white transition-all duration-300"
                  >
                    <Link href={`/jobs/${job.id}/apply`}>Apply Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="flex items-center gap-1"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <Button
              key={index}
              variant={currentPage === index + 1 ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 ${currentPage === index + 1 ? "bg-[#16b401] hover:bg-[#129701]" : "text-gray-600"}`}
            >
              {index + 1}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

