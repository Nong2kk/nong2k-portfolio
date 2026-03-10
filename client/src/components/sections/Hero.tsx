import { ArrowRight, Star } from "lucide-react";
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
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20">
      {/* Ambient gradient blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-primary/8 rounded-[100%] mix-blend-screen filter blur-[130px]" />
      </div>

      {/* Ghost background word — editorial depth */}
      <div
        className="absolute right-[-1rem] top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none hidden lg:block tracking-tighter"
        style={{ fontSize: "26rem", color: "rgba(255,255,255,0.018)", letterSpacing: "-0.05em" }}
      >
        SEO
      </div>

      {/* Decorative sparkle stars */}
      <div className="absolute top-[28%] left-[53%] text-primary/40 hidden lg:block">
        <Star className="w-5 h-5 fill-current" />
      </div>
      <div className="absolute top-[55%] left-[36%] text-secondary/25 hidden lg:block">
        <Star className="w-3 h-3 fill-current" />
      </div>
      <div className="absolute bottom-[28%] right-[30%] text-primary/20 hidden lg:block">
        <Star className="w-4 h-4 fill-current" />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex-1 flex items-center w-full py-12">
        <div className="w-full grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">

          {/* ── Avatar — mobile: first, desktop: right ── */}
          <Reveal delay={0.2} direction="left" className="flex items-center justify-center order-first lg:order-last">
            <div className="relative flex items-center justify-center scale-75 sm:scale-90 lg:scale-100 lg:-translate-y-6">
              {/* Ambient glow */}
              <div className="absolute w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute w-56 h-56 rounded-full bg-secondary/15 blur-2xl" />

              {/* Outer dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute w-[340px] h-[340px] rounded-full border border-primary/20 border-dashed"
              />

              {/* Avatar — ring + static image */}
              <div className="relative" style={{ width: 316, height: 316 }}>
                <div
                  className="avatar-conic-ring absolute inset-0 rounded-full"
                  style={{ boxShadow: "0 0 42px 6px rgba(0,240,255,0.30), 0 0 84px 12px rgba(96,165,250,0.15)" }}
                />
                <div
                  className="absolute rounded-full overflow-hidden"
                  style={{ inset: 4, background: "hsl(var(--background))" }}
                >
                  <img
                    src={profileImg}
                    alt="Lê Trọng Long – SEO & Digital Marketing Specialist"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 25%" }}
                  />
                </div>
              </div>

              {/* Floating status badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border border-primary/20">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  <span className="text-xs font-semibold text-foreground">Open to Work</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Text — mobile: second, desktop: left ── */}
          <div className="order-last lg:order-first">

            <Reveal>
              {/* Role label — editorial style */}
              <div className="flex items-center gap-2.5 mb-6" data-testid="badge-availability">
                <Star className="w-3.5 h-3.5 text-primary fill-current shrink-0" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  SEO & Digital Marketing Specialist
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              {/* Editorial split headline */}
              <h1 className="font-black leading-[0.95] mb-8" data-testid="hero-heading">
                <span className="block text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[5rem] xl:text-[6rem] text-foreground">
                  Lê Trọng
                </span>
                <span className="block text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[5rem] xl:text-[6rem] text-primary">
                  Long.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md mb-8"
                data-testid="hero-description"
              >
                Hơn 2 năm kinh nghiệm thực chiến trong SEO và digital marketing. Tập trung vào Content SEO, Topic Cluster, tối ưu website và phân tích dữ liệu để tăng trưởng organic traffic bền vững.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  data-testid="link-view-projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Xem dự án <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  data-testid="link-contact"
                  className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm border border-border hover:border-primary/50 hover:bg-primary/5 text-foreground transition-all duration-300"
                >
                  Liên hệ tuyển dụng
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 pt-8 border-t border-border/40 flex flex-wrap gap-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col gap-0.5">
                    <span className="text-xl font-bold text-foreground font-display">{stat.value}</span>
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
