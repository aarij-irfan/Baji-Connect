"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import ImageUpload from "./image-upload"

interface PersonalDetailsEmployerProps {
  onPrev: () => void
  formData: any
  updateFormData: (data: any) => void
}

export default function PersonalDetailsEmployer({ onPrev, formData, updateFormData }: PersonalDetailsEmployerProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Account created successfully! (This is just a UI demo)")
    }, 1500)
  }

  return (
    <div className="p-6 md:p-8 overflow-y-auto max-h-[650px]">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="md:col-span-2 flex justify-center mb-4">
          <div className="w-full max-w-sm">
            <Label className="block text-center mb-3 text-gray-700 text-lg font-medium">Organization Logo</Label>
            <ImageUpload onImageChange={(file) => updateFormData({ profileImage: file })} isCircular={false} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
          <div className="space-y-2">
            <Label htmlFor="organizationName" className="text-gray-700">
              Organization Name
            </Label>
            <Input
              id="organizationName"
              placeholder="Enter organization name"
              value={formData.organizationName}
              onChange={(e) => updateFormData({ organizationName: e.target.value })}
              required
              className="h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactPersonName" className="text-gray-700">
              Contact Person Name
            </Label>
            <Input
              id="contactPersonName"
              placeholder="Enter contact person name"
              value={formData.contactPersonName}
              onChange={(e) => updateFormData({ contactPersonName: e.target.value })}
              required
              className="h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email address"
              value={formData.email}
              readOnly
              className="h-12 bg-gray-50 focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
            <p className="text-xs text-gray-500">Email from previous step</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website" className="text-gray-700">
              Organization Website (Optional)
            </Label>
            <Input
              id="website"
              placeholder="Enter website URL"
              value={formData.website}
              onChange={(e) => updateFormData({ website: e.target.value })}
              className="h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="bio" className="text-gray-700">
              Organization Description
            </Label>
            <Textarea
              id="bio"
              placeholder="Tell us about your organization, mission, and the kind of healthcare workers you're looking for..."
              value={formData.bio}
              onChange={(e) => updateFormData({ bio: e.target.value })}
              required
              className="min-h-[150px] resize-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onPrev}
            className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
          >
            Back
          </Button>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#16b401] hover:bg-[#129701] text-white transition-all duration-300 transform hover:scale-105"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Creating Account...
              </span>
            ) : (
              "Create Account"
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}

