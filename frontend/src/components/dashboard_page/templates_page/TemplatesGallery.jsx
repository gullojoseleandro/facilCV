import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Download, ShoppingCart, Search, Filter } from "lucide-react"

const TemplatesGallery = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const templates = [
    { id: 1, name: "Moderno Minimalista", category: "Profesional", price: 0, image: "/placeholder.svg?height=400&width=300" },
    { id: 2, name: "Creativo Colorido", category: "Creativo", price: 9.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 3, name: "Ejecutivo Elegante", category: "Ejecutivo", price: 14.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 4, name: "Técnico Detallado", category: "Técnico", price: 0, image: "/placeholder.svg?height=400&width=300" },
    { id: 5, name: "Académico Formal", category: "Académico", price: 19.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 6, name: "Startup Innovador", category: "Creativo", price: 0, image: "/placeholder.svg?height=400&width=300" },
    { id: 7, name: "Clásico Tradicional", category: "Profesional", price: 4.99, image: "/placeholder.svg?height=400&width=300" },
    { id: 8, name: "Científico Analítico", category: "Técnico", price: 9.99, image: "/placeholder.svg?height=400&width=300" },
  ]

  const categories = ["all", "Profesional", "Creativo", "Ejecutivo", "Técnico", "Académico"]

  const filteredTemplates = templates.filter(template => 
    (selectedCategory === "all" || template.category === selectedCategory) &&
    template.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const TemplateCard = ({ template }) => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {template.name}
          <Badge variant={template.price === 0 ? "secondary" : "default"}>
            {template.price === 0 ? "Gratis" : `$${template.price.toFixed(2)}`}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <img src={template.image} alt={template.name} className="w-full h-48 object-cover rounded-md" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Vista Previa</Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{template.name}</DialogTitle>
              <DialogDescription>Vista previa del template</DialogDescription>
            </DialogHeader>
            <img src={template.image} alt={template.name} className="w-full h-auto" />
            <DialogFooter>
              <Button onClick={() => console.log(`Template ${template.id} seleccionado`)}>
                {template.price === 0 ? "Usar Template" : "Comprar Template"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button onClick={() => console.log(`Template ${template.id} seleccionado`)}>
          {template.price === 0 ? <Download className="mr-2 h-4 w-4" /> : <ShoppingCart className="mr-2 h-4 w-4" />}
          {template.price === 0 ? "Descargar" : "Comprar"}
        </Button>
      </CardFooter>
    </Card>
  )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Galería de Templates</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Input
            placeholder="Buscar templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
            icon={<Search className="h-4 w-4" />}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Categoría" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category === "all" ? "Todas las categorías" : category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="grid" className="mb-6">
        <TabsList>
          <TabsTrigger value="grid">Cuadrícula</TabsTrigger>
          <TabsTrigger value="list">Lista</TabsTrigger>
        </TabsList>
        <TabsContent value="grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="list">
          <ScrollArea className="h-[600px]">
            <div className="space-y-4">
              {filteredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>

      {filteredTemplates.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          No se encontraron templates que coincidan con tu búsqueda.
        </div>
      )}
    </div>
  )
}

export default TemplatesGallery