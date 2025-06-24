import type { Station } from "@/types"

// ===== METRO LINES =====

// Linha 1 - Azul (Blue Line)
const linha1: Station[] = [
  {
    "id": "2948e0e0-f1c9-42aa-9eae-828b84bf3a5e",
    "name": "Tucuruvi",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Av. Dr. Antonio Maria Laet, 100 - Tucuruvi, São Paulo - SP, 02303-000",
    "openingHours": "Todos os dias, das 4h40 às 0h14",
    "accessibility": ["Elevadores", "Escadas rolantes", "Piso tátil", "Portas de plataforma"]
  },
  {
    "id": "ea81d691-ba5e-4a63-b040-7add0f3b3219",
    "name": "Parada Inglesa",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Av. Luiz Dumont Villares, 1721 - Parada Inglesa, São Paulo - SP, 02430-000",
    "openingHours": "Todos os dias, das 4h40 às 0h16",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "971a294a-4e12-41d6-adbe-a6bd6dca1766",
    "name": "Jardim São Paulo–Ayrton Senna",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Av. Leôncio de Magalhães, 1000 - Jardim São Paulo, São Paulo - SP, 02343-002",
    "openingHours": "Todos os dias, das 4h40 às 0h18",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "3cf3b7ed-9ec5-4aed-8c4f-e541404d1858",
    "name": "Santana",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Av. Cruzeiro do Sul, 3173 - Santana, São Paulo - SP, 02030-150",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Elevadores", "Escadas rolantes"]
  },
  {
    "id": "def10c2b-3cbb-46a0-bcf8-dcea1ce655c9",
    "name": "Carandiru",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Av. Cruzeiro do Sul, 2487 - Santana, São Paulo - SP, 02030-150",
    "openingHours": "Todos os dias, das 4h40 às 0h22",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "ad2e8306-8408-4b3e-9c09-ddf298ebade0",
    "name": "Portuguesa–Tietê",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Av. Cruzeiro do Sul, 1777 - Santana, São Paulo - SP, 02011-000",
    "openingHours": "Todos os dias, das 4h40 às 0h24",
    "accessibility": ["Elevadores"]
  },
  {
    "id": "76ac97cf-1775-445d-a879-2988dab100e0",
    "name": "Armênia",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Rua Pedro Vicente, 47 - Bom Retiro, São Paulo - SP, 01109-000",
    "openingHours": "Todos os dias, das 4h40 às 0h26",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "6eacc1f9-3907-4ad5-9acd-bbf78a61135e",
    "name": "Tiradentes",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Av. Tiradentes, 551 - Luz, São Paulo - SP, 01102-000",
    "openingHours": "Todos os dias, das 4h40 às 0h28",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "0540e952-4d6e-4976-a616-c0092015d87e",
    "name": "Luz",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Av. Prestes Maia, 925 - Luz, São Paulo - SP, 01031-900",
    "openingHours": "Todos os dias, das 4h40 às 0h30",
    "accessibility": ["Elevadores", "Escadas rolantes", "Integração"]
  },
  {
    "id": "1bb557c6-63b2-4654-a2b2-3f05b786920b",
    "name": "São Bento",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Largo São Bento, 109 - Centro, São Paulo - SP, 01029-010",
    "openingHours": "Todos os dias, das 4h40 às 0h32",
    "accessibility": ["Escadas rolantes", "Piso tátil"]
  },
  {
    "id": "b493085e-e466-4fad-9bf8-b44804125aa4",
    "name": "Sé",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Praça da Sé, s/n - Sé, São Paulo - SP, 01001-000",
    "openingHours": "Todos os dias, das 4h40 às 0h29",
    "accessibility": ["Elevadores", "Escadas rolantes", "Integração"]
  },
  {
    "id": "0adc899f-13d7-4606-8d74-49c72c34c21e",
    "name": "Japão–Liberdade",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Praça da Liberdade, 133 - Liberdade, São Paulo - SP, 01503-010",
    "openingHours": "Todos os dias, das 4h40 às 0h28",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "727841b7-cd24-4560-a19b-96e25acec693",
    "name": "São Joaquim",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Av. Liberdade, 1033 - Liberdade, São Paulo - SP, 01503-001",
    "openingHours": "Todos os dias, das 4h40 às 0h26",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "e613037d-1d6e-4a0e-9836-9d18e2f1491a",
    "name": "Vergueiro",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Rua Vergueiro, 790 - Liberdade, São Paulo - SP, 01504-001",
    "openingHours": "Todos os dias, das 4h40 às 0h24",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "b83dd77d-22c9-4fa5-974a-13c003f41809",
    "name": "Paraíso",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Rua Vergueiro, 1465 - Paraíso, São Paulo - SP, 04101-000",
    "openingHours": "Todos os dias, das 4h40 às 0h22",
    "accessibility": ["Elevadores", "Escadas rolantes", "Integração"]
  },
  {
    "id": "ddfe3258-bfb9-4618-8788-0f436c9eddba",
    "name": "Ana Rosa",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Rua Vergueiro, 505 - Vila Mariana, São Paulo - SP, 04101-000",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Elevadores", "Escadas rolantes", "Integração"]
  },
  {
    "id": "6bcae492-50a4-490f-b81b-7bed48b3d33d",
    "name": "Vila Mariana",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Av. Prof. Noé Azevedo, 255 - Vila Mariana, São Paulo - SP, 04117-000",
    "openingHours": "Todos os dias, das 4h40 às 0h18",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "4197f940-f805-4cf5-b93a-e266bbeb3f09",
    "name": "Santa Cruz",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Rua Domingos de Morais, 2564 - Vila Mariana, São Paulo - SP, 04036-100",
    "openingHours": "Todos os dias, das 4h40 às 0h16",
    "accessibility": ["Elevadores", "Integração"]
  },
  {
    "id": "13be48d3-ebd2-4214-9b2f-82180998412b",
    "name": "Praça da Árvore",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Praça da Árvore, 39 - Vila Mariana, São Paulo - SP, 04195-020",
    "openingHours": "Todos os dias, das 4h40 às 0h14",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "557a79a2-39c0-4df6-a465-365f9cb3ad45",
    "name": "Saúde–Ultrafarma",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Av. Jabaquara, 1634 - Saúde, São Paulo - SP, 04045-003",
    "openingHours": "Todos os dias, das 4h40 às 0h12",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "787d4bc3-7f21-4767-8594-bdf70297c371",
    "name": "São Judas",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Av. Jabaquara, 2438 - São Judas, São Paulo - SP, 04050-005",
    "openingHours": "Todos os dias, das 4h40 às 0h10",
    "accessibility": ["Escadas rolantes"]
  },
  {
    "id": "a4f98ea5-c288-47f9-a7ce-ead947895d27",
    "name": "Conceição",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Av. Engenheiro Armando de Arruda Pereira, 919 - Jabaquara, São Paulo - SP, 04309-000",
    "openingHours": "Todos os dias, das 4h40 às 0h08",
    "accessibility": ["Elevadores", "Escadas rolantes", "Piso tátil"]
  },
  {
    "id": "8d0a43d2-5453-4ad7-a60a-e4dbd9f17ec8",
    "name": "Jabaquara–Comitê Paralímpico Brasileiro",
    "line": "Linha 1-Azul",
    "type": "Metrô",
    "address": "Rua dos Jequitibás, 80 - Jabaquara, São Paulo - SP, 04321-080",
    "openingHours": "Todos os dias, das 4h40 às 0h06",
    "accessibility": ["Portas de plataforma", "Elevadores", "Piso tátil"]
  }
]


