import { useDashboard } from '@/context/DashboardContext';
import Header from "@/components/header/Header"

const DashboardContent = () => {
    const { activeTab } = useDashboard();

    return (
        <>
            <Header />
            <main className="container">
                {activeTab}
            </main>
        </>
    )
}

export default DashboardContent