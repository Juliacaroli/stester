"use client"

import { useState } from "react"
import { MapPin, Navigation, Copy, ExternalLink, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const mapLocations = [
  {
    id: 1,
    name: "Praia Central",
    type: "Praia",
    coordinates: { lat: -25.8825, lng: -48.5744 },
    description: "Principal praia da cidade com infraestrutura completa",
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Morro do Cristo",
    type: "Mirante",
    coordinates: { lat: -25.8756, lng: -48.5689 },
    description: "Mirante com vista panorâmica da cidade",
    color: "bg-emerald-500",
  },
  {
    id: 3,
    name: "Igreja Matriz",
    type: "Histórico",
    coordinates: { lat: -25.8834, lng: -48.5756 },
    description: "Marco histórico e cultural da cidade",
    color: "bg-purple-500",
  },
  {
    id: 4,
    name: "Ferry Boat",
    type: "Transporte",
    coordinates: { lat: -25.8798, lng: -48.5723 },
    description: "Travessia tradicional para Matinhos",
    color: "bg-orange-500",
  },
  {
    id: 5,
    name: "Baía de Guaratuba",
    type: "Natural",
    coordinates: { lat: -25.8801, lng: -48.5712 },
    description: "Encontro do rio com o mar",
    color: "bg-cyan-500",
  },
  {
    id: 6,
    name: "Restaurante Maré Alta",
    type: "Gastronomia",
    coordinates: { lat: -25.882, lng: -48.574 },
    description: "Especializado em frutos do mar",
    color: "bg-red-500",
  },
  {
    id: 7,
    name: "Praia de Caieiras",
    type: "Praia",
    coordinates: { lat: -25.8901, lng: -48.5634 },
    description: "Praia selvagem e preservada",
    color: "bg-blue-500",
  },
  {
    id: 8,
    name: "Mercado Municipal",
    type: "Cultural",
    coordinates: { lat: -25.8845, lng: -48.5734 },
    description: "Centro de comércio local",
    color: "bg-yellow-500",
  },
]

const locationTypes = ["Todos", "Praia", "Mirante", "Histórico", "Natural", "Gastronomia", "Cultural", "Transporte"]

export default function MapaPage() {
  const [selectedLocation, setSelectedLocation] = useState<(typeof mapLocations)[0] | null>(null)
  const [selectedType, setSelectedType] = useState("Todos")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredLocations = mapLocations.filter((location) => {
    const matchesType = selectedType === "Todos" || location.type === selectedType
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesType && matchesSearch
  })

  const copyCoordinates = (lat: number, lng: number) => {
    navigator.clipboard.writeText(`${lat}, ${lng}`)
  }

  const openInGoogleMaps = (lat: number, lng: number) => {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-emerald-50">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Mapa Interativo de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {" "}
              Guaratuba
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Explore todos os pontos de interesse da cidade através do nosso mapa interativo. Clique nos marcadores para
            mais informações.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Buscar localização..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {locationTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                  className={
                    selectedType === type
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      : "border-purple-200 text-purple-600 hover:bg-purple-50"
                  }
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Area */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden shadow-lg">
                <div className="relative bg-gradient-to-br from-blue-100 via-emerald-100 to-cyan-100 h-[600px] p-8">
                  <div className="absolute inset-4 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30">
                    <div className="relative w-full h-full">
                      {/* Simulated Map with Markers */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-10 h-10 text-white" />
                          </div>
                          <h3 className="text-2xl font-semibold text-slate-800 mb-2">Mapa Interativo</h3>
                          <p className="text-slate-600 mb-6">
                            Clique nos pontos da lista ao lado para visualizar as localizações
                          </p>
                        </div>
                      </div>

                      {/* Simulated Markers */}
                      {filteredLocations.map((location, index) => (
                        <button
                          key={location.id}
                          onClick={() => setSelectedLocation(location)}
                          className={`absolute w-6 h-6 ${location.color} rounded-full border-2 border-white shadow-lg hover:scale-110 transition-transform cursor-pointer`}
                          style={{
                            left: `${20 + (index % 4) * 20}%`,
                            top: `${20 + Math.floor(index / 4) * 25}%`,
                          }}
                          title={location.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Locations List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Localizações ({filteredLocations.length})</h3>
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {filteredLocations.map((location) => (
                  <Card
                    key={location.id}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setSelectedLocation(location)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className={`w-4 h-4 ${location.color} rounded-full mt-1 flex-shrink-0`} />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-slate-800 truncate">{location.name}</h4>
                          <p className="text-sm text-slate-500 mb-1">{location.type}</p>
                          <p className="text-xs text-slate-600 leading-relaxed">{location.description}</p>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Navigation className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Legend */}
      <section className="py-8 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Legenda do Mapa</h3>
            <p className="text-slate-600">Identifique facilmente os diferentes tipos de localizações</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full" />
              <span className="text-sm text-slate-700">Praias</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-emerald-500 rounded-full" />
              <span className="text-sm text-slate-700">Mirantes</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full" />
              <span className="text-sm text-slate-700">Histórico</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded-full" />
              <span className="text-sm text-slate-700">Gastronomia</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-cyan-500 rounded-full" />
              <span className="text-sm text-slate-700">Natural</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full" />
              <span className="text-sm text-slate-700">Cultural</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-500 rounded-full" />
              <span className="text-sm text-slate-700">Transporte</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Location Details Modal */}
      <Dialog open={!!selectedLocation} onOpenChange={() => setSelectedLocation(null)}>
        <DialogContent className="max-w-md">
          {selectedLocation && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-slate-800 flex items-center">
                  <div className={`w-4 h-4 ${selectedLocation.color} rounded-full mr-2`} />
                  {selectedLocation.name}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-slate-600">Tipo:</span>
                  <span className="text-sm text-slate-800">{selectedLocation.type}</span>
                </div>

                <p className="text-slate-600 leading-relaxed">{selectedLocation.description}</p>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Coordenadas:</h4>
                  <div className="flex items-center justify-between bg-white p-2 rounded border">
                    <span className="text-sm font-mono text-slate-600">
                      {selectedLocation.coordinates.lat}, {selectedLocation.coordinates.lng}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        copyCoordinates(selectedLocation.coordinates.lat, selectedLocation.coordinates.lng)
                      }
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                    onClick={() => openInGoogleMaps(selectedLocation.coordinates.lat, selectedLocation.coordinates.lng)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver no Google Maps
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
