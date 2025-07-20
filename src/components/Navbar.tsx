import { NavBar } from "@/components/ui/tubelight-navbar";
import { Settings, Heart, TrendingUp, HelpCircle, Sun, Moon, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Soluções", url: "#solucoes", icon: Settings },
    { name: "Benefícios", url: "#beneficios", icon: Heart },
    { name: "Como Funciona", url: "#etapas", icon: TrendingUp },
    { name: "FAQ", url: "#faq", icon: HelpCircle },
  ];

  return (
    <div className="fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6">
      <div className="flex items-center justify-between gap-4 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        <NavBar items={navItems} className="static transform-none mb-0 pt-0" />
        
        <div className="flex items-center gap-2 pl-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn(
              "h-8 w-8 rounded-full p-0",
              "text-foreground/80 hover:text-primary hover:bg-primary/10"
            )}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Alternar tema</span>
          </Button>

          {/* Contact Button */}
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold",
              "bg-background/90 border-border/40 text-foreground",
              "hover:bg-primary hover:text-primary-foreground hover:border-primary"
            )}
          >
            <Mail className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Entrar em contato</span>
            <span className="sm:hidden">Contato</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;