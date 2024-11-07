import { useState } from 'react'
import Header from "@/components/header/Header"
import DashboardHome from "@/components/dashboard_page/DashboardHome"

const DashboardContent = () => {
    const [activeContent, setActiveContent] = useState(<DashboardHome />)

    return (
        <>
            <Header selectedPage="user_panel" setActiveContent={setActiveContent}/>
            <main className="flex-grow mx-auto py-24">
                {activeContent}
            </main>
        </>
    )
}

export default DashboardContent