import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { motion } from "framer-motion"

const StatisticsCard = () => {
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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <Card className="w-full overflow-hidden">
                <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                    <CardTitle className="text-2xl font-bold">Estadísticas de tu CV</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <Tabs defaultValue="views" className="w-full">
                        <TabsList className="mb-4 w-full justify-center">
                            <TabsTrigger value="views">Visualizaciones</TabsTrigger>
                            <TabsTrigger value="downloads">Descargas</TabsTrigger>
                        </TabsList>
                        <TabsContent value="views">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={viewsData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip 
                                            contentStyle={{ 
                                                backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                                                borderRadius: '8px', 
                                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
                                            }} 
                                        />
                                        <Line 
                                            type="monotone" 
                                            dataKey="views" 
                                            stroke="#8884d8" 
                                            strokeWidth={2}
                                            dot={{ stroke: '#8884d8', strokeWidth: 2, r: 4 }}
                                            activeDot={{ r: 8 }} 
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </motion.div>
                        </TabsContent>
                        <TabsContent value="downloads">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={downloadsData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip 
                                            contentStyle={{ 
                                                backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                                                borderRadius: '8px', 
                                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
                                            }} 
                                        />
                                        <Line 
                                            type="monotone" 
                                            dataKey="downloads" 
                                            stroke="#82ca9d" 
                                            strokeWidth={2}
                                            dot={{ stroke: '#82ca9d', strokeWidth: 2, r: 4 }}
                                            activeDot={{ r: 8 }} 
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </motion.div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default StatisticsCard
