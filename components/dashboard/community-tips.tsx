"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronRight, Lightbulb, Award, Bell } from "lucide-react"

export default function CommunityTips() {
  // Dummy data for community tips
  const tips = [
    {
      id: "tip-1",
      title: "New Certification Program Available",
      description:
        "The Ministry of Health has launched a new certification program for maternal health specialists. Applications open next week.",
      date: "June 15, 2023",
      type: "Announcement",
      icon: <Bell className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: "tip-2",
      title: "5 Tips for a Successful Job Interview",
      description:
        "Prepare for your next healthcare job interview with these expert tips from experienced Sitara Bajis.",
      date: "June 10, 2023",
      type: "Tips",
      icon: <Lightbulb className="h-5 w-5" />,
      color: "bg-amber-100 text-amber-800",
    },
    {
      id: "tip-3",
      title: "Congratulations to Our Certified Members",
      description:
        "We're proud to announce that 50 Sitara Bajis have completed their advanced certification this month.",
      date: "June 5, 2023",
      type: "Achievement",
      icon: <Award className="h-5 w-5" />,
      color: "bg-green-100 text-green-800",
    },
  ]

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Community Updates</h2>
        <Link
          href="/community"
          className="text-green-500 hover:text-green-600 transition-colors duration-200 flex items-center text-sm font-medium"
        >
          View all
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tips.map((tip, index) => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="h-full hover:shadow-md transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge className={tip.color}>
                      <span className="flex items-center">
                        {tip.icon}
                        <span className="ml-1">{tip.type}</span>
                      </span>
                    </Badge>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {tip.date}
                    </div>
                  </div>

                  <h3 className="font-bold text-lg text-gray-800 mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>

                <div className="border-t px-6 py-3 bg-gray-50">
                  <Link
                    href={`/community/${tip.id}`}
                    className="text-green-500 hover:text-green-600 transition-colors duration-200 text-sm font-medium flex items-center"
                  >
                    Read more
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

