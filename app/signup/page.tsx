import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SignupForm from "@/components/signup-form"

export default function SignupPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <div className="bg-white shadow-sm">
        <Navbar />
      </div>

      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <SignupForm />
      </div>

      <Footer />
    </main>
  )
}

