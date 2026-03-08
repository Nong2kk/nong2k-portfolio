import { Search, TrendingUp, ShoppingBag, Target } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const highlights = [
  {
    icon: <Search className="w-6 h-6 text-primary" />,
    title: "SEO kỹ thuật & nội dung",
    desc: "Xây dựng topic cluster, tối ưu on-page/off-page và cấu trúc nội dung theo semantic SEO để cải thiện thứ hạng bền vững."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-[#60A5FA]" />,
    title: "Phân tích & đo lường",
    desc: "Theo dõi hiệu suất qua GA4 và Search Console, đọc dữ liệu, phát hiện vấn đề và đưa ra đề xuất cải thiện có căn cứ."
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-secondary" />,
    title: "Thương mại điện tử",
    desc: "Tối ưu gian hàng đa kênh (Shopee, TikTok Shop, Lazada) — từ listing sản phẩm đến nội dung chuyển đổi."
  },
  {
    icon: <Target className="w-6 h-6 text-primary/70" />,
    title: "Chiến lược nội dung",
    desc: "Lập kế hoạch và triển khai nội dung có định hướng rõ ràng: đúng từ khóa, đúng đối tượng, đúng giai đoạn hành trình mua hàng."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Giới thiệu</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Về <span className="text-primary">Lê Trọng Long</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                Mình có hơn 2 năm kinh nghiệm thực chiến trong lĩnh vực SEO và digital marketing, với nền tảng kỹ thuật tốt và tư duy hướng dữ liệu rõ ràng. Mình đã triển khai SEO tại môi trường agency, doanh nghiệp và cả dự án freelance — mỗi môi trường đều mang lại góc nhìn khác nhau về cách tăng trưởng bền vững.
              </p>
              <p>
                Điểm mạnh của mình không chỉ là biết làm SEO, mà là hiểu tại sao một chiến lược hoạt động hoặc không hoạt động. Mình không theo keyword một cách máy móc — mình phân tích search intent, đọc dữ liệu từ GA4 và Search Console, sau đó tối ưu chiến lược dựa trên kết quả thực tế.
              </p>
              <p>
                Mục tiêu nghề nghiệp của mình là phát triển trong một đội ngũ marketing chuyên nghiệp, nơi mình có thể đóng góp vào sự tăng trưởng có thể đo lường được — và tiếp tục học hỏi từ những người giỏi hơn.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <Reveal key={idx} delay={0.15 + idx * 0.1} direction="left">
                <div className="glass-card p-5 rounded-2xl flex flex-col gap-3 group hover:border-primary/50 transition-colors h-full">
                  <div className="p-2.5 bg-card rounded-xl w-fit group-hover:bg-primary/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1 text-foreground">{item.title}</h3>
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
