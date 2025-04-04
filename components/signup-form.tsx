"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import RoleSelection from "./signup/role-selection"
import SignupMethod from "./signup/signup-method"
import PersonalDetailsBaji from "./signup/personal-details-baji"
import PersonalDetailsEmployer from "./signup/personal-details-employer"
import StepIndicator from "./signup/step-indicator"
import { AnimatePresence, motion } from "framer-motion"

type UserRole = "baji" | "employer" | null
type SignupStep = 0 | 1 | 2

export default function SignupForm() {
  const [step, setStep] = useState<SignupStep>(0)
  const [role, setRole] = useState<UserRole>(null)
  const [email, setEmail] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    organizationName: "",
    contactPersonName: "",
    phoneNumber: "",
    city: "",
    cnicNumber: "",
    website: "",
    bio: "",
    certificationStatus: false,
    profileImage: null as File | null,
  })

  const handleRoleSelect = (selectedRole: UserRole) => {
    setRole(selectedRole)
    nextStep()
  }

  const nextStep = () => {
    if (step < 2) {
      setStep((prev) => (prev + 1) as SignupStep)
    }
  }

  const prevStep = () => {
    if (step > 0) {
      setStep((prev) => (prev - 1) as SignupStep)
    }
  }

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const renderStep = () => {
    switch (step) {
      case 0:
        return <RoleSelection onRoleSelect={handleRoleSelect} />
      case 1:
        return <SignupMethod onNext={nextStep} onPrev={prevStep} updateFormData={updateFormData} formData={formData} />
      case 2:
        return role === "baji" ? (
          <PersonalDetailsBaji onPrev={prevStep} formData={formData} updateFormData={updateFormData} />
        ) : (
          <PersonalDetailsEmployer onPrev={prevStep} formData={formData} updateFormData={updateFormData} />
        )
      default:
        return <RoleSelection onRoleSelect={handleRoleSelect} />
    }
  }

  return (
    <div className="w-full max-w-4xl mt-20">
      <Card className="border-0 shadow-xl overflow-hidden">
        <CardContent className="p-0">
          {step > 0 && (
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-xl font-semibold text-gray-800">
                {step === 1 ? "Create Your Account" : role === "baji" ? "Personal Details" : "Organization Details"}
              </h2>
              <StepIndicator currentStep={step} totalSteps={3} />
            </div>
          )}

          <div className="min-h-[650px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-[#16b401] hover:text-[#129701] transition-colors duration-200"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

