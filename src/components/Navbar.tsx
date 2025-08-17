import { NavBar } from "@/components/ui/tubelight-navbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Settings, Heart, TrendingUp, HelpCircle, Mail, Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        // Show navbar when hero section is visible (top of hero is above bottom of viewport)
        setIsVisible(heroRect.bottom > 100); // Give some margin for better UX
      } else {
        // Fallback: show navbar when at top of page
        setIsVisible(window.scrollY < 200);
      }
    };

    // Initial check - navbar visible by default
    setIsVisible(true);
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", url: "#hero", icon: Settings },
    { name: "Soluções", url: "#solucoes", icon: Settings },
    { name: "Capacidades", url: "#capacidades", icon: TrendingUp },
    { name: "Como Funciona", url: "#etapas", icon: TrendingUp },
    { name: "Benefícios", url: "#beneficios", icon: Heart },
  ];

  const logo = (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
        <Brain className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
      </div>
      <span className="text-lg font-bold text-foreground hidden lg:inline">InovIA</span>
    </div>
  );

  const rightActions = (
    <>
      <ThemeToggle />
      <Button
        variant="ghost"
        size="sm"
        asChild
        className={cn(
          "relative cursor-pointer text-sm font-semibold rounded-full transition-colors",
          "text-foreground/80 hover:text-primary hover:bg-muted/50",
          "px-4 py-2 md:px-2 md:py-1 md:text-xs lg:px-4 lg:py-2 lg:text-sm",
          "hidden md:flex"
        )}
      >
        <a 
          href="https://wa.me/5565999254990?text=Ol%C3%A1+La%C3%ADse+,+quero+agendar+uma+consulta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="lg:inline md:hidden">Entrar em contato</span>
          <span className="md:inline lg:hidden">Contato</span>
        </a>
      </Button>
    </>
  );

  return (
    <div className={cn(
      "hidden md:block transition-all duration-300 relative z-50",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
    )}>
      <NavBar items={navItems} rightActions={rightActions} logo={logo} />
    </div>
  );
};

export default Navbar;