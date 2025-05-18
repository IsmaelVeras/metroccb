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
        <div className="max-w-2xl mx-auto mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Voltar
          </Link>
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
            <div className="bg-muted/50 rounded-full px-3 py-1 text-sm text-muted-foreground">
              {churches.length} {churches.length === 1 ? "igreja" : "igrejas"} encontrada
              {churches.length !== 1 ? "s" : ""}
            </div>
          </div>

          {churches.length > 0 ? (
            <div className="grid gap-4">
              {churches.map((church) => (
                <div key={church.id}>
                  <div className="flex flex-col bg-muted/20 gap-4 p-3 rounded-md border border-muted">
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