// Linha 2 - Verde (Green Line)
const linha2: Station[] = [
  {
    "id": "0707cd47-e7a2-45d5-9eee-2c8bf5e15604",
    "name": "Vila Madalena",
    "line": "Linha 2-Verde",
    "type": "Metrô",
    "address": "R. Dr. Paulo Vieira, 010 - Sumarezinho, São Paulo - SP, 05438-100",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "6a14afe2-4ae5-4add-8413-4d6c4743424b",
    "name": "Sumaré",
    "line": "Linha 2-Verde",
    "type": "Metrô",
    "address": "Av. Dr. Arnaldo, 1470 - Sumaré, São Paulo - SP, 01255-000",
    "openingHours": "Todos os dias, das 4h40 às 0h22",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "6408300f-c672-4805-a432-eb3184e2e90b",
    "name": "Clínicas",
    "line": "Linha 2-Verde",
    "type": "Metrô",
    "address": "Av. Dr. Arnaldo, 555 - Cerqueira César, São Paulo - SP, 01246-001",
    "openingHours": "Todos os dias, das 4h40 às 0h24",
    "accessibility": ["Elevadores", "Escadas rolantes"]
  },
  {
    "id": "f199e7dd-ddd8-45d9-b916-502e00eafd78",
    "name": "Consolação",
    "line": "Linha 2-Verde",
    "type": "Metrô",
    "address": "Av. Paulista, 2181 - Consolação, São Paulo - SP, 01311-300",
    "openingHours": "Todos os dias, das 4h40 às 0h26",
    "accessibility": ["Elevadores", "Integração com Linha 4-Amarela"]
  },
  {
    "id": "af5876a9-04af-433e-ae34-54db908e3710",
    "name": "Trianon-Masp",
    "line": "Linha 2-Verde",
    "type": "Metrô",
    "address": "Av. Paulista, 1400 - Bela Vista, São Paulo - SP, 01310-100",
    "openingHours": "Todos os dias, das 4h40 às 0h28",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "161e8ee3-cd46-410c-8b16-c94bd39ac311",
    "name": "Brigadeiro",
    "line": "Linha 2-Verde",
    "type": "Metrô",
    "address": "Av. Paulista, 1945 - Bela Vista, São Paulo - SP, 01310-200",
    "openingHours": "Todos os dias, das 4h40 às 0h30",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "3cc2d7f1-d6a0-4753-8b8a-f2e28a4de980",
    "name": "Chácara Klabin",
    "line": "Linha 2-Verde",
    "type": "Metrô",
    "address": "Rua Vergueiro, 4372 - Vila Mariana, São Paulo - SP, 04101-300",
    "openingHours": "Todos os dias, das 4h40 às 0h36",
    "accessibility": ["Elevadores", "Integração com Linha 5-Lilás"]
  },
  {
    "id": "9366e7de-7cfb-43d0-b34f-c35359336053",
    "name": "Santos–Imigrantes",
    "line": "Linha 2-Verde",
    "type": "Metrô",
    "address": "Av. Dr. Ricardo Jafet, 1381 - Cursino, São Paulo - SP, 04113-300",
    "openingHours": "Todos os dias, das 4h40 às 0h38",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "be9a8519-707b-40d5-8556-32c854941c4b",
    "name": "Alto do Ipiranga",
    "line": "Linha 2-Verde",
    "type": "Metrô",
    "address": "Av. Dr. Gentil de Moura, 333 - Ipiranga, São Paulo - SP, 04278-000",
    "openingHours": "Todos os dias, das 4h40 às 0h40",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "28ee9a32-9250-4b85-8d03-fcb831db07f2",
    "name": "Sacomã",
    "line": "Linha 2-Verde",
    "type": "Metrô",
    "address": "R. Agostinho Gomes, 3443-3499 - Ipiranga, São Paulo - SP, 04206-002",
    "openingHours": "Todos os dias, das 4h40 às 0h42",
    "accessibility": ["Elevadores"]
  },
  {
    "id": "7aae7d33-a39d-470d-8f6f-6ae89432dded",
    "name": "Tamanduateí",
    "line": "Linha 2-Verde",
    "type": "Metrô",
    "address": "Av. Presidente Wilson, 4801 - Vila Independencia, São Paulo - SP, 03153-001",
    "openingHours": "Todos os dias, das 4h40 às 0h44",
    "accessibility": ["Elevadores", "Integração com CPTM"]
  },
  {
    "id": "6b84a26f-e04a-47fb-9bf0-fea3ebcb96e2",
    "name": "Vila Prudente",
    "line": "Linha 2-Verde",
    "type": "Metrô",
    "address": "Av. Professor Luis Ignácio de Anhaia Mello, 1359 - Vila Prudente, São Paulo - SP, 03150-000",
    "openingHours": "Todos os dias, das 4h40 às 0h46",
    "accessibility": ["Elevadores", "Integração com Linha 15-Prata"]
  }
]


