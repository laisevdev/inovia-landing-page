import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import AgentCapabilitiesSection from "@/components/AgentCapabilitiesSection";
import ComparisonSection from "@/components/ComparisonSection";
import CostComparisonSection from "@/components/CostComparisonSection";
import BenefitsSection from "@/components/BenefitsSection";
import ImplementationStepsSection from "@/components/ImplementationStepsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <AgentCapabilitiesSection />
      <ComparisonSection />
      <CostComparisonSection />
      <BenefitsSection />
      <ImplementationStepsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
