import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

interface RelatedArticlesProps {
  currentArticleId: string;
  articles: Article[];
  maxResults?: number;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  currentArticleId,
  articles,
  maxResults = 3
}) => {
  // Filter out current article and limit results
  const relatedArticles = articles
    .filter(article => article.id !== currentArticleId)
    .slice(0, maxResults);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 pt-8 border-t border-border/50">
      <h2 className="text-2xl font-bold mb-6 text-foreground">
        Artigos Relacionados
      </h2>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {relatedArticles.map((article) => (
          <Card key={article.id} className="group hover:shadow-md transition-all duration-300 overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader className="pb-3">
              <div className="text-xs text-muted-foreground mb-2">
                <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {article.category}
                </span>
              </div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="line-clamp-2 mb-4">
                {article.description}
              </CardDescription>
              
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(article.date).toLocaleDateString('pt-BR')}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                asChild
              >
                <Link to={`/blog/${article.slug}`}>
                  Ler artigo
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};