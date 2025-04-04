import { Skeleton } from "@/components/ui/skeleton"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactLoading() {
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

      {/* Contact Section Skeleton */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Skeleton */}
            <Skeleton className="h-[600px] rounded-lg" />

            {/* Contact Info Skeleton */}
            <div className="space-y-8">
              <div>
                <Skeleton className="h-10 w-64 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-8" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-32 rounded-lg" />
                  ))}
              </div>

              <Skeleton className="h-[300px] rounded-lg mt-8" />

              <div>
                <Skeleton className="h-6 w-48 mb-4" />
                <div className="flex space-x-4">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <Skeleton key={i} className="h-10 w-10 rounded-full" />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex-grow"></div>
      <Footer />
    </main>
  )
}

