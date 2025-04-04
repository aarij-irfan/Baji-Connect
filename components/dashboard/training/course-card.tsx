"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Clock, User, Play } from "lucide-react"

interface CourseCardProps {
  course: {
    id: string
    title: string
    description: string
    videoUrl: string
    progress: number
    status: "In Progress" | "Completed" | "New"
    duration: string
    instructor: string
  }
}

export default function CourseCard({ course }: CourseCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      case "Completed":
        return "bg-green-100 text-green-800"
      case "New":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] h-full flex flex-col">
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        <iframe
          src={course.videoUrl}
          title={course.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        ></iframe>
      </div>

      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-lg text-gray-800">{course.title}</h3>
          <Badge className={getStatusColor(course.status)}>{course.status}</Badge>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-2" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <User className="w-4 h-4 mr-2" />
            <span>{course.instructor}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 flex-grow">{course.description}</p>

        {course.progress > 0 && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-500">Progress</span>
              <span className="font-medium">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        )}

        <Button className="w-full bg-[#16b401] hover:bg-[#129701] text-white transition-all duration-300 transform hover:scale-105">
          <Play className="h-4 w-4 mr-2" />
          {course.progress > 0 ? "Resume Course" : "Start Course"}
        </Button>
      </CardContent>
    </Card>
  )
}

