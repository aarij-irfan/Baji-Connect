"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="transform transition-all duration-500 hover:translate-y-[-5px]">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-center animate-fadeIn">
                    <CheckCircle2 className="text-green-500 mr-4 h-8 w-8" />
                    <div>
                      <h3 className="font-bold text-green-800 text-lg">Message Sent!</h3>
                      <p className="text-green-700">Thank you for reaching out. We'll get back to you shortly.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What is this regarding?"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="resize-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#16b401] hover:bg-[#129701] text-white transition-all duration-300 transform hover:scale-105 h-12"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-5 w-5" /> Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Have questions or need assistance? Our team is here to help you navigate the Baji Connect platform and
                answer any inquiries you may have.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-5px]">
                <CardContent className="p-6 flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 12345 67890</p>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-5px]">
                <CardContent className="p-6 flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <Mail className="h-6 w-6 text-[#16b401]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@bajiconnect.com</p>
                    <p className="text-gray-600">support@bajiconnect.com</p>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-5px]">
                <CardContent className="p-6 flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-gray-600">123 Healthcare Avenue</p>
                    <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-5px]">
                <CardContent className="p-6 flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                    <p className="text-gray-600">Saturday: 10am - 2pm</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map or Location Image */}
            <Card className="border-0 shadow-lg overflow-hidden mt-8 transform transition-all duration-500 hover:shadow-xl">
              <CardContent className="p-0">
                <div className="relative h-[300px] w-full">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/placeholder.svg?height=600&width=800&text=Map+Location')",
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                      <MapPin className="h-8 w-8 text-[#16b401] mx-auto mb-2" />
                      <p className="font-bold text-center">Baji Connect HQ</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div>
              <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

