// Variáveis globais
let currentModal = null
let selectedCategory = "Todos"
let searchTerm = ""

// Dados dos restaurantes
const restaurants = [
  {
    id: 1,
    name: "Restaurante Maré Alta",
    category: "Frutos do Mar",
    rating: 4.8,
    price: "$$",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=250&fit=crop",
    description:
      "Especializado em frutos do mar frescos com vista para a baía. Famoso pelo camarão na moranga e moqueca de peixe.",
    address: "Av. Beira Mar, 123 - Centro",
    phone: "(41) 3472-1234",
    hours: "11h às 23h",
    specialties: ["Moqueca de Peixe", "Camarão na Moranga", "Casquinha de Caranguejo"],
  },
  {
    id: 2,
    name: "Pizzaria Bella Vista",
    category: "Pizzaria",
    rating: 4.6,
    price: "$",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop",
    description:
      "Pizzas artesanais com massa fina e ingredientes selecionados. Ambiente familiar com vista para o mar.",
    address: "Rua das Palmeiras, 456 - Brejatuba",
    phone: "(41) 3472-5678",
    hours: "18h às 24h",
    specialties: ["Pizza Margherita", "Pizza de Camarão", "Pizza Portuguesa"],
  },
  {
    id: 3,
    name: "Café da Praia",
    category: "Café & Lanches",
    rating: 4.7,
    price: "$",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=250&fit=crop",
    description: "Café aconchegante com vista para a praia. Serve cafés especiais, açaí e lanches naturais.",
    address: "Praia Central, s/n - Orla",
    phone: "(41) 3472-9012",
    hours: "6h às 22h",
    specialties: ["Açaí na Tigela", "Sanduíche Natural", "Café Especial"],
  },
  {
    id: 4,
    name: "Churrascaria Gaúcha",
    category: "Churrascaria",
    rating: 4.5,
    price: "$$",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=250&fit=crop",
    description: "Rodízio de carnes nobres com buffet completo. Ambiente climatizado e atendimento diferenciado.",
    address: "Av. 29 de Abril, 789 - Centro",
    phone: "(41) 3472-3456",
    hours: "11h30 às 15h / 18h30 às 23h",
    specialties: ["Picanha", "Costela", "Linguiça Artesanal"],
  },
  {
    id: 5,
    name: "Sorveteria Tropical",
    category: "Sorveteria",
    rating: 4.9,
    price: "$",
    image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=250&fit=crop",
    description: "Sorvetes artesanais com sabores tropicais únicos. Especialidade em picolés de frutas regionais.",
    address: "Rua XV de Novembro, 321 - Centro",
    phone: "(41) 3472-7890",
    hours: "10h às 23h",
    specialties: ["Sorvete de Caju", "Picolé de Açaí", "Milk Shake Tropical"],
  },
  {
    id: 6,
    name: "Restaurante do Porto",
    category: "Comida Caseira",
    rating: 4.4,
    price: "$",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop",
    description: "Comida caseira com tempero especial. Pratos fartos e preços acessíveis em ambiente familiar.",
    address: "Rua do Porto, 654 - Porto",
    phone: "(41) 3472-2468",
    hours: "11h às 15h / 17h às 22h",
    specialties: ["Peixe Grelhado", "Feijoada", "Moqueca de Camarão"],
  },
]

