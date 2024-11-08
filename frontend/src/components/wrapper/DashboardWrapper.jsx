import { DashboardProvider } from '@/context/DashboardContext';
import DashboardContent from '@/components/dashboard_page/DashboardContent';

const DashboardWrapper = () => (
    <DashboardProvider>
        <DashboardContent />
    </DashboardProvider>
);

export default DashboardWrapper;