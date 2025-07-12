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
    "address": "Av. Carlos Caldeira Filho, 13500 - Vila Prel, São Paulo - SP",
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
  "id": "5c6f1533-84c9-4c7b-a0a7-0cb3c427aa2e",
  "name": "Caieiras",
  "line": "Linha 7-Rubi",
  "type": "CPTM",
  "address": "Rua Pedro Celestino da Silva, s/n - Centro, Caieiras - SP",
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
    "address": "R. Antônio Feres Sada - Centro, Várzea Paulista - SP, 13220-020",
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
  },
  {
  "id": "c80edb57-5e46-4184-a7a8-d9bd1164c3f6",
  "name": "Francisco Morato",
  "line": "Linha 7-Rubi",
  "type": "CPTM",
  "address": "Rua Gerônimo Caetano Garcia, s/n – Francisco Morato – SP",
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
    "id": "850631cb-5f47-49be-a386-5d1314f230f7",
    "name": "Domingos de Moraes",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Av. Santa Marina, s/n - Domingos de Moraes, São Paulo - SP, (CEP pendente)",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "dc5f9281-ff01-4d2e-b71a-5820ba086544",
    "name": "Imperatriz Leopoldina",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Av. Imperatriz Leopoldina, s/n - Vila Leopoldina, São Paulo - SP, (CEP pendente)",
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
  },
  {
    "id": "c1d93f5b-8d33-4ea5-95f5-1dbe173f7e07",
    "name": "Sagrado Coração",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Av. Sagrado Coração, s/n - Jandira - SP, (CEP pendente)",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "9f2a16ac-2756-4ae1-bc14-503a2e0b4de1",
    "name": "Jardim Silveira",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Av. Washington Luiz, s/n - Jardim Silveira, Barueri - SP, (CEP pendente)",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "7f845f91-bc14-4f43-8f87-5b7a2e53778a",
    "name": "Jardim Belval",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Av. Henriqueta Mendes Guerra, s/n - Jardim Belval, Barueri - SP, (CEP pendente)",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "e2c7f7a4-9b3f-4b96-bb94-f0c9b7e62c47",
    "name": "Antônio João",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Av. Antônio João, s/n - Barueri - SP, (CEP pendente)",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
    },
  {
    "id": "5673389c-0607-4598-8289-3c5a5f3fe103",
    "name": "Santa Terezinha",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Av. Santa Terezinha, s/n - São Paulo - SP, (CEP pendente)",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "87b3d779-5a58-44e4-afce-9cc1d212eba1",
    "name": "General Miguel Costa",
    "line": "Linha 8–Diamante",
    "type": "CPTM",
    "address": "Av. General Miguel Costa, s/n - Osasco - SP, (CEP pendente)",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
}

]

