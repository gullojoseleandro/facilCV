import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ShareResume = () => {
    const userName = "Leandro Gullo"
    return (
        <>
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
        </>
    )
}

export default ShareResume