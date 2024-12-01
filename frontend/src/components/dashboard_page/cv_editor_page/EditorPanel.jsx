import React, { forwardRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Lock, Plus, Trash2, ChevronRight, Save } from 'lucide-react'

export const EditorPanel = forwardRef(({ 
  isMobile, 
  editorWidth, 
  handleDrag, 
  setIsEditorOpen, 
  cv, 
  handleInputChange, 
  addSectionItem, 
  removeSectionItem, 
  handleTemplateChange,
  isPremium
}, ref) => {
  const templates = [
    { id: "modern", name: "Moderno", isPremium: false, preview: "/placeholder.svg?height=100&width=100" },
    { id: "classic", name: "Clásico", isPremium: false, preview: "/placeholder.svg?height=100&width=100" },
    { id: "creative", name: "Creativo", isPremium: true, preview: "/placeholder.svg?height=100&width=100" },
    { id: "professional", name: "Profesional", isPremium: true, preview: "/placeholder.svg?height=100&width=100" },
    { id: "minimalist", name: "Minimalista", isPremium: true, preview: "/placeholder.svg?height=100&width=100" }
  ]

  return (
    <motion.div
      ref={ref}
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
        <Tabs defaultValue="personal" className="h-full flex flex-col">
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
                        value={cv.sections.personalInfo.name}
                        onChange={(e) => handleInputChange("personalInfo", "name", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        value={cv.sections.personalInfo.email}
                        onChange={(e) => handleInputChange("personalInfo", "email", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        value={cv.sections.personalInfo.phone}
                        onChange={(e) => handleInputChange("personalInfo", "phone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Ubicación</Label>
                      <Input
                        id="location"
                        value={cv.sections.personalInfo.location}
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
                      value={cv.sections.summary}
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
                    {cv.sections.experience.map((exp, index) => (
                      <motion.div 
                        key={index} 
                        className="space-y-4 pb-4 border-b last:border-b-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
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
                      </motion.div>
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
                    {cv.sections.education.map((edu, index) => (
                      <motion.div 
                        key={index} 
                        className="space-y-4 pb-4 border-b last:border-b-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
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
                      </motion.div>
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
                        value={cv.sections.skills.join(", ")}
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
                        <motion.div
                          key={template.id}
                          className={`cursor-pointer border rounded-lg p-2 ${
                            cv.template === template.id ? 'border-primary' : 'border-gray-200'
                          } ${template.isPremium && !isPremium ? 'opacity-50' : ''}`}
                          onClick={() => {
                            if (!template.isPremium || isPremium) {
                              handleTemplateChange(template.id)
                            }
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <img src={template.preview} alt={template.name} className="w-full h-auto mb-2" />
                          <p className="text-center text-sm font-medium">{template.name}</p>
                          {template.isPremium && !isPremium && (
                            <Badge variant="secondary" className="mt-1 w-full justify-center">
                              <Lock className="w-3 h-3 mr-1" />
                              Premium
                            </Badge>
                          )}
                        </motion.div>
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
          className="h-full bg-gray-300 cursor-ew-resize absolute top-0 left-0 w-1"
          drag="x"
          dragElastic={0}
          dragMomentum={false}
          onDrag={handleDrag}
          whileHover={{ width: '4px', backgroundColor: 'hsl(var(--primary))' }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  )
})

EditorPanel.displayName = "EditorPanel"

