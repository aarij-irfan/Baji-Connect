import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LoginForm from "@/components/login-form"

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* Add a white background to the navbar container for better visibility */}
      <div className="bg-white shadow-sm">
        <Navbar />
      </div>

      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <LoginForm />
      </div>

      <Footer />
    </main>
  )
}

