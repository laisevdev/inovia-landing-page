import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import MobileMenu from "@/components/MobileMenu";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import AgentCapabilitiesSection from "@/components/AgentCapabilitiesSection";
import ComparisonSection from "@/components/ComparisonSection";
import CostComparisonSection from "@/components/CostComparisonSection";
import BenefitsSection from "@/components/BenefitsSection";
import ImplementationStepsSection from "@/components/ImplementationStepsSection";
import FAQSection from "@/components/FAQSection";

import MiniCalendlyCard from "@/components/MiniCalendlyCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import DemoRequestForm from "@/components/DemoRequestForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <MobileMenu />
      <HeroSection />
      <SolutionsSection />
      <AgentCapabilitiesSection />
      <ComparisonSection />
      <CostComparisonSection />
      <BenefitsSection />
      <ImplementationStepsSection />
      <FAQSection />
      
      <DemoRequestForm />
      
      
      <MiniCalendlyCard />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
