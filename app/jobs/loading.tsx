import { Skeleton } from "@/components/ui/skeleton"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function JobsLoading() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section Skeleton */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-gray-200">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto mb-12" />
          <Skeleton className="h-24 max-w-5xl mx-auto rounded-lg" />
        </div>
      </section>

      {/* Jobs Grid Skeleton */}
      <section className="container mx-auto px-4 py-12">
        <Skeleton className="h-10 w-64 mx-auto mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-96 rounded-lg" />
            ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-10 w-24" />
        </div>
      </section>

      <div className="flex-grow"></div>
      <Footer />
    </main>
  )
}

