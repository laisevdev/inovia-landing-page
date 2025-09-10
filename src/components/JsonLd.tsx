import { useEffect } from 'react';

interface JsonLdProps {
  data: object;
  id?: string;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data, id = 'jsonld-script' }) => {
  useEffect(() => {
    // Remove existing script if it exists
    const existingScript = document.getElementById(id);
    if (existingScript) {
      existingScript.remove();
    }

    // Create new script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.textContent = JSON.stringify(data);
    
    document.head.appendChild(script);

    // Cleanup
    return () => {
      const scriptToRemove = document.getElementById(id);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data, id]);

  return null;
};