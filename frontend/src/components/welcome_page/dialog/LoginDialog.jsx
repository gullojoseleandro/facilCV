import { useState, useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { AuthContext } from '@/auth/authContext';

const LoginDialog = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const { handleLogin } = useContext(AuthContext);

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "El correo electrónico es requerido";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "El correo electrónico no es válido";
    }
    if (!password) {
      newErrors.password = "La contraseña es requerida";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {

      const response = await handleLogin(email, password);

      if (!response.success) {
        showToast("Inicio de sesión sin éxito", response.message, "error");
        return;
      }

      setIsOpen(false);
      showToast("Inicio de sesión exitoso", "Bienvenido de vuelta a FacilCV.", "success");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);
    } catch (error) {
      showToast("Inicio de sesión sin éxito", "Credenciales incorrectas. Intenta nuevamente.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const showToast = (title, message, type) => {
    setToast({ title, message, type });
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setErrors({});
    }
  }, [isOpen]);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Iniciar sesión</DialogTitle>
            <DialogDescription>
              Ingresa tus credenciales para acceder a tu cuenta de FacilCV.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <div className="flex justify-between items-center">
              <Button type="button" variant="link" className="text-sm">
                ¿Olvidaste tu contraseña?
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Cargando...
                  </>
                ) : (
                  "Iniciar sesión"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      {toast && (
        <div className={`fixed bottom-4 right-4 p-4 rounded-md shadow-md ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white`} style={{ zIndex: 1000 }}>
          <h3 className="font-bold">{toast.title}</h3>
          <p>{toast.message}</p>
        </div>
      )}
    </>
  );
};

export default LoginDialog;