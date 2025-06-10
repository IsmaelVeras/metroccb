"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Accessibility, ExternalLink, CalendarRange, Users, LucideChurch } from "lucide-react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { stationsData } from "@/data/stations"
import { ccbAddressesData } from "@/data/ccb-addresses"
import { extractLineNumber, getLineColor } from "@/data/metro-lines"
import type { Station, CcbChurch } from "@/types"

export default function StationPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [station, setStation] = useState<Station | null>(null)
  const [churches, setChurches] = useState<CcbChurch[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [lineColor, setLineColor] = useState("#cccccc")

  useEffect(() => {
    try {
      const stationId = Number.parseInt(params.id)
      if (isNaN(stationId)) {
        setError(true)
        setLoading(false)
        return
      }

      const foundStation = stationsData.find((s) => s.id === stationId)

      if (foundStation) {
        setStation(foundStation)
        const lineNumber = extractLineNumber(foundStation.line)
        setLineColor(getLineColor(lineNumber))

        const nearbyChurches = ccbAddressesData.filter((c) => c.stationId === stationId)
        setChurches(nearbyChurches)
      } else {
        setError(true)
      }
    } catch (err) {
      console.error("Error loading station:", err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [params.id])

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-6">
          <div className="flex justify-center items-center h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        </main>
      </div>
    )
  }

  // Show error state
  if (error || !station) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-6">
          <div className="rounded-lg bg-card p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-semibold tracking-tight mb-4">Estação não encontrada</h1>
            <p className="text-muted-foreground mb-6">A estação que você está procurando não existe ou foi removida.</p>
            <Button className="bg-lime-400 text-black" onClick={() => router.push("/")}>Voltar para a lista de estações</Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-6">
        <div className="max-w-2xl mx-auto mb-6 flex justify-between items-center">
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>

          
            <a
            href={`https://wa.me/?text=${encodeURIComponent('Igreja CCB Perto da Estação ' + station.name + ' https://metroccb.vercel.app/estacao/' + station.id)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
            className="rounded-full"
            variant="ghost"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.91 11.91 0 0 0 12 0C5.36 0 .01 5.35.01 12a11.9 11.9 0 0 0 1.64 6.04L0 24l6.27-1.64A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 22c-1.84 0-3.63-.5-5.19-1.43l-.37-.22-3.72.97.99-3.63-.24-.38A9.95 9.95 0 0 1 2 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm5.26-7.56c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.3-.74.94-.91 1.13-.17.2-.34.22-.63.07a8.07 8.07 0 0 1-2.37-1.46 8.96 8.96 0 0 1-1.65-2.05c-.17-.3 0-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.64-1.53-.88-2.08-.23-.54-.47-.47-.64-.47-.16 0-.35-.02-.54-.02a1.04 1.04 0 0 0-.75.35c-.26.29-1.01.98-1.01 2.4 0 1.42 1.03 2.8 1.18 2.99.15.2 2.03 3.1 4.93 4.34 1.63.7 2.26.77 3.06.65.49-.08 1.7-.7 1.94-1.36.24-.66.24-1.23.17-1.36-.06-.14-.26-.22-.55-.37z" />
            </svg>
          </Button>
          </a>
        </div>

        <div className="rounded-xl bg-card p-6 max-w-2xl mx-auto">
          <div className="flex gap-2 mb-4">
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: lineColor }} />
            <span className="text-sm font-medium text-muted-foreground/60">{station.line}</span>
          </div>

          <h1 className="text-2xl font-semibold tracking-tight  text-shadow-lg">{station.name}</h1>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium  text-shadow-lg">Endereço</h3>
                <p className="mt-1 text-sm text-muted-foreground">{station.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium  text-shadow-lg">Horário de Funcionamento</h3>
                <p className="mt-1 text-sm text-muted-foreground">{station.openingHours}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3">
            <Accessibility className="h-5 w-5 text-muted-foreground" />
            <div>
              <h3 className="font-medium text-shadow-lg">Acessibilidade</h3>
              <div className="mt-2 flex flex-wrap gap-1">
                {station.accessibility.map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(station.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center text-sm hover:underline"
          >
            <ExternalLink className="mr-1 h-3 w-3" />
            Ver no Google Maps
          </a>
        </div>

        <div className="rounded-xl mt-4 bg-card p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-extrabold tracking-tight">Igrejas próximas</h2>
            <div className="bg-muted/40 p-2 rounded px-auto py-auto text-sm text-muted-foreground">
              {churches.length} {churches.length === 1 ? "igreja" : "igrejas"} encontrada
              {churches.length !== 1 ? "s" : ""}
            </div>
          </div>

          {churches.length > 0 ? (
            <div className="grid gap-4">
              {churches.map((church) => (
                <div key={church.id}>
                  <div className="flex flex-col bg-background/80 p-3 rounded-sm">
                    <Accordion type="single" collapsible className="w-full ">
                      <AccordionItem value="cultos" className="border-b-1">
                        <AccordionTrigger className="py-2 hover:no-underline">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium truncate">{church.name}</span>
                          
                        </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pt-2">
                              <p className="text-sm text-muted-foreground">{church.address}</p>
                              <p className="text-sm text-muted-foreground">Distância: {church.distance}</p>
                             <div className="flex gap-2">
                              <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-flex items-center text-sm hover:underline"
                              >
                                <ExternalLink className="mr-1 h-3 w-3" />
                                Ver no Google Maps
                              </a>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold mb-2 flex items-center">
                                <div className="h-3 w-1 rounded-full mr-2" style={{ backgroundColor: lineColor }}></div>
                                Cultos Oficiais
                              </h4>
                              <div className="space-y-2">
                                {church.cultos.cultoOficial.map((culto, index) => {
                                  // Extrair dia e horário
                                  const [dia, horario] = culto.split(" - ")

                                  return (
                                    <div key={index} className="flex items-center p-2 rounded-lg bg-muted/50">
                                      <div
                                        className="p-1.5 rounded-full mr-3"
                                        style={{ backgroundColor: `${lineColor}20` }}
                                      >
                                        <Clock className="h-4 w-4" style={{ color: lineColor }} />
                                      </div>
                                      <div>
                                        <p className="font-medium text-sm">{dia}</p>
                                        <p className="text-xs text-muted-foreground">{horario}</p>
                                      </div>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>

                            {church.cultos.reuniaoJovens?.length > 0 && (
                              <div>
                                <h4 className="text-sm font-semibold mb-2 flex items-center">
                                  <div
                                    className="h-3 w-1 rounded-full mr-2"
                                    style={{ backgroundColor: lineColor }}
                                  ></div>
                                  Reunião de Jovens
                                </h4>
                                <div className="space-y-2">
                                  {church.cultos.reuniaoJovens.map((reuniao, index) => {
                                    // Extrair dia e horário
                                    const [dia, horario] = reuniao.split(" - ")

                                    return (
                                      <div key={index} className="flex items-center p-2 rounded-lg bg-muted/50">
                                        <div
                                          className="p-1.5 rounded-full mr-3"
                                          style={{ backgroundColor: `${lineColor}20` }}
                                        >
                                          <Clock className="h-4 w-4" style={{ color: lineColor }} />
                                        </div>
                                        <div>
                                          <p className="font-medium text-sm">{dia}</p>
                                          <p className="text-xs text-muted-foreground">{horario}</p>
                                        </div>
                                      </div>
                                    )
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl bg-card border p-6 max-w-2xl mx-auto">
              <div className="flex flex-col items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Nenhum endereço encontrado próximo à estação "{station.name}"
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
