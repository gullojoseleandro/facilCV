import { AuthProvider } from "@/auth/authContext";
import WelcomePageContent from "@/components/welcome_page/content/WelcomePageContent";

const WelcomePageWrapper = () => (
    <AuthProvider>
        <WelcomePageContent />
    </AuthProvider>
);

export default WelcomePageWrapper;