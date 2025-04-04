"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Download, Calendar } from "lucide-react"

// Dummy certification data
const certificationsData = [
  {
    id: "cert-1",
    title: "Maternal Health Specialist",
    issueDate: "June 15, 2023",
    expiryDate: "June 15, 2025",
    imageUrl: "/placeholder.svg?height=200&width=300&text=Certificate",
  },
  {
    id: "cert-2",
    title: "Basic First Aid Provider",
    issueDate: "March 10, 2023",
    expiryDate: "March 10, 2025",
    imageUrl: "/placeholder.svg?height=200&width=300&text=Certificate",
  },
  {
    id: "cert-3",
    title: "Nutrition Counselor",
    issueDate: "January 22, 2023",
    expiryDate: "January 22, 2025",
    imageUrl: "/placeholder.svg?height=200&width=300&text=Certificate",
  },
]

export default function CertificationsSection() {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-gray-800 mb-8"
      >
        My Certifications
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificationsData.map((certification, index) => (
          <motion.div
            key={certification.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-[3/2] bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={certification.imageUrl || "/placeholder.svg"}
                      alt={`${certification.title} Certificate`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Button variant="outline" className="bg-white text-gray-800 hover:bg-gray-100">
                        <Award className="h-4 w-4 mr-2" />
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{certification.title}</h3>

                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Issued: {certification.issueDate}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Valid until {certification.expiryDate}</span>
                    <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

