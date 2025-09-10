import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}

export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  image = "https://inoviatech.com.br/og-image.jpg",
  type = "website",
  author = "Laíse Alves",
  publishedTime,
  modifiedTime,
  tags = []
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'author', author);
    
    // Update Open Graph meta tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', image);
    updateMetaTag('property', 'og:type', type);
    
    if (canonical) {
      updateMetaTag('property', 'og:url', canonical);
    }

    if (type === 'article' && author) {
      updateMetaTag('property', 'article:author', author);
    }

    if (publishedTime) {
      updateMetaTag('property', 'article:published_time', publishedTime);
    }

    if (modifiedTime) {
      updateMetaTag('property', 'article:modified_time', modifiedTime);
    }

    if (tags.length > 0) {
      tags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'article:tag');
        meta.content = tag;
        document.head.appendChild(meta);
      });
    }

    // Update Twitter Card meta tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', image);

    // Update canonical link
    if (canonical) {
      updateCanonicalLink(canonical);
    }

    // Cleanup function to remove article tags
    return () => {
      if (tags.length > 0) {
        const articleTags = document.querySelectorAll('meta[property="article:tag"]');
        articleTags.forEach(tag => tag.remove());
      }
    };
  }, [title, description, canonical, image, type, author, publishedTime, modifiedTime, tags]);

  return null;
};

function updateMetaTag(attribute: string, value: string, content: string) {
  let meta = document.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement;
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, value);
    document.head.appendChild(meta);
  }
  
  meta.content = content;
}

function updateCanonicalLink(href: string) {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  
  canonical.href = href;
}