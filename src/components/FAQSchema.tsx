import { JsonLd } from './JsonLd';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQ[];
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return <JsonLd data={faqSchema} id="faq-schema" />;
};