import { NavBar } from "@/components/ui/tubelight-navbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Settings, Heart, TrendingUp, HelpCircle, Mail } from "lucide-react";
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
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 text-white"
          fill="currentColor"
        >
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
          <circle cx="8" cy="12" r="1.5"/>
          <circle cx="12" cy="8" r="1.5"/>
          <circle cx="16" cy="12" r="1.5"/>
          <circle cx="12" cy="16" r="1.5"/>
          <path d="M8 12h8M12 8v8"/>
        </svg>
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