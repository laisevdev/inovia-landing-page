import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { SEOHead } from "@/components/SEOHead";
import { BlogSchema } from "@/components/BlogSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { useLikes } from "@/context/LikesContext";
import Footer from "@/components/Footer";
import { DemoRequestModal } from "@/components/DemoRequestModal";
import blogIaAtendimento from "@/assets/blog-ia-atendimento-cliente.jpg";
import blogRoiAgentes from "@/assets/blog-roi-agentes-virtuais.jpg";
import blogImplementacao from "@/assets/blog-implementacao-ia-guia.jpg";
import blogAutomatizacaoErros from "@/assets/blog-automatizacao-processos-erros.jpg";
import blogChatbotsVsAgentes from "@/assets/blog-chatbots-vs-agentes-personalizados.jpg";

const Blog = () => {
  const { toast } = useToast();
  const { likePost, isPostLiked, getPostLikes } = useLikes();

  const blogPosts = [
    {
      id: 1,
      slug: "como-a-ia-esta-transformando-o-atendimento-ao-cliente",
      title: "Como a IA está transformando o atendimento ao cliente",
      description: "Descubra como agentes virtuais inteligentes estão revolucionando a experiência do cliente e aumentando a eficiência das empresas.",
      date: "2025-09-08",
      readTime: "12 min",
      category: "Tecnologia",
      likes: 24,
      image: blogIaAtendimento
    },
    {
      id: 2,
      slug: "chatbots-vs-agentes-personalizados-diferencas-praticas",
      title: "Chatbots vs. agentes personalizados: diferenças práticas",
      description: "Entenda as principais diferenças entre chatbots tradicionais e agentes personalizados, e descubra qual é a melhor opção para seu negócio.",
      date: "2025-09-16",
      readTime: "18 min",
      category: "Tecnologia",
      likes: 0,
      image: blogChatbotsVsAgentes
    },
    {
      id: 4,
      slug: "automatizacao-processos-7-erros-para-evitar",
      title: "Automatização de processos: 7 erros para evitar em seu negócio",
      description: "Conheça os principais erros que podem comprometer sua automatização e como evitá-los para garantir o sucesso da implementação.",
      date: "2025-09-14",
      readTime: "15 min",
      category: "Processos",
      likes: 8,
      image: blogAutomatizacaoErros
    }
  ];

  const handleLike = (postId: number) => {
    const wasLiked = isPostLiked(postId);
    likePost(postId);
    
    toast({
      description: !wasLiked ? "Obrigado pelo like! 👍" : "Like removido!",
      duration: 2000,
    });
  };

  const currentUrl = "https://inoviatech.com.br/blog";
  
  const breadcrumbItems = [
    { name: "Início", url: "https://inoviatech.com.br" },
    { name: "Blog", url: currentUrl }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blog InovIA - Insights sobre Inteligência Artificial"
        description="Acompanhe as últimas novidades sobre IA, automação e transformação digital. Artigos exclusivos sobre como aplicar inteligência artificial no seu negócio."
        canonical={currentUrl}
        type="website"
        author="Laíse Alves"
      />
      <BlogSchema posts={blogPosts} url={currentUrl} />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Blog InovIA</h1>
              <p className="text-muted-foreground">Insights sobre IA e tecnologia</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Últimas Novidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-justify">
            Acompanhe as tendências em inteligência artificial e descubra como transformar seu negócio
          </p>
        </section>

        {/* Blog Posts Grid */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => {
            const isLiked = isPostLiked(post.id);
            const currentLikes = getPostLikes(post.id);
            
            return (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 text-justify">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-1 p-2 h-auto transition-colors ${
                      isLiked 
                        ? 'text-primary hover:text-primary/80' 
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    <ThumbsUp className={`w-4 h-4 transition-all ${isLiked ? 'fill-current' : ''}`} />
                    <span className="font-medium text-xs">{currentLikes}</span>
                  </Button>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to={`/blog/${post.slug}`}>
                    Ler artigo
                  </Link>
                </Button>
              </CardContent>
            </Card>
            );
          })}
        </section>

        {/* Coming Soon Section */}
        <section className="mt-16 text-center">
          <div className="max-w-md mx-auto p-8 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Em breve mais conteúdo!</h3>
            <p className="text-muted-foreground mb-6 text-justify">
              Estamos preparando artigos exclusivos sobre IA, automação e transformação digital.
            </p>
            <DemoRequestModal>
              <Button className="w-full">
                Solicitar demonstração
              </Button>
            </DemoRequestModal>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;