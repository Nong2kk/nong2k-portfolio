import { BarChart, Search, ShoppingCart, ExternalLink } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const projects = [
  {
    title: "SEO Website Optimization",
    category: "Traffic Growth",
    icon: <Search className="w-8 h-8" />,
    color: "from-primary to-blue-500",
    description: "End-to-end SEO strategy implementation including keyword research, topic cluster building, and SEO content writing designed for sustainable traffic growth.",
    tags: ["Keyword Strategy", "Topic Clusters", "Content Writing"]
  },
  {
    title: "E-commerce Optimization",
    category: "Multi-channel",
    icon: <ShoppingCart className="w-8 h-8" />,
    color: "from-[#60A5FA] to-secondary",
    description: "Product listing and conversion rate optimization across major platforms including Shopee, TikTok Shop, and Lazada.",
    tags: ["Shopee", "TikTok Shop", "CRO"]
  },
  {
    title: "Content Strategy & Audit",
    category: "Semantic SEO",
    icon: <BarChart className="w-8 h-8" />,
    color: "from-secondary to-purple-500",
    description: "Comprehensive content audit utilizing Semantic SEO principles to restructure internal linking and revitalize underperforming assets.",
    tags: ["Content Audit", "Internal Linking", "Semantic Structure"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-16 flex flex-col md:items-center md:text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg">
              Case studies demonstrating my approach to driving traffic, engagement, and sales.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Reveal key={idx} delay={idx * 0.15}>
              <div className="glass-card rounded-3xl overflow-hidden h-full flex flex-col group">
                {/* Card Header visual area */}
                <div className={`h-32 bg-gradient-to-br ${project.color} opacity-20 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-overlay"></div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col relative -mt-12">
                  <div className={`w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mb-6 shadow-lg text-foreground group-hover:scale-110 group-hover:text-primary transition-all duration-300 z-10 relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`}></div>
                    {project.icon}
                  </div>
                  
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    {project.category}
                  </span>
                  
                  <h3 className="text-2xl font-bold font-display text-foreground mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-medium px-2.5 py-1 bg-background rounded-md text-muted-foreground border border-border/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
