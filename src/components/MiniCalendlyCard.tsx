import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MiniCalendlyCard = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-64 bg-card/95 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
        <CardContent className="p-4">
          <a 
            href="https://calendly.com/laisevdev/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-sm">Agende uma chamada</p>
              <p className="text-xs text-muted-foreground">Gratuita • 30min</p>
            </div>
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default MiniCalendlyCard;