// Linha 3 - Vermelha (Red Line)
const linha3: Station[] = [
  {
    "id": "8a91868b-1e76-41f0-b201-6d7c0d2a13ab",
    "name": "Palmeiras-Barra Funda",
    "line": "Linha 3-Vermelha",
    "type": "Metrô",
    "address": "Av. Mário de Andrade, 664 - Barra Funda, São Paulo - SP, 01156-001",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "b297fa64-3e8e-4f45-91f6-2e0c8655ad60",
    "name": "Marechal Deodoro",
    "line": "Linha 3-Vermelha",
    "type": "Metrô",
    "address": "Praça Mal. Deodoro, 311 - Santa Cecilia, São Paulo - SP, 18200-007",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "4eae65e9-b6d0-4e25-8bcb-24e57a49e10f",
    "name": "Santa Cecília",
    "line": "Linha 3-Vermelha",
    "type": "Metrô",
    "address": "Av. General Olímpio da Silveira, s/n - Santa Cecília, São Paulo - SP, 01213-010",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "76bcd0d7-b1c5-4a3e-9504-4293ce95cf71",
    "name": "República",
    "line": "Linha 3-Vermelha",
    "type": "Metrô",
    "address": "Praça da República, s/n - República, São Paulo - SP, 01045-903",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "d16c4064-2609-437a-9270-f4e6b053872e",
    "name": "Anhangabaú",
    "line": "Linha 3-Vermelha",
    "type": "Metrô",
    "address": "Av. São João, s/n - Centro, São Paulo - SP, 01035-000",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "92be8db8-cf23-4be1-8f07-0de0eaf7f52e",
    "name": "Pedro II",
    "line": "Linha 3-Vermelha",
    "type": "Metrô",
    "address": "Av. do Estado, s/n - Centro, São Paulo - SP, 03007-000",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "e26566f3-8726-44a3-9f0b-e4215b3e2c3e",
    "name": "Brás",
    "line": "Linha 3-Vermelha",
    "type": "Metrô",
    "address": "Av. Rangel Pestana, 300 - Brás, São Paulo - SP, 03037-000",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "9dd2ccff-c09c-4e70-8597-40136005fcbc",
    "name": "Bresser-Mooca",
    "line": "Linha 3-Vermelha",
    "type": "Metrô",
    "address": "R. Bresser, 1408 - Brás, São Paulo - SP, 03053-000",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "e810f4c9-0f5c-4e6f-a53e-1f3260049c95",
    "name": "Belém",
    "line": "Linha 3-Vermelha",
    "type": "Metrô",
    "address": "Av. Alcântara Machado - Belenzinho, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "da37b597-e34f-4049-bc90-d5732f39df17",
    "name": "Tatuapé",
    "line": "Linha 3-Vermelha",
    "type": "Metrô",
    "address": "Rua Domingos Agostim, s/n - Tatuapé, São Paulo - SP, 03067-000",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "3a7c3b47-0329-4db3-bd70-cdfb70a04b17",
    "name": "Carrão",
    "line": "Linha 3-Vermelha",
    "type": "Metrô",
    "address": "Av. Radial Leste, s/n - Carrão, São Paulo - SP, 03402-000",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "3b9627b4-9f9d-420a-b431-bd3e7cf58788",
    "name": "Penha",
    "line": "Linha 3-Vermelha",
    "type": "Metrô",
    "address": "R. Alvinópolis, 178 - Vila Beatriz, São Paulo - SP, 03644-070",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "04128cd2-c6bb-4ff6-a86e-b370d1175a5c",
    "name": "Vila Matilde",
    "line": "Linha 3-Vermelha",
    "type": "Metrô",
    "address": "Av. Radial Leste, s/n - Vila Matilde, São Paulo - SP, 03509-000",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "e04c222f-c5a6-49c8-95bc-8ad8fc28befe",
    "name": "Guilhermina-Esperança",
    "line": "Linha 3-Vermelha",
    "type": "Metrô",
    "address": "R. Astorga, 728 - Vila Guilhermina, São Paulo - SP, 03542-000",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "07d64b25-e54c-4c36-b0d5-e88c65cb937e",
    "name": "Patriarca",
    "line": "Linha 3-Vermelha",
    "type": "Metrô",
    "address": "Av. Radial Leste, s/n - Patriarca, São Paulo - SP, 03659-000",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "84a6991b-8af3-4c68-9273-f2fa12fda8ec",
    "name": "Artur Alvim",
    "line": "Linha 3-Vermelha",
    "type": "Metrô",
    "address": "Av. Radial Leste, s/n - Artur Alvim, São Paulo - SP, 03587-000",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "2641fc35-e2f3-45d0-8a3f-967ecb7c7fa2",
    "name": "Corinthians-Itaquera",
    "line": "Linha 3-Vermelha",
    "type": "Metrô",
    "address": "Largo da Matriz, 85-119 - Itaquera, São Paulo - SP, 08210-110",
    "openingHours": "Todos os dias, das 4h40 às 0h20",
    "accessibility": ["Elevadores", "Piso tátil"]
  }
]

