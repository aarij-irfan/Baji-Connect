import Link from "next/link"
import { HelpCircle, AlertTriangle, FileText, LogOut } from "lucide-react"

export default function DashboardFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            Logged in as: <span className="font-medium">Amina Khan</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-green-500 transition-colors duration-200 flex items-center"
            >
              <HelpCircle className="h-4 w-4 mr-1" />
              Help Center
            </Link>

            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-green-500 transition-colors duration-200 flex items-center"
            >
              <AlertTriangle className="h-4 w-4 mr-1" />
              Report a Problem
            </Link>

            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-green-500 transition-colors duration-200 flex items-center"
            >
              <FileText className="h-4 w-4 mr-1" />
              Terms of Use
            </Link>

            <Link
              href="/login"
              className="text-sm text-red-500 hover:text-red-600 transition-colors duration-200 flex items-center"
            >
              <LogOut className="h-4 w-4 mr-1" />
              Logout
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

