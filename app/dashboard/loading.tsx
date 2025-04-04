import { Skeleton } from "@/components/ui/skeleton"
import DashboardNavbar from "@/components/dashboard/dashboard-navbar"
import DashboardFooter from "@/components/dashboard/dashboard-footer"

export default function DashboardLoading() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <DashboardNavbar />

      <div className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 space-y-8">
          {/* Welcome Banner Skeleton */}
          <Skeleton className="h-48 w-full rounded-xl" />

          {/* Quick Actions Skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-32 rounded-xl" />
              ))}
          </div>

          {/* Matched Jobs Skeleton */}
          <div>
            <Skeleton className="h-10 w-48 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-64 rounded-xl" />
                ))}
            </div>
          </div>

          {/* Ongoing Trainings Skeleton */}
          <div>
            <Skeleton className="h-10 w-48 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array(2)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-40 rounded-xl" />
                ))}
            </div>
          </div>

          {/* Community Tips Skeleton */}
          <div>
            <Skeleton className="h-10 w-48 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-56 rounded-xl" />
                ))}
            </div>
          </div>
        </div>
      </div>

      <DashboardFooter />
    </main>
  )
}

