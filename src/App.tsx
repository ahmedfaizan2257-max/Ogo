import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import InteractiveCases from "./components/InteractiveCases";
import Process from "./components/Process";
import FAQ from "./components/FAQ";

export default function App() {
  const CTA_LINK = "https://dr-ogo-ezeclinics.portal.dental/";

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-white">
      {/* Main Sections */}
      
      <main>
        <Hero ctaLink={CTA_LINK} />
        <Benefits />
        <InteractiveCases ctaLink={CTA_LINK} />
        <Process />
        <FAQ />
      </main>
    </div>
  );
}

