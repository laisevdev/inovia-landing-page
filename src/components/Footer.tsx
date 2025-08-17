import { Zap, Mail, Phone, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-lg">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">InovIA</span>
            </div>
            
            <p className="text-background/80 mb-6 max-w-md">
              Revolucionamos negócios com agentes autônomos de IA super personalizados. 
              Transforme sua empresa com tecnologia de ponta que entrega resultados reais.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <span className="text-background/80">contato@inovia.com.br</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <span className="text-background/80">+55 (65) 99925-4990</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                <span className="text-background/80">Tangará da Serra-MT</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('solucoes')} 
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Soluções
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('funcionalidades')} 
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Funcionalidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('comparacao')} 
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Comparação
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('beneficios')} 
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('implementacao')} 
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Implementação
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Casos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Suporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Legal */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a 
                href="https://www.instagram.com/inovia.tech" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-background/60">
              <span>© {currentYear} InovIA. Todos os direitos reservados.</span>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 mt-12 text-center text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">
            Pronto para transformar seu negócio?
          </h3>
          <p className="mb-6 opacity-90">
            Entre em contato conosco e descubra como a automação com IA pode revolucionar sua empresa
          </p>
          <a 
            href="https://wa.me/5565999254990?text=Ol%C3%A1+La%C3%ADse+,+quero+agendar+uma+consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors"
          >
            Começar Agora
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;