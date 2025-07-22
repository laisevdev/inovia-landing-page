import { NavBar } from "@/components/ui/tubelight-navbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Settings, Heart, TrendingUp, HelpCircle, Mail, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const navItems = [
    { name: "Home", url: "#hero", icon: Settings },
    { name: "Soluções", url: "#solucoes", icon: Settings },
    { name: "Capacidades", url: "#capacidades", icon: TrendingUp },
    { name: "Como Funciona", url: "#etapas", icon: TrendingUp },
    { name: "Benefícios", url: "#beneficios", icon: Heart },
    { name: "FAQ", url: "#faq", icon: HelpCircle },
  ];

  const logo = (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
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
        className={cn(
          "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
          "text-foreground/80 hover:text-primary hover:bg-muted/50"
        )}
      >
        <span className="hidden md:inline">Entrar em contato</span>
        <span className="md:hidden">
          <Mail size={18} strokeWidth={2.5} />
        </span>
      </Button>
    </>
  );

  return <NavBar items={navItems} rightActions={rightActions} logo={logo} />;
};

export default Navbar;