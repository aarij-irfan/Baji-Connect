import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import JobsHero from "@/components/jobs-hero"
import JobsGrid from "@/components/jobs-grid"
import { jobData } from "@/lib/data"

export default function JobsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <JobsHero />
      <section className="container mx-auto px-4 py-12">
        <JobsGrid jobs={jobData} />
      </section>
      <div className="flex-grow"></div>
      <Footer />
    </main>
  )
}

