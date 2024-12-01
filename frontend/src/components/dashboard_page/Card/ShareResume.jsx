import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserPlus, Copy, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { toast } from "@/hooks/use-toast"

const ShareResume = () => {
    const userName = "Leandro Gullo"
    const [copied, setCopied] = useState(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(`https://facilcv.com/u/${userName.toLowerCase()}`)
        setCopied(true)
        toast({
            title: "Enlace copiado",
            description: "El enlace de tu CV ha sido copiado al portapapeles.",
        })
        setTimeout(() => setCopied(false), 2000)
    }

    const shareOnSocialMedia = (platform) => {
        toast({
            title: `Compartido en ${platform}`,
            description: `Tu CV ha sido compartido en ${platform}.`,
        })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <Card>
                <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
                    <CardTitle>Compartir CV</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                    <div className="space-y-2">
                        <Label htmlFor="cv-link">Enlace público de tu CV</Label>
                        <div className="flex space-x-2">
                            <Input id="cv-link" value={`https://facilcv.com/u/${userName.toLowerCase()}`} readOnly />
                            <Button onClick={copyToClipboard}>
                                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            </Button>
                        </div>
                    </div>
                    <div>
                        <Label>Compartir en redes sociales</Label>
                        <div className="flex space-x-2 mt-2">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button variant="outline" onClick={() => shareOnSocialMedia("LinkedIn")}>
                                    <UserPlus className="mr-2 h-4 w-4" />LinkedIn
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button variant="outline" onClick={() => shareOnSocialMedia("Twitter")}>Twitter</Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button variant="outline" onClick={() => shareOnSocialMedia("Facebook")}>Facebook</Button>
                            </motion.div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default ShareResume
