import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  BarChart, 
  Users, 
  ShoppingCart, 
  FileText, 
  Headphones,
  ArrowRight 
} from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: MessageSquare,
      title: "Atendimento Inteligente",
      description: "Agentes que compreendem contexto, resolvem problemas complexos e oferecem experiências personalizadas para cada cliente.",
      features: ["Compreensão de linguagem natural", "Integração com sistemas", "Aprendizado contínuo"]
    },
    {
      icon: BarChart,
      title: "Análise Preditiva",
      description: "Agentes que analisam dados em tempo real, identificam padrões e fornecem insights estratégicos para tomada de decisão.",
      features: ["Análise de big data", "Previsões precisas", "Relatórios automáticos"]
    },
    {
      icon: Users,
      title: "Gestão de Recursos Humanos",
      description: "Automatize recrutamento, treinamento e gestão de funcionários com agentes especializados em pessoas.",
      features: ["Triagem de candidatos", "Onboarding personalizado", "Análise de performance"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Inteligente",
      description: "Agentes que otimizam vendas, gerenciam estoque e personalizam a experiência de compra de cada cliente.",
      features: ["Recomendações personalizadas", "Gestão de inventário", "Otimização de preços"]
    },
    {
      icon: FileText,
      title: "Automação de Documentos",
      description: "Processamento, análise e geração automática de documentos com precisão e velocidade incomparáveis.",
      features: ["Extração de dados", "Validação automática", "Geração de relatórios"]
    },
    {
      icon: Headphones,
      title: "Suporte Técnico Avançado",
      description: "Agentes especializados que diagnosticam, resolvem e previnem problemas técnicos antes que afetem sua operação.",
      features: ["Diagnóstico automático", "Resolução proativa", "Monitoramento contínuo"]
    }
  ];

  return (
    <section id="solucoes" className="section-spacing bg-background-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluções de IA que{" "}
            <span className="gradient-text">Transformam Negócios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossos agentes autônomos são desenvolvidos especificamente para cada área do seu negócio,
            garantindo máxima eficiência e resultados mensuráveis.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="glass-card group hover:scale-105 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-r from-primary to-primary-glow rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {solution.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
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
            <p className="text-muted-foreground mb-6">
              Descubra como nossos agentes autônomos podem ser personalizados para suas necessidades específicas.
            </p>
            <Button className="btn-hero">
              Consulta Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;