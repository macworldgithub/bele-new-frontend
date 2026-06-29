import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Opportunity from "@/components/Opportunity";
import CoreModules from "@/components/CoreModules";
import CaseStudies from "@/components/CaseStudies";
import AgencyModel from "@/components/AgencyModel";
import Roadmap from "@/components/Roadmap";
import EarningsCalculator from "@/components/EarningsCalculator";
import PartnerCTA from "@/components/PartnerCTA";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Opportunity />
      <CoreModules />
      <CaseStudies />
      <AgencyModel />
      <Roadmap />
      <EarningsCalculator />
      <PartnerCTA />
      <FinalCTA />
      <Footer />
      
    </main>
  );
}
