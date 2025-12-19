import { ExternalLink, Github, Gitlab, Folder } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  gitlabUrl?: string;
}

const projects: Project[] = [
  {
    title: "Invoice Management System",
    description: "A comprehensive Laravel-based invoice management system with e-fiscalization integration for Albanian tax authorities. This system enables businesses to manage clients, create invoices, import invoices from Excel files, and fiscalize invoices in bulk.",
    techStack: ["Laravel", "PostgreSQL", "REST API"],
    features: ["CRUD Operations", "Authentication", "PDF Generation", "Data Validation"],
    githubUrl: "https://github.com/KlevisKoloshi1/invoice_klevis",
  },
  {
    title: "REST API with Authentication",
    description: "Secure RESTful API implementation with token-based authentication, role-based access control, and comprehensive documentation.",
    techStack: ["Laravel", "Sanctum", "PostgreSQL"],
    features: ["JWT Auth", "Role-Based Access", "Rate Limiting", "API Documentation"],
    gitlabUrl: "https://gitlab.com",
  },
  {
    title: "Data Import & Validation System",
    description: "Robust system for importing, validating, and processing large datasets from various file formats with error handling.",
    techStack: ["Laravel", "PostgreSQL", "Queue Jobs"],
    features: ["CSV/Excel Import", "Data Validation", "Background Jobs", "Error Logging"],
    githubUrl: "https://github.com",
  },
  {
    title: "Task Scheduling System",
    description: "Automated task scheduling and cron job management system with monitoring and notification capabilities.",
    techStack: ["Laravel", "PostgreSQL", "Redis"],
    features: ["Cron Jobs", "Email Notifications", "Task Queue", "Monitoring"],
    gitlabUrl: "https://gitlab.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A selection of backend projects showcasing my expertise in Laravel, PostgreSQL, and API development.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Folder className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.gitlabUrl && (
                        <a
                          href={project.gitlabUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View on GitLab"
                        >
                          <Gitlab className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
