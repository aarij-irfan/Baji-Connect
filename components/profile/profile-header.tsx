"use client"

import { motion } from "framer-motion"
import { Camera } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function ProfileHeader() {
  return (
    <section className="relative h-80 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 z-0">
        {/* Decorative Elements */}
        <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-white/10 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[10%] w-64 h-64 bg-white/10 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 h-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-end h-full pb-28"
        >
          <div className="relative">
            <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
              <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Amina Khan" />
              <AvatarFallback className="text-4xl">AK</AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              className="absolute bottom-0 right-0 rounded-full bg-white text-gray-700 hover:text-gray-900 shadow-md hover:bg-gray-100"
              aria-label="Change profile picture"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-white mt-4">Amina Khan</h1>
          <p className="text-white/90 text-lg">Certified Community Health Worker from Lahore</p>
        </motion.div>
      </div>
    </section>
  )
}

