"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import JobCard from "@/components/job-card"
import type { Job } from "@/lib/data"

interface JobsGridProps {
  jobs: Job[]
}

export default function JobsGrid({ jobs }: JobsGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const jobsPerPage = 12
  const totalPages = Math.ceil(jobs.length / jobsPerPage)

  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob)

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Available Opportunities</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {currentJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <Button
          variant="outline"
          size="lg"
          className="border-[#16b401] text-[#16b401] hover:bg-[#16b401] hover:text-white transition-all duration-300"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>

        <div className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </div>

        <Button
          variant="outline"
          size="lg"
          className="border-[#16b401] text-[#16b401] hover:bg-[#16b401] hover:text-white transition-all duration-300"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

