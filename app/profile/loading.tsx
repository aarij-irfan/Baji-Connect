import { Skeleton } from "@/components/ui/skeleton"
import DashboardNavbar from "@/components/dashboard/dashboard-navbar"
import DashboardFooter from "@/components/dashboard/dashboard-footer"

export default function ProfileLoading() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <DashboardNavbar />

      <div className="flex-grow pt-16 pb-12">
        {/* Profile Header Skeleton */}
        <Skeleton className="w-full h-64" />

        <div className="container mx-auto px-4 -mt-16 relative z-10 space-y-8">
          {/* Profile Form Skeleton */}
          <Skeleton className="w-full h-[500px] rounded-xl" />

          {/* Profile Stats Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-32 rounded-xl" />
              ))}
          </div>

          {/* Certifications Skeleton */}
          <div>
            <Skeleton className="h-10 w-48 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-48 rounded-xl" />
                ))}
            </div>
          </div>
        </div>
      </div>

      <DashboardFooter />
    </main>
  )
}

