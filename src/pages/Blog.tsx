import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, ThumbsUp, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { SEOHead } from "@/components/SEOHead";
import { BlogSchema } from "@/components/BlogSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { useLikes } from "@/context/LikesContext";
import Footer from "@/components/Footer";
import { DemoRequestModal } from "@/components/DemoRequestModal";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";

const Blog = () => {
  const { toast } = useToast();
  const { likePost, isPostLiked, getPostLikes } = useLikes();
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('status', 'published')
          .order('published_at', { ascending: false });

        if (error) throw error;

        // Map Supabase data to expected format
        const mappedPosts = data?.map(post => ({
          id: String(post.id), // Convert to string for consistency
          slug: post.slug,
          title: post.title,
          description: post.description,
          date: post.published_at || post.created_at,
          readTime: post.read_time || "5 min",
          category: post.category,
          likes: getPostLikes(String(post.id)) || post.likes || 0,
          image: post.featured_image
        })) || [];

        setBlogPosts(mappedPosts);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Erro ao carregar os artigos');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [getPostLikes]);

  const handleLike = (postId: string) => {
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

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin" />
            <span className="ml-2">Carregando artigos...</span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <p className="text-destructive">{error}</p>
          </div>
        )}

        {/* Blog Posts Grid */}
        {!loading && !error && (
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => {
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
              })
            ) : (
              <div className="text-center py-12">
                <p>Nenhum artigo encontrado.</p>
              </div>
            )}
          </section>
        )}

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