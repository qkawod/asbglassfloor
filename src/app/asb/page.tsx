import Navbar from "@/components/Navbar";
import ASBHero from "@/components/ASBHero";
import ASBVision from "@/components/ASBVision";
import ASBTech from "@/components/ASBTech";
import ASBStats from "@/components/ASBStats";
import ASBTimeline from "@/components/ASBTimeline";

export default function ASBPage() {
    return (
        <main className="min-h-screen bg-deepGrey text-white selection:bg-neonCyan selection:text-black">
            <Navbar />
            <ASBHero />
            <ASBVision />
            <ASBTech />
            <ASBStats />
            <ASBTimeline />
        </main>
    );
}
