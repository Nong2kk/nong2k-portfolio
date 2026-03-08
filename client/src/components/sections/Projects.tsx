import { BarChart, Search, ShoppingCart } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const projects = [
  {
    title: "Tối ưu SEO toàn diện cho website doanh nghiệp",
    category: "SEO & Content Strategy",
    icon: <Search className="w-8 h-8" />,
    color: "from-primary to-blue-500",
    context: "Website doanh nghiệp B2B với lượng traffic tự nhiên thấp và nội dung chưa có cấu trúc rõ ràng.",
    role: "SEO Specialist",
    actions: [
      "Phân tích toàn bộ từ khóa và xây dựng hệ thống topic cluster theo mô hình pillar–cluster",
      "Tối ưu on-page: meta title/description, heading, internal linking và schema markup",
      "Viết và tối ưu lại nội dung theo E-E-A-T và search intent từng nhóm từ khóa",
    ],
    outcome: "Cải thiện thứ hạng từ khóa mục tiêu và tăng lượt hiển thị trên Search Console sau 3 tháng triển khai.",
    tags: ["Keyword Research", "Topic Cluster", "On-page SEO", "Content"]
  },
  {
    title: "Tối ưu gian hàng đa kênh thương mại điện tử",
    category: "E-commerce Optimization",
    icon: <ShoppingCart className="w-8 h-8" />,
    color: "from-[#60A5FA] to-secondary",
    context: "Gian hàng Shopee và TikTok Shop cần tăng khả năng hiển thị tự nhiên và tỉ lệ chuyển đổi sản phẩm.",
    role: "E-commerce Optimizer",
    actions: [
      "Nghiên cứu từ khóa theo đặc thù từng sàn và tối ưu lại tiêu đề, mô tả sản phẩm",
      "Phân tích dữ liệu bán hàng để xác định sản phẩm tiềm năng và điều chỉnh ưu tiên",
      "Tư vấn cải thiện hình ảnh sản phẩm và nội dung gian hàng để tăng độ tin cậy",
    ],
    outcome: "Gian hàng được tối ưu toàn diện, cải thiện tỉ lệ click và chuyển đổi đo lường được trong vòng 4 tuần.",
    tags: ["Shopee", "TikTok Shop", "CRO", "Product Listing"]
  },
  {
    title: "Content audit & tái cơ cấu nội dung website",
    category: "Content Audit & SEO",
    icon: <BarChart className="w-8 h-8" />,
    color: "from-secondary to-purple-500",
    context: "Website có hàng chục bài viết cũ, nhiều nội dung trùng lặp và hệ thống internal link chưa có logic.",
    role: "Content Strategist",
    actions: [
      "Audit toàn bộ nội dung: phân loại theo hiệu suất traffic, thứ hạng và tiềm năng cải thiện",
      "Hợp nhất bài viết trùng lặp, 301 redirect các URL không còn giá trị",
      "Tái cơ cấu internal linking theo hệ thống pillar–cluster để củng cố độ quyền chủ đề",
    ],
    outcome: "Giảm nội dung trùng lặp, cải thiện crawl budget và tăng thứ hạng cho các trang chủ lực.",
    tags: ["Content Audit", "Internal Linking", "Semantic SEO", "UX"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-16 flex flex-col md:items-center md:text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Dự án <span className="text-gradient">Thực chiến</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg">
              Các dự án mình đã trực tiếp triển khai — thể hiện cách mình tiếp cận bài toán, hành động và kết quả đạt được.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Reveal key={idx} delay={idx * 0.15}>
              <div className="glass-card rounded-3xl overflow-hidden h-full flex flex-col group">
                {/* Card Header */}
                <div className={`h-28 bg-gradient-to-br ${project.color} opacity-20 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-overlay"></div>
                </div>

                <div className="p-8 flex-1 flex flex-col relative -mt-10">
                  <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center mb-5 shadow-lg text-foreground group-hover:scale-110 group-hover:text-primary transition-all duration-300 z-10 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`}></div>
                    {project.icon}
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold font-display text-foreground mb-3 leading-snug">
                    {project.title}
                  </h3>

                  {/* Context */}
                  <p className="text-xs text-muted-foreground italic mb-4 leading-relaxed border-l-2 border-primary/30 pl-3">
                    Bối cảnh: {project.context}
                  </p>

                  {/* Role */}
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2">
                    Vai trò: <span className="text-primary/80 normal-case font-semibold tracking-normal">{project.role}</span>
                  </p>

                  {/* Actions */}
                  <ul className="space-y-1.5 mb-5 flex-1">
                    {project.actions.map((action, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {action}
                      </li>
                    ))}
                  </ul>

                  {/* Outcome */}
                  <div className="mb-5 p-3 rounded-xl bg-primary/5 border border-primary/15">
                    <p className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider">Kết quả</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.outcome}</p>
                  </div>

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
