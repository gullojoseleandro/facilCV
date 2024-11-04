import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Lock, Plus, Trash2, ChevronLeft, ChevronRight } from "lucide-react"

const CVEditor = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("modern")
  const [isEditorOpen, setIsEditorOpen] = useState(true)
  const [cvSections, setCVSections] = useState({
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
  })

  const templates = [
    { id: "modern", name: "Moderno", isPremium: false },
    { id: "classic", name: "Clásico", isPremium: false },
    { id: "creative", name: "Creativo", isPremium: true },
    { id: "professional", name: "Profesional", isPremium: true },
    { id: "minimalist", name: "Minimalista", isPremium: true }
  ]

  const handleTemplateChange = (templateId) => {
    setSelectedTemplate(templateId)
  }

  const handleInputChange = (section, field, value, index = null) => {
    setCVSections(prev => {
      if (index !== null) {
        const newSection = [...prev[section]]
        newSection[index] = { ...newSection[index], [field]: value }
        return { ...prev, [section]: newSection }
      }
      if (section === "skills") {
        return { ...prev, [section]: value.split(",").map(skill => skill.trim()) }
      }
      return { ...prev, [section]: { ...prev[section], [field]: value } }
    })
  }

  const addSectionItem = (section) => {
    setCVSections(prev => ({
      ...prev,
      [section]: [...prev[section], section === "experience" 
        ? { title: "", company: "", date: "", description: "" }
        : { degree: "", school: "", date: "" }]
    }))
  }

  const removeSectionItem = (section, index) => {
    setCVSections(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }))
  }

  const CVPreview = () => (
    <div className={`bg-white p-8 shadow-lg ${selectedTemplate}`}>
      <h1 className="text-4xl font-bold mb-2">{cvSections.personalInfo.name}</h1>
      <p className="text-gray-600 mb-4">
        {cvSections.personalInfo.email} | {cvSections.personalInfo.phone} | {cvSections.personalInfo.location}
      </p>
      <h2 className="text-2xl font-semibold mb-2">Resumen Profesional</h2>
      <p className="mb-4">{cvSections.summary}</p>
      <h2 className="text-2xl font-semibold mb-2">Experiencia Laboral</h2>
      {cvSections.experience.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <p className="text-gray-600">{exp.company} | {exp.date}</p>
          <p>{exp.description}</p>
        </div>
      ))}
      <h2 className="text-2xl font-semibold mb-2">Educación</h2>
      {cvSections.education.map((edu, index) => (
        <div key={index} className="mb-2">
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <p className="text-gray-600">{edu.school} | {edu.date}</p>
        </div>
      ))}
      <h2 className="text-2xl font-semibold mb-2">Habilidades</h2>
      <p>{cvSections.skills.join(", ")}</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-background flex">
      {/* Template Sidebar */}
      <aside className="w-64 border-r p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-4">Plantillas</h2>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          {templates.map(template => (
            <Button
              key={template.id}
              onClick={() => handleTemplateChange(template.id)}
              variant={selectedTemplate === template.id ? "default" : "ghost"}
              className="w-full justify-start mb-2"
            >
              {template.name}
              {template.isPremium && (
                <Badge variant="secondary" className="ml-2">
                  <Lock className="h-3 w-3 mr-1" />
                  Premium
                </Badge>
              )}
            </Button>
          ))}
        </ScrollArea>
      </aside>

      {/* Main Editor Area */}
      <main className="flex-1 flex">
        {/* CV Preview */}
        <div className="flex-1 p-4 overflow-auto">
          <CVPreview />
        </div>

        {/* Editor Panel */}
        <div className={`w-96 bg-background border-l transition-all duration-300 ${isEditorOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <Button
            className="absolute top-1/2 -left-8 transform -translate-y-1/2"
            variant="outline"
            size="icon"
            onClick={() => setIsEditorOpen(!isEditorOpen)}
          >
            {isEditorOpen ? <ChevronRight /> : <ChevronLeft />}
          </Button>
          <ScrollArea className="h-screen p-4">
            <h2 className="text-2xl font-bold mb-4">Editar CV</h2>
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
                        value={cvSections.personalInfo.name}
                        onChange={(e) => handleInputChange("personalInfo", "name", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        value={cvSections.personalInfo.email}
                        onChange={(e) => handleInputChange("personalInfo", "email", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        value={cvSections.personalInfo.phone}
                        onChange={(e) => handleInputChange("personalInfo", "phone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Ubicación</Label>
                      <Input
                        id="location"
                        value={cvSections.personalInfo.location}
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
                      value={cvSections.summary}
                      onChange={(e) => handleInputChange("summary", null, e.target.value)}
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
                    {cvSections.experience.map((exp, index) => (
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
                    {cvSections.education.map((edu, index) => (
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
                        value={cvSections.skills.join(", ")}
                        onChange={(e) => handleInputChange("skills", null, e.target.value)}
                        rows={4}
                        placeholder="ej. Liderazgo, Trabajo en equipo, Comunicación efectiva"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </ScrollArea>
        </div>
      </main>
    </div>
  )
}

export default CVEditor