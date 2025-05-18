"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { extractLineNumber, getLineColor } from "@/data/metro-lines"
import type { Station } from "@/types"

// Função para normalizar texto (remover acentos e converter para minúsculas)
function normalizeText(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
}

export function Stations({ stationsData }: { stationsData: Station[] }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const stationsPerPage = 8

  const filteredStations = stationsData.filter((station) => {
    const normalizedSearch = normalizeText(searchTerm)
    const normalizedName = normalizeText(station.name)

    return normalizedName.includes(normalizedSearch)
  })

  const indexOfLastStation = currentPage * stationsPerPage
  const indexOfFirstStation = indexOfLastStation - stationsPerPage
  const currentStations = filteredStations.slice(indexOfFirstStation, indexOfLastStation)
  const totalPages = Math.ceil(filteredStations.length / stationsPerPage)

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="sticky top-[3.5rem] z-40 bg-background/80 backdrop-blur py-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar estação..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentPage(1) // Reset para a primeira página ao buscar
            }}
            className="pl-9 bg-muted/50 rounded-full "
          />
        </div>
      </div>

      {filteredStations.length === 0 ? (
        <div className="rounded-xl bg-card p-6 max-w-2xl mx-auto">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Nenhuma estação encontrada com o termo "{searchTerm}"
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {currentStations.map((station) => {
              const lineNumber = extractLineNumber(station.line)
              const lineColor = getLineColor(lineNumber)

              return (
                <Link
                  key={station.id}
                  href={`/estacao/${station.id}`}
                  className="group flex flex-col rounded-lg bg-card p-4 transition-colors hover:bg-muted/50 dark:hover:bg-muted/80"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-2 w-2 rounded-full" style={{ backgroundColor: lineColor }} />
                    <span className="text-xs font-normal text-muted-foreground">{station.line}</span>
                  </div>
                  <h3 className="text-lg font-extrabold leading-5 tracking-tight">{station.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground truncate ">{station.address}</p>
                </Link>
              )
            })}
          </div>

          <div className="flex items-center justify-between pt-4">
            <p className="text-sm text-muted-foreground">
              Mostrando {indexOfFirstStation + 1}-{Math.min(indexOfLastStation, filteredStations.length)} de{" "}
              {filteredStations.length} estações
            </p>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-1 text-sm">
                <span className="font-medium">{currentPage}</span>
                <span className="text-muted-foreground">/</span>
                <span className="text-muted-foreground">{totalPages}</span>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
