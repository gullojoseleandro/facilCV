import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Download, Linkedin, Github, Globe, Mail, Phone, MapPin, Calendar, Building } from "lucide-react"

const CVPreview = ({ cv }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background">
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : ''}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">{cv.sections.personalInfo.name}</h1>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" /> Descargar CV
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <motion.section {...fadeInUp} className="mb-12">
          <Card className="overflow-hidden">
            <div className="relative h-48 bg-gradient-to-r from-primary to-primary-foreground">
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-24" />
            </div>
            <CardContent className="relative -mt-16">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
                <div className="w-32 h-32 rounded-full border-4 border-background overflow-hidden bg-muted">
                  <img
                    src={cv.sections.personalInfo.photo || "/placeholder.svg?height=128&width=128"}
                    alt={cv.sections.personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-2">{cv.sections.personalInfo.name}</h2>
                  <p className="text-xl text-muted-foreground mb-4">{cv.sections.personalInfo.title || "Profesional"}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{cv.sections.personalInfo.email}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Phone className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{cv.sections.personalInfo.phone}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="sm">
                            <MapPin className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{cv.sections.personalInfo.location}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    {cv.sections.personalInfo.linkedin && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={cv.sections.personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {cv.sections.personalInfo.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={cv.sections.personalInfo.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {cv.sections.personalInfo.website && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={cv.sections.personalInfo.website} target="_blank" rel="noopener noreferrer">
                          <Globe className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section {...fadeInUp} className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Resumen Profesional</h3>
          <Card>
            <CardContent className="prose prose-sm max-w-none">
              <p className="text-muted-foreground">{cv.sections.summary}</p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section {...fadeInUp} className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Experiencia Laboral</h3>
          <div className="space-y-6">
            {cv.sections.experience.map((exp, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{exp.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Building className="h-4 w-4 mr-2" />
                    <span>{exp.company}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeInUp} className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Educación</h3>
          <div className="space-y-6">
            {cv.sections.education.map((edu, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{edu.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Building className="h-4 w-4 mr-2" />
                    <span>{edu.school}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeInUp}>
          <h3 className="text-2xl font-semibold mb-4">Habilidades</h3>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {cv.sections.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      <footer className="bg-muted mt-12 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} {cv.sections.personalInfo.name}. Todos los derechos reservados.</p>
          <p className="mt-2">Creado con FacilCV</p>
        </div>
      </footer>
    </div>
  )
}

export default CVPreview