import { JsonLd } from './JsonLd';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
}

interface BlogSchemaProps {
  posts: BlogPost[];
  url: string;
}

export const BlogSchema: React.FC<BlogSchemaProps> = ({ posts, url }) => {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog InovIA",
    "description": "Insights sobre inteligência artificial, automação e transformação digital para negócios",
    "url": url,
    "author": {
      "@type": "Person",
      "name": "Laíse Alves",
      "jobTitle": "Especialista em IA",
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
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "datePublished": new Date(post.date).toISOString(),
      "dateModified": new Date(post.date).toISOString(),
      "author": {
        "@type": "Person",
        "name": "Laíse Alves"
      },
      "url": `${url}/${post.id}`,
      "articleSection": post.category,
      "timeRequired": `PT${post.readTime.match(/\d+/)?.[0] || 0}M`,
      "inLanguage": "pt-BR"
    })),
    "inLanguage": "pt-BR",
    "keywords": [
      "inteligência artificial",
      "IA",
      "blog tecnologia",
      "automação",
      "chatbot",
      "agentes virtuais",
      "transformação digital"
    ]
  };

  return <JsonLd data={blogSchema} id="blog-schema" />;
};