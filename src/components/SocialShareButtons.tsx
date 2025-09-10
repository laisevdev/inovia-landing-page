import React from 'react';
import { Linkedin, MessageCircle, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialShareButtonsProps {
  title: string;
  description: string;
  url: string;
}

export const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ 
  title, 
  description, 
  url 
}) => {
  const shareUrls = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${url}`)}`
  };

  const handleShare = (platform: string, shareUrl: string) => {
    if (platform === 'email') {
      window.location.href = shareUrl;
    } else {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm text-muted-foreground mr-2">Compartilhar:</span>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare('linkedin', shareUrls.linkedin)}
        className="text-[#0077B5] border-[#0077B5]/20 hover:bg-[#0077B5]/10 hover:border-[#0077B5]/40"
      >
        <Linkedin className="h-4 w-4" />
        <span className="hidden sm:inline ml-1">LinkedIn</span>
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare('whatsapp', shareUrls.whatsapp)}
        className="text-[#25D366] border-[#25D366]/20 hover:bg-[#25D366]/10 hover:border-[#25D366]/40"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline ml-1">WhatsApp</span>
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare('twitter', shareUrls.twitter)}
        className="text-[#1DA1F2] border-[#1DA1F2]/20 hover:bg-[#1DA1F2]/10 hover:border-[#1DA1F2]/40"
      >
        <Twitter className="h-4 w-4" />
        <span className="hidden sm:inline ml-1">Twitter</span>
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare('email', shareUrls.email)}
        className="text-muted-foreground border-muted-foreground/20 hover:bg-muted hover:border-muted-foreground/40"
      >
        <Mail className="h-4 w-4" />
        <span className="hidden sm:inline ml-1">Email</span>
      </Button>
    </div>
  );
};