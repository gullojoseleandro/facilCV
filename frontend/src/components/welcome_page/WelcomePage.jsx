import { useMemo } from "react"
import { FileText, Download, UserPlus, BarChart, Search, Layout } from "lucide-react"
import FeatureCard from "@/components/welcome_page/card/FeatureCard"
import Header from "@/components/welcome_page/header/Header"
import GeneralButton from "../button/GeneralButton"
import RegisterDialog from "./dialog/RegisterDialog"

const cards = [
    {
        icon: <FileText className="h-10 w-10 text-primary" />,
        title: "CV Público",
        description: "Crea tu CV en línea y compártelo con un enlace único",
    },
    {
        icon: <Layout className="h-10 w-10 text-primary" />,
        title: "Templates de CV",
        description: "Elige entre varios modelos profesionales para tu CV",
    },
    {
        icon: <Download className="h-10 w-10 text-primary" />,
        title: "Descarga en PDF",
        description: "Descarga tu CV en formato PDF con un solo clic",
    },
    {
        icon: <UserPlus className="h-10 w-10 text-primary" />,
        title: "Perfiles Personalizados",
        description: "Personaliza tu perfil para destacar tus habilidades únicas",
    },
    {
        icon: <BarChart className="h-10 w-10 text-primary" />,
        title: "Estadísticas",
        description: "Monitorea las visitas a tu CV desde tu panel de control",
    },
    {
        icon: <Search className="h-10 w-10 text-primary" />,
        title: "Búsqueda",
        description: "Reclutadores pueden buscar candidatos según perfiles y palabras clave",
    },
]

const WelcomePage = () => {
    const memoizedButton = useMemo(() => (
        <GeneralButton className={"bg-teal-950"} size="lg">Regístrate gratis</GeneralButton>
    ), []);

    const memoizedHeader = useMemo(() => <Header />, []);

    return (
        <>
            <div className="min-h-screen text-foreground flex flex-col">
                {memoizedHeader}
                <main className="flex-grow container mx-auto px-4 pt-24">
                    <section className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-teal-50 drop-shadow-xl contrast-200">Tu CV profesional en línea</h2>
                        <p className="text-xl text-teal-50 mb-6 drop-shadow-sm contrast-200">
                            Crea, comparte y gestiona tu CV de forma fácil y profesional
                        </p>
                        <RegisterDialog>
                            {memoizedButton}
                        </RegisterDialog>
                    </section>

                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {cards.map((card) => (
                            <FeatureCard key={card.title} {...card} />
                        ))}
                    </section>
                </main>
            </div>
        </>
    )
}

export default WelcomePage;