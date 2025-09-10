import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Como a IA está transformando o atendimento ao cliente",
      description: "Descubra como agentes virtuais inteligentes estão revolucionando a experiência do cliente e aumentando a eficiência das empresas.",
      date: "2024-03-15",
      readTime: "5 min",
      category: "Tecnologia",
      likes: 42
    },
    {
      id: 2,
      title: "ROI de agentes virtuais: números que impressionam",
      description: "Análise detalhada do retorno sobre investimento ao implementar agentes virtuais no seu negócio.",
      date: "2024-03-10",
      readTime: "7 min",
      category: "Negócios",
      likes: 38
    },
    {
      id: 3,
      title: "Implementação de IA: guia completo para empresas",
      description: "Passo a passo para implementar soluções de inteligência artificial na sua empresa de forma eficiente.",
      date: "2024-03-05",
      readTime: "10 min",
      category: "Tutorial",
      likes: 56
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Acompanhe as tendências em inteligência artificial e descubra como transformar seu negócio
          </p>
        </section>

        {/* Blog Posts Grid */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
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
                  <div className="flex items-center gap-1 text-primary">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="font-medium">{post.likes}</span>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Ler artigo
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Coming Soon Section */}
        <section className="mt-16 text-center">
          <div className="max-w-md mx-auto p-8 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Em breve mais conteúdo!</h3>
            <p className="text-muted-foreground mb-6">
              Estamos preparando artigos exclusivos sobre IA, automação e transformação digital.
            </p>
            <Button asChild>
              <Link to="/#demo">
                Solicitar demonstração
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;