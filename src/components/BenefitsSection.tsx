import { 
  DollarSign, 
  TrendingUp, 
  Clock, 
  Users, 
  Shield, 
  Zap,
  ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";

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
    }
  ];

  return (
    <motion.section 
      id="beneficios" 
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
            Benefícios Reais com{" "}
            <span className="gradient-text">Agentes Autônomos de IA</span>
          </h2>
          <p className="font-inter text-[18px] text-muted-foreground max-w-3xl mx-auto">
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
    </motion.section>
  );
};

export default BenefitsSection;