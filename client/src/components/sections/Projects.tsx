import { BarChart, Search, ShoppingCart } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const projects = [
  {
    title: "Tối ưu SEO Website",
    category: "Tăng trưởng traffic",
    icon: <Search className="w-8 h-8" />,
    color: "from-primary to-blue-500",
    overview: "Triển khai chiến lược SEO toàn diện từ nghiên cứu từ khóa, xây dựng topic cluster đến viết nội dung chuẩn SEO nhằm tăng trưởng traffic bền vững.",
    role: "SEO Specialist",
    actions: [
      "Nghiên cứu từ khóa và lập bản đồ topic cluster theo semantic SEO",
      "Tối ưu on-page toàn bộ trang: meta, heading, internal link",
      "Viết nội dung chuẩn E-E-A-T, hướng đến search intent"
    ],
    tags: ["Keyword Research", "Topic Cluster", "Content SEO"]
  },
  {
    title: "Tối ưu Thương mại Điện tử",
    category: "Đa kênh bán hàng",
    icon: <ShoppingCart className="w-8 h-8" />,
    color: "from-[#60A5FA] to-secondary",
    overview: "Tối ưu gian hàng và danh sách sản phẩm trên Shopee, TikTok Shop và Lazada nhằm cải thiện tỉ lệ hiển thị, click và chuyển đổi.",
    role: "E-commerce Optimizer",
    actions: [
      "Tối ưu tiêu đề, mô tả và hình ảnh sản phẩm theo từng nền tảng",
      "Phân tích dữ liệu bán hàng để xác định sản phẩm tiềm năng",
      "Cải thiện tỉ lệ chuyển đổi thông qua A/B test nội dung"
    ],
    tags: ["Shopee", "TikTok Shop", "CRO"]
  },
  {
    title: "Chiến lược & Kiểm tra Nội dung",
    category: "Semantic SEO",
    icon: <BarChart className="w-8 h-8" />,
    color: "from-secondary to-purple-500",
    overview: "Thực hiện content audit toàn diện, áp dụng Semantic SEO để tái cấu trúc hệ thống internal link và phục hồi các bài viết kém hiệu quả.",
    role: "Content Strategist",
    actions: [
      "Audit toàn bộ nội dung hiện có, phân loại theo hiệu suất và tiềm năng",
      "Xây dựng lại cấu trúc internal linking theo mô hình pillar–cluster",
      "Tối ưu hoặc gộp các bài viết trùng lặp để củng cố độ quyền trang"
    ],
    tags: ["Content Audit", "Internal Linking", "Semantic SEO"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-16 flex flex-col md:items-center md:text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Dự án <span className="text-gradient">Tiêu biểu</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg">
              Các dự án thực chiến thể hiện cách mình tiếp cận và giải quyết bài toán tăng trưởng cho doanh nghiệp.
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
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mb-6 shadow-lg text-foreground group-hover:scale-110 group-hover:text-primary transition-all duration-300 z-10 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`}></div>
                    {project.icon}
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-bold font-display text-foreground mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    {project.overview}
                  </p>

                  <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">Vai trò: <span className="text-primary/80">{project.role}</span></p>

                  <ul className="space-y-1.5 mb-6 flex-1">
                    {project.actions.map((action, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {action}
                      </li>
                    ))}
                  </ul>

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