// Dados das praias
const beaches = [
  {
    id: 1,
    name: "Praia Central",
    description:
      "A principal praia de Guaratuba, com extensa faixa de areia dourada e mar calmo. Ideal para famílias com crianças e prática de esportes aquáticos.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=300&fit=crop",
    features: ["Salva-vidas", "Estacionamento", "Restaurantes", "Aluguel de equipamentos"],
    difficulty: "Fácil",
    crowdLevel: "Alta",
    bestTime: "Manhã e tarde",
    activities: ["Natação", "Vôlei de praia", "Stand-up paddle", "Caminhada"],
  },
  {
    id: 2,
    name: "Praia de Caieiras",
    description:
      "Praia mais selvagem e preservada, cercada por vegetação nativa. Perfeita para quem busca tranquilidade e contato com a natureza.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop",
    features: ["Natureza preservada", "Trilhas", "Pesca", "Observação de aves"],
    difficulty: "Moderada",
    crowdLevel: "Baixa",
    bestTime: "Manhã",
    activities: ["Pesca", "Trilha ecológica", "Fotografia", "Relaxamento"],
  },
  {
    id: 3,
    name: "Praia do Morro",
    description:
      "Localizada próxima ao Morro do Cristo, oferece uma vista espetacular e ondas ideais para surf iniciante.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&h=300&fit=crop",
    features: ["Vista panorâmica", "Ondas para surf", "Trilha para o morro", "Pôr do sol"],
    difficulty: "Moderada",
    crowdLevel: "Média",
    bestTime: "Tarde",
    activities: ["Surf", "Escalada", "Contemplação", "Fotografia"],
  },
  {
    id: 4,
    name: "Praia Brejatuba",
    description:
      "Praia familiar com águas calmas e boa infraestrutura. Popular entre os locais e turistas que buscam comodidade.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    features: ["Infraestrutura completa", "Águas calmas", "Playground", "Ciclovia"],
    difficulty: "Fácil",
    crowdLevel: "Média",
    bestTime: "Manhã e tarde",
    activities: ["Natação", "Ciclismo", "Playground", "Piquenique"],
  },
  {
    id: 5,
    name: "Praia do Coroados",
    description:
      "Praia extensa com formações rochosas interessantes. Ideal para longas caminhadas e coleta de conchas.",
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=500&h=300&fit=crop",
    features: ["Formações rochosas", "Coleta de conchas", "Caminhadas", "Pesca de praia"],
    difficulty: "Fácil",
    crowdLevel: "Baixa",
    bestTime: "Manhã",
    activities: ["Caminhada", "Coleta de conchas", "Pesca", "Meditação"],
  },
  {
    id: 6,
    name: "Praia Alegre",
    description:
      "Pequena praia com ambiente descontraído e frequentada principalmente por jovens. Boa para socializar e praticar esportes.",
    image: "https://images.unsplash.com/photo-1471756424749-5ca73b6e4e5a?w=500&h=300&fit=crop",
    features: ["Ambiente jovem", "Esportes de praia", "Música", "Food trucks"],
    difficulty: "Fácil",
    crowdLevel: "Alta",
    bestTime: "Tarde e noite",
    activities: ["Vôlei", "Futebol de areia", "Música", "Socialização"],
  },
]

// Dados dos pontos turísticos
const touristSpots = [
  {
    id: 1,
    name: "Morro do Cristo",
    category: "Mirante",
    description:
      "Mirante com vista panorâmica de 360° da cidade e baía. Local perfeito para contemplar o pôr do sol e fazer fotos incríveis da região.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    coordinates: { lat: -25.8756, lng: -48.5689 },
    visitTime: "1-2 horas",
    difficulty: "Moderada",
    bestTime: "Pôr do sol (17h-19h)",
    highlights: ["Vista panorâmica", "Pôr do sol", "Fotografia", "Trilha"],
    tips: "Leve água e use calçados confortáveis. A subida tem cerca de 20 minutos de caminhada.",
  },
  {
    id: 2,
    name: "Igreja Matriz São Pedro",
    category: "Histórico",
    description:
      "Marco histórico da cidade construído em 1940, com arquitetura tradicional e importância cultural para a comunidade local.",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=400&h=300&fit=crop",
    coordinates: { lat: -25.8834, lng: -48.5756 },
    visitTime: "30 minutos",
    difficulty: "Fácil",
    bestTime: "Manhã (9h-11h)",
    highlights: ["Arquitetura histórica", "Arte sacra", "Cultura local", "Fotografia"],
    tips: "Respeite os horários de missa. Entrada gratuita, mas contribuições são bem-vindas.",
  },
  {
    id: 3,
    name: "Ferry Boat",
    category: "Transporte Histórico",
    description:
      "Travessia tradicional que conecta Guaratuba a Matinhos, oferecendo uma experiência única aos visitantes com vista da baía.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    coordinates: { lat: -25.8798, lng: -48.5723 },
    visitTime: "30 minutos (travessia)",
    difficulty: "Fácil",
    bestTime: "Manhã (8h-10h)",
    highlights: ["Vista da baía", "Experiência histórica", "Transporte tradicional", "Fotografia"],
    tips: "Funciona de acordo com a maré. Consulte horários antes de ir. Leve documento.",
  },
  {
    id: 4,
    name: "Baía de Guaratuba",
    category: "Natural",
    description:
      "Encontro do rio com o mar, formando uma paisagem única. Ideal para passeios de barco, pesca esportiva e contemplação.",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop",
    coordinates: { lat: -25.8801, lng: -48.5712 },
    visitTime: "2-4 horas",
    difficulty: "Fácil",
    bestTime: "Manhã (7h-10h)",
    highlights: ["Encontro rio-mar", "Passeios de barco", "Pesca", "Vida marinha"],
    tips: "Contrate passeios com operadoras locais. Melhor época: março a novembro.",
  },
  {
    id: 5,
    name: "Mercado Municipal",
    category: "Cultural",
    description:
      "Centro de comércio local com produtos típicos, artesanatos e frutos do mar frescos. Experiência autêntica da cultura guaratubense.",
    image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=300&fit=crop",
    coordinates: { lat: -25.8845, lng: -48.5734 },
    visitTime: "1 hora",
    difficulty: "Fácil",
    bestTime: "Manhã (6h-12h)",
    highlights: ["Produtos locais", "Artesanato", "Frutos do mar", "Cultura local"],
    tips: "Funciona principalmente pela manhã. Leve dinheiro em espécie para melhores preços.",
  },
  {
    id: 6,
    name: "Parque Nacional Saint-Hilaire",
    category: "Natural",
    description: "Área de preservação com trilhas ecológicas, cachoeiras e rica biodiversidade da Mata Atlântica.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    coordinates: { lat: -25.8923, lng: -48.5456 },
    visitTime: "3-5 horas",
    difficulty: "Moderada a Difícil",
    bestTime: "Manhã (8h-12h)",
    highlights: ["Trilhas ecológicas", "Cachoeiras", "Mata Atlântica", "Observação de fauna"],
    tips: "Necessário guia local. Use repelente e leve água. Consulte condições climáticas.",
  },
]

