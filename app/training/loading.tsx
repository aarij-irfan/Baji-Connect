import { Skeleton } from "@/components/ui/skeleton"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TrainingLoading() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section Skeleton */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-gray-200">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto mb-12" />
          <Skeleton className="h-24 max-w-3xl mx-auto rounded-lg" />
        </div>
      </section>

      {/* Course Grid Skeleton */}
      <section className="container mx-auto px-4 py-12">
        <Skeleton className="h-10 w-64 mx-auto mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex flex-col">
                <Skeleton className="aspect-video w-full mb-4" />
                <Skeleton className="h-8 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/4 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
        </div>
      </section>

      <div className="flex-grow"></div>
      <Footer />
    </main>
  )
}

