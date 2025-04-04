import { Skeleton } from "@/components/ui/skeleton"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SignupLoading() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <div className="bg-white shadow-sm">
        <Navbar />
      </div>

      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl">
          <Skeleton className="h-[600px] rounded-lg" />
        </div>
      </div>

      <Footer />
    </main>
  )
}

