export interface MetroLine {
  linha: string
  nome: string
  operadora: string
  cor: string
}

export const metroLinesData: MetroLine[] = [
  {
    linha: "1",
    nome: "Azul",
    operadora: "Metrô",
    cor: "#004F9F",
  },
  {
    linha: "2",
    nome: "Verde",
    operadora: "Metrô",
    cor: "#009F4D",
  },
  {
    linha: "3",
    nome: "Vermelha",
    operadora: "Metrô",
    cor: "#ED1C24",
  },
  {
    linha: "4",
    nome: "Amarela",
    operadora: "ViaQuatro",
    cor: "#FFD200",
  },
  {
    linha: "5",
    nome: "Lilás",
    operadora: "ViaMobilidade",
    cor: "#93328E",
  },
  {
    linha: "6",
    nome: "Laranja",
    operadora: "LinhaUni (futura)",
    cor: "#F68B1F",
  },
  {
    linha: "7",
    nome: "Rubi",
    operadora: "CPTM",
    cor: "#92278F",
  },
  {
    linha: "8",
    nome: "Diamante",
    operadora: "ViaMobilidade",
    cor: "#8C5FA7",
  },
  {
    linha: "9",
    nome: "Esmeralda",
    operadora: "ViaMobilidade",
    cor: "#00A79D",
  },
  {
    linha: "10",
    nome: "Turquesa",
    operadora: "CPTM",
    cor: "#0077A5",
  },
  {
    linha: "11",
    nome: "Coral",
    operadora: "CPTM",
    cor: "#F15A22",
  },
  {
    linha: "12",
    nome: "Safira",
    operadora: "CPTM",
    cor: "#0054A6",
  },
  {
    linha: "13",
    nome: "Jade",
    operadora: "CPTM",
    cor: "#00A651",
  },
  {
    linha: "15",
    nome: "Prata",
    operadora: "Metrô (Monotrilho)",
    cor: "#A7A9AC",
  },
  {
    linha: "17",
    nome: "Ouro",
    operadora: "ViaMobilidade (Monotrilho - futura)",
    cor: "#FBB040",
  },
]

// Função auxiliar para obter a cor da linha pelo número
export function getLineColor(lineNumber: string): string {
  const line = metroLinesData.find((line) => line.linha === lineNumber)
  return line ? line.cor : "#cccccc" // Cor padrão caso não encontre
}

// Função para extrair o número da linha de uma string como "Linha 1-Azul"
export function extractLineNumber(lineString: string): string {
  const match = lineString.match(/Linha (\d+)/)
  return match ? match[1] : ""
}
