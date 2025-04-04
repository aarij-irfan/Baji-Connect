"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react"
import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
} from "firebase/auth"
import { Alert, AlertDescription } from "@/components/ui/alert"
import AuthProviderButton from "@/components/auth-provider-button"

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  // Check if user is already logged in
  useEffect(() => {
    setMounted(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/dashboard")
      }
    })

    return () => unsubscribe()
  }, [router])

  // Handle email/password login
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push("/dashboard")
    } catch (err: any) {
      setError(getErrorMessage(err.code))
      setLoading(false)
    }
  }

  // Handle Google login
  const handleGoogleLogin = async () => {
    setLoading(true)
    setError(null)

    try {
      await signInWithPopup(auth, googleProvider)
      router.push("/dashboard")
    } catch (err: any) {
      setError(getErrorMessage(err.code))
      setLoading(false)
    }
  }

  // Handle Facebook login
  const handleFacebookLogin = async () => {
    setLoading(true)
    setError(null)

    try {
      await signInWithPopup(auth, facebookProvider)
      router.push("/dashboard")
    } catch (err: any) {
      setError(getErrorMessage(err.code))
      setLoading(false)
    }
  }

  // Get user-friendly error message
  const getErrorMessage = (errorCode: string) => {
    switch (errorCode) {
      case "auth/invalid-email":
        return "Invalid email address format."
      case "auth/user-disabled":
        return "This account has been disabled."
      case "auth/user-not-found":
        return "No account found with this email."
      case "auth/wrong-password":
        return "Incorrect password."
      case "auth/popup-closed-by-user":
        return "Login popup was closed before completion."
      case "auth/cancelled-popup-request":
        return "Login operation cancelled."
      case "auth/account-exists-with-different-credential":
        return "An account already exists with the same email but different sign-in credentials."
      default:
        return "An error occurred during sign in. Please try again."
    }
  }

  // Don't render anything until client-side hydration is complete
  if (!mounted) return null

  return (
    <div className="w-full max-w-md animate-fadeIn mt-20">
      <Card className="border-0 shadow-xl animate-slideUp">
        <CardHeader className="pb-0">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mt-4 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your Baji Connect account</p>
          </div>
        </CardHeader>

        <CardContent className="pt-6">
          {error && (
            <Alert variant="destructive" className="mb-6 animate-fadeIn">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleEmailLogin} className="space-y-6">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-[#16b401] hover:text-[#129701] transition-colors duration-200"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#16b401] hover:bg-[#129701] text-white transition-all duration-300 transform hover:scale-105 h-12"
            >
              {loading ? (
                <span className="flex items-center justify-center">
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
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="mt-8 flex items-center">
            <div className="flex-grow h-px bg-gray-200"></div>
            <span className="px-4 text-sm text-gray-500">Or continue with</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <AuthProviderButton provider="google" onClick={handleGoogleLogin} disabled={loading} />
            <AuthProviderButton provider="facebook" onClick={handleFacebookLogin} disabled={loading} />
          </div>
        </CardContent>

        <CardFooter className="flex justify-center border-t pt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-[#16b401] hover:text-[#129701] transition-colors duration-200"
            >
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

