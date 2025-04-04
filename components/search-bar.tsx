"use client"

import type React from "react"

import { useState } from "react"
import { Search, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SearchBar() {
  const [keyword, setKeyword] = useState("")
  const [location, setLocation] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", { keyword, location })
    // In a real app, this would navigate to search results
  }

  return (
    <Card className="shadow-lg border-0 transform hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Job title, keywords, or company"
              className="pl-10 h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="City, state, or zip code"
              className="pl-10 h-12 focus:ring-2 focus:ring-green-500 transition-all duration-300"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="h-12 px-8 bg-green-500 hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
          >
            Search Jobs
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

