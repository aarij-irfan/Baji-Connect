"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bookmark, ClipboardCheck, Search } from "lucide-react"

export default function JobTabs() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="mb-8">
      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="all" className="relative">
            <span className="flex items-center">
              <Search className="h-4 w-4 mr-2" />
              All Jobs
            </span>
            {activeTab === "all" && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                layoutId="activeTab"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </TabsTrigger>
          <TabsTrigger value="saved" className="relative">
            <span className="flex items-center">
              <Bookmark className="h-4 w-4 mr-2" />
              Saved Jobs
            </span>
            {activeTab === "saved" && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                layoutId="activeTab"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </TabsTrigger>
          <TabsTrigger value="applied" className="relative">
            <span className="flex items-center">
              <ClipboardCheck className="h-4 w-4 mr-2" />
              Applied Jobs
            </span>
            {activeTab === "applied" && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                layoutId="activeTab"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}