// Dados das localizações do mapa
const mapLocations = [
  {
    id: 1,
    name: "Praia Central",
    type: "Praia",
    coordinates: { lat: -25.8825, lng: -48.5744 },
    description: "Principal praia da cidade com infraestrutura completa",
    color: "color-blue",
  },
  {
    id: 2,
    name: "Morro do Cristo",
    type: "Mirante",
    coordinates: { lat: -25.8756, lng: -48.5689 },
    description: "Mirante com vista panorâmica da cidade",
    color: "color-emerald",
  },
  {
    id: 3,
    name: "Igreja Matriz",
    type: "Histórico",
    coordinates: { lat: -25.8834, lng: -48.5756 },
    description: "Marco histórico e cultural da cidade",
    color: "color-purple",
  },
  {
    id: 4,
    name: "Ferry Boat",
    type: "Transporte",
    coordinates: { lat: -25.8798, lng: -48.5723 },
    description: "Travessia tradicional para Matinhos",
    color: "color-orange",
  },
  {
    id: 5,
    name: "Baía de Guaratuba",
    type: "Natural",
    coordinates: { lat: -25.8801, lng: -48.5712 },
    description: "Encontro do rio com o mar",
    color: "color-cyan",
  },
  {
    id: 6,
    name: "Restaurante Maré Alta",
    type: "Gastronomia",
    coordinates: { lat: -25.882, lng: -48.574 },
    description: "Especializado em frutos do mar",
    color: "color-red",
  },
  {
    id: 7,
    name: "Praia de Caieiras",
    type: "Praia",
    coordinates: { lat: -25.8901, lng: -48.5634 },
    description: "Praia selvagem e preservada",
    color: "color-blue",
  },
  {
    id: 8,
    name: "Mercado Municipal",
    type: "Cultural",
    coordinates: { lat: -25.8845, lng: -48.5734 },
    description: "Centro de comércio local",
    color: "color-yellow",
  },
]

// Funções utilitárias
function getDifficultyColor(difficulty) {
  switch (difficulty) {
    case "Fácil":
      return "badge-success"
    case "Moderada":
      return "badge-warning"
    case "Moderada a Difícil":
      return "badge-warning"
    case "Difícil":
      return "badge-danger"
    default:
      return "badge-secondary"
  }
}

function getCrowdColor(crowd) {
  switch (crowd) {
    case "Baixa":
      return "badge-success"
    case "Média":
      return "badge-warning"
    case "Alta":
      return "badge-danger"
    default:
      return "badge-secondary"
  }
}

function copyCoordinates(lat, lng) {
  const text = `${lat}, ${lng}`
  navigator.clipboard.writeText(text).then(() => {
    alert("Coordenadas copiadas para a área de transferência!")
  })
}

