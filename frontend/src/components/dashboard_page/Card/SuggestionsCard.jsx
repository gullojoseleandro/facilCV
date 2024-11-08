import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SuggestionsCard = () => {

    return (
        <>
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
        </>
    )
}

export default SuggestionsCard