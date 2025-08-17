import { 
  Clock, 
  Brain, 
  Target, 
  Zap, 
  Shield, 
  TrendingUp,
  Database,
  Network
} from "lucide-react";
import { motion } from "framer-motion";

interface AgentCapabilitiesSectionProps {
  id?: string;
}

const AgentCapabilitiesSection = ({ id }: AgentCapabilitiesSectionProps) => {
  const capabilities = [
    {
      icon: Clock,
      title: "Operação 24/7",
      description: "Trabalham ininterruptamente, sem pausas, feriados ou períodos de descanso.",
      benefit: "Produtividade contínua"
    },
    {
      icon: Brain,
      title: "Aprendizado Contínuo",
      description: "Evoluem constantemente através de machine learning e análise de dados.",
      benefit: "Melhoria constante"
    },
    {
      icon: Target,
      title: "Precisão Cirúrgica",
      description: "Executam tarefas com precisão de 99.8%, eliminando erros humanos.",
      benefit: "Zero margem de erro"
    },
    {
      icon: Zap,
      title: "Velocidade Extrema",
      description: "Processam milhares de tarefas simultaneamente em frações de segundo.",
      benefit: "10x mais rápido"
    },
    {
      icon: Shield,
      title: "Segurança Máxima",
      description: "Protocolos avançados de segurança e criptografia de dados.",
      benefit: "Proteção total"
    },
    {
      icon: TrendingUp,
      title: "Escalabilidade Infinita",
      description: "Adaptam-se instantaneamente ao crescimento da demanda do seu negócio.",
      benefit: "Crescimento sem limites"
    },
    {
      icon: Database,
      title: "Integração Universal",
      description: "Conectam-se com qualquer sistema, API ou plataforma existente.",
      benefit: "Compatibilidade total"
    },
    {
      icon: Network,
      title: "Análise Multicanal",
      description: "Monitoram e analisam dados de múltiplas fontes simultaneamente.",
      benefit: "Visão 360°"
    }
  ];

  return (
    <motion.section 
      id={id || "capacidades"}
      className="section-spacing"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins text-[44px] font-bold mb-6">
            O que nossos{" "}
            <span className="gradient-text">Agentes de IA</span>{" "}
            podem fazer
          </h2>
          <p className="font-inter text-[18px] text-muted-foreground max-w-3xl mx-auto">
            Capacidades extraordinárias que superam as limitações humanas, 
            entregando resultados consistentes e revolucionários para sua empresa.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="glass-card group hover:bg-card-accent/50 transition-all duration-300 hover:scale-105"
            >
              {/* Icon with gradient background */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="h-8 w-8 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {capability.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {capability.description}
              </p>

              {/* Benefit Badge */}
              <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-3 py-1 text-xs font-medium text-primary">
                {capability.benefit}
              </div>
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default AgentCapabilitiesSection;