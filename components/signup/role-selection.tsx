"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { UserRound, Building2 } from "lucide-react"

interface RoleSelectionProps {
  onRoleSelect: (role: "baji" | "employer") => void
}

export default function RoleSelection({ onRoleSelect }: RoleSelectionProps) {
  return (
    <div className="p-6 md:p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Join Baji Connect</h1>
        <p className="text-gray-600">Choose how you want to use Baji Connect</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Card
            className="border border-gray-200 hover:border-green-500 hover:shadow-md cursor-pointer transition-all duration-300 h-full"
            onClick={() => onRoleSelect("baji")}
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <UserRound className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-800">Sitara Baji</h3>
              <p className="text-gray-600">For community health workers looking for jobs</p>

              <div className="mt-6 bg-green-50 p-3 rounded-lg w-full">
                <ul className="text-left text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Find healthcare job opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Access training & certification
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Connect with healthcare organizations
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Card
            className="border border-gray-200 hover:border-blue-500 hover:shadow-md cursor-pointer transition-all duration-300 h-full"
            onClick={() => onRoleSelect("employer")}
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-800">Employer</h3>
              <p className="text-gray-600">For organizations looking to hire Sitara Bajis</p>

              <div className="mt-6 bg-blue-50 p-3 rounded-lg w-full">
                <ul className="text-left text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Post job opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Find qualified community health workers
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Manage applications & hiring
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

