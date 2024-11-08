import { useDashboard } from "@/context/DashboardContext"
import { FileText, Download, Layout, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import CVEditor from "@/components/cv_editor_page/CVEditor"
import TemplatesGallery from "@/components/templates_page/TemplatesGallery"

const QuickActionsCard = () => {
    const { handleChangeTab } = useDashboard()

    const actions = [
        { icon: FileText, label: "Editar CV", onClick: () => handleChangeTab(<CVEditor />) },
        { icon: Download, label: "Descargar CV", onClick: () => { } },
        { icon: Layout, label: "Cambiar Template", onClick: () => handleChangeTab(<TemplatesGallery />) },
        { icon: Eye, label: "Vista Previa", onClick: () => { } },
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle>Acciones Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                {actions.map(({ icon: Icon, label, onClick }) => (
                    <Button key={label} onClick={onClick} className="w-full">
                        <Icon className="mr-2 h-4 w-4" />
                        {label}
                    </Button>
                ))}
            </CardContent>
        </Card>
    )
}

export default QuickActionsCard