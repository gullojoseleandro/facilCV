import { useDashboard } from "@/context/DashboardContext"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, Eye, Download, Search, UserCheck } from 'lucide-react'
import { Button } from "@/components/ui/button"
import UserProfile from "@/components/dashboard_page/my_profile_page/UserProfile"
import { motion } from "framer-motion"
import { useState } from "react"

const StatsCard = () => {
    const { handleChangeTab } = useDashboard()
    const [hoveredStat, setHoveredStat] = useState(null)

    const stats = [
        { title: "Visualizaciones", value: 42, change: 12, icon: Eye, positive: true },
        { title: "Descargas", value: 8, change: -3, icon: Download, positive: false },
        { title: "Búsquedas", value: 3, change: 50, icon: Search, positive: true },
        { title: "Completado", value: "85%", action: "Completar perfil", icon: UserCheck },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="w-full overflow-hidden">
                <CardHeader className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <CardTitle className="text-2xl font-bold">Resumen de tu CV</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="relative overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                onHoverStart={() => setHoveredStat(index)}
                                onHoverEnd={() => setHoveredStat(null)}
                            >
                                <div className="flex flex-col items-center p-4 bg-secondary rounded-lg shadow-lg">
                                    <motion.div
                                        animate={{ 
                                            rotate: hoveredStat === index ? [0, -10, 10, -10, 0] : 0,
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <stat.icon className="h-8 w-8 mb-2 text-primary" />
                                    </motion.div>
                                    <span className="text-3xl font-bold">{stat.value}</span>
                                    <span className="text-sm text-muted-foreground text-center">{stat.title}</span>
                                    {stat.change && (
                                        <motion.span 
                                            className={`text-sm flex items-center mt-2 ${stat.positive ? 'text-green-500' : 'text-red-500'}`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: hoveredStat === index ? 1 : 0 }}
                                        >
                                            {stat.positive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                                            {Math.abs(stat.change)}% vs. semana pasada
                                        </motion.span>
                                    )}
                                    {stat.action && (
                                        <Button 
                                            variant="link" 
                                            className="mt-2 p-0 h-auto" 
                                            onClick={() => handleChangeTab(<UserProfile />)}
                                        >
                                            {stat.action}
                                        </Button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default StatsCard
