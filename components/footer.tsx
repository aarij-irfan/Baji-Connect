import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-green-600 mb-4">Baji Connect</h3>
            <p className="text-gray-600 mb-4">Connecting community health workers with meaningful opportunities.</p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300 transform hover:scale-110"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300 transform hover:scale-110"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300 transform hover:scale-110"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">For Job Seekers</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
                  Create Profile
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
                  Job Alerts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
                  Career Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">For Employers</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
                  Browse Candidates
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
                  Employer Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Baji Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

