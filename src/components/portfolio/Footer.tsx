import { Github, Gitlab, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear}</span>
            <span>•</span>
            <span>Backend Developer specializing in Laravel & PostgreSQL</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/KlevisKoloshi1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://gitlab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitLab"
            >
              <Gitlab className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          
        </div>
      </div>
    </footer>
  );
}
