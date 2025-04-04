import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User } from "lucide-react"
import type { Course } from "@/lib/course-data"

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-102 border-0 shadow-md h-full flex flex-col">
      <div className="aspect-video w-full overflow-hidden">
        <iframe
          src={course.videoUrl}
          title={course.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        ></iframe>
      </div>

      <CardContent className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-xl mb-2">{course.title}</h3>
          <Badge
            variant={
              course.level === "Beginner" ? "outline" : course.level === "Intermediate" ? "secondary" : "default"
            }
            className={
              course.level === "Beginner"
                ? "border-blue-500 text-blue-500"
                : course.level === "Intermediate"
                  ? "bg-green-100 text-green-800"
                  : "bg-purple-100 text-purple-800"
            }
          >
            {course.level}
          </Badge>
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

        <p className="text-gray-600 text-sm mb-4">{course.description}</p>

        <div className="flex flex-wrap gap-2">
          {course.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 mt-auto">
        <Button className="w-full bg-[#16b401] hover:bg-[#129701] text-white transition-all duration-300 transform hover:scale-105">
          Start Learning
        </Button>
      </CardFooter>
    </Card>
  )
}

