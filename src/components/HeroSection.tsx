import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useTypewriter } from "@/hooks/useTypewriter";
import { motion } from "framer-motion";

const HeroSection = () => {
  const typewriterText = useTypewriter({
    text: "Elimine tarefas manuais com nossas soluções de IA",
    speed: 80,
    loop: false,
    pauseAfterComplete: 3000
  });

  return (
    <motion.section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Autonomous Agents" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 text-sm text-primary font-medium mb-8 mt-8 pulse-glow">
            <Zap size={16} />
            <span>Revolucione seu negócio com IA</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-poppins text-[44px] font-bold mb-3 leading-tight min-h-[140px] flex items-center justify-center">
            <span>
              {typewriterText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-[18px] text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Agentes de IA sob medida para o seu negócio - gerando receita, trabalhando 24/7 sem folgas
          </p>

          {/* Mobile CTA Button */}
          <div className="flex justify-center mb-8 md:hidden">
            <Button 
              asChild 
              className="px-6 py-3 text-base hover:scale-105 transition-transform"
              size="lg"
            >
              <a 
                href="https://calendly.com/laisevdev/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="no-underline"
              >
                Agendar uma chamada
              </a>
            </Button>
          </div>


        </div>
      </div>

    </motion.section>
  );
};

export default HeroSection;