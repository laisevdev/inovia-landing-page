
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Brain, Clock, Zap, User, BookOpen, Headphones, Settings, Target, Plus, Minus } from "lucide-react";

const faqs = [
  { id: "1", icon: Brain, question: "O que são agentes autônomos de IA e como diferem de chatbots?", answer: "Agentes autônomos de IA são sistemas avançados que podem tomar decisões..." },
  { id: "2", icon: Clock, question: "Quanto tempo leva para implementar os agentes na minha empresa?", answer: "O processo completo leva entre 6-8 semanas..." },
  { id: "3", icon: Zap, question: "Os agentes podem se integrar com nossos sistemas existentes?", answer: "Sim, completamente. Nossos agentes são desenvolvidos..." },
  { id: "4", icon: User, question: "Preciso de uma equipe técnica para gerenciar os agentes?", answer: "Não necessariamente. Nossos agentes são projetados..." },
  { id: "5", icon: BookOpen, question: "Como os agentes aprendem e evoluem ao longo do tempo?", answer: "Nossos agentes utilizam machine learning avançado..." },
  { id: "6", icon: Headphones, question: "Que tipo de suporte oferecem após a implementação?", answer: "Oferecemos suporte completo 24/7 incluindo..." },
  { id: "7", icon: Settings, question: "Os agentes podem trabalhar com nossa indústria específica?", answer: "Absolutamente. Nossos agentes são completamente personalizados..." },
  { id: "8", icon: Target, question: "Qual é o investimento necessário para começar?", answer: "O investimento varia de acordo com o escopo..." },
];

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="section-spacing">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins text-[44px] font-bold mb-6">
            Tudo que você <span className="gradient-text">precisa saber</span>
          </h2>
          <p className="font-inter text-[18px] text-muted-foreground">
            Agende uma ligação com nossa equipe <span className="text-primary underline cursor-pointer">aqui</span>
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map(({ id, icon: Icon, question, answer }) => {
            const isOpen = openItem === id;
            return (
              <div 
                key={id} 
                className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(id)}
                  aria-expanded={isOpen}
                  className="flex items-center justify-between w-full px-6 py-5 text-left cursor-pointer hover:bg-muted/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <div className="flex items-center gap-4">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium text-lg">{question}</span>
                  </div>
                  <div className="relative w-6 h-6 flex-shrink-0">
                    <Plus
                      className={`absolute inset-0 w-6 h-6 text-primary transition-all duration-300 ${
                        isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                      }`}
                      strokeWidth={2}
                    />
                    <Minus
                      className={`absolute inset-0 w-6 h-6 text-primary transition-all duration-300 ${
                        isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                      }`}
                      strokeWidth={2}
                    />
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ 
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{ 
                    duration: 0.3, 
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="text-muted-foreground leading-relaxed">
                      {answer}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;