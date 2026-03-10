import { Briefcase, Calendar, Building2 } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const experiences = [
  {
    role: "Marketing Executive",
    company: "Công ty Hoàng Long Vũ",
    type: "Toàn thời gian",
    period: "2025 – 2026",
    summary: "Phụ trách toàn bộ hoạt động SEO và content marketing cho website doanh nghiệp, từ chiến lược đến triển khai và đo lường.",
    bullets: [
      "Nghiên cứu từ khóa và xây dựng hệ thống topic cluster theo mô hình pillar–cluster, giúp website phủ rộng chủ đề và tăng độ quyền tự nhiên.",
      "Triển khai SEO Onpage (tối ưu meta, heading, nội dung, internal link) và Offpage (xây dựng backlink chất lượng), cải thiện thứ hạng đo lường được qua Google Search Console.",
      "Thực hiện content audit định kỳ: xác định bài viết cần cập nhật, hợp nhất hoặc loại bỏ — tăng hiệu quả toàn bộ hệ thống nội dung.",
      "Theo dõi và phân tích hiệu suất traffic hàng tuần qua GA4 và GSC, đề xuất điều chỉnh chiến lược dựa trên xu hướng dữ liệu thực tế."
    ]
  },
  {
    role: "Marketing Intern",
    company: "Kien Xanh Design",
    type: "Dự án Freelance",
    period: "2024 – 2025",
    summary: "Hỗ trợ đội ngũ marketing trong việc sản xuất nội dung SEO và tối ưu trải nghiệm người dùng trên website.",
    bullets: [
      "Nghiên cứu từ khóa và viết bài chuẩn SEO theo brief, đảm bảo nội dung khớp với search intent và dễ đọc.",
      "Phân tích từ khóa đối thủ và đề xuất chủ đề nội dung mới có tiềm năng thứ hạng.",
      "Tham gia rà soát và tối ưu UX website — cải thiện bố cục trang, điều hướng và tốc độ tải để giảm bounce rate."
    ]
  },
  {
    role: "Freelance – Tối ưu Thương mại Điện tử",
    company: "Nến Thơm Hafu",
    type: "Dự án freelance",
    period: "2023- Hiện tại",
    summary: "Tối ưu toàn bộ gian hàng thương mại điện tử trên các sàn lớn nhằm cải thiện khả năng hiển thị và tỉ lệ chuyển đổi.",
    bullets: [
      "Đánh giá lại cấu trúc danh mục, tên sản phẩm và từ khóa tìm kiếm — tối ưu theo thuật toán từng sàn (Shopee, TikTok Shop).",
      "Viết lại mô tả sản phẩm theo hướng bán hàng: rõ lợi ích, kêu gọi hành động, tích hợp từ khóa tự nhiên.",
      "Tư vấn cải thiện hình ảnh sản phẩm và banner gian hàng để tăng tính chuyên nghiệp và tỉ lệ click."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Quá trình làm việc</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Kinh nghiệm <span className="text-primary">Thực tế</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>
        </Reveal>

        <div className="relative border-l border-border/60 ml-4 md:ml-0 md:pl-8 space-y-10">
          {experiences.map((exp, idx) => (
            <Reveal key={idx} delay={idx * 0.15} direction="left">
              <div className="relative pl-8 md:pl-0">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] md:-left-[41px] top-2 w-5 h-5 rounded-full bg-card border-2 border-primary shadow-[0_0_10px_rgba(0,240,255,0.5)] z-10" />

                <div className="glass-card p-8 rounded-2xl group hover:-translate-y-1 transition-transform duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground font-display flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary shrink-0" />
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1.5">
                        <span className="flex items-center gap-1.5 text-base text-primary/80 font-medium">
                          <Building2 className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="text-xs font-medium bg-secondary/10 text-secondary px-2.5 py-0.5 rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground whitespace-nowrap shrink-0">
                      <Calendar className="w-4 h-4 text-primary" /> {exp.period}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-muted-foreground italic mt-3 mb-4 pl-7 border-l-2 border-primary/30">
                    {exp.summary}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-muted-foreground text-sm leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
