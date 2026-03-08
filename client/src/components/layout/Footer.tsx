import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50 bg-background/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold font-display">Le Trong Long</h3>
          <p className="text-muted-foreground mt-1">Digital Marketing Specialist</p>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="mailto:contact@example.com" className="p-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all group">
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all group">
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all group">
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Le Trong Long. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
