import { FileText, Download, UserPlus, BarChart, Search, Layout } from "lucide-react"
import { motion } from "framer-motion"

const cards = [
    {
        icon: <FileText className="h-10 w-10 text-white" />,
        title: "CV Público",
        description: "Crea tu CV en línea y compártelo con un enlace único",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: <Layout className="h-10 w-10 text-white" />,
        title: "Templates de CV",
        description: "Elige entre varios modelos profesionales para tu CV",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: <Download className="h-10 w-10 text-white" />,
        title: "Descarga en PDF",
        description: "Descarga tu CV en formato PDF con un solo clic",
        gradient: "from-green-500 to-teal-500",
    },
    {
        icon: <UserPlus className="h-10 w-10 text-white" />,
        title: "Perfiles Personalizados",
        description: "Personaliza tu perfil para destacar tus habilidades únicas",
        gradient: "from-yellow-500 to-orange-500",
    },
    {
        icon: <BarChart className="h-10 w-10 text-white" />,
        title: "Estadísticas",
        description: "Monitorea las visitas a tu CV desde tu panel de control",
        gradient: "from-red-500 to-pink-500",
    },
    {
        icon: <Search className="h-10 w-10 text-white" />,
        title: "Búsqueda",
        description: "Reclutadores pueden buscar candidatos según perfiles y palabras clave",
        gradient: "from-indigo-500 to-purple-500",
    },
]

const FeatureCard = ({ icon, title, description, gradient }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-gradient-to-br ${gradient} rounded-xl shadow-lg overflow-hidden`}
        >
            <div className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-white text-opacity-80 flex-grow">{description}</p>
            </div>
        </motion.div>
    )
}

const WelcomeCards = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card) => (
                        <FeatureCard key={card.title} {...card} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WelcomeCards