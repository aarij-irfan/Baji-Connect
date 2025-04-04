import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Building } from "lucide-react"
import type { Job } from "@/lib/data"
import Link from "next/link"

interface JobCardProps {
  job: Job
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-102 border-0 shadow-md h-full flex flex-col">
      <CardContent className="p-6 flex-grow">
        <div className="flex items-start justify-between mb-3">
          <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
            {job.companyLogo ? (
              <img
                src={job.companyLogo || "/placeholder.svg"}
                alt={`${job.company} logo`}
                className="w-full h-full object-contain"
              />
            ) : (
              <Building className="text-gray-400" />
            )}
          </div>
          <Badge
            variant={job.type === "Full-time" ? "default" : "outline"}
            className={job.type === "Full-time" ? "bg-green-100 text-green-800 hover:bg-green-200" : ""}
          >
            {job.type}
          </Badge>
        </div>

        <h3 className="font-bold text-lg mb-2 line-clamp-2">{job.title}</h3>

        <div className="space-y-2 mb-4">
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

        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{job.description}</p>

        <div className="flex flex-wrap gap-2">
          {job.skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
              {skill}
            </Badge>
          ))}
          {job.skills.length > 3 && (
            <Badge variant="secondary" className="bg-gray-50 text-gray-700">
              +{job.skills.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 mt-auto">
        <Button
          asChild
          className="w-full bg-[#16b401] hover:bg-[#129701] text-white transition-all duration-300 transform hover:scale-105"
        >
          <Link href={`/jobs/${job.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

