export type StationType = "Metrô" | "CPTM"

export interface Station {
  id: number
  name: string
  line: string
  type: StationType
  address: string
  openingHours: string
  accessibility: string[]
}

export interface CcbChurch {
  id: number
  name: string
  address: string
  distance: string
  stationId: number
  cultos: {
    cultoOficial: string[]
    reuniaoJovens?: string[]
  }
}
