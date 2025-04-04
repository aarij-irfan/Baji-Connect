"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Briefcase, GraduationCap, UserRound, FileCheck } from "lucide-react"

export default function QuickActions() {
  const actions = [
    {
      title: "Find New Jobs",
      description: "Browse latest opportunities",
      icon: <Briefcase className="h-6 w-6" />,
      href: "/jobs",
      color: "bg-blue-500",
    },
    {
      title: "Continue Training",
      description: "Resume your courses",
      icon: <GraduationCap className="h-6 w-6" />,
      href: "/training",
      color: "bg-purple-500",
    },
    {
      title: "Edit My Profile",
      description: "Update your information",
      icon: <UserRound className="h-6 w-6" />,
      href: "/profile",
      color: "bg-green-500",
    },
    {
      title: "View Applications",
      description: "Check application status",
      icon: <FileCheck className="h-6 w-6" />,
      href: "/applications",
      color: "bg-amber-500",
    },
  ]

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <motion.div
            key={action.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group"
          >
            <Link href={action.href}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full flex flex-col">
                <div
                  className={`${action.color} text-white p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {action.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">{action.title}</h3>
                <p className="text-gray-500 text-sm">{action.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