// Linha 9 - Esmeralda (Emerald Line)
const linha9: Station[] = [
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
    "id": "f38f6f2a-96f3-43c3-b38e-6a5f3b5fd8a1",
    "name": "Mendes-Vila Natal",
    "line": "Linha 9–Esmeralda",
    "type": "CPTM",
    "address": "Av. Cristalino Rolim de Freitas, s/n - Jardim das Rosas, São Paulo - SP, (CEP pendente)",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
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
    "id": "31468c88-9e99-4e3e-8e58-1ac7b5f6f4f4",
    "name": "Juventus–Mooca",
    "line": "Linha 10 - Turquesa",
    "type": "CPTM",
    "address": "Rua Monsenhor João Felipo, s/n - Mooca, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "bd25b38c-1548-4888-90aa-c645a09b96f5",
    "name": "Ipiranga",
    "line": "Linha 10 - Turquesa",
    "type": "CPTM",
    "address": "Av. do Estado, s/n - Ipiranga, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "59673886-792d-46f5-8bbe-8f488cdfeea7",
    "name": "Tamanduateí",
    "line": "Linha 10 - Turquesa",
    "type": "CPTM",
    "address": "Av. Presidente Wilson, 483 - Ipiranga, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "4932482b-2531-491f-8656-66d899f023d6",
    "name": "São Caetano do Sul – Prefeito Walter Braido",
    "line": "Linha 10 - Turquesa",
    "type": "CPTM",
    "address": "Praça da Estação, s/n - Centro, São Caetano do Sul - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "e333a23b-384f-4f2b-8a15-33f0785dc4fe",
    "name": "Utinga",
    "line": "Linha 10 - Turquesa",
    "type": "CPTM",
    "address": "Rua Visconde de Inhaúma, s/n - Utinga, Santo André - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "fb887a43-330b-4f16-af05-e55d2849ae4c",
    "name": "Prefeito Saladino",
    "line": "Linha 10 - Turquesa",
    "type": "CPTM",
    "address": "Av. Industrial, s/n - Centro, Santo André - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "0abf4854-f3b7-4d12-aa28-15dbda0409f3",
    "name": "Prefeito Celso Daniel – Santo André",
    "line": "Linha 10 - Turquesa",
    "type": "CPTM",
    "address": "Praça Armando Arruda Pereira, s/n - Centro, Santo André - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "800b6733-88af-4ce1-9740-20d14e41cd2a",
    "name": "Capuava",
    "line": "Linha 10 - Turquesa",
    "type": "CPTM",
    "address": "Av. Papa João XXIII, s/n - Capuava, Mauá - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "a715727b-255e-4700-a634-738c89e2faa7",
    "name": "Mauá",
    "line": "Linha 10 - Turquesa",
    "type": "CPTM",
    "address": "Praça 22 de Novembro, s/n - Centro, Mauá - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "12e1618c-5a54-4216-9a2e-94ab2826cf93",
    "name": "Guapituba",
    "line": "Linha 10 - Turquesa",
    "type": "CPTM",
    "address": "Av. Capitão João, s/n - Jardim Guapituba, Mauá - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "7089011f-4623-43b1-a60b-dc25c04983bc",
    "name": "Ribeirão Pires – Antônio Bespalec",
    "line": "Linha 10 - Turquesa",
    "type": "CPTM",
    "address": "Av. Francisco Monteiro, s/n - Centro, Ribeirão Pires - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "1a8a4dd7-979b-445e-b3de-ba87d557c5a2",
    "name": "Rio Grande da Serra",
    "line": "Linha 10 - Turquesa",
    "type": "CPTM",
    "address": "Rua Prefeito Cido Franco, s/n - Centro, Rio Grande da Serra - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  }
]

