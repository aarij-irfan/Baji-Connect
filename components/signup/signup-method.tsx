"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import AuthProviderButton from "@/components/auth-provider-button"

interface SignupMethodProps {
  onNext: () => void
  onPrev: () => void
  updateFormData: (data: any) => void
  formData: any
}

export default function SignupMethod({ onNext, onPrev, updateFormData, formData }: SignupMethodProps) {
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  return (
    <div className="p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <AuthProviderButton
                provider="google"
                onClick={() => {
                  // Just for UI demo
                  console.log("Google signup clicked")
                  onNext()
                }}
                disabled={false}
                fullWidth
              />

              <AuthProviderButton
                provider="facebook"
                onClick={() => {
                  // Just for UI demo
                  console.log("Facebook signup clicked")
                  onNext()
                }}
                disabled={false}
                fullWidth
              />
            </div>

            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 flex-shrink text-gray-600 text-sm">Or continue with email</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email Address
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => updateFormData({ email: e.target.value })}
                    required
                    className="pl-10 h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => updateFormData({ password: e.target.value })}
                    required
                    className="pl-10 pr-10 h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Password must be at least 8 characters long with a number and a special character
                </p>
              </div>
            </div>
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
            className="bg-[#16b401] hover:bg-[#129701] text-white transition-all duration-300 transform hover:scale-105"
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  )
}

