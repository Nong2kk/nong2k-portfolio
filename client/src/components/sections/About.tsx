import { Search, TrendingUp, Users } from "lucide-react";
import { Reveal } from "../ui/Reveal";

export function About() {
  const highlights = [
    {
      icon: <Search className="w-6 h-6 text-primary" />,
      title: "SEO Chuyên sâu",
      desc: "Xây dựng topic cluster và cấu trúc nội dung tối ưu theo hướng semantic SEO, giúp website lên thứ hạng bền vững."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#60A5FA]" />,
      title: "Tư duy dữ liệu",
      desc: "Sử dụng GA4 và Google Search Console để phân tích hiệu suất, phát hiện cơ hội và tối ưu chiến lược."
    },
    {
      icon: <Users className="w-6 h-6 text-secondary" />,
      title: "Tối ưu chuyển đổi",
      desc: "Tối ưu UX và nội dung hướng đến chuyển đổi trên các kênh thương mại điện tử đa nền tảng."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Về <span className="text-primary">Mình</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <Reveal delay={0.1}>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Mình là Le Trong Long — Digital Marketing Specialist với hơn 2 năm kinh nghiệm trong lĩnh vực SEO và thương mại điện tử. Mình chuyên xây dựng chiến lược nội dung bài bản, từ nghiên cứu từ khóa đến triển khai topic cluster và tối ưu on-page/off-page theo hướng semantic SEO.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Phong cách làm việc của mình luôn dựa trên dữ liệu: theo dõi hiệu suất qua Google Analytics 4 và Google Search Console, thực hiện content audit định kỳ và liên tục cải thiện chiến lược dựa trên kết quả thực tế. Mục tiêu của mình là đóng góp vào sự tăng trưởng bền vững của doanh nghiệp — không chỉ tăng traffic, mà tăng traffic có chuyển đổi thật.
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