// Linha 4 - Amarela (Yellow Line)
const linha4: Station[] = [
  {
    "id": "d460aa31-dfc0-4e6b-8d8a-4a648cbe1f47",
    "name": "Higienópolis-Mackenzie",
    "line": "Linha 4-Amarela",
    "type": "ViaQuatro",
    "address": "Rua da Consolação, 2000 - Consolação, São Paulo - SP, 01302-001",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "9f17e326-6492-4bd0-96a6-5a8f49c9c46e",
    "name": "Paulista",
    "line": "Linha 4-Amarela",
    "type": "ViaQuatro",
    "address": "Rua da Consolação, s/n - Consolação, São Paulo - SP, 01301-000",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "a37d1e37-f58f-48cc-8798-43a9e2120e56",
    "name": "Faria Lima",
    "line": "Linha 4-Amarela",
    "type": "ViaQuatro",
    "address": "Av. Brigadeiro Faria Lima, 950 - Pinheiros, São Paulo - SP, 05426-100",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "b167f264-4b17-45db-bec8-623586012505",
    "name": "Pinheiros",
    "line": "Linha 4-Amarela",
    "type": "ViaQuatro",
    "address": "Av. das Nações Unidas, 13103 - Pinheiros, São Paulo - SP, 05422-001",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "57bdbf48-9e7f-4e7c-aafb-95c37d22dbd3",
    "name": "Butantã",
    "line": "Linha 4-Amarela",
    "type": "ViaQuatro",
    "address": "Av. Vital Brasil, 427 - Butantã, São Paulo - SP, 05503-000",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "2f60ae9f-1c91-4a2d-91a2-9e464e11ae2d",
    "name": "São Paulo-Morumbi",
    "line": "Linha 4-Amarela",
    "type": "ViaQuatro",
    "address": "Av. Prof. Francisco Morato, 2718 - Butantã, São Paulo - SP, 05512-300",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "25b9cf8a-bdea-4745-9f32-f826ec79b5d3",
    "name": "Vila Sônia",
    "line": "Linha 4-Amarela",
    "type": "ViaQuatro",
    "address": "Av. Prof. Francisco Morato, 4312 - Vila Sônia, São Paulo - SP, 05521-200",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  }
]

// Linha 5 - Lilás (Lilac Line)
const linha5: Station[] = [
  {
    "id": "73a1d279-6cc5-4c1e-b38e-5f4937e450c9",
    "name": "Capão Redondo",
    "line": "Linha 5-Lilás",
    "type": "ViaMobilidade",
    "address": "Estr. de Itapecerica, 5859 - Capão Redondo, São Paulo - SP, 05835-005",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "f7ae55e0-92ee-4396-9067-62a59f3d26d4",
    "name": "Campo Limpo",
    "line": "Linha 5-Lilás",
    "type": "ViaMobilidade",
    "address": "Av. Carlos Caldeira Filho, 4275 - Vila das Belezas, São Paulo - SP, 05835-000",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "f6e0a0de-3bb1-4905-bdcb-33eb5bc08e65",
    "name": "Vila das Belezas",
    "line": "Linha 5-Lilás",
    "type": "ViaMobilidade",
    "address": "Av. Carlos Caldeira Filho, 3651 - Vila das Belezas, São Paulo - SP, 05835-000",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "69c390fd-0147-4d1b-95ea-d285ec8f4f4a",
    "name": "Giovanni Gronchi",
    "line": "Linha 5-Lilás",
    "type": "ViaMobilidade",
    "address": "Av. Giovanni Gronchi, 5819 - Vila Andrade, São Paulo - SP, 05724-005",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "45d95fcd-8d47-438c-a618-00b0ce7b9d4f",
    "name": "Santo Amaro",
    "line": "Linha 5-Lilás",
    "type": "ViaMobilidade",
    "address": "Av. Guido Caloi, 2221 - Santo Amaro, São Paulo - SP, 04795-100",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "8c11777e-4e11-4298-b430-49c90f10de0d",
    "name": "Largo Treze",
    "line": "Linha 5-Lilás",
    "type": "ViaMobilidade",
    "address": "Rua Barão do Rio Branco, 30 - Santo Amaro, São Paulo - SP, 04789-000",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "4f1790d3-32ae-4b18-9f44-98fc7d2cd33c",
    "name": "Adolfo Pinheiro",
    "line": "Linha 5-Lilás",
    "type": "ViaMobilidade",
    "address": "Av. Adolfo Pinheiro, 301 - Santo Amaro, São Paulo - SP, 04734-000",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "03a3e0ef-813e-4bd6-a986-3a1ae6bd4c21",
    "name": "Alto da Boa Vista",
    "line": "Linha 5-Lilás",
    "type": "ViaMobilidade",
    "address": "Av. Santo Amaro, 6743 - Santo Amaro, São Paulo - SP, 04707-000",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "81bd1d44-9d02-4c46-a8ed-19b6a68e3d5c",
    "name": "Borba Gato",
    "line": "Linha 5-Lilás",
    "type": "ViaMobilidade",
    "address": "Av. Santo Amaro, 5867 - Santo Amaro, São Paulo - SP, 04707-100",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "77d1a6cf-d369-4a8d-9491-82f8a36d97be",
    "name": "Brooklin",
    "line": "Linha 5-Lilás",
    "type": "ViaMobilidade",
    "address": "Av. Santo Amaro, 5009 - Brooklin, São Paulo - SP, 04571-010",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "b951f7be-2b4c-4a44-94d2-d1d750d04f3b",
    "name": "Campo Belo",
    "line": "Linha 5-Lilás",
    "type": "ViaMobilidade",
    "address": "Av. Santo Amaro, 4370 - Campo Belo, São Paulo - SP, 04556-004",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "a7f2ad55-1a38-4b4a-b76f-d5c6a5f831a0",
    "name": "Eucaliptos",
    "line": "Linha 5-Lilás",
    "type": "ViaMobilidade",
    "address": "Av. Ibirapuera, 2828 - Moema, São Paulo - SP, 04509-002",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "2d4e1468-f4f7-44d8-b670-396640b78b8f",
    "name": "Moema",
    "line": "Linha 5-Lilás",
    "type": "ViaMobilidade",
    "address": "Av. Ibirapuera, 1947 - Moema, São Paulo - SP, 04029-200",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "d7a7d964-84cf-498b-859b-97f9eb93ce5c",
    "name": "AACD-Servidor",
    "line": "Linha 5-Lilás",
    "type": "ViaMobilidade",
    "address": "Av. Ibirapuera, 1389 - Vila Clementino, São Paulo - SP, 04028-001",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "f9c2e507-241b-43bb-8ac3-5c7c49d292ec",
    "name": "Hospital São Paulo",
    "line": "Linha 5-Lilás",
    "type": "ViaMobilidade",
    "address": "R. Pedro de Toledo, 1200 - Vila Clementino, São Paulo - SP, 04039-002",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "c6cf2c4e-b8c4-4c7a-81c2-5596de2dd58d",
    "name": "Chácara Klabin",
    "line": "Linha 5-Lilás",
    "type": "ViaMobilidade",
    "address": "R. Vergueiro, 4500 - Vila Mariana, São Paulo - SP, 04102-002",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  }
]

