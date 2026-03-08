import { Award, CheckCircle, ExternalLink } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const certifications = [
  {
    title: "Digital Marketing Strategy Certificate",
    issuer: "Google / Coursera",
    year: "2023",
    description: "Chiến lược digital marketing tổng thể, bao gồm SEO, quảng cáo trực tuyến, phân tích dữ liệu và lập kế hoạch campaign.",
    url: "#"
  },
  {
    title: "SEO Optimization Certificate",
    issuer: "SEMrush Academy",
    year: "2023",
    description: "Kỹ thuật SEO chuyên sâu: nghiên cứu từ khóa, tối ưu on-page, backlink và đo lường hiệu suất tìm kiếm tự nhiên.",
    url: "#"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Học vấn & Chứng chỉ</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Chứng chỉ <span className="text-primary">Chuyên môn</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <Reveal key={idx} delay={idx * 0.15}>
              <div className="glass-card p-8 rounded-2xl group hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg leading-snug font-display">{cert.title}</h3>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <span className="text-sm text-primary/80 font-medium">{cert.issuer}</span>
                      <span className="w-1 h-1 rounded-full bg-border"></span>
                      <span className="text-sm text-muted-foreground">{cert.year}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{cert.description}</p>
                <div className="flex items-center gap-1.5 mt-5 text-xs font-medium text-primary/70">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Đã xác nhận
                </div>
                <div className="mt-4">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`link-certificate-${idx}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-primary/50 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[0_0_14px_rgba(0,240,255,0.4)] transition-all duration-250"
                  >
                    Xem chứng chỉ <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
