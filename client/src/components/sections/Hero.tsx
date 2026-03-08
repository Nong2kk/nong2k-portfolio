import { ArrowRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { motion } from "framer-motion";

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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Sẵn sàng cho cơ hội mới
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              Xin chào, mình là <span className="text-gradient">Long</span>
              <br />
              <span className="text-4xl md:text-5xl text-foreground/80">Digital Marketing & SEO Specialist</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Mình tập trung vào SEO, tối ưu website và xây dựng chiến lược digital marketing dựa trên dữ liệu nhằm giúp doanh nghiệp tăng trưởng traffic, cải thiện chuyển đổi và phát triển bền vững.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-[#60A5FA] text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                Xem dự án <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl font-semibold bg-card border border-border hover:border-primary/50 hover:bg-primary/5 text-foreground transition-all duration-300 flex items-center gap-2 group"
              >
                Liên hệ với tôi
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-12 flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground font-display">2+</span>
                <span>Năm kinh nghiệm</span>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground font-display">15+</span>
                <span>Dự án hoàn thành</span>
              </div>
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
