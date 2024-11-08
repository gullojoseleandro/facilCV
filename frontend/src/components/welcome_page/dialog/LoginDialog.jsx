import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const LoginDialog = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const userTemporalValidation = () => {
    return email === "admin@admin.com" && password === "admin";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(""); 

    try {
      if (userTemporalValidation()) {
        setIsOpen(false);
        toast({
          title: "Inicio de sesión exitoso",
          description: "Bienvenido de vuelta a FacilCV.",
        });
        window.location.href = "/dashboard";
      } else {
        setError("Credenciales incorrectas. Intenta nuevamente.");
        toast({
          title: "Inicio de sesión sin éxito",
          description: "Vuelve a intentarlo.",
        });
      }
    } catch (error) {
      setError("Ocurrió un error inesperado. Intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const dialogComponent = useMemo(
    () => (
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
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
            {error && <p style={{ color: 'red' }} className={"text-center"}>{error}</p>}
          </form>
        </DialogContent>
      </Dialog>
    ),
    [isOpen, isLoading, children, email, password, error]
  );

  return dialogComponent;
};

export default LoginDialog;
