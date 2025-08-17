import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Footer */}
      <motion.footer 
        className="bg-background-secondary border-t border-border"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold gradient-text mb-6">InovIA</h2>
              
              <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
                Revolucionamos negócios com agentes autônomos de IA super personalizados. 
                Transforme sua empresa com tecnologia de ponta que entrega resultados reais.
              </p>

              <div className="space-y-4">
                <motion.a
                  href="mailto:contato@inovia.com.br"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-5 h-5 mr-3 text-primary group-hover:text-primary-glow transition-colors" />
                  <span>contato@inovia.com.br</span>
                </motion.a>
                
                <motion.a
                  href="https://wa.me/556599254990?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20agentes%20de%20IA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-5 h-5 mr-3 text-primary group-hover:text-primary-glow transition-colors" />
                  <span>+55 (65) 99925-4990</span>
                </motion.a>
                
                <motion.div
                  className="flex items-center text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  <span>Tangará da Serra-MT</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">Navegação</h3>
              <ul className="space-y-4">
                {[
                  { name: 'Home', id: 'hero' },
                  { name: 'Soluções', id: 'solucoes' },
                  { name: 'Capacidades', id: 'funcionalidades' },
                  { name: 'Como Funciona', id: 'etapas' },
                  { name: 'Benefícios', id: 'beneficios' }
                ].map((item, index) => (
                  <motion.li key={item.id}>
                    <motion.button
                      onClick={() => scrollToSection(item.id)}
                      className="text-muted-foreground hover:text-primary transition-colors text-left"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      {item.name}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            className="border-t border-border mt-12 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Social Media */}
              <motion.div 
                className="flex items-center space-x-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="https://www.instagram.com/inovia.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
              </motion.div>

              {/* Copyright and Legal */}
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
                <span>© {currentYear} InovIA. Todos os direitos reservados.</span>
                <motion.a
                  href="/politica-de-privacidade"
                  className="hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Política de Privacidade
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.footer>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3 bg-primary hover:bg-primary-glow text-primary-foreground rounded-full shadow-lg transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  );
};

export default Footer;