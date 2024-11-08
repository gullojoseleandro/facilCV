import { useDashboard } from "@/context/DashboardContext"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import UserProfile from "@/components/my_profile_page/UserProfile"

const StatsCard = () => {
    const { handleChangeTab  } = useDashboard();

    return (
        <>
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
                            <Button variant="link" className="mt-2 p-0 h-auto" onClick={()=>handleChangeTab(<UserProfile />)}>Completar perfil</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default StatsCard