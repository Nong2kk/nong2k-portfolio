import { Briefcase, Calendar } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const experiences = [
  {
    role: "Marketing Executive",
    company: "Hoang Long Vu Company",
    period: "Present",
    desc: "Spearheaded keyword research and topic cluster development. Executed comprehensive SEO Onpage/Offpage strategies. Conducted content audits and internal linking improvements resulting in measurable traffic growth tracked via GA4 and GSC."
  },
  {
    role: "Marketing Intern",
    company: "Kien Xanh Design",
    period: "Previous",
    desc: "Delivered SEO-focused content writing and keyword research. Collaborated on UX/UI optimizations to enhance website engagement and visitor retention."
  },
  {
    role: "Freelance E-commerce Optimizer",
    company: "Hafu Scented Candles",
    period: "Project-based",
    desc: "Optimized e-commerce storefront architecture. Improved product listings and visual content resulting in enhanced conversion rates and user experience."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Work <span className="text-primary">Experience</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>
        </Reveal>

        <div className="relative border-l border-border/60 ml-4 md:ml-0 md:pl-8 space-y-12">
          {experiences.map((exp, idx) => (
            <Reveal key={idx} delay={idx * 0.2} direction="left">
              <div className="relative pl-8 md:pl-0">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] md:-left-[41px] top-1 w-5 h-5 rounded-full bg-card border-2 border-primary shadow-[0_0_10px_rgba(0,240,255,0.5)] z-10" />
                
                <div className="glass-card p-8 rounded-2xl group hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground font-display flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        {exp.role}
                      </h3>
                      <p className="text-lg text-primary/80 font-medium mt-1">{exp.company}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-medium bg-secondary/10 text-secondary px-3 py-1.5 rounded-full whitespace-nowrap">
                      <Calendar className="w-4 h-4" /> {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
