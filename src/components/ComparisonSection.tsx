import { Check, X, Zap, Brain } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      feature: "Disponibilidade",
      chatbot: "Limitada a horário comercial",
      chatbotIcon: X,
      agent: "24/7 sem interrupções",
      agentIcon: Check
    },
    {
      feature: "Aprendizado",
      chatbot: "Respostas pré-programadas",
      chatbotIcon: X,
      agent: "Aprendizado contínuo e evolutivo",
      agentIcon: Check
    },
    {
      feature: "Tarefas Complexas",
      chatbot: "Apenas respostas simples",
      chatbotIcon: X,
      agent: "Execução de processos completos",
      agentIcon: Check
    },
    {
      feature: "Integração",
      chatbot: "Limitada a chat",
      chatbotIcon: X,
      agent: "Integração com todos os sistemas",
      agentIcon: Check
    },
    {
      feature: "Personalização",
      chatbot: "Templates genéricos",
      chatbotIcon: X,
      agent: "100% personalizado para seu negócio",
      agentIcon: Check
    },
    {
      feature: "Análise de Dados",
      chatbot: "Não disponível",
      chatbotIcon: X,
      agent: "Análise preditiva avançada",
      agentIcon: Check
    },
    {
      feature: "Tomada de Decisão",
      chatbot: "Não possui",
      chatbotIcon: X,
      agent: "Decisões inteligentes autônomas",
      agentIcon: Check
    },
    {
      feature: "Escalabilidade",
      chatbot: "Limitada",
      chatbotIcon: X,
      agent: "Infinitamente escalável",
      agentIcon: Check
    }
  ];

  return (
    <section className="section-spacing bg-background-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins text-[44px] font-bold mb-6">
            <span className="gradient-text">Chatbot Tradicional</span>{" "}
            vs{" "}
            <span className="gradient-text">Agente de IA</span>
          </h2>
          <p className="font-inter text-[18px] text-muted-foreground max-w-3xl mx-auto">
            Veja a diferença revolucionária entre tecnologias antigas e a nova geração de IA autônoma.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          {/* Headers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div></div>
            
            {/* Chatbot Header */}
            <div className="glass-card text-center bg-destructive/5 border-destructive/20">
              <div className="w-16 h-16 bg-destructive/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Chatbot Tradicional</h3>
              <p className="text-sm text-muted-foreground">Tecnologia limitada</p>
            </div>

            {/* Agent Header */}
            <div className="glass-card text-center bg-primary/5 border-primary/20 pulse-glow">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Agente Autônomo InovIA</h3>
              <p className="text-sm text-primary">Tecnologia revolucionária</p>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-4">
            {comparisons.map((item, index) => (
              <div 
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:bg-card-accent/50 transition-all duration-300"
              >
                {/* Feature Name */}
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">{item.feature}</h4>
                </div>

                {/* Chatbot */}
                <div className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                  <item.chatbotIcon className="h-5 w-5 text-destructive flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item.chatbot}</span>
                </div>

                {/* Agent */}
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <item.agentIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item.agent}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Summary */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chatbot Summary */}
            <div className="glass-card bg-destructive/5 border-destructive/20 text-center">
              <h3 className="text-xl font-bold text-destructive mb-4">Chatbot Tradicional</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Respostas limitadas e pré-definidas</li>
                <li>• Não aprende com interações</li>
                <li>• Funcionalidade básica de FAQ</li>
                <li>• Requer constante manutenção manual</li>
              </ul>
            </div>

            {/* Agent Summary */}
            <div className="glass-card bg-primary/5 border-primary/20 text-center pulse-glow">
              <h3 className="text-xl font-bold text-primary mb-4">Agente Autônomo InovIA</h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• Inteligência adaptativa e evolutiva</li>
                <li>• Execução de tarefas complexas</li>
                <li>• Integração total com seus sistemas</li>
                <li>• Melhoria contínua automática</li>
              </ul>
              <div className="mt-6">
                <button className="btn-hero w-full">
                  Fazer a Migração
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;