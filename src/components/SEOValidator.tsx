import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

interface SEOCheckResult {
  name: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
  value?: string;
}

export const SEOValidator: React.FC = () => {
  const [checks, setChecks] = useState<SEOCheckResult[]>([]);

  useEffect(() => {
    const performSEOChecks = () => {
      const results: SEOCheckResult[] = [];

      // Title check
      const title = document.title;
      results.push({
        name: 'Title Tag',
        status: title && title.length > 0 && title.length <= 60 ? 'pass' : 'fail',
        message: title ? `${title.length} characters` : 'Missing title tag',
        value: title
      });

      // Meta description check
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
      results.push({
        name: 'Meta Description',
        status: description && description.length > 0 && description.length <= 160 ? 'pass' : 'fail',
        message: description ? `${description.length} characters` : 'Missing meta description',
        value: description
      });

      // H1 tag check
      const h1Tags = document.querySelectorAll('h1');
      results.push({
        name: 'H1 Tag',
        status: h1Tags.length === 1 ? 'pass' : h1Tags.length === 0 ? 'fail' : 'warning',
        message: `${h1Tags.length} H1 tag(s) found`,
        value: h1Tags[0]?.textContent || undefined
      });

      // Canonical URL check
      const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
      results.push({
        name: 'Canonical URL',
        status: canonical ? 'pass' : 'warning',
        message: canonical ? 'Present' : 'Not set',
        value: canonical
      });

      // Open Graph checks
      const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
      const ogDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content');
      const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content');
      
      results.push({
        name: 'Open Graph Title',
        status: ogTitle ? 'pass' : 'fail',
        message: ogTitle ? 'Present' : 'Missing',
        value: ogTitle
      });

      results.push({
        name: 'Open Graph Description',
        status: ogDescription ? 'pass' : 'fail',
        message: ogDescription ? 'Present' : 'Missing',
        value: ogDescription
      });

      results.push({
        name: 'Open Graph Image',
        status: ogImage ? 'pass' : 'fail',
        message: ogImage ? 'Present' : 'Missing',
        value: ogImage
      });

      // Twitter Card checks
      const twitterCard = document.querySelector('meta[name="twitter:card"]')?.getAttribute('content');
      results.push({
        name: 'Twitter Card',
        status: twitterCard ? 'pass' : 'warning',
        message: twitterCard ? `Type: ${twitterCard}` : 'Not set',
        value: twitterCard
      });

      // Structured Data check
      const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
      results.push({
        name: 'Structured Data',
        status: jsonLdScripts.length > 0 ? 'pass' : 'warning',
        message: `${jsonLdScripts.length} JSON-LD script(s) found`,
      });

      // Alt text check for images
      const images = document.querySelectorAll('img');
      const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
      results.push({
        name: 'Image Alt Text',
        status: imagesWithoutAlt.length === 0 ? 'pass' : 'warning',
        message: `${images.length - imagesWithoutAlt.length}/${images.length} images have alt text`,
      });

      setChecks(results);
    };

    // Run checks after a short delay to ensure DOM is ready
    const timer = setTimeout(performSEOChecks, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'fail':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      pass: 'default',
      fail: 'destructive',
      warning: 'secondary'
    } as const;

    return (
      <Badge variant={variants[status as keyof typeof variants] || 'secondary'}>
        {status}
      </Badge>
    );
  };

  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <Card className="fixed bottom-4 right-4 w-96 max-h-96 overflow-y-auto z-50 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          SEO Validator
          <Badge variant="outline" className="text-xs">
            Dev Only
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {checks.map((check, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 flex-1">
              {getStatusIcon(check.status)}
              <span className="font-medium">{check.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground max-w-32 truncate">
                {check.message}
              </span>
              {getStatusBadge(check.status)}
            </div>
          </div>
        ))}
        
        <div className="pt-2 border-t text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>Pass: {checks.filter(c => c.status === 'pass').length}</span>
            <span>Fail: {checks.filter(c => c.status === 'fail').length}</span>
            <span>Warning: {checks.filter(c => c.status === 'warning').length}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};