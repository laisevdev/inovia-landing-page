import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const PoliticaDePrivacidade = () => {
  useEffect(() => {
    // Update page meta tags for SEO
    document.title = "Política de Privacidade | InovIA - Inteligência Artificial";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Política de Privacidade da InovIA. Saiba como coletamos, usamos e protegemos suas informações pessoais em nossa plataforma de inteligência artificial.');
    }

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://inoviatech.com.br/politica-de-privacidade');
    }

    // Structured data for privacy policy
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Política de Privacidade",
      "description": "Política de Privacidade da InovIA - Como coletamos, usamos e protegemos suas informações pessoais",
      "url": "https://inoviatech.com.br/politica-de-privacidade",
      "dateModified": "2025-08-17",
      "publisher": {
        "@type": "Organization",
        "name": "InovIA",
        "url": "https://inoviatech.com.br"
      }
    };

    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      document.title = "InovIA - Soluções em Inteligência Artificial para Negócios";
      const addedScript = document.querySelector('script[type="application/ld+json"]:not([data-original])');
      if (addedScript) {
        addedScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <header className="mb-12">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary-glow transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para a Home
            </Link>
            
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Política de Privacidade da Landing Page InovIA
            </h1>
            <p className="text-muted-foreground">
              <strong>Última atualização: 17 de agosto de 2025</strong>
            </p>
          </header>

          {/* Content */}
          <article className="prose prose-gray dark:prose-invert max-w-none">
            <section className="mb-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações quando você visita nossa plataforma em <code className="bg-muted px-1 py-0.5 rounded text-sm">inoviatech.com.br</code>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Quais dados coletamos</h2>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li><strong>Dados fornecidos diretamente</strong>: e-mail que você insere em formulários (ex.: newsletter, contato).</li>
                <li><strong>Dados coletados automaticamente</strong>: informações técnicas como endereço IP, navegador, dispositivo, data e hora de acesso, e páginas visitadas.</li>
                <li><strong>Cookies e tecnologias similares</strong>: caso sua landing utilize cookies para análise de tráfego, desempenho ou remarketing, ela estará documentada aqui (se aplicável).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Como usamos suas informações</h2>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li><strong>Comunicação</strong>: responder suas mensagens ou newsletters.</li>
                <li><strong>Análises</strong>: entender como visitantes navegam na página para melhorar ela.</li>
                <li><strong>Segurança e estabilidade</strong>: detectar e corrigir problemas técnicos.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Compartilhamento de dados</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Não vendemos ou compartilhamos seus dados pessoais com terceiros, exceto:
              </p>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li><strong>Provedores de serviços</strong> terceirizados (como hospedagem, analytics).</li>
                <li><strong>Obrigatoriedade legal</strong>, se exigido por lei.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Armazenamento e retenção</h2>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li>Reteremos seus dados somente pelo tempo necessário para cumprir os propósitos acima.</li>
                <li>Caso você solicite, podemos excluir seus dados pessoais armazenados.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Seus direitos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Você tem o direito de:
              </p>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li>Acessar os dados que coletamos sobre você.</li>
                <li>Solicitar a correção ou exclusão desses dados.</li>
                <li>Revogar seu consentimento, se tiver fornecido.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Para exercer quaisquer desses direitos, entre em contato via e-mail: <strong>contato@inovia.com.br</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Alterações na Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política de Privacidade ocasionalmente.<br />
                Atualizações significativas serão destacadas na página, com data de revisão visível.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Links e recursos de terceiros</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nossa landing pode incluir links para redes sociais ou provedores de e-mail (como Gmail, WhatsApp, Instagram).<br />
                Esses sites têm suas próprias políticas de privacidade, independentes da nossa.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Consentimento</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao usar nossa landing page, você concorda com os termos desta Política de Privacidade.
              </p>
            </section>
          </article>

          {/* Back to Home Button */}
          <div className="flex justify-center pt-8 border-t border-border">
            <Button asChild size="lg">
              <Link to="/">
                Voltar para a Home
              </Link>
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PoliticaDePrivacidade;