//  Linha 11 - Coral (Coral Line)
const linha11: Station[] = [
  {
    "id": "f14ffcff-d8c1-4579-921a-c0a589f70331",
    "name": "Dom Bosco",
    "line": "Linha 11 - Coral",
    "type": "CPTM",
    "address": "Rua Carlos Gouvêa, s/n - Itaquera, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "a17accca-a956-44e0-9556-fd446101fbf6",
    "name": "José Bonifácio",
    "line": "Linha 11 - Coral",
    "type": "CPTM",
    "address": "Av. Nagib Farah Maluf, s/n - José Bonifácio, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "978ef8e5-c496-4bb1-98b3-c779283c7a52",
    "name": "Guaianases",
    "line": "Linha 11 - Coral",
    "type": "CPTM",
    "address": "Rua Salvador Gianetti, s/n - Guaianases, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "17a7be3d-5103-44fa-9d21-c8bd0e86ae85",
    "name": "Antonio Gianetti Neto",
    "line": "Linha 11 - Coral",
    "type": "CPTM",
    "address": "Av. Antonio Gianetti Neto, s/n - Ferraz de Vasconcelos - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "43240012-fa45-44a2-a3ae-f3109d087428",
    "name": "Ferraz de Vasconcelos",
    "line": "Linha 11 - Coral",
    "type": "CPTM",
    "address": "Av. Brasil, s/n - Ferraz de Vasconcelos - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "2074e5d1-7f37-444e-b1ac-aed09f509cad",
    "name": "Poá",
    "line": "Linha 11 - Coral",
    "type": "CPTM",
    "address": "Praça Padre João Álvares, s/n - Poá - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "96893c93-d267-4586-a715-b19967f13427",
    "name": "Calmon Viana",
    "line": "Linha 11 - Coral",
    "type": "CPTM",
    "address": "Av. Brasil, s/n - Calmon Viana, Poá - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "509c3124-3fd9-4dce-8168-8c597dcc0147",
    "name": "Suzano",
    "line": "Linha 11 - Coral",
    "type": "CPTM",
    "address": "Rua Prudente de Moraes, s/n - Centro, Suzano - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "3f39fb19-5463-4fb8-93af-c5ae4edc138b",
    "name": "Jundiapeba",
    "line": "Linha 11 - Coral",
    "type": "CPTM",
    "address": "Rua Capitão João, s/n - Jundiapeba, Mogi das Cruzes - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "2913605c-75e1-4165-a300-206ab638d0bd",
    "name": "Brás Cubas",
    "line": "Linha 11 - Coral",
    "type": "CPTM",
    "address": "Av. Brasil, s/n - Brás Cubas, Mogi das Cruzes - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "1fe79e1b-3d62-4267-bc17-0f1137f8d811",
    "name": "Mogi das Cruzes",
    "line": "Linha 11 - Coral",
    "type": "CPTM",
    "address": "Rua Cabo Diogo Oliver, s/n - Centro, Mogi das Cruzes - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "c49df59a-3277-474f-bca7-b4d744a7612b",
    "name": "Estudantes",
    "line": "Linha 11 - Coral",
    "type": "CPTM",
    "address": "Av. Doutor Cândido Xavier de Almeida Souza, s/n - Mogi das Cruzes - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  }
]

// Linha 12 - Safira (Sapphire Line)
const linha12: Station[] = [
  {
    "id": "5ff91f81-692e-4ab8-8b0f-86b2f8327390",
    "name": "Engenheiro Goulart",
    "line": "Linha 12 - Safira",
    "type": "CPTM",
    "address": "Av. Assis Ribeiro, s/n - Cangaíba, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "73d67dc8-81fd-4be8-a826-f9d3513b52a5",
    "name": "USP Leste",
    "line": "Linha 12 - Safira",
    "type": "CPTM",
    "address": "Av. Doutor Assis Ribeiro, s/n - Ermelino Matarazzo, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "911e1441-e476-4363-acea-e6b440c8b6bb",
    "name": "Comendador Ermelino",
    "line": "Linha 12 - Safira",
    "type": "CPTM",
    "address": "Rua Astrogildo Machado, s/n - Ermelino Matarazzo, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "f82c5e63-1d26-432f-b00f-bcfb029b4c95",
    "name": "São Miguel Paulista",
    "line": "Linha 12 - Safira",
    "type": "CPTM",
    "address": "Av. Marechal Tito, s/n - São Miguel Paulista, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "32347099-f87f-4ebd-b280-957918d47b76",
    "name": "Jardim Helena - Vila Mara",
    "line": "Linha 12 - Safira",
    "type": "CPTM",
    "address": "Av. Doutor José Arthur Nova, s/n - Jardim Helena, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "97f0ee73-3b94-4675-849a-5a6dcb7eddc2",
    "name": "Itaim Paulista",
    "line": "Linha 12 - Safira",
    "type": "CPTM",
    "address": "Rua Salvador Jorgino, 110 - Itaim Paulista, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "45d6c202-d5c6-4742-887c-13a3ad81e462",
    "name": "Jardim Romano",
    "line": "Linha 12 - Safira",
    "type": "CPTM",
    "address": "Rua José Francisco da Silva, s/n - Jardim Romano, São Paulo - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "a9dcf81e-5ced-4a2f-bcbb-a965e30758e9",
    "name": "Engenheiro Manoel Feio",
    "line": "Linha 12 - Safira",
    "type": "CPTM",
    "address": "Rua Paes de Barros, s/n - Itaquaquecetuba - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "333ccdf0-8689-41e4-9d69-08c8c7788fc8",
    "name": "Itaquaquecetuba",
    "line": "Linha 12 - Safira",
    "type": "CPTM",
    "address": "Rua João Vagnotti, s/n - Centro, Itaquaquecetuba - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "739fc79d-b377-4034-a8fe-14c0aa93fef0",
    "name": "Aracaré",
    "line": "Linha 12 - Safira",
    "type": "CPTM",
    "address": "Av. Brasil, s/n - Aracaré, Itaquaquecetuba - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  },
  {
    "id": "94cd2551-9b0c-45cb-9818-56f75ec517a9",
    "name": "Calmon Viana",
    "line": "Linha 12 - Safira",
    "type": "CPTM",
    "address": "Av. Brasil, s/n - Calmon Viana, Poá - SP",
    "openingHours": "Todos os dias, das 4h00 às 0h00",
    "accessibility": ["Piso tátil"]
  }
]


// Linha 13 - Jade (Jade Line)
const linha13: Station[] = [
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
