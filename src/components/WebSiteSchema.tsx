import { JsonLd } from './JsonLd';

interface WebSiteSchemaProps {
  url: string;
}

export const WebSiteSchema: React.FC<WebSiteSchemaProps> = ({ url }) => {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "InovIA",
    "alternateName": "InovIA Tech",
    "url": url,
    "description": "Soluções em inteligência artificial para transformação digital de negócios. Agentes virtuais, automação e chatbots personalizados.",
    "publisher": {
      "@type": "Organization",
      "name": "InovIA",
      "logo": {
        "@type": "ImageObject",
        "url": "https://inoviatech.com.br/favicon-brain-rounded.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/blog?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "InovIA",
      "url": url,
      "sameAs": [
        "https://www.instagram.com/inovia.tech"
      ]
    },
    "inLanguage": "pt-BR",
    "copyrightYear": "2024",
    "copyrightHolder": {
      "@type": "Organization",
      "name": "InovIA"
    }
  };

  return <JsonLd data={websiteSchema} id="website-schema" />;
};