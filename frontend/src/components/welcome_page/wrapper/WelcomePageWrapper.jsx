import { AuthProvider } from "@/auth/authContext";
import WelcomePageContent from "@/components/welcome_page/content/WelcomePageContent";
import.meta.env.VITE_API_URL

if (import.meta.env.VITE_API_URL) {
    console.log("API URL:", import.meta.env.VITE_API_URL);
} else {
    console.log("VITE_API_URL no está definida");
}
console.log("Variables de entorno:", import.meta.env);
const WelcomePageWrapper = () => (
    <AuthProvider>
        <WelcomePageContent />
    </AuthProvider>
);

export default WelcomePageWrapper;