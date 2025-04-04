import DashboardNavbar from "@/components/dashboard/dashboard-navbar"
import DashboardFooter from "@/components/dashboard/dashboard-footer"
import TrainingHero from "@/components/dashboard/training/training-hero"
import CourseGrid from "@/components/dashboard/training/course-grid"
import CertificationsSection from "@/components/dashboard/training/certifications-section"

export default function DashboardTrainingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <DashboardNavbar />

      <div className="flex-grow pt-16">
        <TrainingHero />
        <div className="container mx-auto px-4 py-8">
          <CourseGrid />
          <CertificationsSection />
        </div>
      </div>

      <DashboardFooter />
    </main>
  )
}

