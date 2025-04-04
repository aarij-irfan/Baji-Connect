import { Skeleton } from "@/components/ui/skeleton"
import DashboardNavbar from "@/components/dashboard/dashboard-navbar"
import DashboardFooter from "@/components/dashboard/dashboard-footer"

export default function DashboardJobsLoading() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <DashboardNavbar />

      <div className="flex-grow pt-16">
        {/* Hero Section Skeleton */}
        <Skeleton className="h-[300px] w-full" />

        <div className="container mx-auto px-4 py-8">
          {/* Tabs Skeleton */}
          <Skeleton className="h-12 w-full max-w-md mb-6" />

          {/* Search Results Skeleton */}
          <div className="mb-6">
            <Skeleton className="h-8 w-48 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-64 rounded-xl" />
                ))}
            </div>
          </div>

          {/* Pagination Skeleton */}
          <div className="flex justify-between items-center">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-10 w-24" />
          </div>
        </div>
      </div>

      <DashboardFooter />
    </main>
  )
}

