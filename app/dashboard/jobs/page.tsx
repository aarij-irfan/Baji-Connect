import DashboardNavbar from "@/components/dashboard/dashboard-navbar"
import DashboardFooter from "@/components/dashboard/dashboard-footer"
import JobSearchHero from "@/components/jobs/job-search-hero"
import JobListings from "@/components/jobs/job-listings"
import JobTabs from "@/components/jobs/job-tabs"

export default function DashboardJobsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <DashboardNavbar />

      <div className="flex-grow pt-16">
        <JobSearchHero />
        <div className="container mx-auto px-4 py-8">
          <JobTabs />
          <JobListings />
        </div>
      </div>

      <DashboardFooter />
    </main>
  )
}

