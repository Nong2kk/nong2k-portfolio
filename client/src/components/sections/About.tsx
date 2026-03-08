import { Search, TrendingUp, Users } from "lucide-react";
import { Reveal } from "../ui/Reveal";

export function About() {
  const highlights = [
    {
      icon: <Search className="w-6 h-6 text-primary" />,
      title: "Semantic SEO",
      desc: "Creating deep topic clusters and highly optimized content structures."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#60A5FA]" />,
      title: "Data Analysis",
      desc: "Leveraging GA4 & Search Console to uncover growth opportunities."
    },
    {
      icon: <Users className="w-6 h-6 text-secondary" />,
      title: "Conversion Focus",
      desc: "Optimizing UX and content for multi-channel e-commerce success."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <Reveal delay={0.1}>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                With 2 years of dedicated experience in SEO and E-commerce, I specialize in building robust digital ecosystems that drive organic growth. My methodology revolves around semantic SEO, comprehensive topic clustering, and rigorous content optimization.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                I possess a deeply data-driven marketing mindset, utilizing tools like Google Analytics 4 and Google Search Console to monitor performance, conduct audits, and refine strategies. Whether it's optimizing a corporate website or scaling multi-channel e-commerce storefronts (Shopee, TikTok Shop, Lazada), my goal is to connect search intent with tangible conversions.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-1 gap-6">
            {highlights.map((item, idx) => (
              <Reveal key={idx} delay={0.2 + idx * 0.1} direction="left">
                <div className="glass-card p-6 rounded-2xl flex gap-4 group hover:border-primary/50 transition-colors">
                  <div className="p-3 bg-card rounded-xl shrink-0 group-hover:bg-primary/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
