import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoreFeatures from "@/components/CoreFeatures";
import ProductShowcase from "@/components/ProductShowcase";
import MultiSportsDemo from "@/components/MultiSportsDemo";
import Partners from "@/components/Partners";
import FeaturedProjects from "@/components/FeaturedProjects";
import LumiFlexProjects from "@/components/LumiFlexProjects";
import LumiFlexInfo from "@/components/LumiFlexInfo";




export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-electricCyan selection:text-white">
      <Navbar />
      <Hero />
      <CoreFeatures />
      <ProductShowcase />
      <MultiSportsDemo />
      <FeaturedProjects />
      <LumiFlexInfo />
      <LumiFlexProjects />
      <Partners />
    </main>
  );
}
