import { useMemo } from "react"
import { motion } from "framer-motion"
import LoginDialog from "@/components/welcome_page/dialog/LoginDialog"
import GeneralButton from "@/components/button/GeneralButton"
import UserAvatar from "@/components/avatar/UserAvatar"
import Dropdown from "@/components/dropdown/Dropdown"
import { FileText, Download, UserPlus, BarChart, Layout, LogOut } from "lucide-react"

const dropdownItems = [
    {
        id: 1,
        item: "Mi CV",
        icon: <FileText className="w-4 h-4 mr-2" />,
    },
    {
        id: 2,
        item: "Descargar CV",
        icon: <Download className="w-4 h-4 mr-2" />,
    },
    {
        id: 3,
        item: "Editar Perfil",
        icon: <UserPlus className="w-4 h-4 mr-2" />,
    },
    {
        id: 4,
        item: "Estadísticas",
        icon: <BarChart className="w-4 h-4 mr-2" />,
    },
    {
        id: 5,
        item: "Cambiar template",
        icon: <Layout className="w-4 h-4 mr-2" />,
    },
    {
        id: 6,
        item: "Cerrar Sesión",
        icon: <LogOut className="w-4 h-4 mr-2" />,
    },
]

const Header = ({ ...props }) => {
    const { selectedPage } = props
    const memoizedLoginButton = useMemo(() => (
        <GeneralButton
            variant="outline"
            className="bg-white bg-opacity-10 text-white border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
        >
            Iniciar sesión
        </GeneralButton>
    ), []);

    const memoizedUserAvatar = useMemo(() => (
        <GeneralButton className="rounded-full m-0 p-0 hover:ring-2 hover:ring-teal-300 transition-all duration-300">
            <UserAvatar userInitials="LG" />
        </GeneralButton>
    ), []);

    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-b border-white border-opacity-20 fixed top-0 left-0 right-0 bg-gradient-to-r from-teal-900 to-blue-900 bg-opacity-90 backdrop-blur-md z-50"
        >
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-2xl font-bold text-white"
                >
                    FacilCV
                </motion.h1>
                {selectedPage === "welcome" && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <LoginDialog>
                            {memoizedLoginButton}
                        </LoginDialog>
                    </motion.div>
                )}
                {selectedPage === "user_panel" && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <Dropdown
                            title="Mi cuenta"
                            items={dropdownItems}
                            className="bg-white bg-opacity-10 rounded-lg shadow-lg"
                            itemClassName="text-white hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                        >
                            {memoizedUserAvatar}
                        </Dropdown>
                    </motion.div>
                )}
            </div>
        </motion.header>
    );
}

export default Header