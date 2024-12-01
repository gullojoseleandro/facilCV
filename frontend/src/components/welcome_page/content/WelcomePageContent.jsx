import LogginButton from "@/components/welcome_page/button/LoginButton";
import WelcomeCards from "@/components/welcome_page/card/WelcomeCards";
import WelcomeTitle from "@/components/welcome_page/title/WelcomeTitle";

const WelcomePageContent = () => {
    return (
        <div class="min-h-screen text-foreground flex flex-col py-10">
            <LogginButton client:load />
            <main class="flex-grow container mx-auto">
                <WelcomeTitle client:load />
                <WelcomeCards client:load />
            </main>
        </div>
    )
}

export default WelcomePageContent