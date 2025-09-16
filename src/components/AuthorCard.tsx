import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

interface AuthorCardProps {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
  email?: string;
  linkedin?: string;
}

export const AuthorCard: React.FC<AuthorCardProps> = ({
  name,
  title,
  bio,
  avatar,
  email,
  linkedin
}) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card className="mt-12 bg-card/50 border-border/50">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16 shrink-0">
            {avatar ? (
              <AvatarImage src={avatar} alt={`Foto de ${name}`} />
            ) : null}
            <AvatarFallback className="text-lg font-semibold bg-primary/20 text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {name}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {bio}
                </p>
              </div>
              
              {(email || linkedin) && (
                <div className="flex items-center gap-2 shrink-0">
                  {email && (
                    <a
                      href={`mailto:${email}`}
                      className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                      aria-label={`Enviar email para ${name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                  {linkedin && (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                      aria-label={`Perfil LinkedIn de ${name}`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};