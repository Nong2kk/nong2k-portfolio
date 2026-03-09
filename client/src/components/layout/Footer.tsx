import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { href: "mailto:contact@example.com", icon: <Mail className="w-5 h-5" />, label: "Email" },
  { href: "https://linkedin.com", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", external: true },
  { href: "https://github.com", icon: <Github className="w-5 h-5" />, label: "GitHub", external: true },
];

export function Footer() {
  return (
    <footer className="py-10 border-t border-border/50 bg-background/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold font-display">Lê Trọng Long</h3>
          <p className="text-muted-foreground text-sm mt-0.5">SEO Specialist | Digital Marketing</p>
        </div>

        <div className="flex items-center gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              aria-label={link.label}
              className="p-2.5 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all group"
            >
              <span className="group-hover:scale-110 transition-transform inline-block">{link.icon}</span>
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lê Trọng Long. Bảo lưu mọi quyền.
        </p>
      </div>
    </footer>
  );
}
