"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
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
    <div className="space-y-2 max-w-2xl mx-auto">
      <div className="sticky top-[3.5rem] z-40 bg-background/80 backdrop-blur-sm py-3">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar estação..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentPage(1)
            }}
            className="pl-9 py-5 rounded-sm bg-muted/30 text-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:outline-none border border-muted/50"
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
          <div className="space-y-2">
            {currentStations.map((station) => {
              const lineNumber = extractLineNumber(station.line)
              const lineColor = getLineColor(lineNumber)

              return (
                <Link
                    key={station.id}
                    href={`/station/${station.id}`}
                    className="group relative flex flex-col rounded-sm border border-muted/50 bg-card p-4 transition hover:bg-muted/40"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: lineColor }}
                      />
                      <span className="text-xs text-muted-foreground">{station.line}</span>
                    </div>
                    <h3 className="text-base font-semibold truncate leading-5">
                      {station.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {station.address}
                    </p>
                    <ArrowRight className="absolute bottom-4 right-4 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
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
                variant="secondary"
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
                variant="secondary"
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

       <footer className="w-full mt-8 border-t border-muted pt-6 text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 px-4">
          <span className="text-center">
            © 2025 <a href="#" className="hover:underline font-medium text-foreground">MetrôCCB</a>. Todos os direitos reservados.
          </span>
          <a
            target="_blank"
            href="https://tally.so/r/wbEvgE"
            className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium transition bg-lime-100 text-lime-900 hover:bg-lime-200 dark:bg-lime-500 dark:text-lime-950 dark:hover:bg-lime-600 dark:hover:text-lime-200"
          >
            📝 Ajuda a gente com informação
          </a>
        </div>
      </footer>

    </div>
  )
}
