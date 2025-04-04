import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Clock } from "lucide-react"

export default function ValuesSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Compassion Card */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Compassion</h3>
              <p className="text-gray-600 text-lg">
                We center human dignity and empathy in everything we do. Our platform recognizes the value of care work
                and the individuals who provide it.
              </p>
            </CardContent>
          </Card>

          {/* Care Card */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-[#16b401]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Care</h3>
              <p className="text-gray-600 text-lg">
                Our platform supports professional and personal growth for caregivers. We invest in training, resources,
                and community building to help Sitara Bajis thrive.
              </p>
            </CardContent>
          </Card>

          {/* Convenience Card */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Convenience</h3>
              <p className="text-gray-600 text-lg">
                With streamlined tools, we make job discovery simple and secure. Our user-friendly platform connects the
                right people to the right opportunities with minimal friction.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