// Linha 15 - Prata (Silver Line - Monorail)
const linha15: Station[] = [
  {
    "id": "2e41e182-88c3-4c40-bb2d-b5b35c6d44df",
    "name": "Oratório",
    "line": "Linha 15-Prata",
    "type": "Monotrilho",
    "address": "Av. do Oratório, 3600 - São Lucas, São Paulo - SP, 03221-000",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "0c69a771-734e-49ae-9002-d7e14c07f3e6",
    "name": "São Lucas",
    "line": "Linha 15-Prata",
    "type": "Monotrilho",
    "address": "Av. Prof. Luiz Ignácio Anhaia Mello, 5510 - São Lucas, São Paulo - SP, 03270-000",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "8273d105-bb1b-4d3b-a3fc-844c4dcbdc85",
    "name": "Camilo Haddad",
    "line": "Linha 15-Prata",
    "type": "Monotrilho",
    "address": "Av. Prof. Luiz Ignácio Anhaia Mello, 6045 - Sapopemba, São Paulo - SP, 03279-000",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "b0f9a749-20b7-4d8b-9291-f85ff271bb4b",
    "name": "Vila Tolstói",
    "line": "Linha 15-Prata",
    "type": "Monotrilho",
    "address": "Av. Prof. Luiz Ignácio Anhaia Mello, 6459 - Sapopemba, São Paulo - SP, 03279-000",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "e98c3e7a-070f-408e-82d2-fae8033b8024",
    "name": "Vila União",
    "line": "Linha 15-Prata",
    "type": "Monotrilho",
    "address": "Av. Prof. Luiz Ignácio Anhaia Mello, 6800 - Sapopemba, São Paulo - SP, 03279-000",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "d78d12fa-7307-4bd8-8538-8e2f2c87a703",
    "name": "Jardim Planalto",
    "line": "Linha 15-Prata",
    "type": "Monotrilho",
    "address": "Av. Sapopemba, 10000 - Sapopemba, São Paulo - SP, 03940-000",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "51f2b934-1322-4b16-8ba3-f24e7dc4e013",
    "name": "Sapopemba",
    "line": "Linha 15-Prata",
    "type": "Monotrilho",
    "address": "Av. Sapopemba, 11200 - Sapopemba, São Paulo - SP, 03940-000",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "f31fd6c8-b9b2-4b68-89c6-ff8c9401ad9d",
    "name": "Fazenda da Juta",
    "line": "Linha 15-Prata",
    "type": "Monotrilho",
    "address": "Av. Sapopemba, 11900 - Sapopemba, São Paulo - SP, 03940-000",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "b5e28aa2-3b7d-4a3b-9700-939e6d6765cf",
    "name": "São Mateus",
    "line": "Linha 15-Prata",
    "type": "Monotrilho",
    "address": "Av. Sapopemba, 12500 - São Mateus, São Paulo - SP, 03949-000",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "a29e123e-60ac-4554-8510-2757a40e0b1f",
    "name": "Jardim Colonial",
    "line": "Linha 15-Prata",
    "type": "Monotrilho",
    "address": "Av. Ragueb Chohfi, 1400 - Jardim Colonial, São Paulo - SP, 03948-000",
    "openingHours": "Todos os dias, das 4h40 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  }
]

// ===== CPTM LINES =====

// Linha 7 - Rubi (Ruby Line)
const linha7: Station[] = [
  {
    "id": "57fbbdab-7b6a-4d8d-9a88-b84c338aa7c4",
    "name": "Água Branca",
    "line": "Linha 7-Rubi",
    "type": "CPTM",
    "address": "Rua Gustav Willi Borghoff, s/n - Água Branca, São Paulo - SP, 05001-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "5c287a69-446e-4c1c-bd30-3ec41ecb9b70",
    "name": "Lapa",
    "line": "Linha 7-Rubi",
    "type": "CPTM",
    "address": "Rua William Speers, s/n - Lapa, São Paulo - SP, 05075-010",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "8cd5765e-4430-4e49-8b5b-6f8c0331a548",
    "name": "Piqueri",
    "line": "Linha 7-Rubi",
    "type": "CPTM",
    "address": "Rua Jaricunas, s/n - Pirituba, São Paulo - SP, 05088-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "f94807fa-f5e4-4ec6-a06c-8aa65947b8c0",
    "name": "Pirituba",
    "line": "Linha 7-Rubi",
    "type": "CPTM",
    "address": "Av. Raimundo Pereira de Magalhães, s/n - Pirituba, São Paulo - SP, 05110-001",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "aee6e19f-b183-41dc-98cc-e3fc177ed58a",
    "name": "Vila Clarice",
    "line": "Linha 7-Rubi",
    "type": "CPTM",
    "address": "Av. Dr. Felipe Pinel, s/n - Vila Clarice, São Paulo - SP, 05185-120",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "8e75cb86-dbf6-464c-a0cc-273d73dfb3d0",
    "name": "Jaraguá",
    "line": "Linha 7-Rubi",
    "type": "CPTM",
    "address": "Av. Raimundo Pereira de Magalhães, s/n - Jaraguá, São Paulo - SP, 05176-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "365a3f91-05ee-41d7-a4cd-f23f1e264182",
    "name": "Vila Aurora",
    "line": "Linha 7-Rubi",
    "type": "CPTM",
    "address": "Av. Raimundo Pereira de Magalhães, s/n - Brasilândia, São Paulo - SP, 05183-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "7ed8dcbf-6d3b-4204-a68a-065c4a30fd92",
    "name": "Perus",
    "line": "Linha 7-Rubi",
    "type": "CPTM",
    "address": "Praça Inácio Dias, s/n - Perus, São Paulo - SP, 05206-030",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "539d7f4d-09de-4b4e-a1e0-5c1e5dc67c8b",
    "name": "Caiuá",
    "line": "Linha 7-Rubi",
    "type": "CPTM",
    "address": "Av. Dr. Sylvio de Campos, s/n - Perus, São Paulo - SP, 05208-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "78c11626-40cf-41e7-82cf-d705b6fd46e2",
    "name": "Baltazar Fidélis",
    "line": "Linha 7-Rubi",
    "type": "CPTM",
    "address": "Av. Governador Mário Covas Júnior, s/n - Franco da Rocha - SP, 07851-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "c9eb7684-20e1-4355-a55f-0f8164e1f738",
    "name": "Franco da Rocha",
    "line": "Linha 7-Rubi",
    "type": "CPTM",
    "address": "Av. Sete de Setembro, s/n - Franco da Rocha - SP, 07850-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "06e211db-2b40-47a1-8eb4-3bc91e87a7b2",
    "name": "Campo Limpo Paulista",
    "line": "Linha 7-Rubi",
    "type": "CPTM",
    "address": "Av. Alfried Krupp, s/n - Campo Limpo Paulista - SP, 13231-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "c9b8942f-b7c6-4788-b6e7-bef4d96c7d70",
    "name": "Botujuru",
    "line": "Linha 7-Rubi",
    "type": "CPTM",
    "address": "Av. Alfried Krupp, s/n - Botujuru, Campo Limpo Paulista - SP, 13231-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "b7b0c8d3-c6fa-4ed8-b4ea-8d1426eb17f0",
    "name": "Várzea Paulista",
    "line": "Linha 7-Rubi",
    "type": "CPTM",
    "address": "Rua Capivari, s/n - Várzea Paulista - SP, 13220-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "2d82d54a-559f-43a7-a9ec-bb16cfcb29fd",
    "name": "Jundiaí",
    "line": "Linha 7-Rubi",
    "type": "CPTM",
    "address": "Av. União dos Ferroviários, s/n - Centro, Jundiaí - SP, 13201-160",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  }
]

// Linha 8 - Diamante (Diamond Line)
const linha8: Station[] = [
  {
    "id": "d3a0616e-9c6a-4dc7-9f1b-9d4d4a08bbf1",
    "name": "Júlio Prestes",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Praça Júlio Prestes, s/n - Santa Cecília, São Paulo - SP, 01104-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "8a8c1b3d-5f2d-4ad4-9e35-38a9f30b0298",
    "name": "Lapa",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Rua Guaicurus, s/n - Lapa, São Paulo - SP, 05046-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "f256e8d4-99e1-4472-b2dc-fab6c8a55547",
    "name": "Quitaúna",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Av. Prof. Francisco Morato, s/n - Quitaúna, Osasco - SP, 06029-030",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "a1b769b0-bc5f-4ca4-ba5a-57e7a82622c3",
    "name": "Presidente Altino",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Av. dos Autonomistas, s/n - Osasco - SP, 06020-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "6c3e39f8-a8ff-4f5f-9c63-73104e5a1182",
    "name": "Osasco",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Av. dos Autonomistas, 1780 - Osasco - SP, 06020-002",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "4e521243-536a-4c0a-a10f-5e79a5fc686f",
    "name": "Santo Antônio",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "R. Francisco de Moura Castro, s/n - Osasco - SP, 06026-010",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "e16a1c71-1bb8-4a2b-b5fe-3a1d90a6bc90",
    "name": "Amador Bueno",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Av. Antônio Beck Filho, s/n - Osasco - SP, 06093-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "9da7dbe1-8c0f-47f9-8063-df0a9857b0ab",
    "name": "Carapicuíba",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Av. Deputado Emílio Carlos, s/n - Carapicuíba - SP, 06301-020",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "f1027cce-4d11-4cbc-9182-81f802abb7ae",
    "name": "Comandante Sampaio",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Av. Comandante Sampaio, s/n - Carapicuíba - SP, 06386-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "c3315a94-278e-4375-90bd-9c4a3a40c2b8",
    "name": "Barueri",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "R. São Francisco, s/n - Barueri - SP, 06405-030",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "82e6d974-9a99-40e6-9ef7-4a95a51b4d52",
    "name": "Itapevi",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Av. Presidente Tancredo de Almeida Neves, s/n - Itapevi - SP, 06601-010",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "41fef54b-3743-4bca-b01e-6b1328b32a4d",
    "name": "Santa Rita",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "R. Santa Rita, s/n - Itapevi - SP, 06605-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "5c90a7f7-d0d8-4fdf-9a7f-8e6d2f30b5c8",
    "name": "Jandira",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Av. Juruá, s/n - Jardim Santa Eliza, Jandira - SP, 06613-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "0a2ec10c-1f5e-46ce-8c44-b6aeea36b2e1",
    "name": "Engenheiro Cardoso",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Av. Engenheiro Cardoso, s/n - Jandira - SP, 06613-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "3c214d47-e7c3-4c15-b01c-69f41d1bb13a",
    "name": "Artemis",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Av. Índio Tibiriçá, s/n - Itapevi - SP, (cep pendente)",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  }
]

// Linha 9 - Esmeralda (Emerald Line)
const linha9: Station[] = [
  {
    "id": "c3e6e3d4-9bb7-4d2d-9c1a-1f9b2dfb7e28",
    "name": "Osasco",
    "line": "Linha 9‑Esmeralda",
    "type": "ViaMobilidade",
    "address": "Praça Antonio Menck, s/n - Centro, Osasco - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "7e3a438b-6f57-4a4d-89ae-c3b17381d9c1",
    "name": "Presidente Altino",
    "line": "Linha 9‑Esmeralda",
    "type": "ViaMobilidade",
    "address": "Rua Abílio Mendes, 8 - Presidente Altino, Osasco - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "1a5b7c3f-e2d1-4c62-a2f7-1a1bfbf60f34",
    "name": "Ceasa",
    "line": "Linha 9‑Esmeralda",
    "type": "ViaMobilidade",
    "address": "Vila Leopoldina, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "82bcde8a-4c74-4dff-8edb-cd2e3ea6b35a",
    "name": "Vila Lobos–Jaguaré",
    "line": "Linha 9‑Esmeralda",
    "type": "ViaMobilidade",
    "address": "Av. das Nações Unidas, 2100 - Jaguaré, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "49d42a62-7e56-45f4-b80e-2f11ff8155c9",
    "name": "Cidade Universitária",
    "line": "Linha 9‑Esmeralda",
    "type": "ViaMobilidade",
    "address": "Av. das Nações Unidas - Pinheiros, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "2e7dcb55-f3f8-4a4d-8b1e-22d0a6b40b11",
    "name": "Hebraica–Rebouças",
    "line": "Linha 9‑Esmeralda",
    "type": "ViaMobilidade",
    "address": "Rua Ofélia, 255 - Pinheiros, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "d0b3623d-5412-41a7-9985-8b276af4b3c9",
    "name": "Cidade Jardim",
    "line": "Linha 9‑Esmeralda",
    "type": "ViaMobilidade",
    "address": "Av. das Nações Unidas - Pinheiros, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "774fcd54-9f9a-4c6a-8d29-f6cc39ec2a0e",
    "name": "Vila Olímpia",
    "line": "Linha 9‑Esmeralda",
    "type": "ViaMobilidade",
    "address": "Av. das Nações Unidas - Itaim Bibi, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "1c7f8142-bf2d-43ee-a99f-7e4380bc0989",
    "name": "Berrini",
    "line": "Linha 9‑Esmeralda",
    "type": "ViaMobilidade",
    "address": "Av. das Nações Unidas, 12771 - Itaim Bibi, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "e09f0b11-73c9-4d66-9288-cdd02b1cc8aa",
    "name": "Morumbi",
    "line": "Linha 9‑Esmeralda",
    "type": "ViaMobilidade",
    "address": "Av. das Nações Unidas, 14171 - Itaim Bibi, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "79bf2f57-b6a7-4bb7-9eb1-7ac1bc63d3b1",
    "name": "Granja Julieta",
    "line": "Linha 9‑Esmeralda",
    "type": "ViaMobilidade",
    "address": "Rua Alexandre Dumas, 4403 - Chácara Santo Antônio, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "54c1ae0a-f6bc-4f56-bb07-2645a73e660d",
    "name": "Santo Amaro",
    "line": "Linha 9‑Esmeralda",
    "type": "ViaMobilidade",
    "address": "Av. das Nações Unidas - Santo Amaro, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "4f85d6d2-3dbb-4a7b-8e2e-68d8d8226f59",
    "name": "Socorro",
    "line": "Linha 9‑Esmeralda",
    "type": "ViaMobilidade",
    "address": "Jurubatuba, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "3a6b6243-802a-4a57-9dbf-5e564c84e728",
    "name": "Jurubatuba",
    "line": "Linha 9‑Esmeralda",
    "type": "ViaMobilidade",
    "address": "Rua Octales M. Ferreira, 391 - Jurubatuba, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "b524a0f0-c6d9-420b-9c40-2a0a09f9c3f4",
    "name": "Autódromo",
    "line": "Linha 9‑Esmeralda",
    "type": "ViaMobilidade",
    "address": "Rua Plínio Schmidt, 307 - Cidade Dutra, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "ad8f6b67-e5ae-42b6-814b-0f25e62c3bcf",
    "name": "Primavera–Interlagos",
    "line": "Linha 9‑Esmeralda",
    "type": "ViaMobilidade",
    "address": "Rua Jequirituba, 83 - Cidade Dutra, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "19c76b9f-0fbb-4f3c-9a55-faf4d7b5d7e1",
    "name": "Grajaú",
    "line": "Linha 9‑Esmeralda",
    "type": "ViaMobilidade",
    "address": "Rua Giovanni Bononcini, 77 - Grajaú, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  }
]

// Linha 10 - Turquesa (Turquoise Line)
 const linha10: Station[] = [
  {
    "id": "bcf395aa-4d6e-4a7e-b785-8c6bb97e5f7f",
    "name": "Itaim Paulista",
    "line": "Linha 10 - Turquesa",
    "type": "CPTM",
    "address": "Rua Salvador Jorgino, 110 - Itaim Paulista, São Paulo - SP, 08295-190",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "53783d34-4bca-4eae-93c9-07f1ae900399",
    "name": "Calmon Viana",
    "line": "Linha 10 - Turquesa",
    "type": "CPTM",
    "address": "Rua Orós, s/n - Calmon Viana, Poá - SP, 08576-280",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "d9e19863-87f6-4f54-b179-c8db0b87f949",
    "name": "Poá",
    "line": "Linha 10 - Turquesa",
    "type": "CPTM",
    "address": "Rua Amador Bueno, 102 - Poá - SP, 08552-160",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "07d6b536-c9d4-4a4c-b136-8c9e2c3bbda2",
    "name": "Suzano",
    "line": "Linha 10 - Turquesa",
    "type": "CPTM",
    "address": "Rua Comandante Souto Maior, 174 - Suzano - SP, 08675-470",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "1c7a0d72-3a2b-4e6d-8d1f-07d14e8dce49",
    "name": "Mogi das Cruzes",
    "line": "Linha 10 - Turquesa",
    "type": "CPTM",
    "address": "Praça Sacadura Cabral - Centro, Mogi das Cruzes - SP, 08710-450",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
]

//  Linha 11 - Coral (Coral Line)
const linha11: Station[] = [
  {
    "id": "8d8e5b0e-7925-4e5a-9473-bd143f6d0fbc",
    "name": "São Caetano do Sul",
    "line": "Linha 11 - Coral",
    "type": "CPTM",
    "address": "Rua Major Dobrânic, 49 - São Caetano do Sul - SP, 09510-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "d1e7c6f5-f2b3-4fa5-9e8c-0e9fae95fa4c",
    "name": "Santo André",
    "line": "Linha 11 - Coral",
    "type": "CPTM",
    "address": "Av. Industrial, 330 - Santo André - SP, 09020-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "e579d9b1-632a-4f9e-bfa1-1f2a970a3eec",
    "name": "Prefeito Celso Daniel–Santo André",
    "line": "Linha 11 - Coral",
    "type": "CPTM",
    "address": "Av. Industrial, 551 - Santo André - SP, 09020-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "8ae95a2e-b4de-4129-b79f-9b1e19936a27",
    "name": "Rudge Ramos",
    "line": "Linha 11 - Coral",
    "type": "CPTM",
    "address": "Rua Vitalino de Lima, 200 - São Bernardo do Campo - SP, 09606-190",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "7d9c65e0-1d6e-4f06-85e7-5c74ff66b62a",
    "name": "São Bernardo do Campo",
    "line": "Linha 11 - Coral",
    "type": "CPTM",
    "address": "Av. Caminho do Mar, 1000 - São Bernardo do Campo - SP, 09726-060",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "35a2e2a5-01b4-4e44-a7de-c57a45d9e0c1",
    "name": "Prefeito Walter Braido",
    "line": "Linha 11 - Coral",
    "type": "CPTM",
    "address": "Rua das Paineiras, 100 - São Bernardo do Campo - SP, 09726-160",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "a0c5560c-0f9f-4d7f-9a4a-f0e7f83a8a24",
    "name": "Ritcheu",
    "line": "Linha 11 - Coral",
    "type": "CPTM",
    "address": "Rua Prefeito José Esdras da Silva, s/n - São Bernardo do Campo - SP, 09726-170",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  }
]

// Linha 12 - Safira (Sapphire Line)
const linha12: Station[] = [
  {
    "id": "a4bdbb49-1778-4c88-9a5e-c4fddf25165d",
    "name": "Dom Bosco",
    "line": "Linha 12 - Safira",
    "type": "CPTM",
    "address": "Rua Ferreira de Araújo, 75 - Itaquera, São Paulo - SP, 08230-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "f5e4e5e4-c18c-4b04-9a98-263678c883ef",
    "name": "São Miguel Paulista",
    "line": "Linha 12 - Safira",
    "type": "CPTM",
    "address": "Rua Estevão de Araújo, 10 - São Miguel Paulista, São Paulo - SP, 08070-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "62e0b35a-6d07-401e-b3c7-fac30a023e3a",
    "name": "Jardim Helena-Vila Mara",
    "line": "Linha 12 - Safira",
    "type": "CPTM",
    "address": "Rua dos Coqueiros, s/n - Jardim Helena, São Paulo - SP, 08295-390",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "a1ce92d3-5d2d-43a7-9b22-7e7442ca151d",
    "name": "Jardim Romano",
    "line": "Linha 12 - Safira",
    "type": "CPTM",
    "address": "Rua das Palmeiras, s/n - Jardim Romano, São Paulo - SP, 08230-330",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "8f7f1725-3b12-4df1-a5a5-62b35bcd6d42",
    "name": "Calmon Viana",
    "line": "Linha 12 - Safira",
    "type": "CPTM",
    "address": "Rua Orós, s/n - Calmon Viana, Poá - SP, 08576-280",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  }
]

// Linha 13 - Jade (Jade Line)
const linha13: Station[] = [
  {
    "id": "1f1b15ff-c4d4-48f4-915b-9465c20a06c6",
    "name": "Engenheiro Goulart",
    "line": "Linha 13 - Jade",
    "type": "CPTM",
    "address": "Av. Dr. Assis Ribeiro, 1460 - Cangaíba, São Paulo - SP, 03810-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "e8e3d94d-d370-4469-8c65-d391c7b77ef5",
    "name": "Guarulhos–Cecap",
    "line": "Linha 13 - Jade",
    "type": "CPTM",
    "address": "Av. Henrich Hermann, s/n - Jardim Cecap, Guarulhos - SP, 07115-000",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  },
  {
    "id": "9db391af-6c14-45c2-9b25-1c9bfc14fffd",
    "name": "Aeroporto–Guarulhos",
    "line": "Linha 13 - Jade",
    "type": "CPTM",
    "address": "Rod. Hélio Smidt, Terminal 1 – Aeroporto de Guarulhos, Guarulhos - SP, 07190-100",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Elevadores", "Piso tátil"]
  }
]



// Combine all lines
export const stationsData: Station[] = [
  ...linha1, 
  ...linha2, 
  ...linha3, 
  ...linha4, 
  ...linha5, 
  ...linha7, 
  ...linha8, 
  ...linha9, 
  ...linha10,
  ...linha11,
  ...linha12,
  ...linha13,
  ...linha15, 

]
