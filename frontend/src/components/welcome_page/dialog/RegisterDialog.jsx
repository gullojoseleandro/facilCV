import { useState, memo, useContext, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { AuthContext } from '@/auth/authContext'

const RegisterDialog = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { handleRegister } = useContext(AuthContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errors, setErrors] = useState({})
    const [toast, setToast] = useState(null)

    const validateForm = () => {
        const newErrors = {}
        if (name.trim().length < 3) {
            newErrors.name = "El nombre debe tener al menos 3 caracteres"
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "El correo electrónico no es válido"
        }
        if (password.length < 6) {
            newErrors.password = "La contraseña debe tener al menos 6 caracteres"
        }
        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Las contraseñas no coinciden"
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoading(true)

        if (!validateForm()) {
            setIsLoading(false)
            return
        }

        try {
            const response = await handleRegister(name, email, password)
            console.log(response)
            if (response.success) {
                setIsOpen(false)
                showToast("Registro exitoso", "Bienvenido a FacilCV. Ya puedes iniciar sesión.", "success")
            } else {
                showToast("Registro fallido", response.message, "error")
            }
        } catch (error) {
            showToast("Registro fallido", "Error al registrar usuario.", "error")
        } finally {
            setIsLoading(false)
        }
    }

    const showToast = (title, message, type) => {
        setToast({ title, message, type })
        setTimeout(() => setToast(null), 3000)
    }

    useEffect(() => {
        if (!isOpen) {
            setName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setErrors({})
        }
    }, [isOpen])

    return (
        <>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Crear una cuenta</DialogTitle>
                        <DialogDescription>
                            Completa el formulario para registrarte en FacilCV.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nombre completo</Label>
                            <Input
                                id="name"
                                placeholder="Juan Pérez"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={errors.name ? "border-red-500" : ""}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Correo electrónico</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="tu@ejemplo.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={errors.email ? "border-red-500" : ""}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Contraseña</Label>
                            <Input
                                id="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={errors.password ? "border-red-500" : ""}
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={errors.confirmPassword ? "border-red-500" : ""}
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? (
                                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Registrando...</>
                            ) : (
                                "Registrarse"
                            )}
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
            {toast && (
                <div className={`fixed bottom-4 right-4 p-4 rounded-md shadow-md ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                    } text-white`}>
                    <h3 className="font-bold">{toast.title}</h3>
                    <p>{toast.message}</p>
                </div>
            )}
        </>
    )
}

export default memo(RegisterDialog)

