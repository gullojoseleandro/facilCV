import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const StadisticsCard = () => {

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
        <>
            <Card>
                <CardHeader>
                    <CardTitle className={"text-2xl"}>Estadísticas de tu CV</CardTitle>
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
        </>
    )
}

export default StadisticsCard