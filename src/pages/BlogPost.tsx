import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import { Calendar, Clock, ArrowLeft, ThumbsUp } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import DemoModal from "@/components/DemoModal";
import { SocialShareButtons } from "@/components/SocialShareButtons";
import { SEOHead } from "@/components/SEOHead";
import { ArticleSchema } from "@/components/ArticleSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { RelatedArticles } from "@/components/RelatedArticles";
import { useLikes } from "@/context/LikesContext";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  const { likePost, isPostLiked, getPostLikes } = useLikes();

  const blogPosts = [
    {
      id: 1,
      slug: "como-a-ia-esta-transformando-o-atendimento-ao-cliente",
      title: "Como a IA está transformando o atendimento ao cliente",
      subtitle: "Sua Concorrência Já Usa IA no Atendimento. E Você?",
      description: "Descubra como agentes virtuais inteligentes estão revolucionando a experiência do cliente e aumentando a eficiência das empresas.",
      date: "2025-09-08",
      readTime: "12 min",
      category: "Tecnologia",
      likes: 24,
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-muted-foreground mb-8">Como usar agentes virtuais para reduzir custos, escalar seu negócio e transformar o atendimento ao cliente em uma máquina de vendas.</p>
          
          <p>Empreendedor, você sabe que cada cliente conta. Em um mercado acirrado, a experiência que você oferece pode ser a única coisa que diferencia sua marca da concorrência. Mas como entregar um atendimento excepcional, 24 horas por dia, sem explodir seu orçamento ou contratar um exército de funcionários?</p>
          
          <p><strong>A resposta é mais acessível do que você imagina: Inteligência Artificial (IA).</strong></p>
          
          <p>Se você ainda pensa em IA como uma tecnologia cara e complexa, restrita a gigantes da tecnologia, está na hora de rever seus conceitos. Hoje, a IA é uma ferramenta estratégica e acessível que pode nivelar o jogo, permitindo que sua empresa não apenas compita, mas se destaque.</p>
          
          <h2 class="text-3xl font-bold mt-12 mb-6 text-foreground">Menos Custos, Mais Eficiência: O ROI da IA</h2>
          
          <p>O principal benefício para qualquer negócio é o retorno sobre o investimento (ROI). No atendimento ao cliente, a IA oferece isso de forma clara e direta.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4 text-foreground">Automação de Tarefas Repetitivas</h3>
          <p>Quantas horas sua equipe gasta respondendo às mesmas perguntas todos os dias ("Onde está meu pedido?", "Qual o horário de funcionamento?", "Como funciona a troca?")? Um agente virtual inteligente resolve 80% dessas demandas instantaneamente, liberando sua equipe para focar em vendas complexas e na fidelização de clientes.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4 text-foreground">Operação 24/7 sem Custo Adicional</h3>
          <p>Seu negócio pode continuar atendendo e até vendendo enquanto você dorme. Um agente virtual não precisa de pausas, férias ou pagamento de horas extras. Ele é seu funcionário mais produtivo, trabalhando 24 horas por dia para garantir que nenhuma oportunidade seja perdida.</p>
          
          <h2 class="text-3xl font-bold mt-12 mb-6 text-foreground">Escale seu Atendimento, Não seus Problemas</h2>
          
          <p>Todo empreendedor sonha em crescer. Mas o crescimento traz desafios, especialmente no atendimento. Mais clientes significam mais chamados, mais e-mails e mais pressão sobre sua equipe.</p>
          
          <p><strong>A IA resolve o dilema da escalabilidade.</strong></p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4 text-foreground">Capacidade Ilimitada</h3>
          <p>Um agente virtual pode atender a 10, 100 ou 10.000 clientes simultaneamente, com a mesma qualidade e agilidade. Isso é crucial durante picos de demanda, como lançamentos de produtos ou promoções da Black Friday. Você escala suas vendas sem escalar os custos de suporte.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4 text-foreground">Consistência e Padronização</h3>
          <p>A IA garante que todos os clientes recebam a mesma informação precisa e alinhada com a sua marca, eliminando erros humanos e garantindo um padrão de qualidade que fortalece sua reputação.</p>
          
          <h2 class="text-3xl font-bold mt-12 mb-6 text-foreground">Transforme Dados em Vantagem Competitiva</h2>
          
          <p>Cada interação de um cliente é uma fonte de dados valiosos. Você está aproveitando isso? A IA não apenas atende; ela aprende.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4 text-foreground">Identifique Padrões e Oportunidades</h3>
          <p>Quais são as dúvidas mais comuns? Quais produtos geram mais problemas? A IA compila e analisa esses dados em tempo real, fornecendo insights poderosos para você melhorar seus produtos, otimizar seu marketing e tomar decisões estratégicas baseadas em informações concretas, não em achismos.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4 text-foreground">Atendimento Preditivo</h3>
          <p>Com dados suficientes, a IA pode começar a prever as necessidades do cliente, oferecendo soluções antes mesmo que o problema surja. Esse nível de proatividade não apenas encanta o cliente, mas o fideliza a longo prazo.</p>
          
          <h2 class="text-3xl font-bold mt-12 mb-6 text-foreground">O Futuro é a Colaboração Inteligente</h2>
          
          <p>Adotar a IA não significa demitir sua equipe. Significa torná-la mais poderosa. Pense na IA como o primeiro filtro: ela resolve o volume e as questões simples, enquanto seus melhores vendedores e atendentes usam seu talento para o que realmente importa:</p>
          
          <ul class="list-disc pl-6 space-y-2 my-6">
            <li>Resolver problemas complexos.</li>
            <li>Negociar com clientes estratégicos.</li>
            <li>Construir relacionamentos que geram lealdade.</li>
          </ul>
          
          <div class="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8">
            <p class="text-lg font-medium text-foreground">Para o empreendedor, a Inteligência Artificial deixou de ser uma opção e tornou-se uma necessidade estratégica. É a ferramenta que permite otimizar recursos, entregar uma experiência de cliente superior e, finalmente, focar no que você faz de melhor: fazer seu negócio crescer.</p>
          </div>
        </div>
      `
    },
    {
      id: 2,
      slug: "roi-de-agentes-virtuais",
      title: "ROI de agentes virtuais: números que impressionam",
      subtitle: "Análise detalhada do retorno sobre investimento",
      description: "Análise detalhada do retorno sobre investimento ao implementar agentes virtuais no seu negócio.",
      date: "2025-09-09",
      readTime: "7 min",
      category: "Negócios",
      likes: 18,
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-muted-foreground mb-8">Em breve, análise completa sobre o retorno sobre investimento de agentes virtuais.</p>
          <p>Este artigo está sendo desenvolvido e em breve trará dados concretos sobre ROI, estudos de caso e métricas de sucesso.</p>
        </div>
      `
    },
    {
      id: 3,
      slug: "implementacao-de-ia-guia-completo",
      title: "Implementação de IA: guia completo para empresas",
      subtitle: "Passo a passo para implementar soluções de IA",
      description: "Passo a passo para implementar soluções de inteligência artificial na sua empresa de forma eficiente.",
      date: "2025-09-10",
      readTime: "10 min",
      category: "Tutorial",
      likes: 15,
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-muted-foreground mb-8">Guia completo para implementar IA na sua empresa será publicado em breve.</p>
          <p>Este artigo abordará desde o planejamento inicial até a implementação completa de soluções de IA.</p>
        </div>
      `
    }
  ];

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
          <Button asChild>
            <Link to="/blog">Voltar ao blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    const wasLiked = isPostLiked(post.id);
    likePost(post.id);
    
    toast({
      description: !wasLiked ? "Obrigado pelo like! 👍" : "Like removido!",
      duration: 2000,
    });
  };

  const isLiked = isPostLiked(post.id);
  const likes = getPostLikes(post.id);


  const currentUrl = `https://inoviatech.com.br/blog/${post.slug}`;
  
  const breadcrumbItems = [
    { name: "Início", url: "https://inoviatech.com.br" },
    { name: "Blog", url: "https://inoviatech.com.br/blog" },
    { name: post.title, url: currentUrl }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${post.subtitle || post.title} | Blog InovIA`}
        description={post.description}
        canonical={currentUrl}
        type="article"
        author="Laíse Alves"
        publishedTime={new Date(post.date).toISOString()}
        modifiedTime={new Date(post.date).toISOString()}
        tags={["inteligência artificial", "IA", post.category, "atendimento ao cliente", "automação"]}
      />
      <ArticleSchema article={post} url={currentUrl} />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Início</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="max-w-[200px] truncate">{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {post.category}
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
            {post.subtitle || post.title}
          </h1>
          
          {post.subtitle && (
            <p className="text-xl text-muted-foreground mb-6 text-justify">
              {post.description}
            </p>
          )}

          <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-border/50">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('pt-BR')}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={`transition-colors ${
                  isLiked 
                    ? 'text-primary hover:text-primary/80' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <ThumbsUp className={`w-4 h-4 transition-all ${isLiked ? 'fill-current' : ''}`} />
                <span className="ml-1">{likes}</span>
              </Button>
            </div>
          </div>
          
          {/* Social Share Buttons */}
          <div className="mt-4">
            <SocialShareButtons
              title={post.title}
              description={post.description}
              url={window.location.href}
            />
          </div>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground [&_p]:text-justify [&_li]:text-justify"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-border/50">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                onClick={handleLike}
                className={`transition-colors ${
                  isLiked 
                    ? 'text-primary hover:text-primary/80' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <ThumbsUp className={`w-4 h-4 transition-all ${isLiked ? 'fill-current' : ''}`} />
                <span className="ml-2">
                  {isLiked ? 'Gostou do artigo!' : 'Gostou do artigo?'}
                </span>
              </Button>
            </div>
            
            <DemoModal>
              <Button>
                Solicitar demonstração
              </Button>
            </DemoModal>
          </div>
          
          {/* Social Share Buttons Footer */}
          <div className="border-t border-border/50 pt-6">
            <SocialShareButtons
              title={post.title}
              description={post.description}
              url={window.location.href}
            />
          </div>
        </footer>

        {/* Related Articles */}
        <RelatedArticles 
          currentArticleId={post.id} 
          articles={blogPosts}
          maxResults={2}
        />

        {/* Navigation */}
        <nav className="mt-12 pt-8 border-t border-border/50">
          <div className="flex justify-between items-center">
            <Button variant="ghost" asChild>
              <Link to="/blog" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar ao blog
              </Link>
            </Button>
            
            <div className="flex gap-2">
              {post.id > 1 && (
                <Button variant="outline" asChild size="sm">
                  <Link to={`/blog/${blogPosts.find(p => p.id === post.id - 1)?.slug}`}>
                    Artigo anterior
                  </Link>
                </Button>
              )}
              {post.id < blogPosts.length && (
                <Button variant="outline" asChild size="sm">
                  <Link to={`/blog/${blogPosts.find(p => p.id === post.id + 1)?.slug}`}>
                    Próximo artigo
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </nav>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost;