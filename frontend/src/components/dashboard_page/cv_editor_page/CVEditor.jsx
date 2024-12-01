'use client'

import React, { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
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
import { Lock, Plus, Trash2, ChevronLeft, ChevronRight, Download, Share2, Edit, Save, AlertTriangle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { CVPreview } from "./CVPreview"
import { EditorPanel } from "./EditorPanel"

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
  const { toast } = useToast()
  const controls = useAnimation()

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

  const handleTemplateChange = (templateId) => {
    setCVs(prevCVs => {
      const newCVs = [...prevCVs]
      newCVs[selectedCV] = { ...newCVs[selectedCV], template: templateId }
      return newCVs
    })
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.3 }
    })
    toast({
      title: "Plantilla actualizada",
      description: "La plantilla de tu CV ha sido actualizada con éxito.",
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
    toast({
      title: "Sección añadida",
      description: `Se ha añadido una nueva entrada en la sección ${section === "experience" ? "Experiencia" : "Educación"}.`,
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
    toast({
      title: "Sección eliminada",
      description: `Se ha eliminado una entrada de la sección ${section === "experience" ? "Experiencia" : "Educación"}.`,
      variant: "destructive",
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
      toast({
        title: "Nuevo CV creado",
        description: "Se ha creado un nuevo CV. ¡Empieza a personalizarlo!",
      })
    } else {
      toast({
        title: "Límite de CVs alcanzado",
        description: isPremium 
          ? "Has alcanzado el límite máximo de 10 CVs." 
          : "Has alcanzado el límite de 3 CVs. Actualiza a Premium para crear más.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col py-14">
      <main ref={mainRef} className="flex-1 flex flex-col md:flex-row p-4 gap-4 overflow-hidden relative">
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
              <Button
                variant="outline"
                className="flex-1 md:flex-none"
                onClick={() => setIsEditorOpen(!isEditorOpen)}
              >
                {isEditorOpen ? <Save className="h-4 w-4 mr-2" /> : <Edit className="h-4 w-4 mr-2" />}
                {isEditorOpen ? "Guardar" : "Editar"}
              </Button>
            </div>
          </div>
          <CVPreview cv={cvs[selectedCV]} controls={controls} />
        </motion.div>

        <AnimatePresence>
          {isEditorOpen && (
            <EditorPanel
              ref={editorRef}
              isMobile={isMobile}
              editorWidth={editorWidth}
              handleDrag={handleDrag}
              setIsEditorOpen={setIsEditorOpen}
              cv={cvs[selectedCV]}
              handleInputChange={handleInputChange}
              addSectionItem={addSectionItem}
              removeSectionItem={removeSectionItem}
              handleTemplateChange={handleTemplateChange}
              isPremium={isPremium}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

export default CVEditor