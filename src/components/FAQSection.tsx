
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, Plus, Minus, Brain, Clock, Zap, User, BookOpen, Settings, Target, Headphones } from "lucide-react";

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleItem = (id: string) => {
    setOpenItem((current) => (current === id ? null : id));
  };

  const faqs = [
    {
      id: "1",
      icon: Brain,
      question: "O que são agentes autônomos de IA e como diferem de chatbots?",
      answer: "Agentes autônomos de IA são sistemas avançados que podem tomar decisões, aprender continuamente e executar tarefas complexas de forma independente. Diferente dos chatbots que apenas respondem perguntas, nossos agentes podem integrar com sistemas, analisar dados, executar processos completos e evoluir constantemente através de machine learning."
    },
    {
      id: "2",
      icon: Clock,
      question: "Quanto tempo leva para implementar os agentes na minha empresa?",
      answer: "O processo completo leva entre 6-8 semanas, desde a consulta inicial até o go-live. Isso inclui análise detalhada (1-2 semanas), desenvolvimento personalizado (2-4 semanas), implementação (1-2 semanas) e otimização inicial. O cronograma pode variar dependendo da complexidade e tamanho do projeto."
    },
    {
      id: "3",
      icon: Zap,
      question: "Os agentes podem se integrar com nossos sistemas existentes?",
      answer: "Sim, completamente. Nossos agentes são desenvolvidos para integração universal com qualquer sistema, API, banco de dados ou plataforma existente. Utilizamos tecnologias modernas de integração que garantem compatibilidade total sem necessidade de reestruturação dos seus sistemas atuais."
    },
    {
      id: "4",
      icon: User,
      question: "Preciso de uma equipe técnica para gerenciar os agentes?",
      answer: "Não necessariamente. Nossos agentes são projetados para operação autônoma com interface intuitiva. Oferecemos treinamento completo para sua equipe e suporte 24/7. A manutenção é mínima e a maioria das otimizações acontece automaticamente através do aprendizado contínuo."
    },
    {
      id: "5",
      icon: BookOpen,
      question: "Como os agentes aprendem e evoluem ao longo do tempo?",
      answer: "Nossos agentes utilizam machine learning avançado, processamento de linguagem natural e análise preditiva. Eles aprendem com cada interação, identificam padrões nos dados, ajustam automaticamente suas respostas e processos, e se adaptam às mudanças no seu negócio sem intervenção manual."
    },
    {
      id: "6",
      icon: Headphones,
      question: "Que tipo de suporte oferecem após a implementação?",
      answer: "Oferecemos suporte completo 24/7 incluindo: monitoramento contínuo de performance, otimizações automáticas, atualizações regulares, treinamento adicional da equipe, relatórios detalhados de performance, e um gerente de conta dedicado para garantir o sucesso contínuo."
    },
    {
      id: "7",
      icon: Settings,
      question: "Os agentes podem trabalhar com nossa indústria específica?",
      answer: "Absolutamente. Nossos agentes são completamente personalizados para cada indústria e negócio. Temos experiência em diversos setores incluindo e-commerce, saúde, finanças, manufatura, educação, e muitos outros. Cada agente é treinado com conhecimento específico do seu setor."
    },
    {
      id: "8",
      icon: Target,
      question: "Qual é o investimento necessário para começar?",
      answer: "O investimento varia de acordo com o escopo e complexidade do projeto. Oferecemos consulta gratuita para análise das suas necessidades e elaboração de proposta personalizada. Também disponibilizamos modelos de pagamento flexíveis e calculadora de ROI para demonstrar o retorno esperado."
    }
  ];

  return (
    <motion.section 
      id="faq" 
      className="section-spacing"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="font-poppins text-[44px] font-bold mb-6">
            Dúvidas{" "}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="font-inter text-[18px] text-muted-foreground">
            Encontre respostas para as principais questões sobre nossos agentes autônomos de IA.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto bg-card/30 backdrop-blur-md border border-border/30 rounded-lg shadow-lg">
          <div>
            {faqs.map(({ id, icon: Icon, question, answer }) => {
              const isOpen = openItem === id;

              return (
                <div
                  key={id}
                  className="border-t border-border/30 first:border-t-0"
                >
                  <button
                    onClick={() => toggleItem(id)}
                    aria-expanded={isOpen}
                    className="flex items-center justify-between w-full px-6 py-4 text-foreground text-base font-medium cursor-pointer bg-transparent transition-colors duration-300 hover:bg-card/50 select-none focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className="w-5 h-5 text-primary flex-shrink-0"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      <span className="text-left">{question}</span>
                    </div>

                    <div className="relative w-4 h-4 flex-shrink-0">
                      <Plus
                        className={`absolute inset-0 text-foreground transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      <Minus
                        className={`absolute inset-0 text-foreground transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </div>
                  </button>

                  {/* Content wrapper */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? contentRefs.current[id]?.scrollHeight : 0,
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >

                    <div
                      ref={(el) => {
                        contentRefs.current[id] = el;
                      }}
                      className="px-6 pb-4 text-muted-foreground text-sm leading-relaxed select-text"
                    >
                      {answer}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-glow rounded-xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe de especialistas está pronta para esclarecer qualquer questão e 
              ajudar você a encontrar a solução perfeita para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Falar com Especialista
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-border/50 hover:bg-card/50 backdrop-blur-sm"
              >
                Agendar Consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
