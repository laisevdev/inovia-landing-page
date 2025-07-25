
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
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="font-poppins text-[44px] font-bold mb-6">
            Dúvidas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="font-inter text-[18px] text-muted-foreground">
            Encontre respostas para as principais questões sobre nossos agentes autônomos de IA.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-2xl mx-auto bg-card/30 backdrop-blur-md border border-border/30 rounded-lg shadow-lg">
          {faqs.map(({ id, icon: Icon, question, answer }) => {
            const isOpen = openItem === id;
            return (
              <div key={id} className="border-t border-border/30 first:border-t-0">
                <button
                  onClick={() => toggleItem(id)}
                  aria-expanded={isOpen}
                  className="flex items-center justify-between w-full px-6 py-4 text-foreground text-base font-medium bg-transparent hover:bg-card/50 transition-colors duration-300 select-none focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{question}</span>
                  </div>
                  <div className="relative w-4 h-4 flex-shrink-0">
                    <Plus
                      className={`absolute inset-0 text-foreground transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
                    />
                    <Minus
                      className={`absolute inset-0 text-foreground transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { height: "auto", opacity: 1 },
                        collapsed: { height: 0, opacity: 0 }
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-6 pb-4 text-muted-foreground text-sm leading-relaxed">
                        {answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;