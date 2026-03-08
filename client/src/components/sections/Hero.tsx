import { ArrowRight, Download } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Năm kinh nghiệm" },
  { value: "3", label: "Môi trường làm việc" },
  { value: "GA4", label: "& GSC thành thạo" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-[100%] mix-blend-screen filter blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6" data-testid="badge-availability">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Đang tìm kiếm cơ hội mới
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-4" data-testid="hero-heading">
              Lê Trọng Long
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-primary mb-6 tracking-tight">
              SEO & Digital Marketing Specialist
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl" data-testid="hero-description">
              Chuyên triển khai SEO kỹ thuật, xây dựng chiến lược nội dung theo hướng dữ liệu và tối ưu hiệu suất thương mại điện tử đa kênh. Mình đo lường mọi thứ bằng con số và tối ưu liên tục cho đến khi có kết quả thật.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                data-testid="link-view-projects"
                className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-[#60A5FA] text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                Xem dự án thực tế <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                data-testid="link-contact"
                className="px-8 py-4 rounded-xl font-semibold bg-card border border-border hover:border-primary/50 hover:bg-primary/5 text-foreground transition-all duration-300"
              >
                Liên hệ tuyển dụng
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-12 flex flex-wrap items-center gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className={`flex flex-col ${idx < stats.length - 1 ? 'pr-8 border-r border-border' : ''}`}>
                  <span className="text-2xl font-bold text-foreground font-display">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Abstract Hero Visual */}
        <Reveal delay={0.2} direction="left" className="hidden lg:block">
          <div className="relative w-full aspect-square">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-primary/20 border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-secondary/20 border-dashed"
            />
            <div className="absolute inset-16 glass-card rounded-full flex items-center justify-center overflow-hidden">
              <div className="grid grid-cols-2 gap-4 p-8 w-full h-full opacity-50">
                <div className="bg-primary/20 rounded-tl-full h-full w-full" />
                <div className="bg-secondary/20 rounded-tr-full h-full w-full" />
                <div className="bg-[#60A5FA]/20 rounded-bl-full h-full w-full" />
                <div className="bg-primary/10 rounded-br-full h-full w-full" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto border-[4px] border-primary rounded-full border-t-transparent animate-spin mb-4" style={{ animationDuration: '3s' }} />
                  <p className="font-display font-bold text-xl tracking-widest text-primary">SEO</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Data Driven</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
