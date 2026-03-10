import {
  FileText, Link2, Settings2, Search, Network, BrainCircuit, MapPin, ClipboardCheck,
  BookOpen, Lightbulb, Target, LayoutTemplate, ShoppingBag, NotebookPen,
  Activity, Eye, ChartBar, Tags
} from "lucide-react";
import {
  SiWordpress, SiCanva, SiOpenai, SiGoogleanalytics, SiGooglegemini,
  SiPerplexity, SiShopee, SiTiktok, SiSemrush, SiGoogletagmanager
} from "react-icons/si";
import { Reveal } from "../ui/Reveal";

const skillCategories = [
  {
    title: "SEO",
    description: "Kỹ thuật và chiến lược tối ưu tìm kiếm tự nhiên",
    skills: [
      { label: "SEO Onpage",                    icon: FileText },
      { label: "SEO Offpage",                   icon: Link2 },
      { label: "Kỹ thuật SEO",                  icon: Settings2 },
      { label: "Nghiên cứu từ khóa",            icon: Search },
      { label: "Topic Cluster",                  icon: Network },
      { label: "Semantic SEO",                   icon: BrainCircuit },
      { label: "Local SEO",                      icon: MapPin },
      { label: "Kiểm tra & audit nội dung",      icon: ClipboardCheck },
    ]
  },
  {
    title: "Digital Marketing",
    description: "Chiến lược nội dung và tăng trưởng đa kênh",
    skills: [
      { label: "Content Marketing",              icon: BookOpen },
      { label: "Lập chiến lược nội dung",        icon: Lightbulb },
      { label: "Tối ưu tỉ lệ chuyển đổi (CRO)", icon: Target },
      { label: "Tối ưu UX nội dung",             icon: LayoutTemplate },
      { label: "Thương mại điện tử đa kênh",     icon: ShoppingBag },
      { label: "Viết nội dung chuẩn SEO",        icon: NotebookPen },
    ]
  },
  {
    title: "Phân tích dữ liệu",
    description: "Đo lường, theo dõi và rút ra insight từ dữ liệu",
    skills: [
      { label: "Google Analytics 4 (GA4)",       icon: Activity },
      { label: "Google Search Console",          icon: Search },
      { label: "Phân tích hành vi người dùng",   icon: Eye },
      { label: "Báo cáo hiệu suất",              icon: ChartBar },
      { label: "Google Tag Manager",             icon: Tags },
    ]
  },
];

const tools: {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
  color: string;
  textBadge?: string;
}[] = [
  { name: "SEMrush",              icon: SiSemrush,          color: "#FF642D" },
  { name: "Google Analytics 4",  icon: SiGoogleanalytics,  color: "#E37400" },
  { name: "Google Search Console",                          color: "#4285F4", textBadge: "GSC" },
  { name: "Google Tag Manager",  icon: SiGoogletagmanager, color: "#4285F4" },
  { name: "WordPress",           icon: SiWordpress,        color: "#21759B" },
  { name: "Canva",               icon: SiCanva,            color: "#00C4CC" },
  { name: "CapCut",                                        color: "#1C1C1E", textBadge: "CC" },
  { name: "ChatGPT",             icon: SiOpenai,           color: "#74aa9c" },
  { name: "Gemini",              icon: SiGooglegemini,     color: "#8E75B2" },
  { name: "Perplexity",          icon: SiPerplexity,       color: "#20808D" },
  { name: "Shopee",              icon: SiShopee,           color: "#EE4D2D" },
  { name: "TikTok Shop",         icon: SiTiktok,           color: "#FE2C55" },
  { name: "Ahrefs",                                        color: "#FF7043", textBadge: "Ah" },
  { name: "Screaming Frog",                                color: "#7AC142", textBadge: "SF" },
  { name: "Lazada",                                        color: "#0F146D", textBadge: "Lzd" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Section Header ── */}
        <Reveal>
          <div className="mb-14 flex flex-col md:items-center md:text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Năng lực</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Kỹ năng <span className="text-gradient">& Công cụ</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-xl text-base md:text-lg">
              Từ nghiên cứu, lên kế hoạch đến triển khai và đo lường — kết hợp tư duy chiến lược và khả năng thực thi.
            </p>
          </div>
        </Reveal>

        {/* ── Tools & Platforms (PRIMARY) ── */}
        <Reveal delay={0.1}>
          <div className="mb-16">
            <div className="mb-8 flex flex-col md:items-center md:text-center">
              <h3 className="text-xl font-bold text-foreground mb-1.5">Công cụ & Nền tảng</h3>
              <p className="text-sm text-muted-foreground">Công cụ hỗ trợ nghiên cứu, triển khai và sáng tạo nội dung</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="glass-card flex flex-col items-center justify-center gap-3 p-6 rounded-2xl
                    border border-border/40 hover:border-primary/40 hover:bg-primary/[0.04]
                    hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10
                    transition-all duration-300 cursor-default group"
                  data-testid={`tool-${tool.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {tool.icon ? (
                    <tool.icon
                      className="w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ color: tool.color } as React.CSSProperties}
                    />
                  ) : (
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0 shadow-sm"
                      style={{ backgroundColor: tool.color }}
                    >
                      {tool.textBadge}
                    </div>
                  )}
                  <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground text-center leading-tight transition-colors">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Divider ── */}
        <Reveal delay={0.15}>
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-border/50" />
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50 px-2">Kỹ năng chuyên môn</span>
            <div className="flex-1 h-px bg-border/50" />
          </div>
        </Reveal>

        {/* ── Skill Categories (SECONDARY) ── */}
        <div className="grid md:grid-cols-3 gap-5">
          {skillCategories.map((category, idx) => (
            <Reveal key={idx} delay={0.1 * idx}>
              <div className="glass-card p-6 rounded-2xl h-full border border-border/40">
                <div className="mb-5 pb-4 border-b border-border/50">
                  <h3 className="text-base font-bold font-display text-foreground">{category.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{category.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={sIdx}
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-background border border-border
                          hover:border-primary/50 hover:text-primary hover:scale-[1.02]
                          transition-all duration-200 cursor-default group"
                      >
                        <Icon className="w-3.5 h-3.5 text-primary/60 group-hover:text-primary shrink-0 transition-colors" />
                        <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                          {skill.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
