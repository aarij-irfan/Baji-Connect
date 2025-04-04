import DashboardNavbar from "@/components/dashboard/dashboard-navbar"
import DashboardFooter from "@/components/dashboard/dashboard-footer"
import ProfileHeader from "@/components/profile/profile-header"
import ProfileForm from "@/components/profile/profile-form"
import CertificationsSection from "@/components/profile/certifications-section"
import ProfileStats from "@/components/profile/profile-stats"

export default function ProfilePage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <DashboardNavbar />

      <div className="flex-grow pt-16 pb-12">
        <ProfileHeader />

        <div className="container mx-auto px-4 -mt-24 relative z-10 space-y-8">
          <ProfileForm />
          <ProfileStats />
          <CertificationsSection />
        </div>
      </div>

      <DashboardFooter />
    </main>
  )
}

