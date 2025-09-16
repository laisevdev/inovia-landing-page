import { JsonLd } from './JsonLd';

interface Article {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

interface ArticleSchemaProps {
  article: Article;
  url: string;
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({ article, url }) => {
  // Calculate word count from HTML content
  const getWordCount = (htmlContent: string): number => {
    const text = htmlContent.replace(/<[^>]*>/g, ''); // Remove HTML tags
    return text.trim().split(/\s+/).length;
  };

  // Convert read time to minutes
  const getReadTimeInMinutes = (readTime: string): number => {
    const match = readTime.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.subtitle || article.title,
    "alternativeHeadline": article.title,
    "description": article.description,
    "image": "https://inoviatech.com.br/og-image.jpg",
    "author": {
      "@type": "Person",
      "name": "Laíse Alves",
      "url": "https://inoviatech.com.br",
      "jobTitle": "Desenvolvedora Full-Stack e Especialista em IA",
      "affiliation": {
        "@type": "Organization",
        "name": "InovIA"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "InovIA",
      "logo": {
        "@type": "ImageObject",
        "url": "https://inoviatech.com.br/favicon-brain-rounded.png"
      },
      "url": "https://inoviatech.com.br"
    },
    "datePublished": new Date(article.date).toISOString(),
    "dateModified": new Date(article.date).toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "url": url,
    "wordCount": getWordCount(article.content),
    "timeRequired": `PT${getReadTimeInMinutes(article.readTime)}M`,
    "articleSection": article.category,
    "keywords": [
      "inteligência artificial",
      "IA",
      "atendimento ao cliente",
      "automação",
      "agentes virtuais",
      "chatbot",
      "transformação digital",
      article.category.toLowerCase()
    ],
    "about": {
      "@type": "Thing",
      "name": "Inteligência Artificial",
      "description": "Aplicações de IA em negócios e atendimento ao cliente"
    },
    "mentions": [
      {
        "@type": "Organization",
        "name": "InovIA"
      }
    ],
    "isPartOf": {
      "@type": "Blog",
      "name": "Blog InovIA",
      "url": "https://inoviatech.com.br/blog"
    },
    "inLanguage": "pt-BR"
  };

  return <JsonLd data={articleSchema} id="article-schema" />;
};