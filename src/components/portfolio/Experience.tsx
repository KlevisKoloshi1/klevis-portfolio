import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const responsibilities = [
  "Developed and maintained backend services using Laravel",
  "Built and consumed REST APIs for various applications",
  "Designed and managed PostgreSQL databases",
  "Implemented authentication, authorization, and middleware",
  "Created business logic using services, controllers, and models",
  "Collaborated using Git, GitHub, and GitLab",
  "Deployed and worked in Linux environments",
];

const technologies = ["PHP", "Laravel", "PostgreSQL", "REST APIs", "Git", "GitHub", "GitLab", "Ubuntu", "Virtual Machines", "DBeaver"];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
          
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
            
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Backend Developer</CardTitle>
                    <p className="text-primary font-medium">2RM Lab</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">1 Year</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                  Responsibilities & Achievements
                </h4>
                <ul className="space-y-2">
                  {responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
