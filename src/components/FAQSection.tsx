
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus, Brain, Clock, Zap, User, BookOpen, Settings, Target, Headphones } from "lucide-react";

const faqs = [
  {
    id: "1",
    icon: Brain,
    question: "O que são agentes autônomos de IA e como diferem de chatbots?",
    answer: "Agentes autônomos de IA são sistemas avançados que podem tomar decisões, aprender continuamente e executar tarefas complexas de forma independente."
  },
  {
    id: "2",
    icon: Clock,
    question: "Quanto tempo leva para implementar os agentes na minha empresa?",
    answer: "O processo completo leva entre 6-8 semanas, desde a consulta inicial até o go-live."
  },
  {
    id: "3",
    icon: Zap,
    question: "Os agentes podem se integrar com nossos sistemas existentes?",
    answer: "Sim, completamente. Nossos agentes são desenvolvidos para integração universal com qualquer sistema."
  },
  {
    id: "4",
    icon: User,
    question: "Preciso de uma equipe técnica para gerenciar os agentes?",
    answer: "Nossos agentes são projetados para operação autônoma com interface intuitiva."
  },
  {
    id: "5",
    icon: BookOpen,
    question: "Como os agentes aprendem e evoluem ao longo do tempo?",
    answer: "Eles aprendem com cada interação e ajustam suas respostas automaticamente."
  },
  {
    id: "6",
    icon: Headphones,
    question: "Que tipo de suporte oferecem após a implementação?",
    answer: "Oferecemos suporte completo 24/7 incluindo otimizações automáticas e relatórios de performance."
  },
  {
    id: "7",
    icon: Settings,
    question: "Os agentes podem trabalhar com nossa indústria específica?",
    answer: "Nossos agentes são completamente personalizados para cada indústria e negócio."
  },
  {
    id: "8",
    icon: Target,
    question: "Qual é o investimento necessário para começar?",
    answer: "O investimento varia de acordo com o escopo e complexidade do projeto."
  }
];

interface FAQSectionProps {
  id?: string;
}

export default function FAQSection({ id }: FAQSectionProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem((current) => (current === id ? null : id));
  };

  return (
    <section id={id || "faq"} className="py-16 hidden">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Dúvidas <span className="gradient-text">Frequentes</span></h2>
          <p className="text-muted-foreground">Encontre respostas para as principais questões sobre nossos agentes autônomos de IA.</p>
        </div>

        <div className="space-y-4">
          {faqs.map(({ id, icon: Icon, question, answer }) => {
            const isOpen = openItem === id;

            return (
              <div key={id} className="border border-border rounded-lg overflow-hidden bg-card/30 backdrop-blur-md">
                <button
                  onClick={() => toggleItem(id)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-base font-medium text-foreground">{question}</span>
                  </div>
                  <div>
                    {isOpen ? <Minus className="w-5 h-5 text-foreground" /> : <Plus className="w-5 h-5 text-foreground" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ scaleY: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-6 pb-4 text-muted-foreground text-sm"
                    >
                      {answer}
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

