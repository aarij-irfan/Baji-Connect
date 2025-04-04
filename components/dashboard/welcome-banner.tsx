"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

export default function WelcomeBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
    >
      <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
        <Avatar className="h-24 w-24 border-4 border-white/20 shadow-lg">
          <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Amina Khan" />
          <AvatarFallback className="text-2xl">AK</AvatarFallback>
        </Avatar>

        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, Amina!</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Here's what's new on your Baji Connect journey. You have 3 new job matches and 1 training to complete.
          </p>

          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Community Health Worker</div>
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Mumbai</div>
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">2 Years Experience</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

