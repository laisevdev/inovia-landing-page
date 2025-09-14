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
import aiCompetitionAdvantage from "@/assets/ai-competition-advantage.jpg";
import automationEfficiency from "@/assets/automation-efficiency.jpg";
import dashboardAnalytics from "@/assets/dashboard-analytics.jpg";
import planningObjectives from "@/assets/planning-objectives.jpg";
import teamAutomationCollaboration from "@/assets/team-automation-collaboration.jpg";
import automationAnalysis from "@/assets/automation-analysis.jpg";
import automationSecurity from "@/assets/automation-security.jpg";
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
          
          <div class="my-8">
            <img src="${aiCompetitionAdvantage}" alt="Vantagem competitiva com IA no atendimento ao cliente" class="w-full rounded-lg shadow-lg" />
          </div>
          
          <h2 class="text-3xl font-bold mt-12 mb-6 text-foreground">Menos Custos, Mais Eficiência: O ROI da IA</h2>
          
          <p>O principal benefício para qualquer negócio é o retorno sobre o investimento (ROI). No atendimento ao cliente, a IA oferece isso de forma clara e direta.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4 text-foreground">Automação de Tarefas Repetitivas</h3>
          <p>Quantas horas sua equipe gasta respondendo às mesmas perguntas todos os dias ("Onde está meu pedido?", "Qual o horário de funcionamento?", "Como funciona a troca?")? Um agente virtual inteligente resolve 80% dessas demandas instantaneamente, liberando sua equipe para focar em vendas complexas e na fidelização de clientes.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4 text-foreground">Operação 24/7 sem Custo Adicional</h3>
          <p>Seu negócio pode continuar atendendo e até vendendo enquanto você dorme. Um agente virtual não precisa de pausas, férias ou pagamento de horas extras. Ele é seu funcionário mais produtivo, trabalhando 24 horas por dia para garantir que nenhuma oportunidade seja perdida.</p>
          
          <div class="my-8">
            <img src="${automationEfficiency}" alt="Automação de processos e eficiência empresarial com IA" class="w-full rounded-lg shadow-lg" />
          </div>
          
          <h2 class="text-3xl font-bold mt-12 mb-6 text-foreground">Escale seu Atendimento, Não seus Problemas</h2>
          
          <p>Todo empreendedor sonha em crescer. Mas o crescimento traz desafios, especialmente no atendimento. Mais clientes significam mais chamados, mais e-mails e mais pressão sobre sua equipe.</p>
          
          <p><strong>A IA resolve o dilema da escalabilidade.</strong></p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4 text-foreground">Capacidade Ilimitada</h3>
          <p>Um agente virtual pode atender a 10, 100 ou 10.000 clientes simultaneamente, com a mesma qualidade e agilidade. Isso é crucial durante picos de demanda, como lançamentos de produtos ou promoções da Black Friday. Você escala suas vendas sem escalar os custos de suporte.</p>
          
          <h3 class="text-xl font-semibold mt-8 mb-4 text-foreground">Consistência e Padronização</h3>
          <p>A IA garante que todos os clientes recebam a mesma informação precisa e alinhada com a sua marca, eliminando erros humanos e garantindo um padrão de qualidade que fortalece sua reputação.</p>
          
          <h2 class="text-3xl font-bold mt-12 mb-6 text-foreground">Transforme Dados em Vantagem Competitiva</h2>
          
          <p>Cada interação de um cliente é uma fonte de dados valiosos. Você está aproveitando isso? A IA não apenas atende; ela aprende.</p>
          
          <div class="my-8">
            <img src="${dashboardAnalytics}" alt="Dashboard com métricas detalhadas e dados nítidos de atendimento" class="w-full rounded-lg shadow-lg" />
          </div>
          
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
      id: 4,
      slug: "automatizacao-processos-7-erros-para-evitar",
      title: "Automatização de processos: 7 erros para evitar em seu negócio",
      subtitle: "Os principais erros que podem comprometer sua automatização",
      description: "Conheça os principais erros que podem comprometer sua automatização e como evitá-los para garantir o sucesso da implementação.",
      date: "2025-09-14",
      readTime: "15 min",
      category: "Processos",
      likes: 8,
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-muted-foreground mb-8">Automatizar processos dentro de uma empresa parece o caminho natural para quem busca ganhar fôlego e tempo para focar no que realmente importa.</p>
          
          <p>Com tantas opções e o avanço de soluções baseadas em inteligência artificial, como as desenvolvidas pela Inovia Tech, transformar tarefas rotineiras em sistemas automáticos nunca esteve tão acessível. Mas, mesmo com vantagens claras, a automatização pode tropeçar em erros simples, capazes de comprometer toda a operação.</p>
          
          <p>A seguir, trago um panorama sobre os sete maiores erros que vejo com frequência quando o assunto é automatização. São pontos que parecem pequenos, quase bobos. Mas cometê-los pode transformar uma excelente ideia em um problema inesperado.</p>
          
          <h2 class="text-3xl font-bold mt-12 mb-6 text-foreground">1. Falta de clareza nos objetivos</h2>
          
          <div class="my-8">
            <img src="${planningObjectives}" alt="Planejamento estratégico e definição de objetivos claros para automatização" class="w-full rounded-lg shadow-lg" />
          </div>
          
          <p>Parece mais fácil do que é, mas muita gente começa a automatizar sem saber exatamente o que quer resolver. Quem nunca ouviu "queremos ser mais ágeis"? Só que, na prática, é preciso ser muito mais específico.</p>
          
          <ul class="list-disc pl-6 space-y-2 my-6">
            <li>Que tarefa, exatamente, toma mais tempo hoje?</li>
            <li>Qual resultado se espera alcançar depois da automação?</li>
            <li>Em quanto tempo deseja ver mudanças?</li>
          </ul>
          
          <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-lg">
            "Automatizar sem propósito é construir uma ponte para lugar nenhum."
          </blockquote>
          
          <p>Empresas como a Inovia Tech focam em desenvolver agentes personalizados, ajustados para atacar o problema verdadeiro de cada negócio. Por isso, antes de acionar sistemas, mapeie bem as dores e discuta com quem está no dia a dia das tarefas.</p>
          
          <h2 class="text-3xl font-bold mt-12 mb-6 text-foreground">2. Escolher processos errados para automatizar</h2>
          
          <p>Nem todo processo precisa ou deve ser automatizado. Sabe aquele fluxo que muda toda semana? Ou aquela tarefa que já não faz mais sentido? Se tentar automatizar algo instável, o resultado pode ser caótico.</p>
          
          <p>Procure processos bem definidos, repetitivos e que consomem tempo de forma desnecessária. Foque nesses primeiro. Deixe ajustes e tarefas estratégicas para outro momento.</p>
          
          <h2 class="text-3xl font-bold mt-12 mb-6 text-foreground">3. Não considerar as pessoas envolvidas</h2>
          
          <div class="my-8">
            <img src="${teamAutomationCollaboration}" alt="Colaboração entre equipes e automação - pessoas trabalhando junto com IA" class="w-full rounded-lg shadow-lg" />
          </div>
          
          <p>Automatização não é só tecnologia, é transformação de cultura. Ignorar quem faz parte do processo é um convite ao fracasso. Ninguém gosta de sentir que seu trabalho será "engolido pela máquina". Aliás, essa insegurança é normal.</p>
          
          <p>Ouça as equipes. Explique como a automação vai tirar o peso das tarefas repetitivas, não os valores de cada colaborador. Envolver todo mundo na implementação faz a diferença, tanto para aceitação quanto para adaptar as soluções da IA ao mundo real do seu negócio.</p>
          
          <h2 class="text-3xl font-bold mt-12 mb-6 text-foreground">4. Automatizar processos ruins</h2>
          
          <p>Muita gente acredita que automatizar resolve tudo, mas se o processo já é ruim, automatizar só vai acelerar o problema. Sabe o famoso "duplicar retrabalho instantaneamente?" Pois é.</p>
          
          <p>Antes de automatizar, revise o fluxo. Elimine etapas desnecessárias e simplifique onde puder. Depois de limpo, aí sim, traga a automação com inteligência, como propõe a Inovia Tech ao alinhar IA às verdadeiras necessidades da empresa.</p>
          
          <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-lg">
            "Não há mágica: automatizar bagunça só multiplica a confusão."
          </blockquote>
          
          <h2 class="text-3xl font-bold mt-12 mb-6 text-foreground">5. Falta de acompanhamento e análise de resultados</h2>
          
          <div class="my-8">
            <img src="${automationAnalysis}" alt="Profissionais analisando relatórios e métricas de automação" class="w-full rounded-lg shadow-lg" />
          </div>
          
          <p>Implantar e esquecer nunca foi boa ideia. Mas acontece. Automatizou? Agora monitore! Não basta colocar o robô para trabalhar se ninguém verifica se ele cumpre o objetivo.</p>
          
          <ul class="list-disc pl-6 space-y-2 my-6">
            <li>Os indicadores melhoraram?</li>
            <li>O que mudou nas entregas?</li>
            <li>Houve impacto no tempo do time?</li>
          </ul>
          
          <p>Se necessário, ajuste o agente de IA, treine os envolvidos e fique de olho. Um bom ciclo de revisão evita surpresas desagradáveis lá na frente.</p>
          
          <h2 class="text-3xl font-bold mt-12 mb-6 text-foreground">6. Superestimar o poder da automação</h2>
          
          <p>Se tem algo que aprendi nesses anos acompanhando empresas, é que automação não faz milagre. Há quem contrate IA achando que todos os problemas vão sumir em minutos. E, bom, nem sempre é assim.</p>
          
          <p>A automação é uma ferramenta poderosa, mas precisa de bom senso e acompanhamento constante. Em certos casos, algum grau de intervenção manual continua fazendo toda a diferença. E está tudo bem.</p>
          
          <h2 class="text-3xl font-bold mt-12 mb-6 text-foreground">7. Desconsiderar segurança e privacidade</h2>
          
          <div class="my-8">
            <img src="${automationSecurity}" alt="Segurança e proteção de dados em sistemas de automação" class="w-full rounded-lg shadow-lg" />
          </div>
          
          <p>Ao automatizar, acaba-se lidando com dados, informações confidenciais e fluxos críticos. Se não houver atenção com segurança e privacidade, o risco cresce.</p>
          
          <p>Implemente sistemas alinhados com boas práticas de proteção dos dados e sempre atualize controles de acesso e monitoramento. Empresas sérias, como a Inovia Tech, montam agentes de IA atentos a essa demanda, protegendo tanto as informações do negócio quanto dos clientes.</p>
          
          <blockquote class="border-l-4 border-primary pl-6 my-8 italic text-lg">
            "Automatização só funciona com confiança."
          </blockquote>
          
          <h2 class="text-3xl font-bold mt-12 mb-6 text-foreground">Conclusão: automatizar com inteligência faz diferença</h2>
          
          <p>Automatizar processos vai além de instalar um sistema ou contratar uma IA. Exige planejamento, diálogo e escolhas bem pensadas. Sem isso, o sonho da agilidade pode se transformar em dor de cabeça.</p>
          
          <p>Os erros que você acabou de ler são comuns, mas contornáveis. Avaliando cada passo e incluindo especialistas em IA como a Inovia Tech, é possível transformar trabalho pesado em resultado consistente. O segredo está menos em quantas tarefas são automatizadas e mais em como e por que esse caminho é trilhado.</p>
          
          <p>Pense, revise, converse e vá fundo. Quer entender, na prática, como a inteligência artificial pode transformar o dia a dia da sua empresa? Entre em contato com a Inovia Tech. O próximo passo para automatizar mais e errar menos está na sua mão.</p>
          
          <div class="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8">
            <h3 class="text-xl font-bold mb-4 text-foreground">Perguntas frequentes sobre automatização de processos</h3>
            
            <div class="space-y-6">
              <div>
                <h4 class="font-semibold mb-2 text-foreground">O que é automatização de processos?</h4>
                <p>Automatização de processos é o uso de sistemas e tecnologias para realizar tarefas de forma automática, sem necessidade de intervenção manual constante. Isso inclui desde atividades administrativas simples até fluxos mais complexos, usando ferramentas digitais ou inteligência artificial para poupar tempo, reduzir erros e permitir que equipes foquem em trabalhos mais estratégicos.</p>
              </div>
              
              <div>
                <h4 class="font-semibold mb-2 text-foreground">Como evitar erros na automatização?</h4>
                <p>Para evitar erros, é importante definir objetivos claros, escolher processos bem estabelecidos, envolver as equipes desde o início e rever os fluxos antes de automatizar. Também é fundamental acompanhar os resultados, ajustar sempre que necessário e buscar parceiros confiáveis, como a Inovia Tech, para apoiar cada etapa.</p>
              </div>
              
              <div>
                <h4 class="font-semibold mb-2 text-foreground">Quais os erros mais comuns na automação?</h4>
                <p>Os erros mais comuns incluem: falta de clareza nos objetivos, tentar automatizar processos confusos ou inúteis, ignorar a participação das pessoas, não revisitar resultados, esquecer a segurança da informação, escolher processos instáveis e acreditar que automação resolve tudo sem acompanhamento.</p>
              </div>
              
              <div>
                <h4 class="font-semibold mb-2 text-foreground">A automação vale a pena para pequenos negócios?</h4>
                <p>Sim. Pequenos negócios podem ganhar muito ao automatizar tarefas repetitivas. Isso libera tempo e recursos para investir no crescimento e no atendimento ao cliente. Inclusive, a automação pode ser adaptada para a realidade de cada empresa, tornando-se acessível mesmo para quem está começando.</p>
              </div>
              
              <div>
                <h4 class="font-semibold mb-2 text-foreground">Como escolher a melhor ferramenta de automação?</h4>
                <p>O ideal é priorizar ferramentas flexíveis, fáceis de usar e seguras. Avalie quais processos devem ser automatizados, busque soluções que se adaptem ao seu negócio e ofereçam suporte especializado. Consultar empresas como a Inovia Tech é uma boa ideia, pois elas criam soluções ajustadas para cada necessidade, com acompanhamento de ponta a ponta.</p>
              </div>
            </div>
          </div>
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