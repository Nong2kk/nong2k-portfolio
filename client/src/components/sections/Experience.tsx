import { Briefcase, Calendar } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const experiences = [
  {
    role: "Marketing Executive",
    company: "Công ty Hoàng Long Vũ",
    period: "Hiện tại",
    bullets: [
      "Nghiên cứu từ khóa và xây dựng topic cluster theo định hướng semantic SEO.",
      "Triển khai chiến lược SEO Onpage & Offpage toàn diện, cải thiện thứ hạng bền vững.",
      "Thực hiện content audit và tối ưu internal linking, giúp tăng lượng traffic tự nhiên đo được qua GA4.",
      "Phân tích hiệu suất định kỳ bằng Google Analytics 4 và Google Search Console để điều chỉnh chiến lược."
    ]
  },
  {
    role: "Marketing Intern",
    company: "Kien Xanh Design",
    period: "Thực tập",
    bullets: [
      "Viết nội dung chuẩn SEO theo từ khóa đã nghiên cứu, đảm bảo chất lượng và độ liên quan.",
      "Hỗ trợ nghiên cứu từ khóa và phân tích đối thủ cạnh tranh.",
      "Tham gia tối ưu trải nghiệm người dùng (UX/UI) trên website nhằm tăng thời gian ở lại trang."
    ]
  },
  {
    role: "Freelance – Tối ưu Thương mại Điện tử",
    company: "Hafu Scented Candles",
    period: "Dự án",
    bullets: [
      "Tối ưu gian hàng thương mại điện tử, cải thiện cấu trúc danh mục và trang sản phẩm.",
      "Viết lại mô tả sản phẩm chuẩn SEO, tăng khả năng hiển thị và tỉ lệ click.",
      "Tối ưu hình ảnh sản phẩm và nội dung trực quan, góp phần nâng cao tỉ lệ chuyển đổi."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Kinh nghiệm <span className="text-primary">Làm việc</span>
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
                  <ul className="space-y-2 mt-2">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-muted-foreground leading-relaxed text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
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
