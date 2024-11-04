
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const FeatureCard = ({ icon, title, description }) => {
    return (
        <Card className={"bg-slate-100 h-44"}>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    {icon}
                    <span>{title}</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>{description}</p>
            </CardContent>
        </Card>
    )
}

export default FeatureCard