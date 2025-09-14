import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check, Clock, Shield } from "lucide-react";

interface DemoRequestModalProps {
  children: React.ReactNode;
}

export function DemoRequestModal({ children }: DemoRequestModalProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    emailCorporativo: "",
    empresa: "",
    setorAtuacao: "",
    numeroFuncionarios: "",
    desafiosObjetivos: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação dos campos obrigatórios
    if (!formData.nomeCompleto || !formData.emailCorporativo || !formData.empresa || !formData.setorAtuacao) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Aqui você pode integrar com sua API
    console.log("Dados do formulário:", formData);
    
    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato em breve para agendar sua demonstração."
    });

    setOpen(false);
    setFormData({
      nomeCompleto: "",
      emailCorporativo: "",
      empresa: "",
      setorAtuacao: "",
      numeroFuncionarios: "",
      desafiosObjetivos: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-md border border-border/50">
        <DialogHeader className="text-center space-y-4 pb-6">
          <DialogTitle className="text-3xl font-bold text-foreground">
            Solicite uma Demonstração Gratuita
          </DialogTitle>
          <p className="text-muted-foreground text-lg">
            Preencha o formulário e receba uma análise personalizada do potencial de IA para seu negócio
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nomeCompleto" className="text-foreground font-medium">
                Nome Completo <span className="text-red-500">*</span>
              </Label>
              <Input
                id="nomeCompleto"
                placeholder="Seu nome"
                value={formData.nomeCompleto}
                onChange={(e) => handleInputChange("nomeCompleto", e.target.value)}
                className="bg-background/50 border-border/50 focus:border-primary"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="emailCorporativo" className="text-foreground font-medium">
                Email Corporativo <span className="text-red-500">*</span>
              </Label>
              <Input
                id="emailCorporativo"
                type="email"
                placeholder="seu@empresa.com"
                value={formData.emailCorporativo}
                onChange={(e) => handleInputChange("emailCorporativo", e.target.value)}
                className="bg-background/50 border-border/50 focus:border-primary"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="empresa" className="text-foreground font-medium">
              Empresa <span className="text-red-500">*</span>
            </Label>
            <Input
              id="empresa"
              placeholder="Nome da sua empresa"
              value={formData.empresa}
              onChange={(e) => handleInputChange("empresa", e.target.value)}
              className="bg-background/50 border-border/50 focus:border-primary"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-foreground font-medium">
                Setor de Atuação <span className="text-red-500">*</span>
              </Label>
              <Select value={formData.setorAtuacao} onValueChange={(value) => handleInputChange("setorAtuacao", value)}>
                <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                  <SelectValue placeholder="Selecione o setor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tecnologia">Tecnologia</SelectItem>
                  <SelectItem value="varejo">Varejo</SelectItem>
                  <SelectItem value="servicos">Serviços</SelectItem>
                  <SelectItem value="saude">Saúde</SelectItem>
                  <SelectItem value="educacao">Educação</SelectItem>
                  <SelectItem value="financeiro">Financeiro</SelectItem>
                  <SelectItem value="industria">Indústria</SelectItem>
                  <SelectItem value="imobiliario">Imobiliário</SelectItem>
                  <SelectItem value="consultoria">Consultoria</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-foreground font-medium">Número de Funcionários</Label>
              <Select value={formData.numeroFuncionarios} onValueChange={(value) => handleInputChange("numeroFuncionarios", value)}>
                <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                  <SelectValue placeholder="Tamanho da empresa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1 - 10 funcionários</SelectItem>
                  <SelectItem value="11-50">11 - 50 funcionários</SelectItem>
                  <SelectItem value="51-200">51 - 200 funcionários</SelectItem>
                  <SelectItem value="201-500">201 - 500 funcionários</SelectItem>
                  <SelectItem value="500+">Mais de 500 funcionários</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="desafiosObjetivos" className="text-foreground font-medium">
              Desafios e Objetivos
            </Label>
            <Textarea
              id="desafiosObjetivos"
              placeholder="Conte-nos sobre os principais desafios da sua empresa e como podemos ajudar..."
              value={formData.desafiosObjetivos}
              onChange={(e) => handleInputChange("desafiosObjetivos", e.target.value)}
              className="bg-background/50 border-border/50 focus:border-primary min-h-[100px] resize-none"
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold py-3 text-lg"
          >
            Solicitar Demonstração Gratuita
          </Button>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-500" />
              <span>Sem Compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-500" />
              <span>Resposta Rápida</span>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}