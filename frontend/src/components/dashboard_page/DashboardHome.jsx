import StatsCard from "./Card/StatsCard"
import StadisticsCard from "./Card/StatisticsCard"
import QuickActionsCard from "./Card/QuickActionsCard"
import ShareResume from "./Card/ShareResume"
import SuggestionsCard from "./Card/SuggestionsCard"

const DashboardHome = () => {
    const userName = "Leandro";

    return (
        <div className="container flex flex-col gap-10 min-h-screen px-3 py-24">
            <h2 className="text-3xl font-bold text-teal-50 text-center">Bienvenido, {userName}!</h2>
            <StatsCard />
            <StadisticsCard />

            <div className="grid gap-6 md:grid-cols-2">
                <QuickActionsCard />
                <ShareResume />
            </div>

            <SuggestionsCard />
        </div>
    )
}


export default DashboardHome