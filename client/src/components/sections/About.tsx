import { Search, TrendingUp, ShoppingBag, Target } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const highlights = [
  {
    icon: <Search className="w-5 h-5 text-primary" />,
    title: "SEO kỹ thuật & nội dung",
    desc: "Xây dựng topic cluster, tối ưu on-page và off-page. Triển khai nội dung theo semantic SEO để cải thiện thứ hạng và độ phủ từ khóa."
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-[#60A5FA]" />,
    title: "Phân tích & đo lường",
    desc: "Theo dõi hiệu suất SEO bằng GA4 và Google Search Console, phân tích dữ liệu để tối ưu chiến lược và cải thiện hiệu quả traffic."
  },
  {
    icon: <ShoppingBag className="w-5 h-5 text-secondary" />,
    title: "Thương mại điện tử",
    desc: "Tối ưu gian hàng đa kênh (Shopee, TikTok Shop, Lazada), cải thiện hiển thị sản phẩm và hỗ trợ tăng tỷ lệ chuyển đổi."
  },
  {
    icon: <Target className="w-5 h-5 text-primary/70" />,
    title: "Chiến lược nội dung",
    desc: "Lập kế hoạch nội dung dựa trên từ khóa, search intent và hành trình người dùng để phát triển traffic bền vững."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Giới thiệu</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Về <span className="text-primary">Lê Trọng Long</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Bio */}
          <Reveal delay={0.1}>
            <div className="space-y-6 max-w-lg">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Mình là Digital Marketer với hơn 2 năm kinh nghiệm thực chiến trong SEO và digital marketing. Mình tập trung xây dựng hệ thống nội dung SEO, tối ưu on-page/off-page và phát triển topic cluster để mở rộng độ phủ từ khóa.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Mình làm SEO dựa trên dữ liệu — phân tích search intent, theo dõi hiệu suất qua GA4 và Google Search Console để tối ưu chiến lược và cải thiện thứ hạng bền vững.
              </p>
            </div>
          </Reveal>

          {/* Right: Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <Reveal key={idx} delay={0.15 + idx * 0.1} direction="left">
                <div className="glass-card p-5 rounded-2xl flex flex-col gap-3 group cursor-default
                  border border-border/50
                  hover:border-primary/50 hover:bg-primary/[0.03] hover:scale-[1.015]
                  transition-all duration-300 ease-out h-full">
                  <div className="p-2.5 bg-card rounded-xl w-fit group-hover:bg-primary/10 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base mb-1.5 text-foreground tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {item.desc}
                    </p>
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
