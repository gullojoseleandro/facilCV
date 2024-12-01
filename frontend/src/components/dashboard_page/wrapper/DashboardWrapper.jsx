import { DashboardProvider } from '@/context/DashboardContext';
import { AuthProvider } from "@/auth/authContext";
import DashboardContent from '@/components/dashboard_page/DashboardContent';

const DashboardWrapper = () => (
    <AuthProvider>
        <DashboardProvider>
            <DashboardContent />
        </DashboardProvider>
    </AuthProvider>
);

export default DashboardWrapper;