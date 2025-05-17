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
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">Estações</h1>
          <p className="text-muted-foreground mt-2">Encontre igrejas CCB próximas às estações em São Paulo</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
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
