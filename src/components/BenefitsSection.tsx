import { 
  DollarSign, 
  TrendingUp, 
  Clock, 
  Users, 
  Shield, 
  Zap,
  ArrowRight 
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Redução de Custos",
      description: "Diminua até 70% dos custos operacionais com automação inteligente e eliminação de processos manuais.",
      metric: "70%",
      metricLabel: "Economia",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Aumento de Produtividade",
      description: "Multiplique a capacidade produtiva da sua equipe com agentes que trabalham 24/7 sem parar.",
      metric: "10x",
      metricLabel: "Mais Produtivo",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Clock,
      title: "Tempo de Resposta",
      description: "Respostas instantâneas e processamento em tempo real para máxima satisfação do cliente.",
      metric: "<1s",
      metricLabel: "Resposta",
      color: "from-accent to-accent-glow"
    },
    {
      icon: Users,
      title: "Satisfação do Cliente",
      description: "Experiências personalizadas e atendimento de qualidade superior elevam a satisfação.",
      metric: "95%",
      metricLabel: "Satisfação",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Redução de Erros",
      description: "Elimine erros humanos com precisão de 99.8% em todas as operações automatizadas.",
      metric: "99.8%",
      metricLabel: "Precisão",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "ROI Acelerado",
      description: "Retorno sobre investimento em apenas 90 dias com resultados mensuráveis e comprovados.",
      metric: "90",
      metricLabel: "Dias p/ ROI",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="beneficios" className="section-spacing bg-background-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins text-[44px] font-bold mb-6">
            Benefícios Reais com{" "}
            <span className="gradient-text">Agentes Autônomos de IA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados mensuráveis e impacto imediato no seu negócio. 
            Veja como nossa tecnologia transforma empresas em líderes de mercado.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glass-card group hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Metric */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <div className="text-right">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                      {benefit.metric}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {benefit.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Calculator CTA */}
        <div className="glass-card max-w-4xl mx-auto bg-primary/5 border-primary/20 pulse-glow">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Calcule seu ROI Personalizado
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Descubra quanto sua empresa pode economizar e ganhar com agentes autônomos. 
              Nossa calculadora mostra projeções reais baseadas no seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero group">
                Calcular Meu ROI
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="bg-transparent border border-primary/30 hover:bg-primary/10 text-primary px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Ver Case Studies
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Empresas Transformadas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">99.8%</div>
            <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">$2.5M</div>
            <div className="text-sm text-muted-foreground">Economia Gerada</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-warning mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Suporte Disponível</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;