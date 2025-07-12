"use client"

import { useState, useEffect } from "react"
import { Stations } from "@/components/stations"
import { Header } from "@/components/header"
import { stationsData } from "@/data/stations"
import ClassicLoader from "@/components/ui/loader"
import { FlipWordsDemo } from "@/components/ui/flip-names"

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
    <div className="min-h-screen bg-background text-neutral-900 dark:text-neutral-100 px-2">
      <Header />
      <main className="p-6 py-6">
        <FlipWordsDemo />
        {loading ? (
          <ClassicLoader />
        ) : (
          <div className="mt-8">
            <Stations stationsData={stationsData} />
          </div>
        )}
      </main>
    </div>
  )
}
