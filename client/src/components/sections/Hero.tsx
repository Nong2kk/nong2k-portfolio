import { ArrowRight, Star } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { motion } from "framer-motion";
import profileImg from "@assets/z7578573372551_7c2e369ce65478f1c3dee5f69293672f_1773251487672.jpg";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "SEO", label: "& Content Marketing" },
  { value: "Analytics", label: "& Performance Tracking" },
];

const marqueeItems: { text: string; metric: boolean }[] = [
  { text: "2+ Years SEO Experience",          metric: true  },
  { text: "Topic Cluster Strategy",           metric: false },
  { text: "5+ SEO Projects Completed",        metric: true  },
  { text: "Semantic SEO",                     metric: false },
  { text: "100+ Ranking Keywords on Google",  metric: true  },
  { text: "AI Overview Optimization",         metric: false },
  { text: "500+ Product Listings Optimized",  metric: true  },
  { text: "Search Intent Optimization",       metric: false },
  { text: "10+ On-page SEO Skills",           metric: true  },
  { text: "SEO Content Planning",             metric: false },
  { text: "E-commerce Marketing",             metric: false },
  { text: "Product Image Editing",            metric: false },
];

export function Hero() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-primary/8 rounded-[100%] mix-blend-screen filter blur-[140px]" />
      </div>

      {/* Ghost background word */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none hidden lg:block"
        style={{ fontSize: "24rem", color: "rgba(255,255,255,0.015)", letterSpacing: "-0.05em" }}
      >
        SEO
      </div>

      {/* Sparkle stars */}
      <div className="absolute top-[28%] left-[54%] text-primary/35 hidden lg:block">
        <Star className="w-5 h-5 fill-current" />
      </div>
      <div className="absolute top-[58%] left-[35%] text-secondary/25 hidden lg:block">
        <Star className="w-3 h-3 fill-current" />
      </div>
      <div className="absolute bottom-[30%] right-[28%] text-primary/20 hidden lg:block">
        <Star className="w-4 h-4 fill-current" />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex-1 flex items-center w-full py-10">
        <div className="w-full grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-12 items-center">

          {/* Avatar — first on mobile, right on desktop */}
          <Reveal delay={0.2} direction="left" className="flex items-center justify-center order-first lg:order-last">
            <div className="relative flex items-center justify-center scale-75 sm:scale-90 lg:scale-100 lg:-translate-y-6">
              <div className="absolute w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute w-56 h-56 rounded-full bg-secondary/15 blur-2xl" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute w-[340px] h-[340px] rounded-full border border-primary/20 border-dashed"
              />
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

          {/* Text — second on mobile, left on desktop */}
          <div className="order-last lg:order-first">

            <Reveal>
              <div className="flex items-center gap-2.5 mb-7" data-testid="badge-availability">
                <Star className="w-3.5 h-3.5 text-primary fill-current shrink-0" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  SEO & Digital Marketing Specialist
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              {/* Editorial headline: outline first line + gradient second line */}
              <h1 className="font-black leading-[0.92] mb-8" data-testid="hero-heading">
                <span
                  className="block text-[3.2rem] sm:text-[4rem] md:text-[5rem] lg:text-[4.5rem] xl:text-[5.5rem]"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px rgba(255,255,255,0.55)",
                  }}
                >
                  Lê Trọng
                </span>
                <span
                  className="block text-[3.2rem] sm:text-[4rem] md:text-[5rem] lg:text-[4.5rem] xl:text-[5.5rem] bg-gradient-to-r from-primary via-[#60A5FA] to-secondary bg-clip-text text-transparent"
                >
                  Long.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-sm mb-8"
                data-testid="hero-description"
              >
                Hơn 2 năm kinh nghiệm trong SEO và digital marketing. Tập trung vào Content SEO, Topic Cluster và phân tích dữ liệu để tăng trưởng organic traffic bền vững.
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
              <div className="mt-10 pt-7 border-t border-border/40 flex flex-wrap gap-8">
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

      {/* Scrolling keyword marquee */}
      <div className="relative border-t border-border/30 py-5 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="marquee-track flex items-center gap-0 w-max">
          {items.map((item, i) => (
            <span key={i} className="flex items-center">
              {item.metric ? (
                <span className="whitespace-nowrap px-5 text-xs font-bold tracking-wide text-primary/75">
                  {item.text}
                </span>
              ) : (
                <span className="whitespace-nowrap px-5 text-xs font-medium uppercase tracking-widest text-muted-foreground/40">
                  {item.text}
                </span>
              )}
              <span className={`text-[10px] ${item.metric ? "text-primary/40" : "text-border/60"}`}>
                {item.metric ? "★" : "·"}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
