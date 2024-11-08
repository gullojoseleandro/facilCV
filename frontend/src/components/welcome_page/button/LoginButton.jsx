import GeneralButton from "@/components/button/GeneralButton";
import LoginDialog from "@/components/welcome_page/dialog/LoginDialog"

import { useMemo } from "react";
import { motion } from "framer-motion"

const LogginButton = () => {

    const memoizedLoginButton = useMemo(() => (
        <GeneralButton
            variant="outline"
            className="z-50 bg-black bg-opacity-40 text-white border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 fixed top-0 right-0 m-3 p-5 rounded-full shadow-lg"
        >
            Iniciar sesión
        </GeneralButton>
    ), []);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 3 }}
            >
                <LoginDialog>
                    {memoizedLoginButton}
                </LoginDialog>
            </motion.div>
        </>
    )
}

export default LogginButton