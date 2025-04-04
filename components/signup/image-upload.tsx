"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, X, ZoomIn, ZoomOut } from "lucide-react"
import { motion } from "framer-motion"

interface ImageUploadProps {
  onImageChange: (file: File | null) => void
  defaultImage?: string
  isCircular?: boolean
}

export default function ImageUpload({ onImageChange, defaultImage, isCircular = false }: ImageUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(defaultImage || null)
  const [zoom, setZoom] = useState(1)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
        onImageChange(file)
      }
      reader.readAsDataURL(file)
    } else {
      setPreviewUrl(null)
      onImageChange(null)
    }
  }

  const handleZoomIn = () => {
    if (zoom < 2) setZoom(zoom + 0.1)
  }

  const handleZoomOut = () => {
    if (zoom > 0.5) setZoom(zoom - 0.1)
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const removeImage = () => {
    setPreviewUrl(null)
    onImageChange(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  return (
    <div className="w-full">
      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />

      {previewUrl ? (
        <div className="space-y-3">
          <div
            className={`relative mx-auto overflow-hidden ${
              isCircular ? "rounded-full" : "rounded-lg"
            } border-2 border-gray-200 bg-gray-100 flex items-center justify-center`}
            style={{
              width: isCircular ? "180px" : "100%",
              height: isCircular ? "180px" : "200px",
              maxWidth: isCircular ? "180px" : "300px",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <motion.img
                src={previewUrl}
                alt="Preview"
                className="object-cover w-full h-full"
                style={{
                  scale: zoom,
                  transformOrigin: "center",
                }}
                animate={{ scale: zoom }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>

            <button
              type="button"
              onClick={removeImage}
              className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-lg hover:bg-red-50 transition-colors duration-200 border border-gray-200 z-10"
            >
              <X className="h-5 w-5 text-red-500" />
            </button>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleZoomOut}
              className="rounded-full w-8 h-8 p-0 flex items-center justify-center"
              disabled={zoom <= 0.5}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>

            <div className="w-24 h-2 bg-gray-200 rounded-full">
              <div className="h-full bg-green-500 rounded-full" style={{ width: `${((zoom - 0.5) / 1.5) * 100}%` }} />
            </div>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleZoomIn}
              className="rounded-full w-8 h-8 p-0 flex items-center justify-center"
              disabled={zoom >= 2}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <Button
          type="button"
          variant="outline"
          onClick={triggerFileInput}
          className={`border-dashed border-2 border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex flex-col items-center justify-center ${
            isCircular ? "rounded-full w-32 h-32 mx-auto" : "rounded-lg w-full h-40"
          }`}
        >
          <Upload className="h-6 w-6 text-gray-400 mb-2" />
          <span className="text-sm text-gray-500">{isCircular ? "Upload Photo" : "Upload Image"}</span>
          <span className="text-xs text-gray-400 mt-1">JPG, PNG or GIF</span>
        </Button>
      )}
    </div>
  )
}

