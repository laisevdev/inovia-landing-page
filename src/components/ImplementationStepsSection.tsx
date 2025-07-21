import { 
  MessageCircle, 
  Search, 
  Settings, 
  Rocket, 
  BarChart,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const ImplementationStepsSection = () => {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Consulta Inicial",
      description: "Analisamos seus processos atuais e identificamos oportunidades de automação com IA.",
      duration: "1-2 dias",
      deliverables: ["Análise de processos", "Mapeamento de oportunidades", "Proposta personalizada"]
    },
    {
      number: "02", 
      icon: Search,
      title: "Análise Detalhada",
      description: "Estudo profundo dos seus sistemas, dados e fluxos de trabalho para criar a arquitetura ideal.",
      duration: "3-5 dias",
      deliverables: ["Arquitetura do sistema", "Plano de integração", "Cronograma detalhado"]
    },
    {
      number: "03",
      icon: Settings,
      title: "Desenvolvimento Personalizado",
      description: "Criamos e treinamos seus agentes autônomos com foco nas suas necessidades específicas.",
      duration: "2-4 semanas",
      deliverables: ["Agentes desenvolvidos", "Treinamento especializado", "Testes iniciais"]
    },
    {
      number: "04",
      icon: Rocket,
      title: "Implementação e Deploy",
      description: "Integração completa com seus sistemas existentes e lançamento controlado dos agentes.",
      duration: "1-2 semanas",
      deliverables: ["Integração completa", "Testes finais", "Go-live controlado"]
    },
    {
      number: "05",
      icon: BarChart,
      title: "Monitoramento e Otimização",
      description: "Acompanhamento contínuo da performance e ajustes para maximizar os resultados.",
      duration: "Contínuo",
      deliverables: ["Relatórios de performance", "Otimizações contínuas", "Suporte 24/7"]
    }
  ];

  return (
    <motion.section 
      id="etapas" 
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
            Etapas de{" "}
            <span className="gradient-text">Implementação</span>
          </h2>
          <p className="font-inter text-[18px] text-muted-foreground max-w-3xl mx-auto">
            Um processo estruturado e transparente que garante a implementação perfeita 
            dos seus agentes autônomos, do conceito até os resultados.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2"></div>

          {/* Steps Grid */}
          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Step Content */}
                <div className="flex-1 max-w-xl">
                  <div className="glass-card hover:scale-105 transition-all duration-300">
                    {/* Step Number */}
                    <div className="flex items-center mb-6">
                      <span className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                        Entregas:
                      </h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Central Icon */}
                <div className="relative flex-shrink-0">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50"></div>
                  
                  {/* Icon Container */}
                  <div className="relative w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center pulse-glow">
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-xl lg:block hidden"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="mt-20">
          <div className="glass-card max-w-4xl mx-auto text-center bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Cronograma Total: 6-8 semanas
            </h3>
            <p className="text-muted-foreground mb-8">
              Da primeira consulta até ter seus agentes autônomos operando em produção, 
              oferecemos um processo rápido e eficiente.
            </p>
            
            <div className="flex justify-center">
              <button className="btn-hero group">
                Iniciar Implementação
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ImplementationStepsSection;