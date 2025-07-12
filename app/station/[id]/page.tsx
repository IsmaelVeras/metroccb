"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Clock, MapPin, Accessibility, ExternalLink, CalendarRange, Users, LucideChurch, CalendarClock } from "lucide-react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { stationsData } from "@/data/stations"
import { ccbAddressesData } from "@/data/ccb-addresses"
import { extractLineNumber, getLineColor } from "@/data/metro-lines"
import type { Station, CcbChurch } from "@/types"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import ClassicLoader from "@/components/ui/loader"
import MinimalCard, { MinimalCardContent, MinimalCardTitle } from "@/components/ui/minimal-card"

export default function StationPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [station, setStation] = useState<Station | null>(null)
  const [churches, setChurches] = useState<CcbChurch[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [lineColor, setLineColor] = useState("#cccccc")

  useEffect(() => {
  try {
    const stationId = params.id;  // Recebe string diretamente

    if (typeof stationId !== "string" || stationId.trim() === "") {
      setError(true);
      setLoading(false);
      return;
    }

    // Busca a estação pelo id string (UUID)
    const foundStation = stationsData.find((s) => s.id === stationId);

    if (foundStation) {
      setStation(foundStation);
      const lineNumber = extractLineNumber(foundStation.line);
      setLineColor(getLineColor(lineNumber));

      const nearbyChurches = ccbAddressesData.filter((c) => c.stationId === stationId);
      setChurches(nearbyChurches);
    } else {
      setError(true);
    }
  } catch (err) {
    console.error("Erro ao carregar a estação:", err);
    setError(true);
  } finally {
    setLoading(false);
  }
}, [params.id]);


  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <ClassicLoader />
      </div>
    )
  }

  // Show error state
  if (error || !station) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-12">
          <div className="rounded-md max-w-md mx-auto text-center space-y-4">
            <h1 className="text-xl font-semibold text-foreground">Estação não encontrada</h1>
            <p className="text-sm text-muted-foreground">
              A estação que você está procurando não existe ou foi removida.
            </p>
            <Button
              onClick={() => router.push("/")}
              variant="secondary"
              className="inline-flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao início
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="p-3 py-6">
        <div className="max-w-2xl mx-auto mb-4 flex justify-between items-center px-2">
          {/* Botão Voltar */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="rounded-full hover:bg-muted/50 transition"
          >
            <ArrowLeft className="h-5 w-5 text-muted-foreground" />
          </Button>

          {/* Compartilhar no WhatsApp */}
          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              `Igreja CCB perto da Estação ${station.name} https://metroccb.vercel.app/station/${station.id}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              className="rounded-full gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:bg-slate-100 hover:text-neutral-500 dark:hover:bg-muted/50 dark:hover:text-neutral-400 transition"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.91 11.91 0 0 0 12 0C5.36 0 .01 5.35.01 12a11.9 11.9 0 0 0 1.64 6.04L0 24l6.27-1.64A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 22c-1.84 0-3.63-.5-5.19-1.43l-.37-.22-3.72.97.99-3.63-.24-.38A9.95 9.95 0 0 1 2 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm5.26-7.56c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.3-.74.94-.91 1.13-.17.2-.34.22-.63.07a8.07 8.07 0 0 1-2.37-1.46 8.96 8.96 0 0 1-1.65-2.05c-.17-.3 0-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.64-1.53-.88-2.08-.23-.54-.47-.47-.64-.47-.16 0-.35-.02-.54-.02a1.04 1.04 0 0 0-.75.35c-.26.29-1.01.98-1.01 2.4 0 1.42 1.03 2.8 1.18 2.99.15.2 2.03 3.1 4.93 4.34 1.63.7 2.26.77 3.06.65.49-.08 1.7-.7 1.94-1.36.24-.66.24-1.23.17-1.36-.06-.14-.26-.22-.55-.37z" />
              </svg>
              Compartilhar
            </Button>
          </a>
        </div>

       <div className="rounded-md border border-muted/50 bg-card p-4 max-w-2xl mx-auto space-y-6">
        {/* Linha */}
        <div className="flex items-center gap-2">
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: lineColor }}
          />
          <span className="text-sm text-muted-foreground">{station.line}</span>
        </div>

        {/* Nome da estação */}
        <h1 className="text-2xl font-semibold text-foreground">{station.name}</h1>

        {/* Dados principais em grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Endereço */}
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <div>
              <h3 className="font-medium text-foreground">Endereço</h3>
              <p className="mt-1 text-sm text-muted-foreground">{station.address}</p>
            </div>
          </div>

          {/* Horário */}
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <div>
              <h3 className="font-medium text-foreground">Horário de Funcionamento</h3>
              <p className="mt-1 text-sm text-muted-foreground">{station.openingHours}</p>
            </div>
          </div>
        </div>

        {/* Acessibilidade */}
        <div className="flex items-start gap-3">
          <Accessibility className="h-5 w-5 text-muted-foreground" />
          <div>
            <h3 className="font-medium text-foreground">Acessibilidade</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {station.accessibility.map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full border border-muted px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>


        <div className="rounded-md border border-muted/50 bg-card p-2 mt-2 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4 px-2">
          <h2 className="text-lg font-semibold text-muted-foreground">
            Igrejas próximas
          </h2>
          <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-md">
            {churches.length} {churches.length === 1 ? "igreja" : "igrejas"} encontrada
            {churches.length !== 1 ? "s" : ""}
          </span>
        </div>


          {churches.length > 0 ? (
            <div className="grid gap-4">
              {churches.map((church) => (
                <div key={church.id}>
                  <div className="flex flex-col p-1 rounded-sm">

                     <Accordion
                        type="single"
                        collapsible
                        defaultValue="item-1"
                        className="w-full"
                      >
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="text-xl font-semibold p-4 truncate">
                            {church.name}
                          </AccordionTrigger>

                          <AccordionContent>
                            <Card className="bg-background/80 dark:bg-background/50 border border-none rounded-2xl">

                              <CardContent className="space-y-6 p-6 rounded-sm border border-dashed border-muted/50">

                                {/* Bloco: Endereço e Distância */}
                                <div className="space-y-2">
                                  <p className="text-sm text-muted-foreground">
                                    <strong>Endereço:</strong> {church.address}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    <strong>Distância:</strong> {church.distance}
                                  </p>
                                  <Button
                                    size="sm"
                                    variant="secondary"
                                    className="mt-2"
                                  >
                                    <a
                                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.address)}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 text-sm font-medium dark:text-primary-foreground"
                                    >
                                      <ExternalLink className="w-4 h-4" />
                                      Ver no Google Maps
                                    </a>
                                  </Button>
                                </div>

                                <Separator />

                                {/* Bloco: Culto Oficial */}
                                <div>
                                  <h3 className="text-base font-semibold mb-3">
                                    Culto Oficial
                                  </h3>

                                  {church.cultos.cultoOficial.length > 0 ? (
                                    <div className="space-y-2">
                                      {church.cultos.cultoOficial.map((culto, index) => (
                                        <div
                                          key={index}
                                          className="flex items-center gap-2 bg-muted/20 rounded-lg px-4 py-2 border border-dashed"
                                        >
                                          <CalendarClock className="w-4 h-4 text-muted-foreground" />
                                          <span className="text-sm">{culto}</span>
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <p className="text-sm italic text-muted-foreground">
                                      Nenhuma informação disponível.
                                    </p>
                                  )}
                                </div>

                                {/* Bloco: Reunião de Jovens e Menores */}
                                <div>
                                  <h3 className="text-base font-semibold mb-3">
                                    Reunião de Jovens e Menores
                                  </h3>

                                  {church.cultos.reuniaoJovens.length > 0 ? (
                                    <div className="space-y-2">
                                      {church.cultos.reuniaoJovens.map((culto, index) => (
                                        <div
                                          key={index}
                                          className="flex items-center gap-2 bg-muted/20 rounded-lg px-4 py-2 border border-dashed"
                                        >
                                          <CalendarClock className="w-4 h-4 text-muted-foreground" />
                                          <span className="text-sm">{culto}</span>
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <p className="text-sm italic text-muted-foreground">
                                      Nenhuma informação disponível.
                                    </p>
                                  )}
                                </div>

                                {/* Bloco: Ajuda com dados faltantes */}
                                {(church.cultos.cultoOficial.length === 0 || church.cultos.reuniaoJovens.length === 0) && (
                                  <div className="pt-4 border-t border-muted text-center text-sm italic text-muted-foreground">
                                    Nos ajude a manter essas informações atualizadas. Se você souber os horários dos cultos,
                                    <a href="/contato" className="text-primary underline ml-1">clique aqui</a> para nos informar.
                                  </div>
                                )}

                              </CardContent>
                            </Card>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                  
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl bg-card p-4 max-w-2xl mx-auto">
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