function openInGoogleMaps(lat, lng) {
  window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank")
}

// Funções de modal
function openModal(modalId) {
  const modal = document.getElementById(modalId)
  if (modal) {
    modal.classList.add("active")
    currentModal = modal
    document.body.style.overflow = "hidden"
  }
}

function closeModal() {
  if (currentModal) {
    currentModal.classList.remove("active")
    currentModal = null
    document.body.style.overflow = "auto"
  }
}

// Funções de menu mobile
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu")
  const overlay = document.getElementById("overlay")

  if (menu && overlay) {
    menu.classList.toggle("active")
    overlay.classList.toggle("active")
  }
}

function closeMobileMenu() {
  const menu = document.getElementById("mobileMenu")
  const overlay = document.getElementById("overlay")

  if (menu && overlay) {
    menu.classList.remove("active")
    overlay.classList.remove("active")
  }
}

// Funções de filtro
function setFilter(category, buttonElement) {
  selectedCategory = category

  // Atualizar botões ativos
  const filterButtons = document.querySelectorAll(".filter-btn")
  filterButtons.forEach((btn) => btn.classList.remove("active"))
  buttonElement.classList.add("active")

  // Aplicar filtro baseado na página atual
  const currentPage = window.location.pathname.split("/").pop() || "index.html"

  if (currentPage.includes("gastronomia")) {
    filterRestaurants()
  } else if (currentPage.includes("pontos-turisticos")) {
    filterTouristSpots()
  } else if (currentPage.includes("mapa")) {
    filterMapLocations()
  }
}

function setSearch(term) {
  searchTerm = term.toLowerCase()

  const currentPage = window.location.pathname.split("/").pop() || "index.html"

  if (currentPage.includes("mapa")) {
    filterMapLocations()
  }
}

// Event listeners globais
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenuClose = document.getElementById("mobileMenuClose")
  const overlay = document.getElementById("overlay")

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", toggleMobileMenu)
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", closeMobileMenu)
  }

  if (overlay) {
    overlay.addEventListener("click", closeMobileMenu)
  }

  // Modal close
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal()
    }

    if (e.target.classList.contains("modal-close")) {
      closeModal()
    }
  })

  // ESC key para fechar modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && currentModal) {
      closeModal()
    }
  })

  // Search input
  const searchInput = document.getElementById("searchInput")
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      setSearch(e.target.value)
    })
  }

  // Inicializar página específica
  const currentPage = window.location.pathname.split("/").pop() || "index.html"

  if (currentPage.includes("gastronomia")) {
    initGastronomiaPage()
  } else if (currentPage.includes("praias")) {
    initPraiasPage()
  } else if (currentPage.includes("pontos-turisticos")) {
    initPontosTuristicosPage()
  } else if (currentPage.includes("mapa")) {
    initMapaPage()
  }
})

// Funções específicas das páginas serão definidas nos arquivos HTML individuais

function filterRestaurants() {
  // Implementar a lógica de filtragem para a página de gastronomia
}

function filterTouristSpots() {
  // Implementar a lógica de filtragem para a página de pontos turísticos
}

function filterMapLocations() {
  const filteredLocations = mapLocations.filter((location) => {
    const matchesType = selectedCategory === "Todos" || location.type === selectedCategory
    const matchesSearch = location.name.toLowerCase().includes(searchTerm)
    return matchesType && matchesSearch
  })

  updateLocationsList(filteredLocations)
  updateMapMarkers(filteredLocations)
  updateLocationCount(filteredLocations.length)
}

function initGastronomiaPage() {
  // Implementar a lógica de inicialização para a página de gastronomia
}

function initPraiasPage() {
  // Implementar a lógica de inicialização para a página de praias
}

function initPontosTuristicosPage() {
  // Implementar a lógica de inicialização para a página de pontos turísticos
}

function initMapaPage() {
  // Aguardar um pouco para garantir que o DOM esteja pronto
  setTimeout(() => {
    if (typeof L !== "undefined") {
      initializeMap()
      filterMapLocations()
    } else {
      console.error("Leaflet não foi carregado")
    }
  }, 100)
}

// Variáveis do mapa
let map = null
let markersLayer = null

