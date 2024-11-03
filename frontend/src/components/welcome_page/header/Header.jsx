import { useMemo } from "react"
import LoginDialog from "../dialog/LoginDialog"
import GeneralButton from "@/components/button/GeneralButton"

const Header = () => {
    const memoizedButton = useMemo(() => (
        <GeneralButton variant="outline">Iniciar sesión</GeneralButton>
    ), []);

    return (
        <header className="border-b fixed top-0 left-0 right-0 bg-black bg-opacity-20">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-teal-50">FacilCV</h1>
                <LoginDialog>
                    {memoizedButton}
                </LoginDialog>
            </div>
        </header>
    );
}

export default Header