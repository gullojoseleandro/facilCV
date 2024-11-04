import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, Layout, Eye, UserPlus, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const DashboardComponent = ({...props}) => {
  const { userName = "Leandro" } = props

  // Datos simulados para los gráficos
  const [viewsData] = useState([
    { name: 'Lun', views: 20 },
    { name: 'Mar', views: 35 },
    { name: 'Mié', views: 25 },
    { name: 'Jue', views: 40 },
    { name: 'Vie', views: 30 },
    { name: 'Sáb', views: 15 },
    { name: 'Dom', views: 10 },
  ])

  const [downloadsData] = useState([
    { name: 'Lun', downloads: 2 },
    { name: 'Mar', downloads: 5 },
    { name: 'Mié', downloads: 3 },
    { name: 'Jue', downloads: 6 },
    { name: 'Vie', downloads: 4 },
    { name: 'Sáb', downloads: 1 },
    { name: 'Dom', downloads: 0 },
  ])

  return (
    <div className="min-h-screen py-10">
      <div className="flex">
        <main className="flex-1">
          <div className="container flex flex-col gap-10">
            <h2 className="text-3xl font-bold text-teal-50 text-center">Bienvenido, {userName}!</h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Resumen de tu CV</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                    <span className="text-3xl font-bold">42</span>
                    <span className="text-muted-foreground">Visualizaciones</span>
                    <span className="text-sm text-green-500 flex items-center mt-2">
                      <ArrowUpRight size={16} /> 12% vs. semana pasada
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                    <span className="text-3xl font-bold">8</span>
                    <span className="text-muted-foreground">Descargas</span>
                    <span className="text-sm text-red-500 flex items-center mt-2">
                      <ArrowDownRight size={16} /> 3% vs. semana pasada
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                    <span className="text-3xl font-bold">3</span>
                    <span className="text-muted-foreground">Búsquedas</span>
                    <span className="text-sm text-green-500 flex items-center mt-2">
                      <ArrowUpRight size={16} /> 50% vs. semana pasada
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                    <span className="text-3xl font-bold">85%</span>
                    <span className="text-muted-foreground">Completado</span>
                    <Button variant="link" className="mt-2 p-0 h-auto">Completar perfil</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Estadísticas de tu CV</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="views">
                  <TabsList className="mb-4">
                    <TabsTrigger value="views">Visualizaciones</TabsTrigger>
                    <TabsTrigger value="downloads">Descargas</TabsTrigger>
                  </TabsList>
                  <TabsContent value="views">
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={viewsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="views" stroke="#8884d8" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </TabsContent>
                  <TabsContent value="downloads">
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={downloadsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="downloads" stroke="#82ca9d" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Acciones Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Editar CV
                  </Button>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Descargar CV
                  </Button>
                  <Button className="w-full">
                    <Layout className="mr-2 h-4 w-4" />
                    Cambiar Template
                  </Button>
                  <Button className="w-full">
                    <Eye className="mr-2 h-4 w-4" />
                    Vista Previa
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compartir CV</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cv-link">Enlace público de tu CV</Label>
                    <div className="flex space-x-2">
                      <Input id="cv-link" value={`https://facilcv.com/u/${userName.toLowerCase()}`} readOnly />
                      <Button>Copiar</Button>
                    </div>
                  </div>
                  <div>
                    <Label>Compartir en redes sociales</Label>
                    <div className="flex space-x-2 mt-2">
                      <Button variant="outline"><UserPlus className="mr-2 h-4 w-4" />LinkedIn</Button>
                      <Button variant="outline">Twitter</Button>
                      <Button variant="outline">Facebook</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Sugerencias para mejorar tu CV</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Añade más detalles a tu experiencia laboral</li>
                  <li>Incluye proyectos destacados en tu perfil</li>
                  <li>Actualiza tus habilidades técnicas</li>
                  <li>Añade una foto profesional a tu perfil</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardComponent