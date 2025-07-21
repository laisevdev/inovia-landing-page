import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MessageSquare, 
  Phone, 
  Cog, 
  TrendingDown, 
  UserCheck,
  ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Calendar,
      title: "IA de Agendamentos",
      description: "Agente que gerencia automaticamente sua agenda, marca reuniões e confirma compromissos com inteligência total.",
      features: ["Agendamento automático", "Confirmação inteligente", "Otimização de horários"]
    },
    {
      icon: MessageSquare,
      title: "Atendente IA WhatsApp Humanizado",
      description: "Conversas naturais que seus clientes não conseguem distinguir de um atendimento humano real.",
      features: ["Conversação natural", "Respostas contextuais", "Integração WhatsApp"]
    },
    {
      icon: Phone,
      title: "Agente IA de Ligação",
      description: "Agente que faz e recebe ligações com voz humana, conduzindo conversas complexas e qualificando leads.",
      features: ["Voz humanizada", "Qualificação de leads", "Scripts inteligentes"]
    },
    {
      icon: Cog,
      title: "Automação de Tarefas Repetitivas",
      description: "Elimine trabalhos manuais com agentes que executam tarefas repetitivas com precisão 24/7.",
      features: ["Processos automatizados", "Execução contínua", "Zero erros humanos"]
    },
    {
      icon: TrendingDown,
      title: "Redução de Custos Operacionais",
      description: "Diminua drasticamente seus custos operacionais com eficiência máxima e ROI comprovado.",
      features: ["Redução de 60-80% dos custos", "ROI em 30 dias", "Eficiência comprovada"]
    },
    {
      icon: UserCheck,
      title: "Sistema de Follow-UP",
      description: "Nunca mais perca uma oportunidade com follow-ups automáticos personalizados e estratégicos.",
      features: ["Follow-up inteligente", "Timing personalizado", "Conversão otimizada"]
    }
  ];

  return (
    <motion.section 
      id="solucoes" 
      className="section-spacing bg-background-secondary/50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins text-[44px] font-bold mb-6">
            Soluções de IA que{" "}
            <span className="gradient-text">Transformam Negócios</span>
          </h2>
          <p className="font-inter text-[18px] text-muted-foreground max-w-3xl mx-auto">
            Nossos agentes autônomos são desenvolvidos especificamente para o seu negócio,
            garantindo máxima eficiência.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={`glass-card group transition-all duration-300 cursor-pointer ${
                index === 1 || index === 4 
                  ? "hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50 hover:bg-primary/5" 
                  : "hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30"
              }`}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-r from-primary to-primary-glow rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {solution.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
                {solution.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm text-muted-foreground text-justify">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More */}
              <div className="flex items-center text-primary text-sm font-medium group-hover:text-primary-glow transition-colors cursor-pointer">
                <span>Saiba mais</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="glass-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para Revolucionar seu Negócio?
            </h3>
            <p className="text-muted-foreground mb-6 text-justify">
              Descubra como nossos agentes autônomos podem ser personalizados para suas necessidades específicas.
            </p>
            <Button className="btn-hero">
              Consulta Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SolutionsSection;