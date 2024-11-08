import { createContext, useContext, useState } from "react"
import DashboardHome from "@/components/dashboard_page/DashboardHome"

const DashboardContext = createContext()

export const DashboardProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState(<DashboardHome />)

    const handleChangeTab = (tab) => {
        setActiveTab(tab)
        window.scrollTo(0, 0);
    }

    return (
        <DashboardContext.Provider value={{ activeTab, handleChangeTab }}>
            {children}
        </DashboardContext.Provider>
    )

}

export const useDashboard = () => {
    const context = useContext(DashboardContext);
    return context;
};
