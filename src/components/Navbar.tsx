import { NavBar } from "@/components/ui/tubelight-navbar";
import { Settings, Heart, TrendingUp, HelpCircle } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { name: "Soluções", url: "#solucoes", icon: Settings },
    { name: "Benefícios", url: "#beneficios", icon: Heart },
    { name: "Como Funciona", url: "#etapas", icon: TrendingUp },
    { name: "FAQ", url: "#faq", icon: HelpCircle },
  ];

  return <NavBar items={navItems} />;
};

export default Navbar;