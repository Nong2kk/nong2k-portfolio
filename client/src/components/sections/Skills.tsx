import { Reveal } from "../ui/Reveal";

const skillCategories = [
  {
    title: "SEO",
    description: "Kỹ thuật và chiến lược tối ưu tìm kiếm tự nhiên",
    skills: [
      "SEO Onpage",
      "SEO Offpage",
      "Kỹ thuật SEO (Technical SEO)",
      "Nghiên cứu từ khóa",
      "Topic Cluster",
      "Semantic SEO",
      "Local SEO",
      "Kiểm tra & audit nội dung",
    ]
  },
  {
    title: "Digital Marketing",
    description: "Chiến lược nội dung và tăng trưởng đa kênh",
    skills: [
      "Content Marketing",
      "Lập chiến lược nội dung",
      "Tối ưu tỉ lệ chuyển đổi (CRO)",
      "Tối ưu UX nội dung",
      "Thương mại điện tử đa kênh",
      "Viết nội dung chuẩn SEO",
    ]
  },
  {
    title: "Phân tích dữ liệu",
    description: "Đo lường, theo dõi và rút ra insight từ dữ liệu",
    skills: [
      "Google Analytics 4 (GA4)",
      "Google Search Console",
      "Phân tích hành vi người dùng",
      "Báo cáo hiệu suất",
      "Google Tag Manager",
    ]
  },
  {
    title: "Công cụ & Nền tảng",
    description: "Công cụ hỗ trợ nghiên cứu, triển khai và sáng tạo",
    skills: [
      "Ahrefs",
      "SEMrush",
      "WordPress",
      "Canva",
      "ChatGPT",
      "Gemini",
      "Perplexity",
      "Shopee / TikTok Shop / Lazada",
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-16 flex flex-col md:items-center md:text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Năng lực</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Kỹ năng <span className="text-gradient">& Công cụ</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg">
              Kết hợp giữa tư duy chiến lược và khả năng triển khai thực tế — từ nghiên cứu, lên kế hoạch đến đo lường kết quả.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <Reveal key={idx} delay={0.1 * idx}>
              <div className="glass-card p-8 rounded-3xl h-full hover:shadow-[0_0_30px_rgba(0,240,255,0.08)] transition-all duration-500">
                <div className="mb-6 border-b border-border/50 pb-4">
                  <h3 className="text-xl font-bold font-display text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
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
