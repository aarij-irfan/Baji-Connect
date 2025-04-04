import { Skeleton } from "@/components/ui/skeleton"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutLoading() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section Skeleton */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gray-200">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Skeleton className="h-12 w-48 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto mb-12" />
        </div>
      </section>

      {/* About Content Skeleton */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Skeleton className="h-10 w-48 mb-6" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-12 w-48 mt-6" />
            </div>
            <Skeleton className="h-[400px] md:h-[500px] rounded-lg" />
          </div>
        </div>
      </section>

      {/* Values Section Skeleton */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <Skeleton className="h-10 w-48 mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-80 rounded-lg" />
              ))}
          </div>
        </div>
      </section>

      <div className="flex-grow"></div>
      <Footer />
    </main>
  )
}

