import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Rocket } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useTypewriter } from "@/hooks/useTypewriter";

const HeroSection = () => {
  const typewriterText = useTypewriter({
    text: "Elimine tarefas manuais com nossas soluções de IA",
    speed: 80,
    loop: false,
    pauseAfterComplete: 3000
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
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
          <h1 className="font-poppins text-[44px] font-bold mb-6 leading-tight min-h-[140px] flex items-center justify-center">
            <span>
              {typewriterText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-[20px] text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Agentes de IA sob medida para o seu negócio - gerando receita, trabalhando 24/7 sem folgas
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center items-center mb-16">
            <Button size="lg" className="btn-hero group">
              Descobrir Soluções
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;