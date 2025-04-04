"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Clock, ChevronRight, Play } from "lucide-react"

export default function OngoingTrainings() {
  // Dummy data for ongoing trainings
  const trainings = [
    {
      id: "course-1",
      title: "Basic Caregiving Skills",
      progress: 75,
      timeLeft: "2 hours left",
      lastAccessed: "Yesterday",
    },
    {
      id: "course-2",
      title: "Maternal Health Essentials",
      progress: 30,
      timeLeft: "5 hours left",
      lastAccessed: "3 days ago",
    },
  ]

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Ongoing Trainings</h2>
        <Link
          href="/training"
          className="text-green-500 hover:text-green-600 transition-colors duration-200 flex items-center text-sm font-medium"
        >
          All courses
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trainings.map((training, index) => (
          <motion.div
            key={training.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-2">{training.title}</h3>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Progress</span>
                  <span className="font-medium">{training.progress}%</span>
                </div>
                <Progress value={training.progress} className="h-2" />
              </div>

              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{training.timeLeft}</span>
                </div>
                <span>Last accessed: {training.lastAccessed}</span>
              </div>

              <Button
                asChild
                className="w-full bg-[#16b401] hover:bg-[#129701] text-white transition-all duration-300 transform hover:scale-105"
              >
                <Link href={`/training/${training.id}`}>
                  <Play className="h-4 w-4 mr-2" />
                  Resume Training
                </Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

