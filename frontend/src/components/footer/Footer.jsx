import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useMemo } from "react"
import { Github, Twitter, Linkedin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const MemoizedGithub = useMemo(() => <Github className="h-5 w-5" />, [])

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">FacilCV</h2>
            <p className="text-sm text-muted-foreground">
              Crea, comparte y gestiona tu CV profesional en línea.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-foreground">
                {MemoizedGithub}
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Producto</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Consigue mas plantillas</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Clientes</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Boletín</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Mantente al día con las últimas características y noticias.
            </p>
            <form className="space-y-2">
              <Input type="email" placeholder="tu@email.com" />
              <Button type="submit" className="w-full">Suscribirse</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} FacilCV - JLGDevelopment. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer