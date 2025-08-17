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
      
      {/* WhatsApp CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Pronto para começar?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Entre em contato conosco agora mesmo e descubra como a automação com IA pode transformar seu negócio.
            </p>
            <a 
              href="https://wa.me/5565999254990?text=Ol%C3%A1+La%C3%ADse+,+quero+agendar+uma+consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Nos chame no whatsapp 👉
            </a>
          </div>
        </div>
      </section>
      
      
      <MiniCalendlyCard />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
