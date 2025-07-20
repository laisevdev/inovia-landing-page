import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram,
  ArrowUp 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const companyLinks = [
    { name: "Sobre Nós", href: "#" },
    { name: "Nossa Equipe", href: "#" },
    { name: "Carreiras", href: "#" },
    { name: "Imprensa", href: "#" },
  ];

  const solutionLinks = [
    { name: "Agentes de Atendimento", href: "#" },
    { name: "Análise Preditiva", href: "#" },
    { name: "Automação de Processos", href: "#" },
    { name: "Integração de Sistemas", href: "#" },
  ];

  const resourceLinks = [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Documentação", href: "#" },
    { name: "Webinars", href: "#" },
  ];

  const legalLinks = [
    { name: "Política de Privacidade", href: "#" },
    { name: "Termos de Uso", href: "#" },
    { name: "LGPD", href: "#" },
    { name: "Cookies", href: "#" },
  ];

  return (
    <footer className="relative bg-background-secondary border-t border-border/50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold gradient-text mb-6">InovIA</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
              Revolucionamos negócios com agentes autônomos de IA super personalizados. 
              Transforme sua empresa com tecnologia de ponta que entrega resultados reais.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground">contato@inovia.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground">+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Empresa</h4>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Soluções</h4>
            <ul className="space-y-4">
              {solutionLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Recursos</h4>
            <ul className="space-y-4">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-12 border-t border-border/50">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold text-foreground mb-4">
              Fique por dentro das inovações em IA
            </h4>
            <p className="text-muted-foreground mb-8">
              Receba insights exclusivos, cases de sucesso e tendências em agentes autônomos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 bg-card border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button className="btn-hero whitespace-nowrap">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border/50 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2024 InovIA. Todos os direitos reservados.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-card hover:bg-primary/10 border border-border/50 rounded-lg flex items-center justify-center transition-all duration-200 hover:border-primary/30"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-card hover:bg-primary/10 border border-border/50 rounded-lg flex items-center justify-center transition-all duration-200 hover:border-primary/30"
              >
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-card hover:bg-primary/10 border border-border/50 rounded-lg flex items-center justify-center transition-all duration-200 hover:border-primary/30"
              >
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 z-50"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-6 w-6 text-primary-foreground" />
      </button>
    </footer>
  );
};

export default Footer;