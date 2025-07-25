import { motion } from "framer-motion";
import { TrendingDown, Clock, RotateCcw, UserX, DollarSign } from "lucide-react";

const CostComparisonSection = () => {
  const costs = [
    {
      value: "R$ 2.000",
      label: "Média de salário bruto mensal",
      description: "Mesmo que produza pouco, o custo continua alto todo mês.",
    },
    {
      value: "+ R$ 1.000",
      label: "INSS, FGTS, Férias, 13°",
      description: "Você paga para contratar, manter e ainda para demitir.",
    },
    {
      value: "R$ 400",
      label: "em infraestrutura",
      description: "Computador, energia, internet e espaço físico",
    },
  ];

  const limitations = [
    {
      icon: Clock,
      title: "Limite de 8h",
      subtitle: "por dia",
      description: "Sem finais de semana, feriados ou virada de plantão.",
    },
    {
      icon: RotateCcw,
      title: "Rotatividade",
      subtitle: "e Treinamento",
      description: "Perde um, começa tudo do zero",
    },
    {
      icon: UserX,
      title: "Falta de",
      subtitle: "Padronização",
      description: "Cada atendente responde de um jeito",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            VEJA A DIFERENÇA DE{" "}
            <span className="text-primary">CUSTOS:</span>
          </h2>
          <div className="text-2xl md:text-3xl font-semibold mb-6">
            <span className="text-red-400">FUNCIONÁRIO CLT</span>
            <span className="text-muted-foreground mx-4">VS</span>
            <span className="text-primary">INTELIGÊNCIA ARTIFICIAL</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Entenda o peso de manter um atendente tradicional CLT, com altos custos fixos, baixa 
            escalabilidade e diversas limitações operacionais.
          </p>
        </motion.div>

        {/* Cost Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          {costs.map((cost, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-900/80 to-red-800/60 backdrop-blur-sm rounded-xl p-6 border border-red-700/50 hover:border-red-600/70 transition-colors"
            >
              <div className="text-2xl font-bold text-red-200 mb-2">{cost.value}</div>
              <div className="text-lg font-semibold text-red-100 mb-3">{cost.label}</div>
              <div className="text-red-200/80 text-sm">{cost.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Limitation Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {limitations.map((limitation, index) => {
            const Icon = limitation.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-900/80 to-red-800/60 backdrop-blur-sm rounded-xl p-6 border border-red-700/50 hover:border-red-600/70 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-red-300" />
                  <div>
                    <div className="text-xl font-bold text-red-200">{limitation.title}</div>
                    <div className="text-lg font-semibold text-red-100">{limitation.subtitle}</div>
                  </div>
                </div>
                <div className="text-red-200/80 text-sm">{limitation.description}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Total Cost Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-red-900/90 to-red-800/70 backdrop-blur-sm rounded-2xl p-8 border border-red-700/50 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="text-4xl md:text-5xl font-bold text-primary">R$ 40.800</div>
          </div>
          <div className="text-xl font-semibold text-red-100 mb-4">
            Média de gastos anuais somente com 1 funcionário.
          </div>
          <div className="text-red-200/90 text-base max-w-3xl mx-auto">
            Esse é o custo anual de apenas 1 funcionário. E com apenas 1 pessoa você não vai 
            escalar su negócio. Na prática, precisaria de 2 ou mais pessoas, multiplicando mais seus gastos.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostComparisonSection;