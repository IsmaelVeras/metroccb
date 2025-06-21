export type StationType = 
  "Metrô" |      // Linhas operadas pelo Metrô de SP (ex: Azul, Verde, Vermelha)
  "CPTM" |       // Linhas operadas pela CPTM (ex: Coral, Rubi, Turquesa)
  "ViaQuatro" |  // Linha 4-Amarela (concessionária privada)
  "ViaMobilidade" | // Linhas 5-Lilás, 8-Diamante e 9-Esmeralda (concessionária privada)
  "Monotrilho" | // Linhas de monotrilho (ex: Linha 15-Prata, operada pelo Metrô)
  "Intermunicipal" | // Linhas que cruzam regiões metropolitanas, geralmente da CPTM
  "Futura" |     // Projetadas ou em construção (ex: Linha 6-Laranja)
  "";


export interface Station {
  id: string
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
  stationId: string
  cultos: {
    cultoOficial?: string[]
    reuniaoJovens?: string[]
  }
}
