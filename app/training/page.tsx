import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TrainingHero from "@/components/training-hero"
import CourseGrid from "@/components/course-grid"
import { courseData } from "@/lib/course-data"

export default function TrainingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <TrainingHero />
      <section className="container mx-auto px-4 py-12">
        <CourseGrid courses={courseData} />
      </section>
      <div className="flex-grow"></div>
      <Footer />
    </main>
  )
}

