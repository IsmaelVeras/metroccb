"use client"

import { useState, useEffect } from "react"
import { Stations } from "@/components/stations"
import { Header } from "@/components/header"
import { stationsData } from "@/data/stations"

export default function Home() {
  const [loading, setLoading] = useState(true)

  // Simulate loading for a better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 8)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="p-6 py-6">
        <div className="text-center mb-8 relative">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-shadow-lg">
            Congregue com mais{" "}
            <span className="relative inline-block">
              {/* Rabisco SVG */}
              <svg
                viewBox="0 0 200 30"
                className="absolute -bottom-1 left-0 w-full h-6"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 20 Q 50 10, 100 20 T 195 20"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="text-lime-300 dark:text-lime-500 opacity-70"
                  strokeLinecap="round"
                />
              </svg>

              <span className="relative text-black dark:text-lime-100 text-shadow-lg">
                mobilidade
              </span>
            </span>
          </h1>

          <p className="mt-3 text-base md:text-lg font-medium text-lime-800 dark:text-gray-300 text-shadow">
            Encontre igrejas da CCB próximas às estações de metrô em São Paulo
          </p>
        </div>


        {loading ? (
          <main className="container py-6">
            <div className="flex justify-center items-center h-[60vh]">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
            </div>
          </main>
        ) : (
          <div className="mt-8">
            <Stations stationsData={stationsData} />
          </div>
        )}
      </main>
    </div>
  )
}
