import { ArrowRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { motion } from "framer-motion";
import profileImg from "@assets/IMG_8936_1773006924508.PNG";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "SEO", label: "& Content Marketing" },
  { value: "Analytics", label: "& Performance Tracking" },
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
        {/* Left: Text Content */}
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6" data-testid="badge-availability">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to Work🤝
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
              Digital Marketer với hơn 2 năm kinh nghiệm trong SEO, Content Marketing và E-commerce. Có kinh nghiệm xây dựng chiến lược nội dung, nghiên cứu từ khóa và tối ưu website nhằm tăng trưởng organic traffic và hỗ trợ chuyển đổi bán hàng đa kênh.

              Thành thạo GA4, Google Search Console và các công cụ SEO. Luôn cập nhật các thay đổi của Google như Core Update và AI Overview để cải thiện khả năng hiển thị và hiệu quả nội dung.
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

        {/* Right: Profile Photo */}
        <Reveal delay={0.25} direction="left" className="hidden lg:flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Soft ambient glow */}
            <div className="absolute w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute w-56 h-56 rounded-full bg-secondary/15 blur-2xl" />

            {/* Outer slow-spinning dashed decoration ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute w-[340px] h-[340px] rounded-full border border-primary/20 border-dashed"
            />

            {/* Rotating conic-gradient border ring */}
            <div
              className="avatar-conic-ring relative"
              style={{ width: 268, height: 268, padding: 3 }}
            >
              {/* Static image container — background masks the conic fill behind the photo */}
              <div
                className="w-full h-full rounded-full overflow-hidden"
                style={{ background: "hsl(var(--background))" }}
              >
                <img
                  src={profileImg}
                  alt="Lê Trọng Long – SEO & Digital Marketing Specialist"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 25%" }}
                />
              </div>
            </div>

            {/* Glow halo sitting behind the ring */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 268,
                height: 268,
                boxShadow: "0 0 40px 6px rgba(0,240,255,0.30), 0 0 80px 10px rgba(96,165,250,0.15)",
              }}
            />

            {/* Floating status badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border border-primary/20">
                <div className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </div>
                <span className="text-xs font-semibold text-foreground">Digital Marketer</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
