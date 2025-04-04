"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useOnClickOutside } from "@/hooks/use-click-outside"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  // Determine if we're on a page with a light background (like login)
  const isLightBgPage = pathname === "/login" || pathname === "/signup" || pathname === "/forgot-password"

  // Close menu when clicking outside, but not on the toggle button
  useOnClickOutside(menuRef, (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false)
    }
  })

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  // Check if the current path is active
  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isLightBgPage ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex flex-col z-20">
            <span
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled || isMenuOpen || isLightBgPage ? "text-green-600" : "text-white"
              }`}
            >
              Baji Connect
            </span>
            <span
              className={`text-sm transition-colors duration-300 ${
                isScrolled || isMenuOpen || isLightBgPage ? "text-blue-600" : "text-white/80"
              }`}
            >
              Compassion – Care – Convenience
            </span>
          </Link>

          {/* Desktop Navigation - Only visible on large screens */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className={`${isScrolled || isLightBgPage ? "text-gray-700" : "text-white"} hover:text-green-500 transition-colors duration-200 ${
                isActive("/") ? "font-medium" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/jobs"
              className={`${isScrolled || isLightBgPage ? "text-gray-700" : "text-white"} hover:text-green-500 transition-colors duration-200 ${
                isActive("/jobs") ? "font-medium" : ""
              }`}
            >
              Find a Job
            </Link>
            <Link
              href="/training"
              className={`${isScrolled || isLightBgPage ? "text-gray-700" : "text-white"} hover:text-green-500 transition-colors duration-200 ${
                isActive("/training") ? "font-medium" : ""
              }`}
            >
              Training & Certification
            </Link>
            <Link
              href="/about"
              className={`${isScrolled || isLightBgPage ? "text-gray-700" : "text-white"} hover:text-green-500 transition-colors duration-200 ${
                isActive("/about") ? "font-medium" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`${isScrolled || isLightBgPage ? "text-gray-700" : "text-white"} hover:text-green-500 transition-colors duration-200 ${
                isActive("/contact") ? "font-medium" : ""
              }`}
            >
              Contact
            </Link>
            <Button
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/signup">Sign Up</Link>
            </Button>
          </nav>

          {/* Mobile/Tablet Menu Button */}
          <button
            ref={buttonRef}
            className={`lg:hidden z-20 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none ${
              isMenuOpen
                ? "bg-white shadow-md"
                : isLightBgPage
                  ? "bg-gray-100 hover:bg-gray-200"
                  : "bg-opacity-20 backdrop-blur-sm hover:bg-white/30"
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
            <div className="relative w-6 h-6">
              <span
                className={`absolute block h-0.5 rounded-full transition-all duration-300 ${
                  isMenuOpen
                    ? "rotate-45 top-3 w-6 bg-gray-800"
                    : `w-6 top-1 ${isScrolled || isLightBgPage ? "bg-gray-700" : "bg-white"}`
                }`}
              ></span>
              <span
                className={`absolute block h-0.5 rounded-full transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-0 w-0 bg-gray-800"
                    : `w-6 top-3 opacity-100 ${isScrolled || isLightBgPage ? "bg-gray-700" : "bg-white"}`
                }`}
              ></span>
              <span
                className={`absolute block h-0.5 rounded-full transition-all duration-300 ${
                  isMenuOpen
                    ? "-rotate-45 top-3 w-6 bg-gray-800"
                    : `w-6 top-5 ${isScrolled || isLightBgPage ? "bg-gray-700" : "bg-white"}`
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile/Tablet Navigation Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
            isMenuOpen ? "opacity-100 z-10 visible" : "opacity-0 invisible -z-10"
          }`}
          aria-hidden={!isMenuOpen}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Mobile/Tablet Navigation Menu */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden z-10 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="h-full flex flex-col overflow-y-auto">
            <div className="h-20"></div> {/* Space for the header */}
            <nav className="flex-1 pt-4 pb-4 px-6">
              <div className="space-y-1">
                {[
                  { name: "Home", href: "/", delay: 50 },
                  { name: "Find a Job", href: "/jobs", delay: 100 },
                  { name: "Training & Certification", href: "/training", delay: 150 },
                  { name: "About Us", href: "/about", delay: 200 },
                  { name: "Contact", href: "/contact", delay: 250 },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block py-3 text-gray-700 hover:text-green-500 border-b border-gray-100 transform hover:translate-x-2 transition-all duration-300 ease-in-out ${
                      isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    } ${isActive(item.href) ? "text-green-500 font-medium" : ""}`}
                    style={{
                      transitionDelay: isMenuOpen ? `${item.delay}ms` : "0ms",
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div
                className={`mt-8 space-y-4 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? "300ms" : "0ms",
                }}
              >
                <Button
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 w-full py-6"
                  onClick={() => setIsMenuOpen(false)}
                  asChild
                >
                  <Link href="/login">Login</Link>
                </Button>
                <Button
                  className="bg-green-500 hover:bg-green-600 text-white transition-all duration-300 w-full py-6"
                  onClick={() => setIsMenuOpen(false)}
                  asChild
                >
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            </nav>
            <div
              className={`p-6 border-t border-gray-100 transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: isMenuOpen ? "400ms" : "0ms",
              }}
            >
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Baji Connect. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

