import { Skeleton } from "@/components/ui/skeleton"
import DashboardNavbar from "@/components/dashboard/dashboard-navbar"
import DashboardFooter from "@/components/dashboard/dashboard-footer"

export default function DashboardTrainingLoading() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <DashboardNavbar />

      <div className="flex-grow pt-16">
        {/* Hero Section Skeleton */}
        <Skeleton className="h-[300px] w-full" />

        <div className="container mx-auto px-4 py-8">
          {/* Search Results Skeleton */}
          <div className="mb-10">
            <Skeleton className="h-8 w-64 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-[320px] rounded-xl" />
                ))}
            </div>
          </div>

          {/* Certifications Skeleton */}
          <div>
            <Skeleton className="h-8 w-48 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-[200px] rounded-xl" />
                ))}
            </div>
          </div>
        </div>
      </div>

      <DashboardFooter />
    </main>
  )
}

