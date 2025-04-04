import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Shield, Users } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg my-12 mx-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Baji Connect?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-[#16b401]" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">Innovative Matching</h3>
              <p className="text-gray-600">Advanced algorithms that connect you with the best job opportunities.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-[#16b401]" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">Expert Verification</h3>
              <p className="text-gray-600">Ensure trust with verified profiles and reliable service.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-[#16b401]" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">Community Focus</h3>
              <p className="text-gray-600">Supporting caregivers and improving healthcare outcomes.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

