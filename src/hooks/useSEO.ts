import { useEffect } from 'react';

interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
}

export const useSEO = (config: SEOConfig) => {
  useEffect(() => {
    // Update document title
    document.title = config.title;

    // Create or update meta tags
    updateMeta('name', 'description', config.description);
    updateMeta('name', 'author', config.author || 'Laíse Alves');
    
    // Keywords meta tag
    if (config.keywords && config.keywords.length > 0) {
      updateMeta('name', 'keywords', config.keywords.join(', '));
    }

    // Open Graph meta tags
    updateMeta('property', 'og:title', config.title);
    updateMeta('property', 'og:description', config.description);
    updateMeta('property', 'og:image', config.image || 'https://inoviatech.com.br/og-image.jpg');
    updateMeta('property', 'og:type', config.type || 'website');
    
    if (config.canonical) {
      updateMeta('property', 'og:url', config.canonical);
    }

    // Article specific meta tags
    if (config.type === 'article') {
      if (config.author) {
        updateMeta('property', 'article:author', config.author);
      }
      if (config.publishedTime) {
        updateMeta('property', 'article:published_time', config.publishedTime);
      }
      if (config.modifiedTime) {
        updateMeta('property', 'article:modified_time', config.modifiedTime);
      }
    }

    // Twitter Card meta tags
    updateMeta('name', 'twitter:card', 'summary_large_image');
    updateMeta('name', 'twitter:title', config.title);
    updateMeta('name', 'twitter:description', config.description);
    updateMeta('name', 'twitter:image', config.image || 'https://inoviatech.com.br/og-image.jpg');

    // Canonical link
    if (config.canonical) {
      updateCanonical(config.canonical);
    }
  }, [config]);
};

function updateMeta(attribute: string, name: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.content = content;
}

function updateCanonical(href: string) {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  
  canonical.href = href;
}