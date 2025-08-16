import { NavBar } from "@/components/ui/tubelight-navbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Settings, Heart, TrendingUp, HelpCircle, Mail, Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const navItems = [
    { name: "Home", url: "#hero", icon: Settings },
    { name: "Soluções", url: "#solucoes", icon: Settings },
    { name: "Capacidades", url: "#capacidades", icon: TrendingUp },
    { name: "Como Funciona", url: "#etapas", icon: TrendingUp },
    { name: "Benefícios", url: "#beneficios", icon: Heart },
  ];

  const logo = (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
        <Brain className="w-5 h-5 text-white" />
      </div>
      <span className="text-lg font-bold text-foreground">InovIA</span>
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
          "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
          "text-foreground/80 hover:text-primary hover:bg-muted/50",
          "hidden md:flex"
        )}
      >
        <a 
          href="https://wa.me/5565999254990?text=Ol%C3%A1+La%C3%ADse+,+quero+agendar+uma+consulta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Entrar em contato</span>
        </a>
      </Button>
    </>
  );

  return (
    <div className="hidden md:block">
      <NavBar items={navItems} rightActions={rightActions} logo={logo} />
    </div>
  );
};

export default Navbar;