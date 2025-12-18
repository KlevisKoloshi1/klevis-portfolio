import { Code2, Database, Server, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Code2,
    title: "PHP & Laravel",
    description: "Expert in building robust applications with Laravel framework",
  },
  {
    icon: Server,
    title: "REST APIs",
    description: "Designing and implementing scalable RESTful services",
  },
  {
    icon: Database,
    title: "PostgreSQL",
    description: "Database design, optimization, and management",
  },
  {
    icon: Terminal,
    title: "Linux",
    description: "Development and deployment in Linux environments",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate <span className="text-foreground font-medium">Backend Developer</span> specializing in 
                PHP and the Laravel framework. With over a year of professional experience, I focus on 
                building secure, scalable, and maintainable backend systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise lies in developing <span className="text-foreground font-medium">RESTful APIs</span>, 
                designing efficient <span className="text-foreground font-medium">PostgreSQL databases</span>, and 
                implementing clean architecture patterns. I'm committed to writing code that's not just 
                functional, but elegant and easy to maintain.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I thrive in collaborative environments and enjoy tackling complex backend challenges 
                that require thoughtful solutions and attention to detail.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card 
                  key={item.title} 
                  className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
