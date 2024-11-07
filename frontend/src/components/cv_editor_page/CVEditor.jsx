import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Lock, Plus, Trash2, ChevronLeft, ChevronRight, Menu, Download, Share2, Edit, Save } from "lucide-react"

const CVEditor = ({ isPremium = false }) => {
  const [selectedCV, setSelectedCV] = useState(0)
  const [cvs, setCVs] = useState([
    {
      id: 0,
      name: "CV Principal",
      template: "modern",
      sections: {
        personalInfo: { name: "Juan Pérez", email: "juan@example.com", phone: "+1234567890", location: "Ciudad, País" },
        summary: "Profesional experimentado en desarrollo de software con enfoque en soluciones web innovadoras.",
        experience: [
          { title: "Desarrollador Senior", company: "Tech Solutions Inc.", date: "2018 - Presente", description: "Lideré equipos en proyectos de desarrollo web utilizando React y Node.js." },
          { title: "Desarrollador Full Stack", company: "WebApp Co.", date: "2015 - 2018", description: "Desarrollé y mantuve aplicaciones web utilizando JavaScript, Python y bases de datos SQL." }
        ],
        education: [
          { degree: "Máster en Ingeniería de Software", school: "Universidad Tecnológica", date: "2013 - 2015" },
          { degree: "Licenciatura en Ciencias de la Computación", school: "Universidad Estatal", date: "2009 - 2013" }
        ],
        skills: ["JavaScript", "React", "Node.js", "Python", "SQL", "Git", "Agile"]
      }
    }
  ])
  const [isEditorOpen, setIsEditorOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const templates = [
    { id: "modern", name: "Moderno", isPremium: false },
    { id: "classic", name: "Clásico", isPremium: false },
    { id: "creative", name: "Creativo", isPremium: true },
    { id: "professional", name: "Profesional", isPremium: true },
    { id: "minimalist", name: "Minimalista", isPremium: true }
  ]

  const handleTemplateChange = (templateId) => {
    setCVs(prevCVs => {
      const newCVs = [...prevCVs]
      newCVs[selectedCV] = { ...newCVs[selectedCV], template: templateId }
      return newCVs
    })
  }

  const handleInputChange = (section, field, value, index = null) => {
    setCVs(prevCVs => {
      const newCVs = [...prevCVs]
      const cvSections = { ...newCVs[selectedCV].sections }
      
      if (index !== null) {
        const newSection = [...cvSections[section]]
        newSection[index] = { ...newSection[index], [field]: value }
        cvSections[section] = newSection
      } else if (section === "skills") {
        cvSections[section] = value.split(",").map(skill => skill.trim())
      } else if (section === "personalInfo") {
        cvSections[section] = { ...cvSections[section], [field]: value }
      } else {
        cvSections[section] = value
      }
      
      newCVs[selectedCV] = { ...newCVs[selectedCV], sections: cvSections }
      return newCVs
    })
  }

  const addSectionItem = (section) => {
    setCVs(prevCVs => {
      const newCVs = [...prevCVs]
      const cvSections = { ...newCVs[selectedCV].sections }
      cvSections[section] = [
        ...cvSections[section],
        section === "experience"
          ? { title: "", company: "", date: "", description: "" }
          : { degree: "", school: "", date: "" }
      ]
      newCVs[selectedCV] = { ...newCVs[selectedCV], sections: cvSections }
      return newCVs
    })
  }

  const removeSectionItem = (section, index) => {
    setCVs(prevCVs => {
      const newCVs = [...prevCVs]
      const cvSections = { ...newCVs[selectedCV].sections }
      cvSections[section] = cvSections[section].filter((_, i) => i !== index)
      newCVs[selectedCV] = { ...newCVs[selectedCV], sections: cvSections }
      return newCVs
    })
  }

  const addNewCV = () => {
    if (cvs.length < (isPremium ? 10 : 3)) {
      setCVs(prevCVs => [
        ...prevCVs,
        {
          id: prevCVs.length,
          name: `CV ${prevCVs.length + 1}`,
          template: "modern",
          sections: {
            personalInfo: { name: "", email: "", phone: "", location: "" },
            summary: "",
            experience: [],
            education: [],
            skills: []
          }
        }
      ])
      setSelectedCV(cvs.length)
    }
  }

  const CVPreview = () => {
    const cv = cvs[selectedCV]
    return (
      <div className={`bg-white p-6 md:p-8 shadow-lg rounded-lg ${cv.template} transition-all duration-300 ease-in-out`}>
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-primary">{cv.sections.personalInfo.name}</h1>
        <p className="text-sm md:text-base text-muted-foreground mb-4">
          {cv.sections.personalInfo.email} | {cv.sections.personalInfo.phone} | {cv.sections.personalInfo.location}
        </p>
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-primary">Resumen Profesional</h2>
        <p className="text-sm md:text-base mb-4">{cv.sections.summary}</p>
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-primary">Experiencia Laboral</h2>
        {cv.sections.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg md:text-xl font-semibold">{exp.title}</h3>
            <p className="text-sm md:text-base text-muted-foreground">{exp.company} | {exp.date}</p>
            <p className="text-sm md:text-base">{exp.description}</p>
          </div>
        ))}
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-primary">Educación</h2>
        {cv.sections.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <h3 className="text-lg md:text-xl font-semibold">{edu.degree}</h3>
            <p className="text-sm md:text-base text-muted-foreground">{edu.school} | {edu.date}</p>
          </div>
        ))}
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-primary">Habilidades</h2>
        <p className="text-sm md:text-base">{cv.sections.skills.join(", ")}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">FacilCV</h1>
        <div className="flex items-center space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={() => setIsEditMode(!isEditMode)}>
                  {isEditMode ? <Save className="h-5 w-5" /> : <Edit className="h-5 w-5" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isEditMode ? "Guardar cambios" : "Editar CV"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Download className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Descargar CV</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Compartir CV</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </header>

      {/* Main Editor Area */}
      <main className="flex-1 flex flex-col md:flex-row p-4 gap-4 overflow-hidden">
        {/* CV Preview */}
        <motion.div 
          className="flex-1 overflow-auto"
          initial={false}
          animate={{ width: isEditMode ? "50%" : "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-4 flex justify-between items-center">
            <Select value={selectedCV.toString()} onValueChange={(value) => setSelectedCV(parseInt(value))}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Seleccionar CV" />
              </SelectTrigger>
              <SelectContent>
                {cvs.map((cv, index) => (
                  <SelectItem key={cv.id} value={index.toString()}>
                    {cv.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {cvs.length < (isPremium ? 10 : 3) && (
              <Button onClick={addNewCV}>
                <Plus className="h-4 w-4 mr-2" />
                Nuevo CV
              </Button>
            )}
            {isMobile && isEditMode && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsEditorOpen(!isEditorOpen)}
              >
                <Menu className="h-4 w-4" />
              </Button>
            )}
          </div>
          <CVPreview />
        </motion.div>

        {/* Editor Panel */}
        <AnimatePresence>
          {(isEditMode || isMobile) && (
            <motion.div
              className="bg-card rounded-lg shadow-lg overflow-hidden"
              initial={isMobile ? { x: "100%" } : { width: 0 }}
              animate={{ x: 0, width: isMobile ? "100%" : "50%" }}
              exit={isMobile ? { x: "100%" } : { width: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between p-4 bg-muted">
                <h2 className="text-2xl font-bold">Editar CV</h2>
                {!isMobile && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsEditMode(!isEditMode)}
                  >
                    {isEditMode ? <ChevronRight /> : <ChevronLeft />}
                  </Button>
                )}
              </div>
              <ScrollArea className="h-[calc(100vh-10rem)] p-4">
                <Tabs defaultValue="personal" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
                    <TabsTrigger value="personal">Personal</TabsTrigger>
                    <TabsTrigger value="summary">Resumen</TabsTrigger>
                    <TabsTrigger value="experience">Experiencia</TabsTrigger>
                    <TabsTrigger value="education">Educación</TabsTrigger>
                    <TabsTrigger value="skills">Habilidades</TabsTrigger>
                  </TabsList>

                  <TabsContent value="personal">
                    <Card>
                      <CardHeader>
                        <CardTitle>Información Personal</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre completo</Label>
                          <Input
                            id="name"
                            value={cvs[selectedCV].sections.personalInfo.name}
                            onChange={(e) => handleInputChange("personalInfo", "name", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Correo electrónico</Label>
                          <Input
                            id="email"
                            type="email"
                            value={cvs[selectedCV].sections.personalInfo.email}
                            onChange={(e) => handleInputChange("personalInfo", "email", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Teléfono</Label>
                          <Input
                            id="phone"
                            value={cvs[selectedCV].sections.personalInfo.phone}
                            onChange={(e) => handleInputChange("personalInfo", "phone", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Ubicación</Label>
                          <Input
                            id="location"
                            value={cvs[selectedCV].sections.personalInfo.location}
                            onChange={(e) => handleInputChange("personalInfo", "location", e.target.value)}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="summary">
                    <Card>
                      <CardHeader>
                        <CardTitle>Resumen Profesional</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Textarea
                          value={cvs[selectedCV].sections.summary}
                          onChange={(e) => handleInputChange("summary", "", e.target.value)}
                          rows={6}
                          placeholder="Escribe un breve resumen de tu perfil profesional..."
                        />
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="experience">
                    <Card>
                      <CardHeader>
                        <CardTitle>Experiencia Laboral</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {cvs[selectedCV].sections.experience.map((exp, index) => (
                          <div key={index} className="space-y-4 pb-4 border-b last:border-b-0">
                            <div className="space-y-2">
                              <Label htmlFor={`job-title-${index}`}>Puesto</Label>
                              <Input
                                id={`job-title-${index}`}
                                value={exp.title}
                                onChange={(e) => handleInputChange("experience", "title", e.target.value, index)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`company-${index}`}>Empresa</Label>
                              <Input
                                id={`company-${index}`}
                                value={exp.company}
                                onChange={(e) => handleInputChange("experience", "company", e.target.value, index)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`job-date-${index}`}>Fecha</Label>
                              <Input
                                id={`job-date-${index}`}
                                value={exp.date}
                                onChange={(e) => handleInputChange("experience", "date", e.target.value, index)}
                                placeholder="ej. Enero 2020 - Presente"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`job-description-${index}`}>Descripción</Label>
                              <Textarea
                                id={`job-description-${index}`}
                                value={exp.description}
                                onChange={(e) => handleInputChange("experience", "description", e.target.value, index)}
                                rows={3}
                              />
                            </div>
                            <Button variant="destructive" size="sm" onClick={() => removeSectionItem("experience", index)}>
                              <Trash2 className="h-4 w-4 mr-2" />
                              Eliminar experiencia
                            </Button>
                          </div>
                        ))}
                        <Button onClick={() => addSectionItem("experience")}>
                          <Plus className="h-4 w-4 mr-2" />
                          Agregar experiencia
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="education">
                    <Card>
                      <CardHeader>
                        <CardTitle>Educación</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {cvs[selectedCV].sections.education.map((edu, index) => (
                          <div key={index} className="space-y-4 pb-4 border-b last:border-b-0">
                            <div className="space-y-2">
                              <Label htmlFor={`degree-${index}`}>Título</Label>
                              <Input
                                id={`degree-${index}`}
                                value={edu.degree}
                                onChange={(e) => handleInputChange("education", "degree", e.target.value, index)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`school-${index}`}>Institución</Label>
                              <Input
                                id={`school-${index}`}
                                value={edu.school}
                                onChange={(e) => handleInputChange("education", "school", e.target.value, index)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`edu-date-${index}`}>Fecha</Label>
                              <Input
                                id={`edu-date-${index}`}
                                value={edu.date}
                                onChange={(e) => handleInputChange("education", "date", e.target.value, index)}
                                placeholder="ej. 2016 - 2020"
                              />
                            </div>
                            <Button variant="destructive" size="sm" onClick={() => removeSectionItem("education", index)}>
                              <Trash2 className="h-4 w-4 mr-2" />
                              Eliminar educación
                            </Button>
                          </div>
                        ))}
                        <Button onClick={() => addSectionItem("education")}>
                          <Plus className="h-4 w-4 mr-2" />
                          Agregar educación
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="skills">
                    <Card>
                      <CardHeader>
                        <CardTitle>Habilidades</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <Label htmlFor="skills">Habilidades (separadas por comas)</Label>
                          <Textarea
                            id="skills"
                            value={cvs[selectedCV].sections.skills.join(", ")}
                            onChange={(e) => handleInputChange("skills", "", e.target.value)}
                            rows={4}
                            placeholder="ej. Liderazgo, Trabajo en equipo, Comunicación efectiva"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </ScrollArea>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

export default CVEditor