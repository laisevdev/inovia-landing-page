import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    console.log("WhatsApp button clicked!");
    window.open("https://wa.me/5565999254990?text=Ol%C3%A1+La%C3%ADse+,+quero+agendar+uma+consulta", "_blank");
  };

  return (
    <motion.div 
      className="fixed bottom-24 right-6 z-[60] hidden sm:block"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group relative cursor-pointer"
        aria-label="Entrar em contato via WhatsApp"
        title="Conversar no WhatsApp"
        style={{ pointerEvents: 'auto' }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-card border border-border/50 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          <p className="text-sm font-medium text-foreground">Fale conosco no WhatsApp</p>
          <div className="absolute top-1/2 left-full w-0 h-0 border-l-4 border-l-card border-t-4 border-t-transparent border-b-4 border-b-transparent -translate-y-1/2"></div>
        </div>
      </button>
    </motion.div>
  );
};

export default WhatsAppButton;