// Inicializar mapa Leaflet
function initializeMap() {
  // Coordenadas do centro de Guaratuba
  const guaratubaCenter = [-25.8825, -48.5744]

  // Criar o mapa
  map = L.map("interactiveMap").setView(guaratubaCenter, 13)

  // Adicionar camada de tiles (OpenStreetMap)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map)

  // Criar grupo de marcadores
  markersLayer = L.layerGroup().addTo(map)

  // Adicionar marcadores iniciais
  updateMapMarkers(mapLocations)
}

// Atualizar marcadores no mapa
function updateMapMarkers(locations) {
  if (!markersLayer) return

  // Limpar marcadores existentes
  markersLayer.clearLayers()

  locations.forEach((location) => {
    // Criar ícone personalizado
    const customIcon = L.divIcon({
      className: "custom-marker",
      html: `<div class="custom-marker marker-${location.type.toLowerCase()}">${getLocationEmoji(location.type)}</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
      popupAnchor: [0, -15],
    })

    // Criar marcador
    const marker = L.marker([location.coordinates.lat, location.coordinates.lng], {
      icon: customIcon,
    })

    // Criar conteúdo do popup
    const popupContent = createPopupContent(location)

    // Adicionar popup ao marcador
    marker.bindPopup(popupContent, {
      className: "custom-popup",
      maxWidth: 300,
      minWidth: 250,
    })

    // Adicionar marcador ao grupo
    markersLayer.addLayer(marker)
  })
}

// Obter emoji para cada tipo de localização
function getLocationEmoji(type) {
  const emojis = {
    Praia: "🏖️",
    Mirante: "🏔️",
    Histórico: "🏛️",
    Natural: "🌿",
    Gastronomia: "🍽️",
    Cultural: "🎭",
    Transporte: "⛵",
  }
  return emojis[type] || "📍"
}

// Criar conteúdo do popup
function createPopupContent(location) {
  return `
    <div>
      <div class="popup-title">
        ${getLocationEmoji(location.type)} ${location.name}
      </div>
      <div class="popup-category">${location.type}</div>
      <div class="popup-description">${location.description}</div>
      <div class="popup-coordinates">
        📍 ${location.coordinates.lat}, ${location.coordinates.lng}
      </div>
      <div class="popup-buttons">
        <button class="popup-btn popup-btn-secondary" onclick="copyCoordinates(${location.coordinates.lat}, ${location.coordinates.lng})">
          📋 Copiar
        </button>
        <a href="https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}" 
           target="_blank" class="popup-btn popup-btn-primary">
          🔗 Google Maps
        </a>
      </div>
    </div>
  `
}

// Centralizar mapa em uma localização
function centerMapOnLocation(lat, lng) {
  if (map) {
    map.setView([lat, lng], 16)
  }
}

// Atualizar função updateLocationsList para incluir interação com o mapa
function updateLocationsList(locations) {
  const list = document.getElementById("locationsList")
  list.innerHTML = ""

  locations.forEach((location) => {
    const item = document.createElement("div")
    item.className = "card fade-in"
    item.style.marginBottom = "0.75rem"
    item.style.cursor = "pointer"

    item.innerHTML = `
      <div class="card-content">
        <div style="display: flex; align-items: start; gap: 0.75rem;">
          <div class="map-marker ${location.color}" style="position: static; width: 1rem; height: 1rem; margin-top: 0.25rem; flex-shrink: 0;"></div>
          <div style="flex: 1; min-width: 0;">
            <h4 style="font-weight: 500; color: #1e293b; margin-bottom: 0.25rem;">${location.name}</h4>
            <p style="font-size: 0.875rem; color: #64748b; margin-bottom: 0.25rem;">${location.type}</p>
            <p style="font-size: 0.75rem; color: #64748b; line-height: 1.4;">${location.description}</p>
          </div>
          <button style="background: none; border: none; color: #64748b; font-size: 1rem; cursor: pointer;" 
                  onclick="centerMapOnLocation(${location.coordinates.lat}, ${location.coordinates.lng})" 
                  title="Centralizar no mapa">
            🧭
          </button>
        </div>
      </div>
    `

    // Adicionar click para centralizar no mapa
    item.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") {
        centerMapOnLocation(location.coordinates.lat, location.coordinates.lng)
      }
    })

    list.appendChild(item)
  })
}

function updateLocationCount(count) {
  const countElement = document.getElementById("locationCount")
  if (countElement) {
    countElement.textContent = `${count} ${count === 1 ? "localização" : "localizações"} encontradas`
  }
}
