import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Check, Shield, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const formSchema = z.object({
  nome_completo: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email_corporativo: z.string().email("Email inválido"),
  empresa: z.string().min(2, "Nome da empresa é obrigatório"),
  setor_atuacao: z.string().min(1, "Setor de atuação é obrigatório"),
  numero_funcionarios: z.string().optional(),
  desafios_objetivos: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const DemoRequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const setorAtuacao = watch("setor_atuacao");
  const numeroFuncionarios = watch("numero_funcionarios");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const insertData = {
        nome_completo: data.nome_completo,
        email_corporativo: data.email_corporativo,
        empresa: data.empresa,
        setor_atuacao: data.setor_atuacao,
        numero_funcionarios: data.numero_funcionarios || null,
        desafios_objetivos: data.desafios_objetivos || null,
      };

      const { error } = await supabase
        .from('demo_requests')
        .insert(insertData);

      if (error) {
        throw error;
      }

      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Entraremos em contato em breve para agendar sua demonstração.",
      });
      
      reset();
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro ao enviar solicitação",
        description: "Tente novamente ou entre em contato conosco.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      className="py-20 bg-background"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Solicite uma Demonstração Gratuita
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário e receba uma análise personalizada do potencial de IA para seu negócio
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome Completo */}
              <div className="space-y-2">
                <Label htmlFor="nome_completo" className="text-sm font-medium">
                  Nome Completo <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="nome_completo"
                  placeholder="Seu nome"
                  {...register("nome_completo")}
                  className={errors.nome_completo ? "border-destructive" : ""}
                />
                {errors.nome_completo && (
                  <p className="text-sm text-destructive">{errors.nome_completo.message}</p>
                )}
              </div>

              {/* Email Corporativo */}
              <div className="space-y-2">
                <Label htmlFor="email_corporativo" className="text-sm font-medium">
                  Email Corporativo <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email_corporativo"
                  type="email"
                  placeholder="seu@empresa.com"
                  {...register("email_corporativo")}
                  className={errors.email_corporativo ? "border-destructive" : ""}
                />
                {errors.email_corporativo && (
                  <p className="text-sm text-destructive">{errors.email_corporativo.message}</p>
                )}
              </div>
            </div>

            {/* Empresa */}
            <div className="space-y-2">
              <Label htmlFor="empresa" className="text-sm font-medium">
                Empresa <span className="text-destructive">*</span>
              </Label>
              <Input
                id="empresa"
                placeholder="Nome da sua empresa"
                {...register("empresa")}
                className={errors.empresa ? "border-destructive" : ""}
              />
              {errors.empresa && (
                <p className="text-sm text-destructive">{errors.empresa.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Setor de Atuação */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  Setor de Atuação <span className="text-destructive">*</span>
                </Label>
                <Select onValueChange={(value) => setValue("setor_atuacao", value)} value={setorAtuacao}>
                  <SelectTrigger className={errors.setor_atuacao ? "border-destructive" : ""}>
                    <SelectValue placeholder="Selecione o setor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tecnologia">Tecnologia</SelectItem>
                    <SelectItem value="financeiro">Financeiro</SelectItem>
                    <SelectItem value="saude">Saúde</SelectItem>
                    <SelectItem value="educacao">Educação</SelectItem>
                    <SelectItem value="varejo">Varejo</SelectItem>
                    <SelectItem value="manufactura">Manufatura</SelectItem>
                    <SelectItem value="servicos">Serviços</SelectItem>
                    <SelectItem value="imobiliario">Imobiliário</SelectItem>
                    <SelectItem value="alimentacao">Alimentação</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
                {errors.setor_atuacao && (
                  <p className="text-sm text-destructive">{errors.setor_atuacao.message}</p>
                )}
              </div>

              {/* Número de Funcionários */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  Número de Funcionários
                </Label>
                <Select onValueChange={(value) => setValue("numero_funcionarios", value)} value={numeroFuncionarios}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tamanho da empresa" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 funcionários</SelectItem>
                    <SelectItem value="11-50">11-50 funcionários</SelectItem>
                    <SelectItem value="51-200">51-200 funcionários</SelectItem>
                    <SelectItem value="201-500">201-500 funcionários</SelectItem>
                    <SelectItem value="500+">500+ funcionários</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Desafios e Objetivos */}
            <div className="space-y-2">
              <Label htmlFor="desafios_objetivos" className="text-sm font-medium">
                Desafios e Objetivos
              </Label>
              <Textarea
                id="desafios_objetivos"
                placeholder="Conte-nos sobre os principais desafios da sua empresa e como podemos ajudar..."
                rows={4}
                {...register("desafios_objetivos")}
              />
            </div>

            {/* Botão de Submit */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                size="lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send size={20} />
                    Solicitar Demonstração Gratuita
                  </div>
                )}
              </Button>
            </div>
          </form>

          {/* Features */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8 pt-8 border-t border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check size={16} className="text-green-500" />
              <span>100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield size={16} className="text-blue-500" />
              <span>Sem Compromisso</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock size={16} className="text-orange-500" />
              <span>Resposta Rápida</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DemoRequestForm;