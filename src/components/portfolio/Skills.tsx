import { 
  Code2, 
  Database, 
  Server, 
  GitBranch, 
  Github, 
  Terminal, 
  Lock, 
  Layers, 
  FileCode,
  Container
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Backend & Databases",
    skills: [
      { name: "PHP", icon: Code2 },
      { name: "Laravel", icon: FileCode },
      { name: "PostgreSQL", icon: Database },
      { name: "REST APIs", icon: Server },
      { name: "Redis", icon: Database },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "GitLab", icon: GitBranch },
      { name: "Linux", icon: Terminal },
      { name: "Docker", icon: Container },
    ],
  },
  {
    title: "Concepts & Practices",
    skills: [
      { name: "MVC Architecture", icon: Layers },
      { name: "API Security", icon: Lock },
      { name: "Authentication", icon: Lock },
      { name: "DB Migrations", icon: Database },
      { name: "Containerization", icon: Container },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="space-y-4">
                <h3 className="font-semibold text-lg text-center mb-6">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Card 
                      key={skill.name} 
                      className="group hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                      style={{ animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.05}s` }}
                    >
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <skill.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
