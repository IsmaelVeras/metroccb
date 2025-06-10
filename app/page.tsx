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
      <main className="container py-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-shadow-lg">
            Congregue com mais{" "}
            <span className="relative inline-block">
              <span className="before:absolute before:-inset-1 before:block before:-skew-y-1  before:bg-lime-200 dark:before:bg-lime-400" />
              <span className="relative  decoration-lime-600 text-black dark:text-lime-950 text-shadow-lg">
                mobilidade
              </span>
            </span>
          </h1>
          <p className="text-muted-foreground mt-2 font-medium text-lime-900 dark:text-gray-300 text-shadow-lg">
           Encontre igrejas da CCB próximas às estações de metrô em São Paulo
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lime-500"></div>
          </div>
        ) : (
          <div className="mt-8">
            <Stations stationsData={stationsData} />
          </div>
        )}
      </main>
    </div>
  )
}
