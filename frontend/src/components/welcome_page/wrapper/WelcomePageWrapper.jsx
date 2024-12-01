import { AuthProvider } from "@/auth/authContext";
import WelcomePageContent from "@/components/welcome_page/content/WelcomePageContent";
import.meta.env.VITE_API_URL

console.log(import.meta.env.VITE_API_URL)
const WelcomePageWrapper = () => (
    <AuthProvider>
        <WelcomePageContent />
    </AuthProvider>
);

export default WelcomePageWrapper;