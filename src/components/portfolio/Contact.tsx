import { useState } from "react";
import { Mail, Github, Gitlab, Linkedin, Send, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Web3Forms configuration
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setResult("Error");
      toast({
        title: "Configuration Error",
        description: "Web3Forms access key is not configured. Please check your environment variables.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("to", "kleviskoloshi8@gmail.com");
    formData.append("subject", "New message from portfolio contact form");

    //try catch for form submission

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success!");
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        setResult("Error");
        throw new Error("Failed to send message");
      }
    } catch {
      setResult("Error");
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Interested in working together or have a question? Feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      maxLength={100}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      maxLength={255}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      required
                      maxLength={1000}
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {result && (
                    <p className="text-sm text-muted-foreground">
                      {result}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a
                        href="mailto:kleviskoloshi8@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        kleviskoloshi8@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">GitHub</h3>
                      <a
                        href="https://github.com/KlevisKoloshi1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        github.com/KlevisKoloshi1
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Gitlab className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">GitLab</h3>
                      <a
                        href="https://gitlab.com/KlevisKolosh1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        gitlab.com/KlevisKolosh1
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">LinkedIn</h3>
                      <a
                        href="https://www.linkedin.com/in/klevis-koloshi-91006235a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        linkedin.com/in/kleviskoloshi
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
