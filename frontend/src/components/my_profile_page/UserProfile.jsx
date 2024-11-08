import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap, Award } from "lucide-react"

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Leandro Gullo",
    email: "leandro.gullo@example.com",
    phone: "+54 9 11 1234-5678",
    location: "Buenos Aires, Argentina",
    website: "https://leandrogullo.com",
    bio: "Desarrollador Full Stack con experiencia en React, Node.js y bases de datos SQL y NoSQL. Apasionado por crear soluciones innovadoras y eficientes.",
    avatar: "/placeholder-avatar.jpg",
    publicProfile: true
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUser(prevUser => ({ ...prevUser, [name]: value }))
  }

  const handleSwitchChange = (checked) => {
    setUser(prevUser => ({ ...prevUser, publicProfile: checked }))
  }

  return (
    <div className="container px-2 py-20">      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Información Personal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <Button>Cambiar foto</Button>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input id="name" name="name" value={user.name} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" name="email" type="email" value={user.email} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" name="phone" value={user.phone} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Ubicación</Label>
              <Input id="location" name="location" value={user.location} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Sitio web</Label>
              <Input id="website" name="website" value={user.website} onChange={handleInputChange} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Biografía</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea 
              className="min-h-[200px]" 
              placeholder="Escribe una breve descripción sobre ti..."
              name="bio"
              value={user.bio}
              onChange={handleInputChange}
            />
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Configuración del perfil</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Switch 
              id="public-profile" 
              checked={user.publicProfile}
              onCheckedChange={handleSwitchChange}
            />
            <Label htmlFor="public-profile">Hacer público mi perfil</Label>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Al activar esta opción, tu perfil será visible para todos los usuarios de FacilCV.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Secciones del CV</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="experience">
            <TabsList className="mb-4">
              <TabsTrigger value="experience">Experiencia</TabsTrigger>
              <TabsTrigger value="education">Educación</TabsTrigger>
              <TabsTrigger value="skills">Habilidades</TabsTrigger>
            </TabsList>
            <TabsContent value="experience">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5 text-muted-foreground" />
                  <h3 className="text-lg font-semibold">Desarrollador Full Stack</h3>
                </div>
                <p className="text-sm text-muted-foreground">TechCorp • 2020 - Presente</p>
                <p>Desarrollo de aplicaciones web utilizando React y Node.js. Implementación de APIs RESTful y bases de datos MongoDB.</p>
              </div>
            </TabsContent>
            <TabsContent value="education">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-muted-foreground" />
                  <h3 className="text-lg font-semibold">Ingeniería en Sistemas</h3>
                </div>
                <p className="text-sm text-muted-foreground">Universidad de Buenos Aires • 2015 - 2019</p>
              </div>
            </TabsContent>
            <TabsContent value="skills">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-muted-foreground" />
                  <span>React, Node.js, JavaScript, TypeScript</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-muted-foreground" />
                  <span>MongoDB, PostgreSQL, GraphQL</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-muted-foreground" />
                  <span>Git, Docker, AWS</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="mt-6 flex justify-end space-x-4">
        <Button variant="outline">Cancelar</Button>
        <Button>Guardar cambios</Button>
      </div>
    </div>
  )
}

export default UserProfile