import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const MiniCalendlyCard = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isInHeroSection, setIsInHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      const heroSection = document.querySelector('#hero');
      
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Hide card when footer is visible on screen
        if (footerRect.top <= windowHeight) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      
      // Check if user is in hero section
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Hide card when hero section is visible
        if (heroRect.bottom > 0 && heroRect.top < windowHeight) {
          setIsInHeroSection(true);
        } else {
          setIsInHeroSection(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isInHeroSection) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden md:block">
      <Card className="w-44 bg-card/95 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
        <CardContent className="p-3">
          <a 
            href="https://calendly.com/laisevdev/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 text-foreground hover:text-primary transition-colors"
          >
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Calendar className="w-4 h-4 text-primary" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-xs">Agende uma chamada</p>
              <p className="text-xs text-muted-foreground">Gratuita • 30min</p>
            </div>
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default MiniCalendlyCard;