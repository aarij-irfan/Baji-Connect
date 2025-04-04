"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CourseCard from "./course-card"

// Dummy course data
const coursesData = [
  {
    id: "course-1",
    title: "Home Nursing Basics",
    description: "Learn essential home nursing skills for providing care to patients in their homes.",
    videoUrl: "https://www.youtube.com/embed/XR4EImCRf9E",
    progress: 65,
    status: "In Progress",
    duration: "2h 15m",
    instructor: "Dr. Priya Sharma",
  },
  {
    id: "course-2",
    title: "Maternal Health Care",
    description: "Comprehensive training on maternal health, covering prenatal and postnatal care.",
    videoUrl: "https://www.youtube.com/embed/EKgGKaAXzRI",
    progress: 100,
    status: "Completed",
    duration: "3h 30m",
    instructor: "Dr. Anita Desai",
  },
  {
    id: "course-3",
    title: "Diabetes Management",
    description: "Learn how to support patients with diabetes through monitoring and education.",
    videoUrl: "https://www.youtube.com/embed/wZAjVQWbMlE",
    progress: 0,
    status: "New",
    duration: "1h 45m",
    instructor: "Dr. Rajiv Kumar",
  },
  {
    id: "course-4",
    title: "Mental Health First Aid",
    description: "Essential training for recognizing and providing initial support for mental health issues.",
    videoUrl: "https://www.youtube.com/embed/BDplCFY0vAY",
    progress: 25,
    status: "In Progress",
    duration: "2h 10m",
    instructor: "Dr. Meera Patel",
  },
  {
    id: "course-5",
    title: "Elderly Care Specialist",
    description: "Comprehensive course on caring for elderly patients and addressing age-related health concerns.",
    videoUrl: "https://www.youtube.com/embed/oX6IcSYdQ-E",
    progress: 0,
    status: "New",
    duration: "3h 20m",
    instructor: "Dr. Sanjay Gupta",
  },
  {
    id: "course-6",
    title: "Nutrition Education",
    description: "Learn how to provide effective nutrition guidance for different age groups and health conditions.",
    videoUrl: "https://www.youtube.com/embed/fqhYBTg73fw",
    progress: 80,
    status: "In Progress",
    duration: "1h 50m",
    instructor: "Dr. Lakshmi Iyer",
  },
]

export default function CourseGrid() {
  const [filter, setFilter] = useState("all")

  // Filter courses based on selected tab
  const filteredCourses = coursesData.filter((course) => {
    if (filter === "all") return true
    if (filter === "in-progress") return course.status === "In Progress"
    if (filter === "completed") return course.status === "Completed"
    if (filter === "new") return course.status === "New"
    return true
  })

  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gray-800 mb-4 md:mb-0"
        >
          My Courses
        </motion.h2>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Tabs defaultValue="all" onValueChange={setFilter}>
            <TabsList>
              <TabsTrigger value="all">All Courses</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <CourseCard course={course} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

