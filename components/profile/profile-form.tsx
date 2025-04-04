"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, Loader2 } from "lucide-react"
import { toast } from "@/lib/toast"

// Dummy cities data
const cities = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Quetta",
  "Sialkot",
  "Gujranwala",
]

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    fullName: "Amina Khan",
    email: "amina.khan@example.com",
    phoneNumber: "+92 300 1234567",
    city: "Lahore",
    cnicNumber: "35202-1234567-8",
    isCertified: true,
    bio: "Experienced community health worker with 3 years of experience in maternal and child health. Passionate about improving healthcare access in underserved communities.",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setLastUpdated(new Date())
    setShowSuccess(true)

    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    })

    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-2xl">Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className="h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" value={formData.email} disabled className="h-12 bg-gray-50" />
                <p className="text-xs text-gray-500">Email cannot be changed</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => handleChange("phoneNumber", e.target.value)}
                  className="h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Select value={formData.city} onValueChange={(value) => handleChange("city", value)}>
                  <SelectTrigger className="h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300">
                    <SelectValue placeholder="Select your city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cnicNumber">CNIC Number</Label>
                <Input
                  id="cnicNumber"
                  value={formData.cnicNumber}
                  onChange={(e) => handleChange("cnicNumber", e.target.value)}
                  className="h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="certification" className="block mb-2">
                  Certification Status
                </Label>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="certification"
                    checked={formData.isCertified}
                    onCheckedChange={(checked) => handleChange("isCertified", checked)}
                  />
                  <Label htmlFor="certification" className="cursor-pointer">
                    {formData.isCertified ? "Certified" : "Not Certified"}
                  </Label>
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => handleChange("bio", e.target.value)}
                  className="min-h-[120px] focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  placeholder="Tell us about yourself, your experience, and skills..."
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#16b401] hover:bg-[#129701] text-white transition-all duration-300 transform hover:scale-105 ${
                  showSuccess ? "bg-green-600" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Updating...
                  </>
                ) : showSuccess ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Updated!
                  </>
                ) : (
                  "Update Profile"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t pt-4 text-sm text-gray-500">
          {lastUpdated ? <p>Last updated: {lastUpdated.toLocaleString()}</p> : <p>No recent updates</p>}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

