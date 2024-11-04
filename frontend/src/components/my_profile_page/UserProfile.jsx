import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlertCircle, Camera, Mail, Phone, MapPin, Lock, Bell, Eye, EyeOff } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Juan Pérez",
    email: "juan@example.com",
    phone: "+1234567890",
    location: "Ciudad, País",
    bio: "Desarrollador web apasionado con experiencia en React y Node.js.",
    avatar: "/placeholder-avatar.jpg",
    notifications: {
      email: true,
      push: false
    }
  })

  const [showPassword, setShowPassword] = useState(false)
  const [passwordFields, setPasswordFields] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  })

  const handleInputChange = (field, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }))
  }

  const handleNotificationChange = (type) => {
    setUser(prevUser => ({
      ...prevUser,
      notifications: {
        ...prevUser.notifications,
        [type]: !prevUser.notifications[type]
      }
    }))
  }

  const handlePasswordChange = (field, value) => {
    setPasswordFields(prevFields => ({
      ...prevFields,
      [field]: value
    }))
  }

  const handleSaveProfile = () => {
    // Aquí iría la lógica para guardar los cambios del perfil
    console.log("Perfil guardado:", user)
  }

  const handleSavePassword = () => {
    // Aquí iría la lógica para cambiar la contraseña
    console.log("Cambio de contraseña:", passwordFields)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Mi Perfil</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Información Personal</CardTitle>
            <CardDescription>Actualiza tu información de perfil</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <Button variant="outline">
                <Camera className="mr-2 h-4 w-4" />
                Cambiar foto
              </Button>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input
                id="name"
                value={user.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                value={user.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                value={user.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Ubicación</Label>
              <Input
                id="location"
                value={user.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Biografía</Label>
              <Textarea
                id="bio"
                value={user.bio}
                onChange={(e) => handleInputChange("bio", e.target.value)}
                rows={4}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSaveProfile}>Guardar cambios</Button>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Cambiar Contraseña</CardTitle>
              <CardDescription>Actualiza tu contraseña para mantener tu cuenta segura</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Contraseña actual</Label>
                <div className="relative">
                  <Input
                    id="currentPassword"
                    type={showPassword ? "text" : "password"}
                    value={passwordFields.currentPassword}
                    onChange={(e) => handlePasswordChange("currentPassword", e.target.value)}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">Nueva contraseña</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={passwordFields.newPassword}
                  onChange={(e) => handlePasswordChange("newPassword", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar nueva contraseña</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={passwordFields.confirmPassword}
                  onChange={(e) => handlePasswordChange("confirmPassword", e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSavePassword}>Cambiar contraseña</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Configuración de Notificaciones</CardTitle>
              <CardDescription>Gestiona cómo quieres recibir notificaciones</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Notificaciones por correo</Label>
                  <p className="text-sm text-muted-foreground">Recibe actualizaciones en tu correo electrónico</p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={user.notifications.email}
                  onCheckedChange={() => handleNotificationChange("email")}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-notifications">Notificaciones push</Label>
                  <p className="text-sm text-muted-foreground">Recibe notificaciones en tu dispositivo</p>
                </div>
                <Switch
                  id="push-notifications"
                  checked={user.notifications.push}
                  onCheckedChange={() => handleNotificationChange("push")}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Alert className="mt-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Información importante</AlertTitle>
        <AlertDescription>
          Mantén tu información de perfil actualizada para aprovechar al máximo tu cuenta de FacilCV.
        </AlertDescription>
      </Alert>
    </div>
  )
}

export default UserProfile