'use client'

import React, { useState, useEffect, useRef, useCallback } from "react"
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
import { Lock, Plus, Trash2, ChevronLeft, ChevronRight, Download, Share2, Edit, Save } from "lucide-react"

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
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [editorWidth, setEditorWidth] = useState(50)
  const mainRef = useRef(null)
  const editorRef = useRef(null)
  const [activeTab, setActiveTab] = useState("personal")

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768
      setIsMobile(newIsMobile)
      setIsEditorOpen(!newIsMobile)
      if (!newIsMobile) {
        setEditorWidth(50) // Reset to default width on desktop
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = isEditorOpen ? 'hidden' : 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isEditorOpen, isMobile]);

  const handleDrag = useCallback((_, info) => {
    if (mainRef.current && editorRef.current) {
      const mainWidth = mainRef.current.offsetWidth
      const newEditorWidth = Math.max(20, Math.min(80, (mainWidth - info.point.x) / mainWidth * 100))
      setEditorWidth(newEditorWidth)
      editorRef.current.style.width = `${newEditorWidth}%`
    }
  }, [])

  const templates = [
    { id: "modern", name: "Moderno", isPremium: false, preview: "/placeholder.svg?height=100&width=100" },
    { id: "classic", name: "Clásico", isPremium: false, preview: "/placeholder.svg?height=100&width=100" },
    { id: "creative", name: "Creativo", isPremium: true, preview: "/placeholder.svg?height=100&width=100" },
    { id: "professional", name: "Profesional", isPremium: true, preview: "/placeholder.svg?height=100&width=100" },
    { id: "minimalist", name: "Minimalista", isPremium: true, preview: "/placeholder.svg?height=100&width=100" }
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
      <div className={`bg-white p-4 md:p-6 lg:p-8 shadow-lg rounded-lg ${cv.template} transition-all duration-300 ease-in-out h-full overflow-auto`}>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-primary">{cv.sections.personalInfo.name}</h1>
        <p className="text-xs md:text-sm lg:text-base text-muted-foreground mb-4">
          {cv.sections.personalInfo.email} | {cv.sections.personalInfo.phone} | {cv.sections.personalInfo.location}
        </p>
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-primary">Resumen Profesional</h2>
        <p className="text-xs md:text-sm lg:text-base mb-4">{cv.sections.summary}</p>
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-primary">Experiencia Laboral</h2>
        {cv.sections.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-base md:text-lg lg:text-xl font-semibold">{exp.title}</h3>
            <p className="text-xs md:text-sm lg:text-base text-muted-foreground">{exp.company} | {exp.date}</p>
            <p className="text-xs md:text-sm lg:text-base">{exp.description}</p>
          </div>
        ))}
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-primary">Educación</h2>
        {cv.sections.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <h3 className="text-base md:text-lg lg:text-xl font-semibold">{edu.degree}</h3>
            <p className="text-xs md:text-sm lg:text-base text-muted-foreground">{edu.school} | {edu.date}</p>
          </div>
        ))}
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-primary">Habilidades</h2>
        <p className="text-xs md:text-sm lg:text-base">{cv.sections.skills.join(", ")}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col py-14">
      {/* Main Editor Area */}
      <main ref={mainRef} className="flex-1 flex flex-col md:flex-row p-4 gap-4 overflow-hidden relative">
        {/* CV Preview */}
        <motion.div 
          className="flex-1 overflow-hidden"
          initial={false}
          animate={{ width: isEditorOpen && !isMobile ? `${100 - editorWidth}%` : "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-4">
            <Select value={selectedCV.toString()} onValueChange={(value) => setSelectedCV(parseInt(value))}>
              <SelectTrigger className="w-full md:w-[200px]">
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
            <div className="flex gap-2 w-full md:w-auto">
              {cvs.length < (isPremium ? 10 : 3) && (
                <Button onClick={addNewCV} className="flex-1 md:flex-none">
                  <Plus className="h-4 w-4 mr-2" />
                  Nuevo CV
                </Button>
              )}
              {!isMobile && (
                <Button
                  variant="outline"
                  className="flex-1 md:flex-none"
                  onClick={() => setIsEditorOpen(!isEditorOpen)}
                >
                  {isEditorOpen ? <Save className="h-4 w-4 mr-2" /> : <Edit className="h-4 w-4 mr-2" />}
                  {isEditorOpen ? "Guardar" : "Editar"}
                </Button>
              )}
              {isMobile && (
                <Button
                  variant="outline"
                  className="flex-1 md:flex-none"
                  onClick={() => setIsEditorOpen(!isEditorOpen)}
                >
                  {isEditorOpen ? <Save className="h-4 w-4 mr-2" /> : <Edit className="h-4 w-4 mr-2" />}
                  {isEditorOpen ? "Guardar" : "Editar"}
                </Button>
              )}
            </div>
          </div>
          <CVPreview />
        </motion.div>

        {/* Editor Panel */}
        <AnimatePresence>
          {isEditorOpen && (
            <motion.div
              ref={editorRef}
              className={`bg-card rounded-lg shadow-lg flex flex-col ${
                isMobile ? 'fixed inset-0 z-50' : 'relative'
              }`}
              initial={isMobile ? { x: "100%" } : { width: 0 }}
              animate={isMobile ? { x: 0 } : { width: `${editorWidth}%` }}
              exit={isMobile ? { x: "100%" } : { width: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between p-4 bg-muted">
                <h2 className="text-xl md:text-2xl font-bold">Editar CV</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsEditorOpen(false)}
                >
                  {isMobile ? <Save className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                </Button>
              </div>
              <div className="flex-grow overflow-hidden flex flex-col">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
                  <ScrollArea className="flex-shrink-0 w-full" orientation="horizontal">
                    <TabsList className="inline-flex p-1 bg-muted w-max">
                      <TabsTrigger value="personal" className="px-3 py-1.5 whitespace-nowrap">Personal</TabsTrigger>
                      <TabsTrigger value="summary" className="px-3 py-1.5 whitespace-nowrap">Resumen</TabsTrigger>
                      <TabsTrigger value="experience" className="px-3 py-1.5 whitespace-nowrap">Experiencia</TabsTrigger>
                      <TabsTrigger value="education" className="px-3 py-1.5 whitespace-nowrap">Educación</TabsTrigger>
                      <TabsTrigger value="skills" className="px-3 py-1.5 whitespace-nowrap">Habilidades</TabsTrigger>
                      <TabsTrigger value="template" className="px-3 py-1.5 whitespace-nowrap">Plantilla</TabsTrigger>
                    </TabsList>
                  </ScrollArea>
                  <div className="flex-grow overflow-auto">
                    <div className="p-4">
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

                      <TabsContent value="template">
                        <Card>
                          <CardHeader>
                            <CardTitle>Seleccionar Plantilla</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                              {templates.map((template) => (
                                <div
                                  key={template.id}
                                  className={`cursor-pointer border rounded-lg p-2 ${
                                    cvs[selectedCV].template === template.id ? 'border-primary' : 'border-gray-200'
                                  } ${template.isPremium && !isPremium ? 'opacity-50' : ''}`}
                                  onClick={() => {
                                    if (!template.isPremium || isPremium) {
                                      handleTemplateChange(template.id)
                                    }
                                  }}
                                >
                                  <img src={template.preview} alt={template.name} className="w-full h-auto mb-2" />
                                  <p className="text-center text-sm font-medium">{template.name}</p>
                                  {template.isPremium && !isPremium && (
                                    <Badge variant="secondary" className="mt-1 w-full justify-center">
                                      <Lock className="w-3 h-3 mr-1" />
                                      Premium
                                    </Badge>
                                  )}
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </div>
                  </div>
                </Tabs>
              </div>
              {!isMobile && (
                <motion.div
                  className="h-full bg-gray-300 cursor-ew-resize absolute top-0 left-0"
                  drag="x"
                  dragElastic={0}
                  dragMomentum={true}
                  onDrag={handleDrag}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

export default CVEditor