import { NavBar } from "@/components/ui/tubelight-navbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Settings, Heart, TrendingUp, HelpCircle, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const navItems = [
    { name: "Soluções", url: "#solucoes", icon: Settings },
    { name: "Benefícios", url: "#beneficios", icon: Heart },
    { name: "Como Funciona", url: "#etapas", icon: TrendingUp },
    { name: "FAQ", url: "#faq", icon: HelpCircle },
  ];

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

  return <NavBar items={navItems} rightActions={rightActions} />;
};

export default Navbar;