import { Skeleton } from "@/components/ui/skeleton"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function LoginLoading() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* Add a white background to the navbar container for better visibility */}
      <div className="bg-white shadow-sm">
        <Navbar />
      </div>

      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Skeleton className="h-[500px] rounded-lg" />
        </div>
      </div>

      <Footer />
    </main>
  )
}

