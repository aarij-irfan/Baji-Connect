"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Eye, Award } from "lucide-react"

export default function ProfileStats() {
  const stats = [
    {
      title: "Job Matches",
      value: "24",
      icon: <Briefcase className="h-6 w-6" />,
      color: "bg-blue-500",
      description: "Potential opportunities",
    },
    {
      title: "Profile Views",
      value: "142",
      icon: <Eye className="h-6 w-6" />,
      color: "bg-purple-500",
      description: "In the last 30 days",
    },
    {
      title: "Certifications",
      value: "3",
      icon: <Award className="h-6 w-6" />,
      color: "bg-green-500",
      description: "Completed courses",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile Metrics</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index + 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex items-start">
                <div className={`${stat.color} text-white p-3 rounded-lg mr-4`}>{stat.icon}</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{stat.title}</h3>
                  <p className="text-3xl font-bold text-gray-900 my-1">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

