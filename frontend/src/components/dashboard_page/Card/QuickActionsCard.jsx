import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, FileEdit, Download, Share2 } from 'lucide-react'
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"

const QuickActionsCard = () => {
    const actions = [
        { title: "Crear nuevo CV", icon: PlusCircle, color: "text-green-500", action: () => useToast({ title: "Nuevo CV", description: "Creando un nuevo CV..." }) },
        { title: "Editar CV actual", icon: FileEdit, color: "text-blue-500", action: () => useToast({ title: "Editar CV", description: "Abriendo el editor de CV..." }) },
        { title: "Descargar CV", icon: Download, color: "text-purple-500", action: () => useToast({ title: "Descargar CV", description: "Descargando tu CV..." }) },
        { title: "Compartir CV", icon: Share2, color: "text-orange-500", action: () => useToast({ title: "Compartir CV", description: "Abriendo opciones de compartir..." }) },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
        >
            <Card>
                <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                    <CardTitle className="text-2xl font-bold">Acciones rápidas</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                        {actions.map((action, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button 
                                    variant="outline" 
                                    className="w-full h-auto py-4 justify-start"
                                    onClick={action.action}
                                >
                                    <action.icon className={`mr-2 h-5 w-5 ${action.color}`} />
                                    <span>{action.title}</span>
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default QuickActionsCard

