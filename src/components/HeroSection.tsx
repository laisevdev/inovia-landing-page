import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Rocket } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
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
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 text-sm text-primary font-medium mb-8 pulse-glow">
            <Zap size={16} />
            <span>Revolucione seu negócio com IA</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Agentes Autônomos de{" "}
            <span className="gradient-text">Inteligência Artificial</span>{" "}
            Super Personalizados
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforme sua empresa com agentes de IA que trabalham 24/7, aprendem continuamente 
            e executam tarefas complexas com precisão humana.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="btn-hero group">
              Descobrir Soluções
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-border/50 hover:bg-card/50 backdrop-blur-sm"
            >
              Ver Demo ao Vivo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-card text-center float-animation">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">99.8%</h3>
              <p className="text-muted-foreground">Precisão nas Tarefas</p>
            </div>

            <div className="glass-card text-center float-animation" style={{ animationDelay: '1s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-glow rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">10x</h3>
              <p className="text-muted-foreground">Mais Rápido</p>
            </div>

            <div className="glass-card text-center float-animation" style={{ animationDelay: '2s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-success to-success rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-success-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">24/7</h3>
              <p className="text-muted-foreground">Disponibilidade</p>
            </div>
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