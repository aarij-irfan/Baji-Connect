"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building, Clock, ChevronRight } from "lucide-react"

export default function MatchedJobs() {
  // Dummy data for matched jobs
  const matchedJobs = [
    {
      id: "job-1",
      title: "Community Health Worker",
      company: "HealthFirst Medical Center",
      location: "Mumbai, Maharashtra",
      postedDate: "2 days ago",
      tag: "Recommended",
      tagColor: "bg-green-100 text-green-800",
    },
    {
      id: "job-2",
      title: "Maternal Health Specialist",
      company: "Mother & Child Foundation",
      location: "Bangalore, Karnataka",
      postedDate: "3 days ago",
      tag: "New",
      tagColor: "bg-blue-100 text-blue-800",
    },
    {
      id: "job-3",
      title: "Home Health Aide",
      company: "CareConnect Services",
      location: "Delhi, NCR",
      postedDate: "1 week ago",
      tag: "Good Match",
      tagColor: "bg-purple-100 text-purple-800",
    },
  ]

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Matched Jobs</h2>
        <Link
          href="/jobs"
          className="text-green-500 hover:text-green-600 transition-colors duration-200 flex items-center text-sm font-medium"
        >
          See all jobs
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {matchedJobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <Badge className={job.tagColor}>{job.tag}</Badge>
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

              <Button
                asChild
                className="w-full bg-[#16b401] hover:bg-[#129701] text-white transition-all duration-300 transform hover:scale-105"
              >
                <Link href={`/jobs/${job.id}`}>View Details</Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

