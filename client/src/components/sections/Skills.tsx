import { Reveal } from "../ui/Reveal";

const skillCategories = [
  {
    title: "SEO Expertise",
    skills: ["SEO Onpage", "SEO Offpage", "Topic Cluster", "Semantic SEO", "Local SEO", "Keyword Research"]
  },
  {
    title: "Marketing & Strategy",
    skills: ["Content Marketing", "E-commerce Optimization", "Conversion Content", "UX Optimization"]
  },
  {
    title: "Analytics",
    skills: ["Google Analytics 4", "Google Search Console", "Data Analysis", "Reporting"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Ahrefs", "SEMrush", "WordPress", "Google Tag Manager", "Canva", "ChatGPT", "Gemini"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-16 md:text-center flex flex-col md:items-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Technical <span className="text-gradient">Arsenal</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg">
              A comprehensive toolkit combining analytical rigor with creative execution.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <Reveal key={idx} delay={0.1 * idx}>
              <div className="glass-card p-8 rounded-3xl h-full hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-all duration-500">
                <h3 className="text-xl font-bold font-display mb-6 text-foreground border-b border-border/50 pb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-4 py-2 rounded-lg text-sm font-medium bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
