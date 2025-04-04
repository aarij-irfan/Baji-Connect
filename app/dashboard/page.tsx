import DashboardNavbar from "@/components/dashboard/dashboard-navbar"
import DashboardFooter from "@/components/dashboard/dashboard-footer"
import WelcomeBanner from "@/components/dashboard/welcome-banner"
import QuickActions from "@/components/dashboard/quick-actions"
import MatchedJobs from "@/components/dashboard/matched-jobs"
import OngoingTrainings from "@/components/dashboard/ongoing-trainings"
import CommunityTips from "@/components/dashboard/community-tips"

export default function DashboardPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <DashboardNavbar />

      <div className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 space-y-8">
          <WelcomeBanner />
          <QuickActions />
          <MatchedJobs />
          <OngoingTrainings />
          <CommunityTips />
        </div>
      </div>

      <DashboardFooter />
    </main>
  )
}

