import { useMemo } from "react"
import { motion } from "framer-motion"
import GeneralButton from "@/components/button/GeneralButton"
import RegisterDialog from "@/components/welcome_page/dialog/RegisterDialog"

const WelcomeTitle = () => {
    const memoizedButton = useMemo(() => (
        <GeneralButton 
            className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
            size="lg"
        >
            Regístrate gratis
        </GeneralButton>
    ), []);

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8  text-white">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
            >
                <motion.h1 
                    className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Tu CV profesional en línea
                </motion.h1>
                <motion.p 
                    className="text-xl sm:text-2xl mb-10 text-teal-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Crea, comparte y gestiona tu CV de forma fácil y profesional
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <RegisterDialog>
                        {memoizedButton}
                    </RegisterDialog>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default WelcomeTitle